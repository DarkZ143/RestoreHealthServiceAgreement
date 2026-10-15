"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";

const PAYMENT_MODES = [
  { value: "", label: "Select payment mode" },
  { value: "UPI", label: "UPI" },
  { value: "NEFT", label: "NEFT" },
  { value: "RTGS", label: "RTGS" },
  { value: "IMPS", label: "IMPS" },
  { value: "Bank Transfer", label: "Bank Transfer" },
  { value: "Debit Card", label: "Debit Card" },
  { value: "Credit Card", label: "Credit Card" },
  { value: "Other", label: "Other" },
];

export default function PaymentForm({
  data,
  onChange,
  errors,
}: FieldSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="utr"
        label="Payment Reference / UTR"
        value={data.utr}
        error={errors.utr}
        onChange={onChange}
        placeholder="Enter payment reference / UTR"
      />

      <FormField
        field="paymentDate"
        label="Payment Date"
        value={data.paymentDate}
        error={errors.paymentDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="paymentTime"
        label="Payment Time"
        value={data.paymentTime}
        error={errors.paymentTime}
        onChange={onChange}
        type="time"
      />

      <FormField
        field="paymentMode"
        label="Payment Mode"
        value={data.paymentMode}
        error={errors.paymentMode}
        onChange={onChange}
        control="select"
        options={PAYMENT_MODES}
      />

      <FormField
        field="payee"
        label="Payee"
        value={data.payee}
        error={errors.payee}
        onChange={onChange}
        placeholder="Enter payee name"
        hint="Enter the payee exactly as applicable to the official payment record."
        wrapperClassName="md:col-span-2"
      />
    </div>
  );
}
