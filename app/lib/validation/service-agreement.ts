import type { ServiceAgreementData } from "@/app/types/service-agreement";
import {
  calculateAge,
  getDateOneYearAfter,
  getDateYearsAgo,
  getTodayDateString,
  isValidIsoDate,
} from "@/app/lib/validation/dates";

/**
 * Validation messages keyed by the form field they belong to.
 *
 * The form uses these keys to highlight the offending input in
 * red, so every message must be attached to the field the
 * operator actually has to correct.
 */
export type FieldErrors = Partial<Record<keyof ServiceAgreementData, string>>;

export interface ValidationResult {
  isValid: boolean;

  /**
   * Flat list of messages, kept for the API responses and for
   * the summary banner above the form.
   */
  errors: string[];

  fieldErrors: FieldErrors;
}

function isValidDate(value: string): boolean {
  return isValidIsoDate(value);
}

const DATE_FIELDS: {
  field: keyof ServiceAgreementData;
  label: string;
  allowsFuture?: boolean;
}[] = [
  { field: "customerDate", label: "Invoice Date / Customer Date" },
  { field: "issueDate", label: "Issue Date" },
  { field: "validityDate", label: "Validity Date", allowsFuture: true },
  { field: "paymentDate", label: "Transaction 1 Date" },
  { field: "callDate", label: "Verification Call Date" },
  { field: "acceptanceDate", label: "Acceptance Date" },
  { field: "sentDate", label: "Document Sent Date" },
  { field: "witness1Date", label: "Witness 1 Date" },
  { field: "witness2Date", label: "Witness 2 Date" },
  { field: "effectiveDate", label: "Effective Date" },
  { field: "executionDate", label: "Execution / Signing Date" },
  { field: "currentDate", label: "Current / Document Date" },
];

function isValidTime(value: string): boolean {
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
}

function isValidAmount(value: string): boolean {
  if (!value.trim()) {
    return false;
  }

  const amount = Number(value);

  return Number.isFinite(amount) && amount >= 0;
}

const ALLOWED_PAYMENT_MODES = [
  "UPI",
  "NEFT",
  "RTGS",
  "IMPS",
  "Bank Transfer",
  "Debit Card",
  "Credit Card",
  "Other",
];

