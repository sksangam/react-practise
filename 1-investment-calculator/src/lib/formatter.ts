export const currencyFormatter = (amount: number, currencyCode: string) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const rupeeFormatter = (amount: number) => {
  return currencyFormatter(amount, "INR");
};
