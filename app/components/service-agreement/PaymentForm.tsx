"use client";

import FormField from "@/app/components/service-agreement/FormField";
import type { FieldSectionProps } from "@/app/components/service-agreement/FormField";
import { getTodayDateString } from "@/app/lib/validation/dates";

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
  onUpdate,
  errors,
}: FieldSectionProps) {
  const additionalTransactions = data.additionalTransactions ?? [];
  const today = getTodayDateString();

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <FormField
        field="utr"
        label="Transaction 1 UTR"
        value={data.utr}
        error={errors.utr}
        onChange={onChange}
        placeholder="Enter payment reference / UTR"
      />

      <FormField
        field="paymentDate"
        label="Transaction 1 Date"
        value={data.paymentDate}
        error={errors.paymentDate}
        onChange={onChange}
        type="date"
      />

      <FormField
        field="paymentTime"
        label="Transaction 1 Time"
        value={data.paymentTime}
        error={errors.paymentTime}
        onChange={onChange}
        type="time"
      />

      <FormField
        field="paymentMode"
        label="Transaction 1 Payment Mode"
        value={data.paymentMode}
        error={errors.paymentMode}
        onChange={onChange}
        control="select"
        options={PAYMENT_MODES}
      />

      <section className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Additional transactions
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              Add up to two more. Each transaction has its own date, time, UTR, and payment mode.
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              onUpdate?.({
                additionalTransactions: [
                  ...additionalTransactions,
                  { date: "", time: "", utr: "", paymentMode: "" },
                ],
              })
            }
            disabled={!onUpdate || additionalTransactions.length >= 2}
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span aria-hidden="true" className="text-lg leading-none">+</span>
            Add transaction
          </button>
        </div>

        {additionalTransactions.map((transaction, index) => {
          const transactionNumber = index + 2;
          const dateId = `transaction-${transactionNumber}-date`;
          const timeId = `transaction-${transactionNumber}-time`;
          const utrId = `transaction-${transactionNumber}-utr`;
          const paymentModeId = `transaction-${transactionNumber}-payment-mode`;

          return (
            <fieldset
              key={transactionNumber}
              className="mb-3 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-3 md:grid-cols-2 md:items-end"
            >
              <legend className="px-1 text-xs font-semibold text-slate-600">
                Transaction {transactionNumber}
              </legend>
              <div>
                <label
                  htmlFor={dateId}
                  className="mb-2 block text-[13px] font-semibold text-slate-700"
                >
                  Transaction {transactionNumber} Date
                </label>
                <input
                  id={dateId}
                  type="date"
                  value={transaction.date}
                  max={today}
                  onChange={(event) =>
                    onUpdate?.({
                      additionalTransactions: additionalTransactions.map(
                        (item, itemIndex) =>
                          itemIndex === index
                            ? { ...item, date: event.target.value }
                            : item,
                      ),
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/80"
                />
              </div>
              <div>
                <label
                  htmlFor={timeId}
                  className="mb-2 block text-[13px] font-semibold text-slate-700"
                >
                  Transaction {transactionNumber} Time
                </label>
                <input
                  id={timeId}
                  type="time"
                  lang="en-GB"
                  value={transaction.time}
                  onChange={(event) =>
                    onUpdate?.({
                      additionalTransactions: additionalTransactions.map(
                        (item, itemIndex) =>
                          itemIndex === index
                            ? { ...item, time: event.target.value }
                            : item,
                      ),
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/80"
                />
              </div>
              <div>
                <label
                  htmlFor={utrId}
                  className="mb-2 block text-[13px] font-semibold text-slate-700"
                >
                  Transaction {transactionNumber} UTR
                </label>
                <input
                  id={utrId}
                  type="text"
                  value={transaction.utr}
                  onChange={(event) =>
                    onUpdate?.({
                      additionalTransactions: additionalTransactions.map(
                        (item, itemIndex) =>
                          itemIndex === index
                            ? { ...item, utr: event.target.value }
                            : item,
                      ),
                    })
                  }
                  placeholder={`Enter transaction ${transactionNumber} UTR`}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/80"
                />
              </div>
              <div>
                <label
                  htmlFor={paymentModeId}
                  className="mb-2 block text-[13px] font-semibold text-slate-700"
                >
                  Transaction {transactionNumber} Payment Mode
                </label>
                <select
                  id={paymentModeId}
                  value={transaction.paymentMode}
                  onChange={(event) =>
                    onUpdate?.({
                      additionalTransactions: additionalTransactions.map(
                        (item, itemIndex) =>
                          itemIndex === index
                            ? { ...item, paymentMode: event.target.value }
                            : item,
                      ),
                    })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/80"
                >
                  {PAYMENT_MODES.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() =>
                  onUpdate?.({
                    additionalTransactions: additionalTransactions.filter(
                      (_, itemIndex) => itemIndex !== index,
                    ),
                  })
                }
                className="justify-self-start rounded-lg px-3 py-2 text-sm font-medium text-rose-700 hover:bg-rose-50 md:justify-self-end"
                aria-label={`Remove transaction ${transactionNumber}`}
              >
                Remove
              </button>
            </fieldset>
          );
        })}

        {errors.additionalTransactions ? (
          <p className="mt-2 text-sm text-rose-700" role="alert">
            {errors.additionalTransactions}
          </p>
        ) : null}
      </section>

      <FormField
        field="payee"
        label="Payee"
        value={data.payee}
        error={errors.payee}
        onChange={onChange}
        disabled
        hint="Automatically set to the customer name."
        wrapperClassName="md:col-span-2"
      />
    </div>
  );
}
