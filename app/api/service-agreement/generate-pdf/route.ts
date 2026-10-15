import { randomUUID } from "crypto";

import fs from "fs/promises";

import os from "os";

import path from "path";

import PizZip from "pizzip";

import Docxtemplater from "docxtemplater";



import type { ServiceAgreementData } from "@/app/types/service-agreement";

import { validateServiceAgreement } from "@/app/lib/validation/service-agreement";

import { describeTemplateError } from "@/app/lib/docx/template-error";

import {
  applyHighlightMarkers,
  markFilledValues,
} from "@/app/lib/docx/highlight";

import { convertDocxToPdfWithConvertApi } from "@/app/lib/pdf/convertapi";



export const runtime = "nodejs";



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

 * Every blank rule the witness fields can fall back to.

 *

 * The review highlight skips these: they mark an empty

 * optional field, not something the operator filled in.

 */

const WITNESS_BLANK_RULES = ["______", "_____", "____", "__//__"] as const;



/**

 * Format date from YYYY-MM-DD to DD/MM/YYYY

 */

function formatDate(value: string): string {

  if (!value) return "";



  const date = new Date(`${value}T00:00:00`);



  if (Number.isNaN(date.getTime())) {

    return value;

  }



  const day = String(date.getDate()).padStart(2, "0");

  const month = String(date.getMonth() + 1).padStart(2, "0");

  const year = date.getFullYear();



  return `${day}/${month}/${year}`;

}



/**

 * Format time

 */

function formatTime(value: string): string {

  if (!value) return "";



  const [hours, minutes] = value.split(":");



  if (!hours || !minutes) {

    return value;

  }



  return `${hours}:${minutes}`;

}



/**

 * Schedule 1 records the identity document as a masked value.

 *

 * Only the last four digits are ever collected, so the first

 * eight digits of the twelve-digit Aadhaar are rendered as a

 * fixed mask, grouped the way an Aadhaar number is printed:

 *

 * 1234 -> xxxx xxxx xxxx 1234

 */

function maskAadhaar(lastFour: string): string {

  const digits = lastFour.trim();



  if (!digits) return "";



  return `xxxx xxxx xxxx ${digits}`;

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



  if (!payer) return true;



  if (payer === data.customerName.trim().toLowerCase()) return true;



  return SELF_RELATIONSHIPS.includes(data.relationship.trim().toLowerCase());

}



/**

 * Build data object used by Docxtemplater.

 *

 * Keep all existing template placeholder names here.

 */

function buildTemplateData(

  data: ServiceAgreementData,

): Record<string, string> {

  const payerSelf = payerIsCustomer(data);



  return {

    AgreementNumber: data.agreementNumber,



    CustomerName: data.customerName,

    CustomerAge: data.customerAge,

    CustomerAadharLastFour: data.customerAadharLastFour,

    /*

     * Schedule 1 shows the masked form; the recitals on page 3

     * keep using the bare last four digits.

     */

    CustomerAadharMasked: maskAadhaar(data.customerAadharLastFour),



    FullAdressCustomer: data.fullAddressCustomer,

    FullAddressCustomer: data.fullAddressCustomer,



    CustomerPhone: data.customerPhone,

    CustomerMail: data.customerMail,



    CustomerDateOfBirth: formatDate(data.customerDateOfBirth),

    CustomerPlace: data.customerPlace,

    CustomerDate: formatDate(data.customerDate),



    Name: data.payerName,

    PayerName: data.payerName,



    Relationship: data.relationship,



    /*

     * Clause 17.4 - exactly one of the two boxes is ticked.

     */

    PayerIsCustomerBox: payerSelf ? TICKED_BOX : EMPTY_BOX,

    PayerIsFamilyBox: payerSelf ? EMPTY_BOX : TICKED_BOX,



    PlanName: data.planName,

    PlanNumber: data.planNumber,



    IssueDate: formatDate(data.issueDate),

    ValidityDate: formatDate(data.validityDate),



    FeeswithoutTax: data.feesWithoutTax,

    Tax: data.tax,

    TotalPayable: data.totalPayable,



    UTR: data.utr,



    PaymentDate: formatDate(data.paymentDate),

    PaymentTime: formatTime(data.paymentTime),

    PaymentMode: data.paymentMode,



    Payee: data.payee,



    Language: data.language,



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



    EffectiveDate: formatDate(data.effectiveDate),



    Date: formatDate(data.executionDate),

    Time: formatTime(data.executionTime),

    "AM/PM": data.executionAmPm,



    CurrentDate: formatDate(data.currentDate),

  };

}



/**

 * Generate DOCX from the master template.

 */

