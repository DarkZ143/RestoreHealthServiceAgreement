import type PizZip from "pizzip";

/**
 * Review highlighting for the on-screen preview.
 *
 * The preview exists so the operator can check what the form
 * actually put into the agreement. Every value that replaced a
 * {Placeholder} is therefore rendered with red text,
 * which makes the filled-in data stand out from the fixed
 * contract text.
 *
 * The highlight is a review aid only: the downloaded copy is
 * generated without it, so the signed document stays clean.
 *
 * How it works:
 *
 * 1. Before rendering, each filled value is wrapped in two
 *    sentinel characters.
 * 2. After rendering, every run holding a sentinel is split
 *    into an unmarked part and a highlighted part.
 *
 * The sentinels come from the Unicode private use area. They
 * are valid XML 1.0 characters (unlike the C0 control codes),
 * they never occur in real agreement data, and docxtemplater
 * passes them through without escaping.
 */
const MARK_START = "";

const MARK_END = "";

const RED_TEXT_ELEMENT = '<w:color w:val="FF0000"/>';

/**
 * Run properties that must follow w:color in a w:rPr.
 *
 * CT_RPr is a sequence, so a color placed after one of
 * these makes the part invalid and Word repairs — or drops —
 * the document.
 */
const AFTER_COLOR = [
  "w:spacing",
  "w:w",
  "w:kern",
  "w:position",
  "w:sz",
  "w:szCs",
  "w:highlight",
  "w:u",
  "w:effect",
  "w:bdr",
  "w:shd",
  "w:fitText",
  "w:vertAlign",
  "w:rtl",
  "w:cs",
  "w:em",
  "w:lang",
  "w:eastAsianLayout",
  "w:specVanish",
  "w:oMath",
];

const RUN_PATTERN = /<w:r(?:\s[^>]*)?>[\s\S]*?<\/w:r>/g;

const RUN_PROPERTIES_PATTERN =
  /^<w:rPr(?:\s[^>]*)?(?:\/>|>[\s\S]*?<\/w:rPr>)/;

const TEXT_PATTERN = /<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g;

const MARK_PATTERN = /[]/g;

/**
 * Wraps the values that the operator actually supplied.
 *
 * `unfilled` carries the blank rules the template falls back
 * to for an empty optional field (the witness lines). Those
 * are the absence of data, so marking them red would
 * claim something was filled in when it was not.
 */
export function markFilledValues(
  values: Record<string, string>,
  unfilled: readonly string[] = [],
): Record<string, string> {
  const skip = new Set(unfilled);

  const marked: Record<string, string> = {};

  for (const [key, value] of Object.entries(values)) {
    marked[key] =
      !value.trim() || skip.has(value)
        ? value
        : `${MARK_START}${value}${MARK_END}`;
  }

  return marked;
}

function redTextRunProperties(runProperties: string): string {
  if (!runProperties || /^<w:rPr(?:\s[^>]*)?\/>$/.test(runProperties)) {
    return `<w:rPr>${RED_TEXT_ELEMENT}</w:rPr>`;
  }

  /*
   * A template run may already carry a highlight; the review
   * colour replaces it rather than being added next to it.
   */
  const cleaned = runProperties
    .replace(/<w:highlight\b[^>]*\/>/g, "")
    .replace(/<w:color\b[^>]*\/>/g, "");

  let insertAt = -1;

  for (const name of AFTER_COLOR) {
    const match = cleaned.match(new RegExp(`<${name}[\\s/>]`));

    if (match?.index !== undefined && (insertAt === -1 || match.index < insertAt)) {
      insertAt = match.index;
    }
  }

  if (insertAt === -1) {
    insertAt = cleaned.lastIndexOf("</w:rPr>");
  }

  return cleaned.slice(0, insertAt) + RED_TEXT_ELEMENT + cleaned.slice(insertAt);
}

interface ParsedRun {
  openingTag: string;
  runProperties: string;
  body: string;
}

