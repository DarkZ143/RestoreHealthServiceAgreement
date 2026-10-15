"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";

export default function CustomerForm({
  data,
  onChange,
  errors,
}: FieldSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="agreementNumber"
        label="Agreement Number"
        value={data.agreementNumber}
        error={errors.agreementNumber}
        onChange={onChange}
        placeholder="Enter agreement number"
      />

      <FormField
        field="customerName"
        label="Customer Name"
        value={data.customerName}
        error={errors.customerName}
        onChange={onChange}
        placeholder="Enter customer name"
      />

      <FormField
        field="customerAge"
        label="Customer Age"
        value={data.customerAge}
        error={errors.customerAge}
        onChange={onChange}
        type="number"
        min="18"
        max="150"
        step="1"
        placeholder="Enter customer age"
      />

      <FormField
        field="customerDateOfBirth"
        label="Date of Birth"
        value={data.customerDateOfBirth}
        error={errors.customerDateOfBirth}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="customerAadharLastFour"
        label="Aadhaar Last 4 Digits"
        value={data.customerAadharLastFour}
        error={errors.customerAadharLastFour}
        onChange={onChange}
        inputMode="numeric"
        maxLength={4}
        digitsOnly
        placeholder="XXXX"
      />

      <FormField
        field="customerPhone"
        label="Mobile Number"
        value={data.customerPhone}
        error={errors.customerPhone}
        onChange={onChange}
        type="tel"
        inputMode="numeric"
        maxLength={10}
        digitsOnly
        placeholder="Enter 10-digit mobile number"
      />

      <FormField
        field="customerMail"
        label="Email Address"
        value={data.customerMail}
        error={errors.customerMail}
        onChange={onChange}
        type="email"
        placeholder="customer@example.com"
      />

      <FormField
        field="customerPlace"
        label="Customer Place"
        value={data.customerPlace}
        error={errors.customerPlace}
        onChange={onChange}
        placeholder="Enter place"
      />

      <FormField
        field="customerDate"
        label="Customer Date"
        value={data.customerDate}
        error={errors.customerDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="fullAddressCustomer"
        label="Full Residential Address"
        value={data.fullAddressCustomer}
        error={errors.fullAddressCustomer}
        onChange={onChange}
        control="textarea"
        rows={3}
        placeholder="Enter complete residential address"
        wrapperClassName="md:col-span-2"
      />

      <FormField
        field="payerName"
        label="Payer Name"
        value={data.payerName}
        error={errors.payerName}
        onChange={onChange}
        placeholder="Enter payer name"
      />

      <FormField
        field="relationship"
        label="Relationship"
        value={data.relationship}
        error={errors.relationship}
        onChange={onChange}
        placeholder="e.g. Father, Mother, Spouse"
      />
    </div>
  );
}
