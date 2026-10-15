"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";

const DOCUMENT_SENT_OPTIONS = [
  { value: "", label: "Select option" },
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const SENDING_PLATFORMS = [
  { value: "", label: "Select platform" },
  { value: "Email", label: "Email" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Email & WhatsApp", label: "Email & WhatsApp" },
  { value: "Physical Copy", label: "Physical Copy" },
  { value: "Other", label: "Other" },
];

const AM_PM_OPTIONS = [
  { value: "", label: "Select" },
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
];

export default function VerificationForm({
  data,
  onChange,
  errors,
}: FieldSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="language"
        label="Language of Explanation"
        value={data.language}
        error={errors.language}
        onChange={onChange}
        placeholder="e.g. Hindi, English"
      />

      <FormField
        field="agentName"
        label="Agent / Authorized Representative"
        value={data.agentName}
        error={errors.agentName}
        onChange={onChange}
        placeholder="Enter agent name"
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
        label="Documents Sent"
        value={data.documentSent}
        error={errors.documentSent}
        onChange={onChange}
        control="select"
        options={DOCUMENT_SENT_OPTIONS}
      />

      <FormField
        field="typeOfSendingPlatform"
        label="Type of Sending Platform"
        value={data.typeOfSendingPlatform}
        error={errors.typeOfSendingPlatform}
        onChange={onChange}
        control="select"
        options={SENDING_PLATFORMS}
      />

      <FormField
        field="sentDate"
        label="Document Sent Date"
        value={data.sentDate}
        error={errors.sentDate}
        onChange={onChange}
        type="date"
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
        field="effectiveDate"
        label="Effective Date"
        value={data.effectiveDate}
        error={errors.effectiveDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="executionDate"
        label="Execution / Signing Date"
        value={data.executionDate}
        error={errors.executionDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="executionTime"
        label="Execution / Signing Time"
        value={data.executionTime}
        error={errors.executionTime}
        onChange={onChange}
        type="time"
      />

      <FormField
        field="executionAmPm"
        label="AM / PM"
        value={data.executionAmPm}
        error={errors.executionAmPm}
        onChange={onChange}
        control="select"
        options={AM_PM_OPTIONS}
      />

      <FormField
        field="currentDate"
        label="Current / Document Date"
        value={data.currentDate}
        error={errors.currentDate}
        onChange={onChange}
        type="date"
      />
    </div>
  );
}
