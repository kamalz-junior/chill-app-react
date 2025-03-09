export function formatCurrency(price, currency) {
  return new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(price);
}
