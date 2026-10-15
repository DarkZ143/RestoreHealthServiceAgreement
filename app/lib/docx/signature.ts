import fs from "fs/promises";
import path from "path";

import type PizZip from "pizzip";

const PIXEL_TO_EMU = 9_525;
const SIGNATURE_WIDTH_EMU = 150 * PIXEL_TO_EMU;
const SIGNATURE_HEIGHT_EMU = 75 * PIXEL_TO_EMU;
const IMAGE_RELATIONSHIP_TYPE =
  "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";

function nextRelationshipId(xml: string): string {
  let highestId = 0;

  for (const match of xml.matchAll(/\bId="rId(\d+)"/g)) {
    highestId = Math.max(highestId, Number(match[1]));
  }

  return "rId" + (highestId + 1);
}

function nextDrawingId(xml: string): number {
  let highestId = 0;

  for (const match of xml.matchAll(/<wp:docPr\b[^>]*\bid="(\d+)"/g)) {
    highestId = Math.max(highestId, Number(match[1]));
  }

  return highestId + 1;
}

function buildSignatureDrawing(relationshipId: string, drawingId: number): string {
  const size =
    'cx="' + SIGNATURE_WIDTH_EMU + '" cy="' + SIGNATURE_HEIGHT_EMU + '"';

  return [
    '<w:r><w:drawing>',
    '<wp:inline xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture" distT="0" distB="0" distL="0" distR="0">',
    '<wp:extent ' + size + '/>',
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    '<wp:docPr id="' + drawingId + '" name="Customer Signature"/>',
    '<wp:cNvGraphicFramePr><a:graphicFrameLocks noChangeAspect="1"/></wp:cNvGraphicFramePr>',
    '<a:graphic><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">',
    '<pic:pic>',
    '<pic:nvPicPr><pic:cNvPr id="' + drawingId + '" name="sign.png"/><pic:cNvPicPr/></pic:nvPicPr>',
    '<pic:blipFill><a:blip r:embed="' + relationshipId + '"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>',
    '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext ' + size + '/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr>',
    '</pic:pic></a:graphicData></a:graphic>',
    '</wp:inline></w:drawing></w:r>',
  ].join("");
}

/**
 * Adds the company's signature image beside the first physical
 * execution signature line in the agreement.
 */
export async function addCustomerSignature(zip: PizZip): Promise<void> {
  const documentFile = zip.file("word/document.xml");
  const relationshipsFile = zip.file("word/_rels/document.xml.rels");
  const contentTypesFile = zip.file("[Content_Types].xml");

  if (!documentFile || !relationshipsFile || !contentTypesFile) {
    throw new Error("The DOCX template is missing a required image package file.");
  }

  const signature = await fs.readFile(
    path.join(process.cwd(), "public", "sign.png"),
  );
  const documentXml = documentFile.asText();
  const paragraphMatches = [
    ...documentXml.matchAll(/<w:p\b[^>]*>[\s\S]*?<\/w:p>/g),
  ];
  const signatureParagraph = paragraphMatches.find((paragraph) => {
    const text = [...paragraph[0].matchAll(/<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g)]
      .map((match) => match[1])
      .join("")
      .trim();

    return text === "Signature:";
  });

  if (!signatureParagraph) {
    throw new Error("The physical signature line was not found in the DOCX template.");
  }

  const relationshipsXml = relationshipsFile.asText();
  const relationshipId = nextRelationshipId(relationshipsXml);
  const drawingId = nextDrawingId(documentXml);
  const signatureDrawing = buildSignatureDrawing(relationshipId, drawingId);

  const signatureParagraphXml = signatureParagraph[0].replace(
    "</w:p>",
    signatureDrawing + "</w:p>",
  );
  const updatedDocumentXml =
    documentXml.slice(0, signatureParagraph.index) +
    signatureParagraphXml +
    documentXml.slice(signatureParagraph.index + signatureParagraph[0].length);

  zip.file("word/document.xml", updatedDocumentXml);
  zip.file(
    "word/_rels/document.xml.rels",
    relationshipsXml.replace(
      "</Relationships>",
      '<Relationship Id="' +
        relationshipId +
        '" Type="' +
        IMAGE_RELATIONSHIP_TYPE +
        '" Target="media/customer-signature.png"/></Relationships>',
    ),
  );

  const contentTypesXml = contentTypesFile.asText();

  if (!/<Default\b[^>]*Extension="png"/i.test(contentTypesXml)) {
    zip.file(
      "[Content_Types].xml",
      contentTypesXml.replace(
        "</Types>",
        '<Default Extension="png" ContentType="image/png"/></Types>',
      ),
    );
  }

  zip.file("word/media/customer-signature.png", signature);
}
