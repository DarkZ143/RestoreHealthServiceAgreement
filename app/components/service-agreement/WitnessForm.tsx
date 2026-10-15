"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";

/*
 * Witness details appear only in the WITNESSES block of the
 * master DOCX, which applies to Part B (physical execution).
 *
 * They are optional and may be left blank for an agreement
 * that is executed electronically, so they are highlighted
 * only when a supplied value is in the wrong format.
 */
export default function WitnessForm({
  data,
  onChange,
  errors,
}: FieldSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="witness1Name"
        label="Witness 1 Name (optional)"
        value={data.witness1Name}
        error={errors.witness1Name}
        onChange={onChange}
        placeholder="Enter witness 1 full name"
      />

      <FormField
        field="witness2Name"
        label="Witness 2 Name (optional)"
        value={data.witness2Name}
        error={errors.witness2Name}
        onChange={onChange}
        placeholder="Enter witness 2 full name"
      />

      <FormField
        field="witness1Address"
        label="Witness 1 Address (optional)"
        value={data.witness1Address}
        error={errors.witness1Address}
        onChange={onChange}
        control="textarea"
        rows={3}
        placeholder="Enter witness 1 address"
      />

      <FormField
        field="witness2Address"
        label="Witness 2 Address (optional)"
        value={data.witness2Address}
        error={errors.witness2Address}
        onChange={onChange}
        control="textarea"
        rows={3}
        placeholder="Enter witness 2 address"
      />

      <FormField
        field="witness1Mobile"
        label="Witness 1 Mobile Number (optional)"
        value={data.witness1Mobile}
        error={errors.witness1Mobile}
        onChange={onChange}
        type="tel"
        inputMode="numeric"
        maxLength={10}
        digitsOnly
        placeholder="10-digit mobile number"
      />

      <FormField
        field="witness2Mobile"
        label="Witness 2 Mobile Number (optional)"
        value={data.witness2Mobile}
        error={errors.witness2Mobile}
        onChange={onChange}
        type="tel"
        inputMode="numeric"
        maxLength={10}
        digitsOnly
        placeholder="10-digit mobile number"
      />

      <FormField
        field="witness1Date"
        label="Witness 1 Date (optional)"
        value={data.witness1Date}
        error={errors.witness1Date}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="witness2Date"
        label="Witness 2 Date (optional)"
        value={data.witness2Date}
        error={errors.witness2Date}
        onChange={onChange}
        type="date"
      />
    </div>
  );
}
