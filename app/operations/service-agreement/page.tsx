"use client";

import { useEffect, useMemo, useState } from "react";

import CustomerForm from "@/app/components/service-agreement/CustomerForm";
import PlanForm from "@/app/components/service-agreement/PlanForm";
import PaymentForm from "@/app/components/service-agreement/PaymentForm";
import VerificationForm from "@/app/components/service-agreement/VerificationForm";
import WitnessForm from "@/app/components/service-agreement/WitnessForm";
import DocumentPreview from "@/app/components/service-agreement/DocumentPreview";
import Image from "next/image";

import type {
  AgreementClient,
  AgreementClientLoadState,
} from "@/app/types/agreement-client";
import type { ServiceAgreementData } from "@/app/types/service-agreement";
import type { FieldErrors } from "@/app/lib/validation/service-agreement";
import { getDateOneYearAfter } from "@/app/lib/validation/dates";
import { validateServiceAgreement } from "@/app/lib/validation/service-agreement";

const initialData: ServiceAgreementData = {
  agreementNumber: "",

  customerName: "",
  customerAge: "",
  customerDateOfBirth: "",
  customerAadharLastFour: "",

  fullAddressCustomer: "",

  customerPhone: "",
  customerMail: "",

  customerPlace: "",
  customerDate: "",

  payerName: "",
  relationship: "Self",

  planName: "",
  planNameOther: "",
  planNumber: "",

  issueDate: "",
  validityDate: "",

  feesWithoutTax: "",
  tax: "",
  totalPayable: "",

  utr: "",
  paymentDate: "",
  paymentTime: "",
  additionalTransactions: [],
  paymentMode: "",
  payee: "",

  language: "",
  languageOther: "",
  agentName: "",

  callDate: "",
  callTime: "",

  verifierName: "",

  acceptanceDate: "",
  acceptanceTime: "",

  documentSent: "Yes",
  sentDate: "",
  sentTime: "",
  typeOfSendingPlatform: "",

  witness1Name: "",
  witness1Address: "",
  witness1Mobile: "",
  witness1Date: "",

  witness2Name: "",
  witness2Address: "",
  witness2Mobile: "",
  witness2Date: "",

  effectiveDate: "",
  executionDate: "",
  executionTime: "",

  currentDate: "",
};

function calculateTotal(feesWithoutTax: string, tax: string): string {
  const fees = Number(feesWithoutTax) || 0;
  const taxAmount = Number(tax) || 0;

  if (!fees && !taxAmount) {
    return "";
  }

  return (fees + taxAmount).toFixed(2);
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 flex items-start gap-3.5 border-b border-slate-100 pb-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xs font-bold tracking-wide text-emerald-800 ring-1 ring-emerald-100">
        {number}
      </span>
      <div>
        <h2 className="text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
      </div>
    </div>
  );
}

