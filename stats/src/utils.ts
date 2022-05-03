export function dateStringToDate(date: string): Date {
  const [day, month, year] = date.split('/').map((item) => parseInt(item));

  return new Date(year, month - 1, day);
}
