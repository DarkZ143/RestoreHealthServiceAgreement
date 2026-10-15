# Service Agreement Generator

Next.js app for filling the Restore Health Services agreement template, previewing the generated PDF, and downloading the approved copy.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## PDF conversion setup

DOCX files are converted to PDF by ConvertAPI. The app server sends the generated agreement DOCX to ConvertAPI and downloads the resulting PDF. No LibreOffice binary is required on the host.

1. Create an API token in the [ConvertAPI dashboard](https://www.convertapi.com/a/authentication).
2. Set `CONVERTAPI_API_TOKEN` as a server-side environment variable for local development and in the production hosting dashboard.
3. Redeploy after adding or changing the production variable.

Keep this token private: do not prefix it with `NEXT_PUBLIC_` or commit it to the repository. ConvertAPI currently advertises 250 free conversions for new accounts; check its [current plans and pricing](https://www.convertapi.com/pricing) before production use. Each Preview Agreement action performs one conversion.

**Data handling:** agreement details, including customer contact information and the last four digits of Aadhaar, are included in the generated DOCX sent to ConvertAPI for rendering. Review the provider's [privacy and data processing terms](https://www.convertapi.com/static/docs/compliance/CONVERTAPI_PRIVACY_POLICY_AND_DATA_PROCESSING_TERMS.pdf) before using real customer records.

## Validation rules

- Every date must be today or earlier, except Validity Date.
- Validity Date may be in the future and cannot be before Issue Date.
- Date of Birth must make the customer 18–150 years old. Customer Age must be a whole number and match the entered Date of Birth.
- The same validation runs in the browser and on both document-generation API routes.

The current date is evaluated in the `Asia/Kolkata` timezone.