async function generateDocx(

  data: ServiceAgreementData,

  outputPath: string,

  highlight: boolean,

): Promise<void> {

  const templatePath = path.join(

    process.cwd(),

    "templates",

    "Service Agreement V10.docx",

  );



  console.log(

    "[Service Agreement] Master DOCX:",

    templatePath,

  );



  /**

   * Verify master template exists.

   */

  try {

    await fs.access(templatePath);

  } catch {

    throw new Error(

      `Master DOCX template was not found at: ${templatePath}`,

    );

  }



  console.log(

    "[Service Agreement] Reading master DOCX...",

  );



  const templateBuffer = await fs.readFile(templatePath);



  console.log(

    "[Service Agreement] Master DOCX size:",

    templateBuffer.length,

    "bytes",

  );



  /**

   * Load DOCX into PizZip.

   */

  const zip = new PizZip(templateBuffer);



  /**

   * Initialize Docxtemplater.

   */

  let document: Docxtemplater;

  try {

    document = new Docxtemplater(zip, {

      paragraphLoop: true,

      linebreaks: true,

    });

  } catch (error) {

    /**

     * Docxtemplater bundles compilation problems into a

     * single "Multi error"; name the broken placeholder.

     */

    throw new Error(describeTemplateError(error) ?? String(error));

  }



  console.log(

    "[Service Agreement] Rendering DOCX placeholders...",

  );



  /**

   * Replace template placeholders.

   */

  const templateValues = buildTemplateData(data);

  try {

    document.render(

      highlight

        ? markFilledValues(templateValues, WITNESS_BLANK_RULES)

        : templateValues,

    );

  } catch (error) {

    throw new Error(describeTemplateError(error) ?? String(error));

  }



  console.log(

    "[Service Agreement] DOCX placeholders rendered.",

  );



  const zipOutput = document.getZip();



  /**

   * Paint the filled-in values yellow for the on-screen

   * review copy. The downloaded copy skips this entirely.

   */

  if (highlight) {

    applyHighlightMarkers(zipOutput);

  }



  /**

   * Generate output DOCX buffer.

   */

  const outputBuffer = zipOutput.generate({

    type: "nodebuffer",

    compression: "DEFLATE",

  });



  /**

   * Save generated DOCX.

   */

  await fs.writeFile(outputPath, outputBuffer);



  console.log(

    "[Service Agreement] Generated DOCX:",

    outputPath,

  );



  console.log(

    "[Service Agreement] Generated DOCX size:",

    outputBuffer.length,

    "bytes",

  );

}



/**
 * Convert the generated DOCX through the hosted ConvertAPI service.
 * No document-conversion binary is required on the application host.
 */
async function convertDocxToPdf(
  docxPath: string,
  outputDirectory: string,
): Promise<string> {
  const docxFileName = path.basename(docxPath);
  const pdfPath = path.join(
    outputDirectory,
    `${path.basename(docxFileName, path.extname(docxFileName))}.pdf`,
  );
  const docxBuffer = await fs.readFile(docxPath);

  if (docxBuffer.length === 0) {
    throw new Error('Generated DOCX is empty and cannot be converted.');
  }

  console.log('[Service Agreement] Converting DOCX through ConvertAPI.');
  const pdfBuffer = await convertDocxToPdfWithConvertApi(
    docxBuffer,
    docxFileName,
  );

  await fs.writeFile(pdfPath, pdfBuffer);

  console.log('[Service Agreement] PDF created successfully.', {
    size: pdfBuffer.length,
  });

  return pdfPath;
}
/**
 * POST /api/service-agreement/generate-pdf
 */

