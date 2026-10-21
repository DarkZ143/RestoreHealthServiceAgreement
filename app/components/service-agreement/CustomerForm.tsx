"use client";

import { useEffect, useState } from "react";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldErrors } from "@/app/components/service-agreement/FormField";
import type {
  AgreementClient,
  AgreementClientLoadState,
} from "@/app/types/agreement-client";
import type { ServiceAgreementData } from "@/app/types/service-agreement";

interface CustomerFormProps {
  data: ServiceAgreementData;
  onChange: (field: keyof ServiceAgreementData, value: string) => void;
  errors: FieldErrors;
  clients: AgreementClient[];
  selectedClient: AgreementClient | null;
  clientsLoadState: AgreementClientLoadState;
  clientLoadMessage: string;
  onSelectClient: (clientId: string) => void;
}

export default function CustomerForm({
  data,
  onChange,
  errors,
  clients,
  selectedClient,
  clientsLoadState,
  clientLoadMessage,
  onSelectClient,
}: CustomerFormProps) {
  const [searchText, setSearchText] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const locked = (clientValue: string) => Boolean(selectedClient && clientValue);
  const normalizedSearch = searchText.trim().toLocaleLowerCase();
  const matchingClients = clients.filter((client) =>
    `${client.name} ${client.phone}`
      .toLocaleLowerCase()
      .includes(normalizedSearch),
  );

  useEffect(() => {
    setSearchText(selectedClient?.name ?? "");
  }, [selectedClient]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
      <aside className="h-fit rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Search client</h3>
            <p className="mt-1 text-xs leading-5 text-slate-600">
              Search and select from all clients.
            </p>
          </div>
          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-emerald-800 ring-1 ring-emerald-100">
            {clientsLoadState === "ready" ? clients.length : "—"}
          </span>
        </div>

        <label
          htmlFor="client-search"
          className="mb-2 block text-[13px] font-semibold text-slate-700"
        >
          Client name
        </label>
        <input
          id="client-search"
          type="search"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isSearchOpen && matchingClients.length > 0}
          aria-controls="client-search-results"
          autoComplete="off"
          placeholder={
            clientsLoadState === "loading"
              ? "Loading clients..."
              : "Type a client name"
          }
          value={searchText}
          onFocus={() => setIsSearchOpen(true)}
          onBlur={() => window.setTimeout(() => setIsSearchOpen(false), 120)}
          onChange={(event) => {
            setSearchText(event.target.value);
            setIsSearchOpen(true);
          }}
          disabled={clientsLoadState !== "ready" || clients.length === 0}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
        />

        {selectedClient ? (
          <button
            type="button"
            onClick={() => {
              setSearchText("");
              setIsSearchOpen(true);
              onSelectClient("");
            }}
            className="mt-2 text-xs font-semibold text-emerald-800 underline underline-offset-2"
          >
            Clear selected client
          </button>
        ) : null}

        {isSearchOpen && clientsLoadState === "ready" ? (
          <div
            id="client-search-results"
            role="listbox"
            className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
          >
            {matchingClients.length ? (
              matchingClients.map((client) => (
                <button
                  key={client.id}
                  type="button"
                  role="option"
                  aria-selected={selectedClient?.id === client.id}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setSearchText(client.name);
                    setIsSearchOpen(false);
                    onSelectClient(client.id);
                  }}
                  className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-emerald-50 focus:bg-emerald-50 focus:outline-none"
                >
                  <span className="min-w-0 truncate text-sm font-medium text-slate-900">
                    {client.name}
                  </span>
                  <span className="shrink-0 text-xs text-slate-500">
                    {client.phone || "No mobile number"}
                  </span>
                </button>
              ))
            ) : (
              <p className="px-3 py-3 text-sm text-slate-500">
                No matching clients.
              </p>
            )}
          </div>
        ) : null}

        <p
          aria-live="polite"
          className={`mt-3 text-xs leading-5 ${
            clientsLoadState === "unavailable"
              ? "text-amber-800"
              : "text-slate-500"
          }`}
        >
          {clientsLoadState === "loading"
            ? "Connecting to the client list."
            : clientsLoadState === "unavailable"
              ? clientLoadMessage || "Connect Firestore to load client records."
              : selectedClient
                ? "Name, mobile, email, date of birth, and address are filled from Firestore and locked when present."
                : clients.length === 0
                  ? "No clients were found."
                  : "All client records are available. Search by name or mobile number."}
        </p>
      </aside>

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
          disabled={locked(selectedClient?.name ?? "")}
          placeholder="Enter customer name"
        />

        <FormField
          field="customerAge"
          label="Customer Age"
          value={data.customerAge}
          error={errors.customerAge}
          onChange={onChange}
          disabled={locked(selectedClient?.age ?? "")}
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
          disabled={locked(selectedClient?.dateOfBirth ?? "")}
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
          disabled={locked(selectedClient?.phone ?? "")}
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
          disabled={locked(selectedClient?.email ?? "")}
          type="email"
          placeholder="customer@example.com"
          hint={
            selectedClient?.email
              ? "Loaded from the selected Firestore client and locked."
              : undefined
          }
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
          label="Invoice Date / Customer Date"
          value={data.customerDate}
          error={errors.customerDate}
          onChange={onChange}
          type="date"
          hint="This invoice date is also used for Effective, Execution, and Current Document dates, and fills Document Sent Date by default."
        />

        <FormField
          field="fullAddressCustomer"
          label="Full Residential Address"
          value={data.fullAddressCustomer}
          error={errors.fullAddressCustomer}
          onChange={onChange}
          disabled={locked(selectedClient?.address ?? "")}
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
          disabled
          hint="Automatically set to the customer name."
        />

        <FormField
          field="relationship"
          label="Relationship"
          value={data.relationship}
          error={errors.relationship}
          onChange={onChange}
          disabled
          hint="Fixed as Self."
        />
      </div>
    </div>
  );
}
