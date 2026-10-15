const BUSINESS_TIME_ZONE = "Asia/Kolkata";

/** Return today's date in the agreement's business timezone as YYYY-MM-DD. */
export function getTodayDateString(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: BUSINESS_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);

  const part = (type: "year" | "month" | "day") =>
    parts.find((item) => item.type === type)?.value ?? "";

  return `${part("year")}-${part("month")}-${part("day")}`;
}

/** Return a calendar date a whole number of years before a YYYY-MM-DD date. */
export function getDateYearsAgo(dateValue: string, years: number): string {
  const [year, month, day] = dateValue.split("-").map(Number);

  if (!year || !month || !day || !Number.isInteger(years)) {
    return "";
  }

  const targetYear = year - years;
  const lastDayOfMonth = new Date(Date.UTC(targetYear, month, 0)).getUTCDate();
  const isLeapYear =
    targetYear % 4 === 0 && (targetYear % 100 !== 0 || targetYear % 400 === 0);
  const isLeapDayBirthdayBoundary = month === 3 && day === 1 && isLeapYear;
  const targetMonth = isLeapDayBirthdayBoundary ? 2 : month;
  const targetDay = isLeapDayBirthdayBoundary
    ? 29
    : Math.min(day, lastDayOfMonth);

  return `${targetYear}-${String(targetMonth).padStart(2, "0")}-${String(targetDay).padStart(2, "0")}`;
}

export function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function calculateAge(dateOfBirth: string, today = getTodayDateString()): number {
  const [birthYear, birthMonth, birthDay] = dateOfBirth.split("-").map(Number);
  const [currentYear, currentMonth, currentDay] = today.split("-").map(Number);

  let age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age -= 1;
  }

  return age;
}