export function validateServiceAgreement(
  data: ServiceAgreementData,
): ValidationResult {
  const errors: string[] = [];

  const fieldErrors: FieldErrors = {};

  /**
   * Records a problem against a single form field.
   *
   * Only the first problem per field is kept: a field shows one
   * message at a time, and the first one is always the most
   * specific reason it failed.
   */
  const addError = (field: keyof ServiceAgreementData, message: string) => {
    errors.push(message);

    if (!fieldErrors[field]) {
      fieldErrors[field] = message;
    }
  };

  // =========================
  // AGREEMENT
  // =========================

  if (!data.agreementNumber.trim()) {
    addError("agreementNumber", "Agreement Number is required.");
  }

  // =========================
  // CUSTOMER DETAILS
  // =========================

  if (!data.customerName.trim()) {
    addError("customerName", "Customer Name is required.");
  }

  if (!data.customerAge.trim()) {
    addError("customerAge", "Customer Age is required.");
  } else {
    const age = Number(data.customerAge);

    if (!Number.isInteger(age) || age < 18 || age > 150) {
      addError("customerAge", "Customer Age must be a whole number between 18 and 150.");
    }
  }

  if (!data.customerDateOfBirth.trim()) {
    addError("customerDateOfBirth", "Customer Date of Birth is required.");
  } else if (!isValidDate(data.customerDateOfBirth)) {
    addError("customerDateOfBirth", "Customer Date of Birth is invalid.");
  } else {
    const today = getTodayDateString();
    const youngestAllowedDob = getDateYearsAgo(today, 18);
    const oldestAllowedDob = getDateYearsAgo(today, 150);

    if (
      data.customerDateOfBirth > youngestAllowedDob ||
      data.customerDateOfBirth < oldestAllowedDob
    ) {
      addError(
        "customerDateOfBirth",
        "Customer must be between 18 and 150 years old.",
      );
    } else if (
      data.customerAge.trim() &&
      Number.isInteger(Number(data.customerAge)) &&
      Number(data.customerAge) !== calculateAge(data.customerDateOfBirth, today)
    ) {
      addError("customerAge", "Customer Age must match the Date of Birth.");
    }
  }

  if (!/^\d{4}$/.test(data.customerAadharLastFour)) {
    addError(
      "customerAadharLastFour",
      "Aadhaar Last 4 Digits must contain exactly 4 digits.",
    );
  }

  if (!data.fullAddressCustomer.trim()) {
    addError("fullAddressCustomer", "Full Residential Address is required.");
  }

  if (!data.customerPhone.trim()) {
    addError("customerPhone", "Customer Mobile Number is required.");
  } else if (!/^[6-9]\d{9}$/.test(data.customerPhone.trim())) {
    addError(
      "customerPhone",
      "Customer Mobile Number must be a valid 10-digit Indian mobile number.",
    );
  }

  if (!data.customerMail.trim()) {
    addError("customerMail", "Customer Email Address is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.customerMail.trim())) {
    addError("customerMail", "Customer Email Address is invalid.");
  }

  if (!data.customerPlace.trim()) {
    addError("customerPlace", "Customer Place is required.");
  }

  if (!data.customerDate.trim()) {
    addError("customerDate", "Customer Date is required.");
  } else if (!isValidDate(data.customerDate)) {
    addError("customerDate", "Customer Date is invalid.");
  }

  // =========================
  // PAYER DETAILS
  // =========================

  if (data.payerName.trim() !== data.customerName.trim()) {
    addError("payerName", "Payer Name must match the Customer Name.");
  }

  if (data.relationship.trim() !== "Self") {
    addError("relationship", "Relationship must be Self.");
  }

  // =========================
  // PLAN DETAILS
  // =========================

  const allowedPlanNames = ["Custom", "2A", "2C", "2A+2C", "Other"];

  if (!allowedPlanNames.includes(data.planName)) {
    addError("planName", "Choose a plan name from the list.");
  }

  if (data.planName === "Other" && !data.planNameOther?.trim()) {
    addError("planNameOther", "Enter the other plan name.");
  }

  if (!data.planNumber.trim()) {
    addError("planNumber", "Plan Number is required.");
  }

  if (!data.issueDate.trim()) {
    addError("issueDate", "Issue Date is required.");
  } else if (!isValidDate(data.issueDate)) {
    addError("issueDate", "Issue Date is invalid.");
  }

  if (!data.validityDate.trim()) {
    addError("validityDate", "Validity Date is required.");
  } else if (!isValidDate(data.validityDate)) {
    addError("validityDate", "Validity Date is invalid.");
  }

  if (
    data.issueDate &&
    data.validityDate &&
    isValidDate(data.issueDate) &&
    isValidDate(data.validityDate)
  ) {
    if (data.validityDate !== getDateOneYearAfter(data.issueDate)) {
      addError(
        "validityDate",
        "Validity Date must be exactly one year after Issue Date.",
      );
    }
  }

  if (!isValidAmount(data.feesWithoutTax)) {
    addError("feesWithoutTax", "Fees Without Tax must be a valid amount.");
  }

  if (!isValidAmount(data.tax)) {
    addError("tax", "Tax must be a valid amount.");
  }

  if (!isValidAmount(data.totalPayable)) {
    addError("totalPayable", "Total Payable must be a valid amount.");
  }

  // =========================
  // PAYMENT DETAILS
  // =========================

  if (!data.utr.trim()) {
    addError("utr", "Transaction 1 UTR is required.");
  }

  if (!data.paymentDate.trim()) {
    addError("paymentDate", "Payment Date is required.");
  } else if (!isValidDate(data.paymentDate)) {
    addError("paymentDate", "Payment Date is invalid.");
  }

  if (!data.paymentTime.trim()) {
    addError("paymentTime", "Transaction 1 Time is required.");
  } else if (!isValidTime(data.paymentTime)) {
    addError("paymentTime", "Transaction 1 Time is invalid.");
  }

  const additionalTransactions = Array.isArray(data.additionalTransactions)
    ? data.additionalTransactions
    : [];

  if (additionalTransactions.length > 2) {
    addError(
      "additionalTransactions",
      "A maximum of three transactions is allowed.",
    );
  }

  additionalTransactions.slice(0, 2).forEach((transaction, index) => {
    const transactionNumber = index + 2;
    const date = typeof transaction?.date === "string" ? transaction.date : "";
    const time = typeof transaction?.time === "string" ? transaction.time : "";
    const utr = typeof transaction?.utr === "string" ? transaction.utr : "";
    const paymentMode =
      typeof transaction?.paymentMode === "string"
        ? transaction.paymentMode
        : "";

    if (!date.trim()) {
      addError(
        "additionalTransactions",
        `Transaction ${transactionNumber} date is required.`,
      );
    } else if (!isValidDate(date)) {
      addError(
        "additionalTransactions",
        `Transaction ${transactionNumber} date is invalid.`,
      );
    }

    if (!time.trim()) {
      addError(
        "additionalTransactions",
        `Transaction ${transactionNumber} time is required.`,
      );
    } else if (!isValidTime(time)) {
      addError(
        "additionalTransactions",
        `Transaction ${transactionNumber} time is invalid.`,
      );
    }

    if (!utr.trim()) {
      addError(
        "additionalTransactions",
        `Transaction ${transactionNumber} UTR is required.`,
      );
    }

    if (!ALLOWED_PAYMENT_MODES.includes(paymentMode)) {
      addError(
        "additionalTransactions",
        `Transaction ${transactionNumber} payment mode is required.`,
      );
    }
  });

  if (!ALLOWED_PAYMENT_MODES.includes(data.paymentMode)) {
    addError("paymentMode", "Transaction 1 payment mode is required.");
  }

  if (data.payee.trim() !== data.customerName.trim()) {
    addError("payee", "Payee must match the Customer Name.");
  }

  // =========================
  // VERIFICATION / AGENT
  // =========================

  if (!["English", "Hindi", "Other"].includes(data.language)) {
    addError("language", "Choose English, Hindi, or Other.");
  }

  if (data.language === "Other" && !data.languageOther?.trim()) {
    addError("languageOther", "Enter the other language.");
  }

  if (!data.agentName.trim()) {
    addError("agentName", "Agent / Authorized Representative is required.");
  }

  if (!data.callDate.trim()) {
    addError("callDate", "Verification Call Date is required.");
  } else if (!isValidDate(data.callDate)) {
    addError("callDate", "Verification Call Date is invalid.");
  }

  if (!data.callTime.trim()) {
    addError("callTime", "Verification Call Time is required.");
  } else if (!isValidTime(data.callTime)) {
    addError("callTime", "Verification Call Time is invalid.");
  }

  if (!data.verifierName.trim()) {
    addError("verifierName", "Verifier Name is required.");
  }

  // =========================
  // ACCEPTANCE
  // =========================

  if (!data.acceptanceDate.trim()) {
    addError("acceptanceDate", "Acceptance Date is required.");
  } else if (!isValidDate(data.acceptanceDate)) {
    addError("acceptanceDate", "Acceptance Date is invalid.");
  }

  if (!data.acceptanceTime.trim()) {
    addError("acceptanceTime", "Acceptance Time is required.");
  } else if (!isValidTime(data.acceptanceTime)) {
    addError("acceptanceTime", "Acceptance Time is invalid.");
  }

  // =========================
  // DOCUMENT DELIVERY
  // =========================

  if (data.documentSent !== "Yes") {
    addError("documentSent", "Documents Sent to Customer must be Yes.");
  }

  if (!["Email", "WhatsApp"].includes(data.typeOfSendingPlatform)) {
    addError(
      "typeOfSendingPlatform",
      "Choose Email or WhatsApp as the sending method.",
    );
  }

  if (!data.sentDate.trim()) {
    addError("sentDate", "Document Sent Date is required.");
  } else if (!isValidDate(data.sentDate)) {
    addError("sentDate", "Document Sent Date is invalid.");
  }

  if (!data.sentTime.trim()) {
    addError("sentTime", "Document Sent Time is required.");
  } else if (!isValidTime(data.sentTime)) {
    addError("sentTime", "Document Sent Time is invalid.");
  }

  // =========================
  // WITNESS DETAILS
  // =========================

  /*
   * Witnesses apply only to Part B (physical execution).
   *
   * They are therefore optional, and are validated for
   * format only when a value has been supplied.
   */

  const witnesses = [
    {
      label: "Witness 1",
      mobileField: "witness1Mobile",
      dateField: "witness1Date",
      mobile: data.witness1Mobile,
      date: data.witness1Date,
    },
    {
      label: "Witness 2",
      mobileField: "witness2Mobile",
      dateField: "witness2Date",
      mobile: data.witness2Mobile,
      date: data.witness2Date,
    },
  ] as const;

  for (const witness of witnesses) {
    if (witness.mobile.trim() && !/^[6-9]\d{9}$/.test(witness.mobile.trim())) {
      addError(
        witness.mobileField,
        `${witness.label} Mobile Number must be a valid 10-digit Indian mobile number.`,
      );
    }

    if (witness.date.trim() && !isValidDate(witness.date)) {
      addError(witness.dateField, `${witness.label} Date is invalid.`);
    }
  }

  // =========================
  // EXECUTION
  // =========================

  if (!data.effectiveDate.trim()) {
    addError("effectiveDate", "Effective Date is required.");
  } else if (!isValidDate(data.effectiveDate)) {
    addError("effectiveDate", "Effective Date is invalid.");
  }

  if (!data.executionDate.trim()) {
    addError("executionDate", "Execution / Signing Date is required.");
  } else if (!isValidDate(data.executionDate)) {
    addError("executionDate", "Execution / Signing Date is invalid.");
  }

  if (!data.executionTime.trim()) {
    addError("executionTime", "Execution / Signing Time is required.");
  } else if (!isValidTime(data.executionTime)) {
    addError("executionTime", "Execution / Signing Time is invalid.");
  }

  // =========================
  // CURRENT DATE
  // =========================

  if (!data.currentDate.trim()) {
    addError("currentDate", "Current / Document Date is required.");
  } else if (!isValidDate(data.currentDate)) {
    addError("currentDate", "Current / Document Date is invalid.");
  }

  const today = getTodayDateString();

  const invoiceDateLinkedFields = [
    { field: "effectiveDate", label: "Effective Date" },
    { field: "executionDate", label: "Execution / Signing Date" },
    { field: "currentDate", label: "Current / Document Date" },
  ] as const;

  if (data.customerDate.trim()) {
    for (const linkedField of invoiceDateLinkedFields) {
      if (data[linkedField.field] !== data.customerDate) {
        addError(
          linkedField.field,
          `${linkedField.label} must match the Invoice Date.`,
        );
      }
    }
  }

  for (const [index, transaction] of additionalTransactions
    .slice(0, 2)
    .entries()) {
    if (
      typeof transaction?.date === "string" &&
      transaction.date &&
      isValidDate(transaction.date) &&
      transaction.date > today
    ) {
      addError(
        "additionalTransactions",
        `Transaction ${index + 2} date cannot be after today.`,
      );
    }
  }

  for (const dateField of DATE_FIELDS) {
    const value = data[dateField.field];

    if (
      typeof value === "string" &&
      value.trim() &&
      isValidDate(value) &&
      !dateField.allowsFuture &&
      value > today
    ) {
      addError(dateField.field, `${dateField.label} cannot be after today.`);
    }
  }

  return {
    isValid: errors.length === 0,

    errors,

    fieldErrors,
  };
}
