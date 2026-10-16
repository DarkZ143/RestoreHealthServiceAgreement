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

The customer section can search all `role: client` documents in the `users` collection by name or mobile number. Firestore loads name, mobile number, email, date of birth, address, role, and agent name; age is calculated from date of birth. Selecting a result fills and locks the customer identity fields and loads the agent name. Agreement number and invoice date remain editable in the form. Invoice Date, Document Sent Date, Effective Date, Execution Date, and Current Document Date stay equal. The document delivery section records Yes, date, time, and Email or WhatsApp. Time fields are entered separately in 24-hour format. Payment details allow up to three transactions, each with its own date, time, UTR, and payment mode; the DOCX/PDF template displays multiple values separated by `|`. After **Confirm & Download PDF**, the configured `serviceAgreementCreated` field is set to `true` for record keeping.

The agreement form fixes Payer Name and Payee to the selected customer and Relationship to `Self`. Plan and language selections support custom typed values. The company signature at `public/sign.png` (150 x 75 pixels) is placed beside the physical signature line.

Copy `.env.example` to `.env.local` and set the Firebase service account values there. Grant the service account permission to read and update the chosen Firestore collection. Adjust the collection, role, or client field mappings in `.env.local` if the schema differs. Aadhaar last four digits and payment/plan fields are not fetched from Firestore, so they remain manual.

Do not prefix Firebase service account variables with `NEXT_PUBLIC_`, and do not commit `.env.local`.

**Data handling:** agreement details, including customer contact information and the last four digits of Aadhaar, are included in the generated DOCX sent to ConvertAPI for rendering. Review the provider's [privacy and data processing terms](https://www.convertapi.com/static/docs/compliance/CONVERTAPI_PRIVACY_POLICY_AND_DATA_PROCESSING_TERMS.pdf) before using real customer records.

## Validation rules

- Every date must be today or earlier, except Validity Date.
- Validity Date may be in the future and cannot be before Issue Date.
- Date of Birth must make the customer 18–150 years old. Customer Age must be a whole number and match the entered Date of Birth.
- The same validation runs in the browser and on both document-generation API routes.

The current date is evaluated in the `Asia/Kolkata` timezone.
