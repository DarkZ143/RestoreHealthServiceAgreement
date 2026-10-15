import type { ServiceAgreementData } from "@/app/types/service-agreement";
import {
  calculateAge,
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
  { field: "customerDate", label: "Customer Date" },
  { field: "issueDate", label: "Issue Date" },
  { field: "validityDate", label: "Validity Date", allowsFuture: true },
  { field: "paymentDate", label: "Payment Date" },
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

  /*
   * payerName is the single logical payer-name
   * input used for both:
   *
   * {Name}
   * {PayerName}
   *
   * Relationship is optional only when no payer
   * information is supplied.
   */

  if (data.payerName.trim() && !data.relationship.trim()) {
    addError(
      "relationship",
      "Relationship is required when Payer Name is provided.",
    );
  }

  if (!data.payerName.trim() && data.relationship.trim()) {
    addError(
      "payerName",
      "Payer Name is required when Relationship is provided.",
    );
  }

  // =========================
  // PLAN DETAILS
  // =========================

  if (!data.planName.trim()) {
    addError("planName", "Plan Name is required.");
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
    const issueDate = new Date(`${data.issueDate}T00:00:00`);

    const validityDate = new Date(`${data.validityDate}T00:00:00`);

    if (validityDate < issueDate) {
      addError(
        "validityDate",
        "Validity Date cannot be earlier than Issue Date.",
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
    addError("utr", "Payment Reference / UTR is required.");
  }

  if (!data.paymentDate.trim()) {
    addError("paymentDate", "Payment Date is required.");
  } else if (!isValidDate(data.paymentDate)) {
    addError("paymentDate", "Payment Date is invalid.");
  }

  if (!data.paymentTime.trim()) {
    addError("paymentTime", "Payment Time is required.");
  } else if (!isValidTime(data.paymentTime)) {
    addError("paymentTime", "Payment Time is invalid.");
  }

  if (!data.paymentMode.trim()) {
    addError("paymentMode", "Payment Mode is required.");
  }

  if (!data.payee.trim()) {
    addError("payee", "Payee is required.");
  }

  // =========================
  // VERIFICATION / AGENT
  // =========================

  if (!data.language.trim()) {
    addError("language", "Language of Explanation is required.");
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

  if (data.documentSent !== "Yes" && data.documentSent !== "No") {
    addError("documentSent", "Documents Sent must be either Yes or No.");
  }

  if (!data.typeOfSendingPlatform.trim()) {
    addError("typeOfSendingPlatform", "Type of Sending Platform is required.");
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

  if (data.executionAmPm !== "AM" && data.executionAmPm !== "PM") {
    addError("executionAmPm", "Execution AM/PM must be either AM or PM.");
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
