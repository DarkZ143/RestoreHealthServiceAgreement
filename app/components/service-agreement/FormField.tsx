"use client";

import type { ChangeEvent } from "react";

import type { ServiceAgreementData } from "@/app/types/service-agreement";
import type { FieldErrors } from "@/app/lib/validation/service-agreement";
import {
  getDateYearsAgo,
  getTodayDateString,
} from "@/app/lib/validation/dates";

export type { FieldErrors };

export interface FieldSectionProps {
  data: ServiceAgreementData;
  onChange: (field: keyof ServiceAgreementData, value: string) => void;
  onUpdate?: (updates: Partial<ServiceAgreementData>) => void;

  /**
   * Populated only after a failed submit. A field present here
   * is rendered in red together with its message.
   */
  errors: FieldErrors;
  lockedFields?: Partial<Record<keyof ServiceAgreementData, boolean>>;
}

interface SelectOption {
  value: string;
  label: string;
}

interface FormFieldProps {
  field: keyof ServiceAgreementData;
  label: string;
  value: string;
  error?: string;
  onChange: (field: keyof ServiceAgreementData, value: string) => void;

  control?: "input" | "textarea" | "select";
  type?: string;
  placeholder?: string;
  hint?: string;

  /** Rendered inside the control, e.g. the rupee sign. */
  prefix?: string;

  options?: SelectOption[];
  rows?: number;
  min?: string;
  max?: string;
  step?: string;
  maxLength?: number;
  inputMode?: "numeric" | "text";

  /**
   * Strips everything that is not a digit and truncates to
   * `maxLength` as the operator types.
   *
   * `maxLength` alone is not enough: the browser ignores it
   * for a pasted value on some inputs, and it does not stop
   * "+91 ", spaces or dashes from being entered.
   */
  digitsOnly?: boolean;
  disabled?: boolean;

  /** Grid helpers such as "md:col-span-2". */
  wrapperClassName?: string;
  inputClassName?: string;
}

const CONTROL_BASE =
  "w-full rounded-xl border bg-white text-sm text-slate-900 outline-none transition duration-150 placeholder:text-slate-400";

const CONTROL_VALID =
  "border-slate-200 shadow-sm hover:border-slate-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100/80";

/*
 * The invalid state has to survive next to the valid classes
 * above, so every property it overrides (border, background,
 * text and ring colour) is restated here.
 */
const CONTROL_INVALID =
  "border-rose-400 bg-rose-50/70 text-rose-950 placeholder:text-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-100";

function controlClassName(hasError: boolean, extra: string): string {
  return [
    CONTROL_BASE,
    extra,
    hasError ? CONTROL_INVALID : CONTROL_VALID,
  ].join(" ");
}

export default function FormField({
  field,
  label,
  value,
  error,
  onChange,
  control = "input",
  type = "text",
  placeholder,
  hint,
  prefix,
  options,
  rows = 3,
  min,
  max,
  step,
  maxLength,
  inputMode,
  digitsOnly = false,
  disabled = false,
  wrapperClassName = "",
  inputClassName,
}: FormFieldProps) {
  const hasError = Boolean(error);

  const today = type === "date" ? getTodayDateString() : undefined;
  const dateMin =
    type === "date" && field === "customerDateOfBirth"
      ? getDateYearsAgo(today ?? "", 150)
      : min;
  const dateMax =
    max ??
    (type === "date"
      ? field === "customerDateOfBirth"
        ? getDateYearsAgo(today ?? "", 18)
        : field === "validityDate"
          ? undefined
          : today
      : undefined);
  const visibleHint =
    hint ??
    (type === "date"
      ? field === "customerDateOfBirth"
        ? "Customer must be between 18 and 150 years old."
        : field === "validityDate"
          ? "Automatically set to one year after Issue Date."
          : "Future dates are not allowed."
      : undefined);

  const errorId = `${field}-error`;

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const raw = event.target.value;

    if (!digitsOnly) {
      onChange(field, raw);

      return;
    }

    const digits = raw.replace(/\D/g, "");

    onChange(field, maxLength ? digits.slice(0, maxLength) : digits);
  };

  /*
   * A prefixed control needs extra left padding so the text
   * does not run into the prefix glyph.
   */
  const padding = inputClassName ?? (prefix ? "py-3 pl-9 pr-3" : "px-3.5 py-3");

  const sharedProps = {
    id: field,
    value,
    onChange: handleChange,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
    disabled,
  };

  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={field}
        className={`mb-2 block text-[13px] font-semibold tracking-[0.01em] ${
          hasError ? "text-rose-800" : "text-slate-700"
        }`}
      >
        {label}
      </label>

      <div className={prefix ? "relative" : undefined}>
        {prefix ? (
          <span
            className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium ${
              hasError ? "text-rose-500" : "text-slate-500"
            }`}
          >
            {prefix}
          </span>
        ) : null}

        {control === "textarea" ? (
          <textarea
            {...sharedProps}
            rows={rows}
            placeholder={placeholder}
            className={controlClassName(
              hasError,
              `resize-y ${padding} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500`,
            )}
          />
        ) : null}

        {control === "select" ? (
          <select
            {...sharedProps}
            className={controlClassName(
              hasError,
              `${padding} ${hasError ? "" : "bg-white"} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500`,
            )}
          >
            {(options ?? []).map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : null}

        {control === "input" ? (
          <input
            {...sharedProps}
            type={type}
            lang={type === "time" ? "en-GB" : undefined}
            placeholder={placeholder}
            min={dateMin}
            max={dateMax}
            step={step}
            maxLength={maxLength}
            inputMode={inputMode}
            className={controlClassName(
              hasError,
              `${padding} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500`,
            )}
          />
        ) : null}
      </div>

      {hasError ? (
        <p
          id={errorId}
          className="mt-2 flex items-start gap-1.5 text-xs font-medium text-rose-700"
        >
          <span aria-hidden="true">{"\u26A0"}</span>
          {error}
        </p>
      ) : visibleHint ? (
        <p className="mt-2 text-xs leading-5 text-slate-500">{visibleHint}</p>
      ) : null}
    </div>
  );
}