export async function POST(request: Request) {

  let temporaryDirectory = "";



  const requestId = randomUUID();

  const requestStart = Date.now();



  console.log(

    "=================================================",

  );



  console.log(

    "[Service Agreement] PDF REQUEST START:",

    requestId,

  );



  console.log(

    "=================================================",

  );



  try {

    /**

     * ------------------------------------------------

     * STEP 0: Read request body

     * ------------------------------------------------

     */

    console.log(

      "[Service Agreement]",

      requestId,

      "Reading request body...",

    );



    const body =

      (await request.json()) as Partial<ServiceAgreementData> & {

        highlight?: boolean;

      };



    const data = body as ServiceAgreementData;



    /**

     * The review copy shown in the preview marks every filled

     * value in yellow. The copy the operator downloads is

     * generated from the same data without it.

     */

    const highlight = body.highlight === true;



    console.log(

      "[Service Agreement]",

      requestId,

      "Request body received.",

    );



    /**

     * ------------------------------------------------

     * STEP 0.1: Validate form data

     * ------------------------------------------------

     */

    console.log(

      "[Service Agreement]",

      requestId,

      "Validating form data...",

    );



    const validation =

      validateServiceAgreement(data);



    /**

     * Validation failed.

     */

    if (!validation.isValid) {

      console.error(

        "[Service Agreement]",

        requestId,

        "Validation failed:",

        validation.errors,

      );



      return Response.json(

        {

          success: false,

          message:

            "Please correct the following validation errors.",

          errors: validation.errors,

          fieldErrors: validation.fieldErrors,

          requestId,

        },

        {

          status: 400,

        },

      );

    }



    console.log(

      "[Service Agreement]",

      requestId,

      "Validation successful.",

    );



    /**

     * ------------------------------------------------

     * STEP 0.2: Create temporary directory

     * ------------------------------------------------

     */

    temporaryDirectory = path.join(

      os.tmpdir(),

      `service-agreement-${requestId}`,

    );



    await fs.mkdir(temporaryDirectory, {

      recursive: true,

    });



    console.log(

      "[Service Agreement]",

      requestId,

      "Temporary directory:",

      temporaryDirectory,

    );



    /**

     * ------------------------------------------------

     * STEP 0.3: Create safe agreement filename

     * ------------------------------------------------

     */

    const safeAgreementNumber =

      data.agreementNumber

        .replace(/[^a-zA-Z0-9_-]/g, "_")

        .trim() || "service-agreement";



    const docxPath = path.join(

      temporaryDirectory,

      `${safeAgreementNumber}.docx`,

    );



    /**

     * ------------------------------------------------

     * STEP 1: Generate DOCX

     * ------------------------------------------------

     */

    const docxStart = Date.now();



    console.log(

      "[Service Agreement]",

      requestId,

      "STEP 1: Generating DOCX...",

    );



    await generateDocx(

      data,

      docxPath,

      highlight,

    );



    console.log(

      "[Service Agreement]",

      requestId,

      "STEP 1 completed in:",

      `${Date.now() - docxStart}ms`,

    );



    /**

     * ------------------------------------------------

     * STEP 2: Convert DOCX to PDF

     * ------------------------------------------------

     */

    const pdfStart = Date.now();



    console.log(

      "[Service Agreement]",

      requestId,

      "STEP 2: Converting DOCX to PDF...",

    );



    const pdfPath =

      await convertDocxToPdf(

        docxPath,

        temporaryDirectory,

      );



    console.log(

      "[Service Agreement]",

      requestId,

      "STEP 2 completed in:",

      `${Date.now() - pdfStart}ms`,

    );



    /**

     * ------------------------------------------------

     * STEP 3: Read generated PDF

     * ------------------------------------------------

     */

    console.log(

      "[Service Agreement]",

      requestId,

      "STEP 3: Reading generated PDF...",

    );



    const pdfBuffer =

      await fs.readFile(pdfPath);



    /**

     * Empty PDF protection.

     */

    if (

      !pdfBuffer ||

      pdfBuffer.length === 0

    ) {

      throw new Error(

        "The generated PDF is empty.",

      );

    }



    console.log(

      "[Service Agreement]",

      requestId,

      "STEP 3 completed.",

    );



    console.log(

      "[Service Agreement]",

      requestId,

      "PDF size:",

      pdfBuffer.length,

      "bytes",

    );



    /**

     * ------------------------------------------------

     * SUCCESS

     * ------------------------------------------------

     */

    const totalTime =

      Date.now() - requestStart;



    console.log(

      "=================================================",

    );



    console.log(

      "[Service Agreement] PDF REQUEST SUCCESS:",

      requestId,

    );



    console.log(

      "[Service Agreement] TOTAL TIME:",

      `${totalTime}ms`,

    );



    console.log(

      "=================================================",

    );



    /**

     * Convert Buffer to Uint8Array for Response.

     */

    const responseBody =

      new Uint8Array(pdfBuffer);



    /**

     * Return PDF directly.

     */

    return new Response(

      responseBody,

      {

        status: 200,



        headers: {

          "Content-Type":

            "application/pdf",



          "Content-Disposition":

            `attachment; filename="${safeAgreementNumber}.pdf"`,



          "Content-Length":

            String(

              responseBody.byteLength,

            ),



          "Cache-Control":

            "no-store",

        },

      },

    );

  } catch (error) {

    /**

     * ------------------------------------------------

     * GLOBAL ERROR HANDLER

     * ------------------------------------------------

     */

    const totalTime =

      Date.now() - requestStart;



    console.error(

      "=================================================",

    );



    console.error(

      "[Service Agreement] PDF REQUEST FAILED:",

      requestId,

    );



    console.error(

      "[Service Agreement] TOTAL TIME:",

      `${totalTime}ms`,

    );



    console.error(

      "[Service Agreement] ERROR:",

      error,

    );



    console.error(

      "=================================================",

    );



    /**

     * Default error message.

     */

    let message =

      "Unable to generate the Service Agreement PDF.";



    /**

     * Use actual error message where available.

     */

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

        requestId,

      },

      {

        status: 500,

      },

    );

  } finally {

    /**

     * ------------------------------------------------

     * CLEANUP TEMPORARY DIRECTORY

     * ------------------------------------------------

     */

    if (temporaryDirectory) {

      try {

        await fs.rm(

          temporaryDirectory,

          {

            recursive: true,

            force: true,

          },

        );



        console.log(

          "[Service Agreement] Temporary directory cleaned:",

          temporaryDirectory,

        );

      } catch (cleanupError) {

        console.error(

          "[Service Agreement] Temporary directory cleanup failed:",

          cleanupError,

        );

      }

    }

  }

}
