import fs from "fs/promises";
import path from "path";

import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

import type { ServiceAgreementData } from "@/app/types/service-agreement";
import { validateServiceAgreement } from "@/app/lib/validation/service-agreement";
import { describeTemplateError } from "@/app/lib/docx/template-error";
import { addCustomerSignature } from "@/app/lib/docx/signature";
import { isSameOriginRequest } from "@/app/lib/security/request-origin";
import {
  formatIndianAmount,
  maskAadhaar,
} from "@/app/lib/format/indian-amount";

export const runtime = "nodejs";

function formatDate(value: string): string {
  if (!value) {
    return "";
  }

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function formatTime(value: string): string {
  if (!value) {
    return "";
  }

  const [hours, minutes] = value.split(":");

  if (!hours || !minutes) {
    return value;
  }

  return `${hours}:${minutes}`;
}

/*
 * Witness details apply only to Part B (physical execution)
 * and are optional.
 *
 * When a witness field is left empty the original blank rule
 * from the master DOCX is restored, so a printed counterpart
 * still has a line to write on.
 */
function witnessField(value: string, blankRule: string): string {
  return value.trim() || blankRule;
}

/*
 * Clause 17.4 - Payer Declaration.
 *
 * The clause carries two boxes and exactly one of them is
 * ticked from the payer fields captured on the form:
 *
 * - no payer name, a payer name matching the Customer, or a
 *   relationship recorded as self  -> "the Customer"
 * - any other payer                -> "a family member"
 */
const TICKED_BOX = String.fromCodePoint(0x2611);
const EMPTY_BOX = String.fromCodePoint(0x2610);

const SELF_RELATIONSHIPS = ["self", "same", "customer", "own", "myself"];

function payerIsCustomer(data: ServiceAgreementData): boolean {
  const payer = data.payerName.trim().toLowerCase();

  if (!payer) {
    return true;
  }

  if (payer === data.customerName.trim().toLowerCase()) {
    return true;
  }

  return SELF_RELATIONSHIPS.includes(data.relationship.trim().toLowerCase());
}

/**
 * IMPORTANT:
 * These keys intentionally match the existing DOCX placeholders.
 *
 * Do not rename or remove them.
 *
 * Multiple DOCX placeholders can intentionally point to the
 * same logical form field.
 */
function buildTemplateData(data: ServiceAgreementData): Record<string, string> {
  const payerSelf = payerIsCustomer(data);

  return {
    AgreementNumber: data.agreementNumber,

    CustomerName: data.customerName,
    CustomerAge: data.customerAge,
    CustomerAadharLastFour: maskAadhaar(data.customerAadharLastFour),

    /* Keep both the recitals and Schedule 1 in masked format. */
    CustomerAadharMasked: maskAadhaar(data.customerAadharLastFour),

    FullAdressCustomer: data.fullAddressCustomer,
    FullAddressCustomer: data.fullAddressCustomer,

    CustomerPhone: data.customerPhone,
    CustomerMail: data.customerMail,

    CustomerDateOfBirth: formatDate(data.customerDateOfBirth),

    CustomerPlace: data.customerPlace,
    CustomerDate: formatDate(data.customerDate),

    /*
     * The master template contains both {Name}
     * and {PayerName}.
     *
     * Both intentionally use the Customer Name.
     */
    Name: data.customerName,
    PayerName: data.customerName,

    Relationship: "Self",

    /*
     * Clause 17.4 - exactly one of the two boxes is ticked.
     */
    PayerIsCustomerBox: payerSelf ? TICKED_BOX : EMPTY_BOX,
    PayerIsFamilyBox: payerSelf ? EMPTY_BOX : TICKED_BOX,

    PlanName:
      data.planName === "Other" ? data.planNameOther : data.planName,
    PlanNumber: data.planNumber,

    IssueDate: formatDate(data.issueDate),
    ValidityDate: formatDate(data.validityDate),

    FeeswithoutTax: formatIndianAmount(data.feesWithoutTax),
    Tax: formatIndianAmount(data.tax),
    TotalPayable: formatIndianAmount(data.totalPayable),

    UTR: [
      data.utr,
      ...(data.additionalTransactions ?? []).map((transaction) => transaction.utr),
    ]
      .filter(Boolean)
      .join(" | "),
    PaymentDate: [
      data.paymentDate,
      ...(data.additionalTransactions ?? []).map((transaction) => transaction.date),
    ]
      .filter(Boolean)
      .map(formatDate)
      .join(" | "),
    PaymentTime: [
      data.paymentTime,
      ...(data.additionalTransactions ?? []).map((transaction) => transaction.time),
    ]
      .filter(Boolean)
      .map(formatTime)
      .join(" | "),
    PaymentMode: [
      data.paymentMode,
      ...(data.additionalTransactions ?? []).map(
        (transaction) => transaction.paymentMode,
      ),
    ]
      .filter(Boolean)
      .join(" | "),
    Payee: data.customerName,

    Language:
      data.language === "Other" ? data.languageOther : data.language,
    AgentName: data.agentName,

    CallDate: formatDate(data.callDate),
    CallTime: formatTime(data.callTime),

    VerifierName: data.verifierName,

    AcceptanceDate: formatDate(data.acceptanceDate),
    AcceptanceTime: formatTime(data.acceptanceTime),

    DocumentSent: data.documentSent,

    SentDate: formatDate(data.sentDate),
    SentTime: formatTime(data.sentTime),

    TypeofSendingPlatform: data.typeOfSendingPlatform,

    Witness1Name: witnessField(data.witness1Name, "______"),
    Witness1Address: witnessField(data.witness1Address, "_____"),
    Witness1Mobile: witnessField(data.witness1Mobile, "____"),
    Witness1Date: witnessField(formatDate(data.witness1Date), "__//__"),

    Witness2Name: witnessField(data.witness2Name, "______"),
    Witness2Address: witnessField(data.witness2Address, "_____"),
    Witness2Mobile: witnessField(data.witness2Mobile, "____"),
    Witness2Date: witnessField(formatDate(data.witness2Date), "__//__"),

    /*
     * These names are intentionally kept exactly as they
     * exist in the master DOCX.
     */
    EffectiveDate: formatDate(data.effectiveDate),

    Date: formatDate(data.executionDate),
    Time: formatTime(data.executionTime),
    "AM/PM": "",

    CurrentDate: formatDate(data.currentDate),
  };
}

async function generateDocx(data: ServiceAgreementData): Promise<Buffer> {
  const templatePath = path.join(
    process.cwd(),
    "templates",
    "Service Agreement V10.docx",
  );

  try {
    await fs.access(templatePath);
  } catch {
    throw new Error(`Master DOCX template was not found at: ${templatePath}`);
  }

  const templateBuffer = await fs.readFile(templatePath);

  const zip = new PizZip(templateBuffer);

  const templateData = buildTemplateData(data);

  /*
   * Both the constructor (template compilation) and render()
   * can throw a bundled "Multi error". Unwrap it so the
   * response names the broken placeholder.
   */
  let document: Docxtemplater;

  try {
    document = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    document.render(templateData);
  } catch (error) {
    const description = describeTemplateError(error);

    if (description) {
      throw new Error(description);
    }

    throw error;
  }

  const outputZip = document.getZip();
  await addCustomerSignature(outputZip);

  return outputZip.generate({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ message: "Request origin is not allowed." }, { status: 403 });
  }

  try {
    console.log("[Service Agreement] DOCX generation started.");

    const body = (await request.json()) as Partial<ServiceAgreementData>;

    const data = body as ServiceAgreementData;

    /*
     * ---------------------------------------------------------
     * VALIDATION
     * ---------------------------------------------------------
     */

    const validation = validateServiceAgreement(data);

    if (!validation.isValid) {
      console.error(
        "[Service Agreement] DOCX validation failed:",
        validation.errors,
      );

      return Response.json(
        {
          success: false,
          message: "Please correct the following validation errors.",
          errors: validation.errors,
          fieldErrors: validation.fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    /*
     * ---------------------------------------------------------
     * GENERATE DOCX
     * ---------------------------------------------------------
     */

    const docxBuffer = await generateDocx(data);

    if (!docxBuffer || docxBuffer.length === 0) {
      throw new Error("The generated DOCX file is empty.");
    }

    /*
     * ---------------------------------------------------------
     * SAFE FILE NAME
     * ---------------------------------------------------------
     */

    const safeAgreementNumber =
      data.agreementNumber.replace(/[^a-zA-Z0-9_-]/g, "_").trim() ||
      "service-agreement";

    console.log("[Service Agreement] DOCX generated successfully.");

    /*
     * ---------------------------------------------------------
     * IMPORTANT TYPESCRIPT / NEXT.JS FIX
     * ---------------------------------------------------------
     *
     * Buffer<ArrayBufferLike> is not accepted directly as
     * BodyInit by the current Next.js 16 TypeScript types.
     *
     * Uint8Array is a valid BodyInit and preserves the exact
     * generated DOCX bytes.
     */

    const responseBody = new Uint8Array(docxBuffer);

    return new Response(responseBody, {
      status: 200,

      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

        "Content-Disposition": `attachment; filename="${safeAgreementNumber}.docx"`,

        "Content-Length": String(responseBody.byteLength),

        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[Service Agreement] DOCX generation error:", error);

    let message = "Unable to generate the Service Agreement DOCX.";

    const description = describeTemplateError(error);

    if (description) {
      message = description;
    } else if (error instanceof Error) {
      message = error.message;
    }

    return Response.json(
      {
        success: false,
        message,
      },
      {
        status: 500,
      },
    );
  }
}
