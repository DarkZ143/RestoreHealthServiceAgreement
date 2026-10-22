/** Format an amount with Indian digit grouping and two decimal places. */
export function formatIndianAmount(value: string): string {
  const normalized = value.trim().replace(/[₹,\s]/g, "");

  if (!normalized) return "";

  const amount = Number(normalized);
  if (!Number.isFinite(amount)) return value;

  return new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Render Aadhaar's final four digits without exposing earlier digits. */
export function maskAadhaar(lastFour: string): string {
  const digits = lastFour.trim();
  return digits ? `XXXX XXXX ${digits}` : "";
}
