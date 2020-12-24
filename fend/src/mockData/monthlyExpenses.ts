interface MonthlyExpenseFields {
  id: number;
  name: string;
  amountEstimated: number;
  amountActual: number | null;
}

export const monthlyExpenses: { [key: string]: MonthlyExpenseFields[] } = {
  "2020-12": [
    {
      id: 1,
      name: "Spotify subscription",
      amountEstimated: 4.99,
      amountActual: null,
    },
    {
      id: 2,
      name: "Rent",
      amountEstimated: 3600,
      amountActual: 3600,
    },
    {
      id: 3,
      name: "Utilities",
      amountEstimated: 150,
      amountActual: 148.5,
    },
  ],
};
