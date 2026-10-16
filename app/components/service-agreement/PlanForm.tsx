"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";

const PLAN_OPTIONS = [
  { value: "", label: "Select plan" },
  { value: "Custom", label: "Custom" },
  { value: "2A", label: "2A" },
  { value: "2C", label: "2C" },
  { value: "2A+2C", label: "2A+2C" },
  { value: "Other", label: "Other (type)" },
];

export default function PlanForm({
  data,
  onChange,
  errors,
}: FieldSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="planName"
        label="Plan Name"
        value={data.planName}
        error={errors.planName}
        onChange={onChange}
        control="select"
        options={PLAN_OPTIONS}
      />

      {data.planName === "Other" ? (
        <FormField
          field="planNameOther"
          label="Other Plan Name"
          value={data.planNameOther}
          error={errors.planNameOther}
          onChange={onChange}
          placeholder="Type the plan name"
          wrapperClassName="md:col-span-2"
        />
      ) : null}

      <FormField
        field="planNumber"
        label="Plan Number"
        value={data.planNumber}
        error={errors.planNumber}
        onChange={onChange}
        placeholder="Enter plan number"
      />

      <FormField
        field="issueDate"
        label="Issue Date"
        value={data.issueDate}
        error={errors.issueDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="validityDate"
        label="Validity Date"
        value={data.validityDate}
        error={errors.validityDate}
        onChange={onChange}
        type="date"
        min={data.issueDate || undefined}
        disabled
        hint="Automatically set to one year after the Issue Date."
      />

      <FormField
        field="feesWithoutTax"
        label="Fees (Excluding Taxes)"
        value={data.feesWithoutTax}
        error={errors.feesWithoutTax}
        onChange={onChange}
        type="number"
        min="0"
        step="0.01"
        prefix={String.fromCodePoint(0x20b9)}
        placeholder="0.00"
      />

      <FormField
        field="tax"
        label="Taxes"
        value={data.tax}
        error={errors.tax}
        onChange={onChange}
        type="number"
        min="0"
        step="0.01"
        prefix={String.fromCodePoint(0x20b9)}
        placeholder="0.00"
      />

      <FormField
        field="totalPayable"
        label="Total Amount Payable"
        value={data.totalPayable}
        error={errors.totalPayable}
        onChange={onChange}
        type="number"
        min="0"
        step="0.01"
        prefix={String.fromCodePoint(0x20b9)}
        placeholder="0.00"
        inputClassName="py-2.5 pl-8 pr-3 font-medium"
        hint="Total amount payable can be calculated from Fees + Taxes."
        wrapperClassName="md:col-span-2"
      />
    </div>
  );
}
