export function parseBRDate(dateStr: string): string | null {
  const [day, month, year] = dateStr.split("/").map(Number);
  const parsedDate = new Date(year, month - 1, day);
  return isNaN(parsedDate.getTime()) ? null : parsedDate.toLocaleDateString();
}
