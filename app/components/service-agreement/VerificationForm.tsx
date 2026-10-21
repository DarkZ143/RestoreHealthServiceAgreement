"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";

const SENDING_PLATFORMS = [
  { value: "", label: "Select Email or WhatsApp" },
  { value: "Email", label: "Email" },
  { value: "WhatsApp", label: "WhatsApp" },
];

const LANGUAGE_OPTIONS = [
  { value: "", label: "Select language" },
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Other", label: "Other (type)" },
];

export default function VerificationForm({
  data,
  onChange,
  errors,
  lockedFields,
}: FieldSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="language"
        label="Language of Explanation"
        value={data.language}
        error={errors.language}
        onChange={onChange}
        control="select"
        options={LANGUAGE_OPTIONS}
      />

      {data.language === "Other" ? (
        <FormField
          field="languageOther"
          label="Other Language"
          value={data.languageOther}
          error={errors.languageOther}
          onChange={onChange}
          placeholder="Type the language"
        />
      ) : null}

      <FormField
        field="agentName"
        label="Agent / Authorized Representative"
        value={data.agentName}
        error={errors.agentName}
        onChange={onChange}
        disabled={lockedFields?.agentName}
        placeholder="Enter agent name if missing in Firestore"
        hint={
          lockedFields?.agentName
            ? "Loaded from the selected Firestore client."
            : "Loaded automatically from the selected client when available."
        }
      />

      <FormField
        field="callDate"
        label="Welcome / Verification Call Date"
        value={data.callDate}
        error={errors.callDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="callTime"
        label="Welcome / Verification Call Time"
        value={data.callTime}
        error={errors.callTime}
        onChange={onChange}
        type="time"
      />

      <FormField
        field="verifierName"
        label="Verifier Name"
        value={data.verifierName}
        error={errors.verifierName}
        onChange={onChange}
        placeholder="Enter verifier name"
        wrapperClassName="md:col-span-2"
      />

      <FormField
        field="acceptanceDate"
        label="Acceptance Date"
        value={data.acceptanceDate}
        error={errors.acceptanceDate}
        onChange={onChange}
        type="date"
        disabled={false}
        hint="Choose this date independently of the Welcome / Verification Call Date."
      />

      <FormField
        field="acceptanceTime"
        label="Acceptance Time"
        value={data.acceptanceTime}
        error={errors.acceptanceTime}
        onChange={onChange}
        type="time"
      />

      <FormField
        field="documentSent"
        label="Documents Sent to Customer"
        value={data.documentSent}
        error={errors.documentSent}
        onChange={onChange}
        disabled
      />

      <FormField
        field="sentDate"
        label="Document Sent Date"
        value={data.sentDate}
        error={errors.sentDate}
        onChange={onChange}
        type="date"
        hint="Defaults to the Invoice Date; change it if the documents were sent on another day."
      />

      <FormField
        field="sentTime"
        label="Document Sent Time"
        value={data.sentTime}
        error={errors.sentTime}
        onChange={onChange}
        type="time"
      />

      <FormField
        field="typeOfSendingPlatform"
        label="Sent via"
        value={data.typeOfSendingPlatform}
        error={errors.typeOfSendingPlatform}
        onChange={onChange}
        control="select"
        options={SENDING_PLATFORMS}
      />

      <FormField
        field="effectiveDate"
        label="Effective Date (same as Invoice Date)"
        value={data.effectiveDate}
        error={errors.effectiveDate}
        onChange={onChange}
        type="date"
        disabled
      />

      <FormField
        field="executionDate"
        label="Execution / Signing Date (same as Invoice Date)"
        value={data.executionDate}
        error={errors.executionDate}
        onChange={onChange}
        type="date"
        disabled
      />

      <FormField
        field="executionTime"
        label="Execution / Signing Time"
        value={data.executionTime}
        error={errors.executionTime}
        onChange={onChange}
        type="time"
        hint="Enter the time in 24-hour format."
      />

      <FormField
        field="currentDate"
        label="Current / Document Date (same as Invoice Date)"
        value={data.currentDate}
        error={errors.currentDate}
        onChange={onChange}
        type="date"
        disabled
      />
    </div>
  );
}