export default function ServiceAgreementPage() {
  const [data, setData] = useState<ServiceAgreementData>(initialData);

  const [showDocumentPreview, setShowDocumentPreview] = useState(false);

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  /*
   * Bumped on every failed submit so the effect below re-runs
   * even when the same fields fail twice in a row.
   */
  const [invalidFocusToken, setInvalidFocusToken] = useState(0);

  const [isDownloaded, setIsDownloaded] = useState(false);

  const [clients, setClients] = useState<AgreementClient[]>([]);

  const [selectedClient, setSelectedClient] =
    useState<AgreementClient | null>(null);

  const [clientsLoadState, setClientsLoadState] =
    useState<AgreementClientLoadState>("loading");

  const [clientLoadMessage, setClientLoadMessage] = useState("");

  const [isConfirmingDownload, setIsConfirmingDownload] = useState(false);

  const totalPayable = useMemo(
    () => calculateTotal(data.feesWithoutTax, data.tax),
    [data.feesWithoutTax, data.tax],
  );

  const invalidFieldMessages = useMemo(
    () => Object.values(fieldErrors).filter(Boolean) as string[],
    [fieldErrors],
  );

  /*
   * ---------------------------------------------------------
   * CLEANUP PDF OBJECT URL
   * ---------------------------------------------------------
   */

  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  useEffect(() => {
    let cancelled = false;

    const loadClients = async () => {
      try {
        const response = await fetch("/api/service-agreement/clients", {
          cache: "no-store",
        });
        const result = (await response.json()) as {
          clients?: AgreementClient[];
          configured?: boolean;
          message?: string;
        };

        if (!response.ok) {
          throw new Error(result.message || "Could not load the client list.");
        }

        if (cancelled) return;

        if (!result.configured) {
          setClients([]);
          setClientsLoadState("unavailable");
          setClientLoadMessage("Firestore is not configured yet.");
          return;
        }

        setClients(result.clients ?? []);
        setClientsLoadState("ready");
        setClientLoadMessage("");
      } catch (error) {
        if (cancelled) return;

        setClients([]);
        setClientsLoadState("unavailable");
        setClientLoadMessage(
          error instanceof Error
            ? error.message
            : "Could not load the client list.",
        );
      }
    };

    void loadClients();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * ---------------------------------------------------------
   * JUMP TO THE FIRST MISSING FIELD
   *
   * The highlighted field can be far below the fold, so the
   * first one is scrolled into view and focused. The DOM is
   * queried instead of the error object so the operator is
   * always taken to the first field in visual order.
   * ---------------------------------------------------------
   */

  useEffect(() => {
    if (!invalidFocusToken) {
      return;
    }

    const firstInvalid = document.querySelector<HTMLElement>(
      '[aria-invalid="true"]',
    );

    if (!firstInvalid) {
      return;
    }

    firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });

    firstInvalid.focus({ preventScroll: true });
  }, [invalidFocusToken]);

  /*
   * ---------------------------------------------------------
   * UPDATE FORM DATA
   *
   * Any change after preview invalidates the old PDF.
   * This prevents downloading a PDF generated from old data.
   * ---------------------------------------------------------
   */

  const handleDataChange = (
    fieldOrUpdatedData:
      | keyof ServiceAgreementData
      | Partial<ServiceAgreementData>,
    value?: string,
  ) => {
    const changedFields =
      typeof fieldOrUpdatedData === "string"
        ? [fieldOrUpdatedData]
        : (Object.keys(fieldOrUpdatedData) as (keyof ServiceAgreementData)[]);

    const mergedData =
      typeof fieldOrUpdatedData === "string"
        ? {
            ...data,
            [fieldOrUpdatedData]: value ?? "",
          }
        : {
            ...data,
            ...fieldOrUpdatedData,
          };
    const issueDateChanged = changedFields.includes("issueDate");
    const nextData = issueDateChanged
      ? {
          ...mergedData,
          validityDate: getDateOneYearAfter(mergedData.issueDate),
        }
      : mergedData;

    const synchronizedDateFields: (keyof ServiceAgreementData)[] = [
      "sentDate",
      "effectiveDate",
      "executionDate",
      "currentDate",
    ];
    const fieldsToClear: (keyof ServiceAgreementData)[] = [...changedFields];

    if (issueDateChanged) {
      fieldsToClear.push("validityDate");
    }

    if (changedFields.includes("customerDate")) {
      fieldsToClear.push(...synchronizedDateFields);
    }

    if (changedFields.includes("customerName")) {
      fieldsToClear.push("payerName", "relationship", "payee");
    }

    const invoiceDate = nextData.customerDate;

    setData({
      ...nextData,
      payerName: nextData.customerName,
      relationship: "Self",
      payee: nextData.customerName,
      sentDate: invoiceDate,
      effectiveDate: invoiceDate,
      executionDate: invoiceDate,
      currentDate: invoiceDate,
      totalPayable: calculateTotal(nextData.feesWithoutTax, nextData.tax),
    });

    /*
     * Clear the highlight only on the fields that were just
     * edited. The remaining ones stay red so the operator can
     * see what is still outstanding.
     */
    setFieldErrors((previous) => {
      if (!fieldsToClear.some((field) => previous[field])) {
        return previous;
      }

      const next = { ...previous };

      for (const field of fieldsToClear) {
        delete next[field];
      }

      /*
       * Fees and taxes feed the computed total, so correcting
       * either of them also clears the total's highlight.
       */
      if (
        changedFields.includes("feesWithoutTax") ||
        changedFields.includes("tax")
      ) {
        delete next.totalPayable;
      }

      return next;
    });

    setErrorMessage("");
    setIsDownloaded(false);

    if (showDocumentPreview) {
      setShowDocumentPreview(false);
    }

    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }

    setPdfBlob(null);
  };

  const handleSelectClient = (clientId: string) => {
    const nextClient = clients.find((client) => client.id === clientId) ?? null;
    const nextData: Partial<ServiceAgreementData> = nextClient
      ? {
          ...initialData,
          customerName: nextClient.name,
          customerAge: nextClient.age,
          customerDateOfBirth: nextClient.dateOfBirth,
          fullAddressCustomer: nextClient.address,
          customerPhone: nextClient.phone,
          customerMail: nextClient.email,
          agentName: nextClient.agentName,
        }
      : initialData;

    setSelectedClient(nextClient);
    handleDataChange(nextData);
  };

  /*
   * ---------------------------------------------------------
   * VALIDATION
   * ---------------------------------------------------------
   */

  const validateForm = (): boolean => {
    const validation = validateServiceAgreement({
      ...data,
      totalPayable,
    });

    if (!validation.isValid) {
      setFieldErrors(validation.fieldErrors);

      const count = Object.keys(validation.fieldErrors).length;

      setErrorMessage(
        `${count} field${count === 1 ? "" : "s"} need${
          count === 1 ? "s" : ""
        } attention. The highlighted fields below are missing or invalid.`,
      );

      setInvalidFocusToken((token) => token + 1);

      return false;
    }

    setFieldErrors({});
    setErrorMessage("");

    return true;
  };

  /*
   * ---------------------------------------------------------
   * REQUEST A GENERATED PDF
   *
   * The returned PDF is used for both the on-screen review and
   * the final download, and red text is for review only.
   * ---------------------------------------------------------
   */

  const requestPdf = async (highlight: boolean): Promise<Blob> => {
    const response = await fetch("/api/service-agreement/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        totalPayable,
        highlight,
      }),
    });

    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      let message = highlight
        ? "Unable to generate the Service Agreement preview."
        : "Unable to generate the clean Service Agreement PDF.";

      if (contentType.includes("application/json")) {
        try {
          const result = await response.json();

          if (result?.message) {
            message = result.message;
          }

          /*
           * The server runs the same validation, so a
           * rejection can highlight the fields too.
           */
          if (result?.fieldErrors) {
            setFieldErrors(result.fieldErrors as FieldErrors);
            setInvalidFocusToken((token) => token + 1);
          }
        } catch {
          // Keep the default message.
        }
      } else {
        try {
          const text = await response.text();

          if (text.trim()) {
            message = text;
          }
        } catch {
          // Keep the default message.
        }
      }

      throw new Error(message);
    }

    if (!contentType.includes("application/pdf")) {
      throw new Error("The server did not return a PDF file.");
    }

    const blob = await response.blob();

    if (!blob.size) {
      throw new Error("The generated PDF is empty.");
    }

    return blob;
  };

  /*
   * ---------------------------------------------------------
   * GENERATE REAL PDF FOR PREVIEW
   * ---------------------------------------------------------
   */

  const handlePreviewAgreement = async () => {
    if (isGeneratingPreview) {
      return;
    }

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsGeneratingPreview(true);
    setErrorMessage("");
    setIsDownloaded(false);

    try {
      /*
       * Remove any previously generated preview.
       */

      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
        setPdfUrl(null);
      }

      setPdfBlob(null);

      // Create the red-text review copy. Export is generated clean on confirmation.
      const generatedBlob = await requestPdf(true);
      const objectUrl = URL.createObjectURL(generatedBlob);

      setPdfBlob(generatedBlob);
      setPdfUrl(objectUrl);
      setShowDocumentPreview(true);
    } catch (error) {
      console.error("[Service Agreement] Preview generation failed:", error);

      setShowDocumentPreview(false);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to generate the Service Agreement preview.",
      );
    } finally {
      setIsGeneratingPreview(false);
    }
  };

  /*
   * ---------------------------------------------------------
   * BACK TO EDIT
   * ---------------------------------------------------------
   */

  const handleBackToEdit = () => {
    setShowDocumentPreview(false);
    setIsDownloaded(false);
    setErrorMessage("");

    if (isDownloaded) {
      setSelectedClient(null);
      setData(initialData);
      setFieldErrors({});
      setPdfBlob(null);
      setPdfUrl(null);
      return;
    }

    /*
     * Keep the generated PDF in memory while editing.
     *
     * It will automatically be invalidated as soon as
     * any form field is changed through handleDataChange().
     */
  };

  /*
   * ---------------------------------------------------------
   * FINAL DOWNLOAD
   *
   * Generate a clean PDF from the reviewed form data so
   * preview-only red text is not included in the export.
   * ---------------------------------------------------------
   */

  const handleConfirmAndDownload = async () => {
    if (!pdfBlob || !pdfUrl) {
      setErrorMessage(
        "No generated PDF is available. Please generate the preview again.",
      );

      return;
    }

    if (isConfirmingDownload || isDownloaded) return;

    setIsConfirmingDownload(true);
    setErrorMessage("");

    try {
      const exportBlob = await requestPdf(false);

      if (selectedClient) {
        const response = await fetch(
          "/api/service-agreement/clients/complete",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              clientId: selectedClient.id,
            }),
          },
        );
        const result = (await response.json()) as { message?: string };

        if (!response.ok) {
          throw new Error(
            result.message || "Could not update this client in Firestore.",
          );
        }

      }

      const safeAgreementNumber =
        data.agreementNumber.replace(/[^a-zA-Z0-9_-]/g, "_").trim() ||
        "service-agreement";

      const downloadUrl = URL.createObjectURL(exportBlob);

      const anchor = document.createElement("a");

      anchor.href = downloadUrl;
      anchor.download = `${safeAgreementNumber}.pdf`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      URL.revokeObjectURL(downloadUrl);

      setIsDownloaded(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not complete the client agreement.",
      );
    } finally {
      setIsConfirmingDownload(false);
    }
  };

  /*
   * ---------------------------------------------------------
   * FORM VIEW
   * ---------------------------------------------------------
   */

  if (!showDocumentPreview) {
    return (
      <main className="min-h-screen bg-[#f4f7f5] px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="relative isolate mb-6 overflow-hidden rounded-[28px] bg-[#123b32] px-6 py-7 text-white shadow-[0_20px_60px_-28px_rgba(13,66,52,0.65)] sm:px-9 sm:py-9">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-36 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-44 left-1/3 h-80 w-80 rounded-full bg-teal-200/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Restore Health Services <span className="text-white/40">/</span> Operations
                </div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px]">
                  Service Agreement <Image src="/Logo.png" alt="Lock icon" width={28} height={28} className="inline-block" />
                  <span className="mt-1 block text-emerald-200">Document workspace</span>
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-emerald-50/75 sm:text-base">
                  Enter the agreement details, check every field, then review the finished PDF before downloading it.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["DOCX template", "Cloud PDF conversion", "Validated before export"].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs font-medium text-white/80">{item}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <div className="min-w-56 rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-100/70">Current agreement</p>
                  <p className="mt-2 break-all text-lg font-semibold tracking-wide text-white">
                    {data.agreementNumber.trim() || "Not assigned"}
                  </p>
                  <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-emerald-50/70">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-300/15 text-emerald-200">{"\u2713"}</span>
                    Draft held in this tab
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Agreement form sections" className="mb-6 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm">
            <div className="flex min-w-max gap-1">
              {[
                ["01", "Customer", "agreement-info"],
                ["02", "Plan", "plan-info"],
                ["03", "Payment", "payment-info"],
                ["04", "Verification", "verification-info"],
                ["05", "Witnesses", "witness-info"],
              ].map(([number, label, target]) => (
                <a key={target} href={`#${target}`} className="group flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 transition group-hover:bg-emerald-100 group-hover:text-emerald-800">{number}</span>
                  {label}
                </a>
              ))}
            </div>
          </nav>

          {/* Error */}
          {errorMessage ? (
            <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">
                {errorMessage}
              </p>

              {invalidFieldMessages.length > 0 ? (
                <ul className="mt-2 max-h-48 list-disc space-y-1 overflow-y-auto pl-5 text-xs text-red-700">
                  {invalidFieldMessages.map((message) => (
                    <li key={message}>{message}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          {/* Form Sections */}
          <div className="space-y-5">
            <section id="agreement-info" className="scroll-mt-6 rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.4)] sm:p-7">
              <SectionHeading number="01" title="Customer & agreement" description="Agreement reference, customer identity and contact details." />
              <CustomerForm
                data={data}
                onChange={handleDataChange}
                errors={fieldErrors}
                clients={clients}
                selectedClient={selectedClient}
                clientsLoadState={clientsLoadState}
                clientLoadMessage={clientLoadMessage}
                onSelectClient={handleSelectClient}
              />
            </section>

            <section id="plan-info" className="scroll-mt-6 rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.4)] sm:p-7">
              <SectionHeading number="02" title="Plan & validity" description="Coverage details, effective window and fee breakdown." />
              <PlanForm data={data} onChange={handleDataChange} errors={fieldErrors} />
            </section>

            <section id="payment-info" className="scroll-mt-6 rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.4)] sm:p-7">
              <SectionHeading number="03" title="Payment record" description="Capture the payment reference and official receipt details." />
              <PaymentForm
                data={data}
                onChange={handleDataChange}
                onUpdate={(updates) => handleDataChange(updates)}
                errors={fieldErrors}
              />
            </section>

            <section id="verification-info" className="scroll-mt-6 rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.4)] sm:p-7">
              <SectionHeading number="04" title="Verification & execution" description="Record the explanation, acceptance, delivery and signing timeline." />
              <VerificationForm
                data={data}
                onChange={handleDataChange}
                errors={fieldErrors}
                lockedFields={{ agentName: Boolean(selectedClient?.agentName) }}
              />
            </section>

            <section id="witness-info" className="scroll-mt-6 rounded-[24px] border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-22px_rgba(15,23,42,0.4)] sm:p-7">
              <SectionHeading number="05" title="Witnesses" description="Optional details for agreements completed with physical execution." />
              <WitnessForm data={data} onChange={handleDataChange} errors={fieldErrors} />
            </section>

            {/* Preview Action */}
            <div className="rounded-[24px] border border-emerald-200 bg-gradient-to-br from-white to-emerald-50/70 p-5 shadow-[0_12px_40px_-28px_rgba(16,94,68,0.45)] sm:p-7">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-base font-bold text-slate-950">
                    Ready for a document review?
                  </h2>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                    Your entries are checked before conversion. The PDF preview
                    lets you inspect the generated agreement before you save it.
                  </p>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-rose-700">
                    Entered values appear in red in the preview; the downloaded PDF is clean.
                  </p>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">
                    The generated agreement is sent to ConvertAPI for PDF rendering.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handlePreviewAgreement}
                  disabled={isGeneratingPreview}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isGeneratingPreview ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Generating Preview...
                    </>
                  ) : (
                    <>
                      <span className="rounded-md border border-white/20 px-1.5 py-0.5 text-[9px] font-bold tracking-wide">PDF</span>
                      Preview Agreement
                    </>
                  )}
                </button>
              </div>

              {invalidFieldMessages.length > 0 ? (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
                  <p className="text-xs font-semibold text-red-800">
                    {invalidFieldMessages.length} highlighted field
                    {invalidFieldMessages.length === 1 ? "" : "s"} above still
                    need to be corrected.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    );
  }

  /*
   * ---------------------------------------------------------
   * ACTUAL PDF PREVIEW VIEW
   * ---------------------------------------------------------
   */

  return (
    <main className="min-h-screen bg-gray-100 px-3 py-4 sm:px-5 sm:py-6">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-4 flex flex-col gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-emerald-950">
            Review the generated agreement below. The <strong>Confirm &amp; Download</strong>{" "}
            button saves this same PDF.
          </p>
        </div>

        <DocumentPreview
          data={data}
          pdfUrl={pdfUrl}
          isGenerating={isGeneratingPreview}
          isDownloaded={isDownloaded}
          isConfirmingDownload={isConfirmingDownload}
          onBackToEdit={handleBackToEdit}
          onConfirmAndDownload={handleConfirmAndDownload}
        />

        {errorMessage ? (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-800">{errorMessage}</p>
          </div>
        ) : null}
      </div>
    </main>
  );
}
