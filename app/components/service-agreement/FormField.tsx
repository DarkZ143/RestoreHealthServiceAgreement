"use client";

import type { ChangeEvent } from "react";

import type { ServiceAgreementData } from "@/app/types/service-agreement";
import type { FieldErrors } from "@/app/lib/validation/service-agreement";

export type { FieldErrors };

export interface FieldSectionProps {
  data: ServiceAgreementData;
  onChange: (field: keyof ServiceAgreementData, value: string) => void;

  /**
   * Populated only after a failed submit. A field present here
   * is rendered in red together with its message.
   */
  errors: FieldErrors;
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

  /** Grid helpers such as "md:col-span-2". */
  wrapperClassName?: string;
  inputClassName?: string;
}

const CONTROL_BASE =
  "w-full rounded-lg border text-sm outline-none transition";

const CONTROL_VALID =
  "border-gray-300 text-gray-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100";

/*
 * The invalid state has to survive next to the valid classes
 * above, so every property it overrides (border, background,
 * text and ring colour) is restated here.
 */
const CONTROL_INVALID =
  "border-red-500 bg-red-50 text-red-900 placeholder-red-400 focus:border-red-600 focus:ring-2 focus:ring-red-200";

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
  step,
  maxLength,
  inputMode,
  digitsOnly = false,
  wrapperClassName = "",
  inputClassName,
}: FormFieldProps) {
  const hasError = Boolean(error);

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
  const padding = inputClassName ?? (prefix ? "py-2.5 pl-8 pr-3" : "px-3 py-2.5");

  const sharedProps = {
    id: field,
    value,
    onChange: handleChange,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
  };

  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={field}
        className={`mb-1.5 block text-sm font-medium ${
          hasError ? "text-red-700" : "text-gray-700"
        }`}
      >
        {label}
      </label>

      <div className={prefix ? "relative" : undefined}>
        {prefix ? (
          <span
            className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm ${
              hasError ? "text-red-500" : "text-gray-500"
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
            className={controlClassName(hasError, `resize-y ${padding}`)}
          />
        ) : null}

        {control === "select" ? (
          <select
            {...sharedProps}
            className={controlClassName(
              hasError,
              `${padding} ${hasError ? "" : "bg-white"}`,
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
            placeholder={placeholder}
            min={min}
            step={step}
            maxLength={maxLength}
            inputMode={inputMode}
            className={controlClassName(hasError, padding)}
          />
        ) : null}
      </div>

      {hasError ? (
        <p
          id={errorId}
          className="mt-1.5 flex items-start gap-1 text-xs font-semibold text-red-600"
        >
          <span aria-hidden="true">⚠</span>
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
      ) : null}
    </div>
  );
}
