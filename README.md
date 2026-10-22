# Service Agreement Generator

Next.js app for filling the Restore Health Services agreement template, previewing the generated PDF, and downloading the approved copy.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Workspace access

The home page opens the service agreement workspace directly. No sign-in or sign-up is required, and /login redirects to the workspace. Workspace API routes are also available without a user session, so restrict access through your hosting or network settings if the deployment should remain staff-only.

## PDF conversion setup

DOCX files are converted to PDF by ConvertAPI. The app server sends the generated agreement DOCX to ConvertAPI and downloads the resulting PDF. No LibreOffice binary is required on the host.

1. Create an API token in the [ConvertAPI dashboard](https://www.convertapi.com/a/authentication).
2. Set `CONVERTAPI_API_TOKEN` as a server-side environment variable for local development and in the production hosting dashboard.
3. Redeploy after adding or changing the production variable.

Keep this token private: do not prefix it with `NEXT_PUBLIC_` or commit it to the repository. ConvertAPI currently advertises 250 free conversions for new accounts; check its [current plans and pricing](https://www.convertapi.com/pricing) before production use. Preview Agreement creates the red-text review PDF; Confirm & Download creates a second, clean PDF.

## Firestore client queue

The customer section can search all `role: client` documents in the `users` collection by name or mobile number. The search loads name, mobile number, email, date of birth, address, role, and agent name; age is calculated from date of birth. After a client is selected, the app fetches that record's UTR, Net Premium, GST, and Gross Premium and fills the agreement form. Agreement number and invoice date remain editable in the form. Invoice Date, Document Sent Date, Effective Date, Execution Date, and Current Document Date stay equal. The document delivery section records Yes, date, time, and Email or WhatsApp. Time fields are entered separately in 24-hour format. Payment details allow up to three transactions, each with its own date, time, UTR, and payment mode; the DOCX/PDF template displays multiple values separated by `|`. After **Confirm & Download PDF**, the configured `serviceAgreementCreated` field is set to `true` for record keeping.

The agreement form fixes Payer Name and Payee to the selected customer and Relationship to `Self`. Plan and language selections support custom typed values. The company signature at `public/sign.png` (150 x 75 pixels) is placed beside the physical signature line.

Copy `.env.example` to `.env.local` and set the Firebase service account values there. Grant the service account permission to read and update the chosen Firestore collection. Adjust the collection, role, or client field mappings in `.env.local` if the schema differs. CRM financial fields default to `premium.totalPremium` (Fees Excluding Tax), `premium.gstAmount` (GST), and `premium.grossPremium` (Total Amount Payable); UTR defaults to the first item in the `transactionIds` array. Change `FIRESTORE_CLIENT_UTR_FIELD`, `FIRESTORE_CLIENT_NET_PREMIUM_FIELD`, `FIRESTORE_CLIENT_GST_FIELD`, and `FIRESTORE_CLIENT_GROSS_PREMIUM_FIELD` to match the CRM field paths. Aadhaar last four digits and plan fields are not fetched from Firestore, so they remain manual. Generated documents display Aadhaar as `XXXX XXXX 1234` and format rupee amounts with Indian comma grouping and two decimal places.

Do not prefix Firebase service account variables with `NEXT_PUBLIC_`, and do not commit `.env.local`.

**Data handling:** agreement details, including customer contact information and the last four digits of Aadhaar, are included in the generated DOCX sent to ConvertAPI for rendering. Review the provider's [privacy and data processing terms](https://www.convertapi.com/static/docs/compliance/CONVERTAPI_PRIVACY_POLICY_AND_DATA_PROCESSING_TERMS.pdf) before using real customer records.

## Validation rules

- Every date must be today or earlier, except Validity Date.
- Validity Date is fixed to one calendar year after Issue Date.
- Date of Birth must make the customer 18–150 years old. Customer Age must be a whole number and match the entered Date of Birth.
- The same validation runs in the browser and on both document-generation API routes.

The current date is evaluated in the `Asia/Kolkata` timezone.
