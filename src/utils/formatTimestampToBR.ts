export function formatTimestampToBR(ts: number) {
  const d = new Date(ts);

  const pad = (n: number) => String(n).padStart(2, "0");

  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  const hour = pad(d.getHours());
  const min = pad(d.getMinutes());

  return `${day}/${month}/${year} - ${hour}:${min}`;
}
