const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** `"2024-10"` -> `"Oct 2024"`. A bare `"2024"` passes through unchanged. */
export const formatMonth = (value: string): string => {
  const [year, month] = value.split("-");
  const index = Number(month) - 1;
  return MONTHS[index] ? `${MONTHS[index]} ${year}` : year;
};

/** `"Oct 2024 — Mar 2025"`, or `"… — Present"` while ongoing. */
export const formatRange = (start: string, end: string | null): string =>
  `${formatMonth(start)} — ${end ? formatMonth(end) : "Present"}`;

const monthsSinceEpoch = (value: string): number => {
  const [year, month = "1"] = value.split("-");
  return Number(year) * 12 + (Number(month) - 1);
};

/** LinkedIn-style tenure, e.g. `"1 yr 6 mos"`. Rounds up so a part month counts. */
export const formatDuration = (start: string, end: string | null): string => {
  const to = end ? monthsSinceEpoch(end) : monthsSinceEpoch(currentMonth());
  const total = Math.max(1, to - monthsSinceEpoch(start) + 1);
  const years = Math.floor(total / 12);
  const months = total % 12;

  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ");
};

export const currentMonth = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
};

export const yearsSince = (year: number): number =>
  Math.max(0, new Date().getFullYear() - year);