function parseRun(run: string): ParsedRun | null {
  const openingTag = run.match(/^<w:r(?:\s[^>]*)?>/)?.[0];

  if (!openingTag) {
    return null;
  }

  const inner = run.slice(openingTag.length, run.length - "</w:r>".length);

  const runProperties = inner.match(RUN_PROPERTIES_PATTERN)?.[0] ?? "";

  return {
    openingTag,
    runProperties,
    body: inner.slice(runProperties.length),
  };
}

/**
 * Splits runs around the sentinels.
 *
 * A highlight lives in a run's properties, so marked text has
 * to be moved into runs of its own. Everything else about the
 * run — its attributes, its formatting, and any w:br or w:tab
 * it contains — is carried over unchanged.
 *
 * The returned function is stateful on purpose. With the
 * `linebreaks` option a multi-line value is rendered as
 * several runs, so a value can open in one run and close two
 * runs later; the state carries the highlight across them.
 */
function createRunSplitter(): (run: string) => string {
  let marked = false;

  return (run: string): string => {
    const hasMarker = run.includes(MARK_START) || run.includes(MARK_END);

    if (!hasMarker) {
      /*
       * A run in the middle of a marked value. Runs without
       * text (a lone w:br) are left alone, otherwise the
       * red text would run on past the end of the line.
       */
      if (!marked || !run.includes("<w:t")) {
        return run;
      }

      const parsed = parseRun(run);

      if (!parsed) {
        return run;
      }

      return `${parsed.openingTag}${redTextRunProperties(
        parsed.runProperties,
      )}${parsed.body}</w:r>`;
    }

    const parsed = parseRun(run);

    if (!parsed) {
      return run;
    }

    const { openingTag, runProperties, body } = parsed;

    const markedProperties = redTextRunProperties(runProperties);

    let output = "";

    let buffer = "";

    const flush = () => {
      if (!buffer) {
        return;
      }

      output += `${openingTag}${
        marked ? markedProperties : runProperties
      }${buffer}</w:r>`;

      buffer = "";
    };

    let cursor = 0;

    TEXT_PATTERN.lastIndex = 0;

    let text: RegExpExecArray | null;

    while ((text = TEXT_PATTERN.exec(body)) !== null) {
      /*
       * Anything between two w:t elements (w:br, w:tab, ...)
       * keeps its place inside the run being built.
       */
      if (text.index > cursor) {
        buffer += body.slice(cursor, text.index);
      }

      for (const token of text[1].split(/([])/)) {
        if (token === MARK_START || token === MARK_END) {
          flush();

          marked = token === MARK_START;

          continue;
        }

        if (token) {
          /*
           * The split can land on a leading or trailing space,
           * so every new w:t has to preserve whitespace.
           */
          buffer += `<w:t xml:space="preserve">${token}</w:t>`;
        }
      }

      cursor = text.index + text[0].length;
    }

    if (cursor < body.length) {
      buffer += body.slice(cursor);
    }

    flush();

    return output || run;
  };
}

/**
 * Turns the sentinels left by `markFilledValues` into red text
 * in place, across every rendered part.
 *
 * Any sentinel that could not be paired up is removed, so no
 * marker ever reaches the generated document.
 */
export function applyHighlightMarkers(zip: PizZip): void {
  for (const name of Object.keys(zip.files)) {
    if (!/^word\/.*\.xml$/.test(name)) {
      continue;
    }

    const file = zip.file(name);

    if (!file) {
      continue;
    }

    const xml = file.asText();

    if (!xml.includes(MARK_START) && !xml.includes(MARK_END)) {
      continue;
    }

    /*
     * One splitter per part: a value never spans two files,
     * so the highlight state must not leak between them.
     */
    const highlighted = xml
      .replace(RUN_PATTERN, createRunSplitter())
      .replace(MARK_PATTERN, "");

    zip.file(name, highlighted);
  }
}
