/**
 * Docxtemplater reports every problem found while compiling a
 * template as a single `Error` whose message is just
 * "Multi error".
 *
 * The real causes (unopened tag, unclosed tag, duplicate tag,
 * ...) live on `error.properties.errors`, so a raw
 * `error.message` tells an operator nothing about which
 * placeholder in the master DOCX was broken.
 *
 * This expands that bundle into a readable, single-line
 * message naming the tag and the part of the document it was
 * found in.
 */

type TemplateErrorProperties = {
  id?: string;
  xtag?: string;
  file?: string;
  explanation?: string;
  context?: string;
};

type TemplateError = Error & {
  properties?: TemplateErrorProperties & {
    errors?: TemplateError[];
  };
};

function hasProperties(error: unknown): error is TemplateError {
  return (
    error instanceof Error &&
    typeof (error as TemplateError).properties === "object" &&
    (error as TemplateError).properties !== null
  );
}

function describeSingle(error: TemplateError): string {
  const properties = error.properties ?? {};

  const parts = [properties.explanation || error.message];

  if (properties.xtag) {
    parts.push(`tag: "${properties.xtag}"`);
  }

  if (properties.file) {
    parts.push(properties.file);
  }

  return `${parts[0]} (${parts.slice(1).join(", ")})`;
}

/**
 * Returns a human readable description of a Docxtemplater
 * failure, or `null` when the error did not come from the
 * template engine.
 */
export function describeTemplateError(error: unknown): string | null {
  if (!hasProperties(error)) {
    return null;
  }

  const nested = error.properties?.errors;

  if (Array.isArray(nested) && nested.length > 0) {
    const details = nested.map(describeSingle).join("; ");

    return `Master DOCX template has ${nested.length} placeholder problem(s): ${details}`;
  }

  if (error.properties?.id) {
    return `Master DOCX template problem: ${describeSingle(error)}`;
  }

  return null;
}
