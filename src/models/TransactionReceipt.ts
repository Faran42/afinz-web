export type TransactionReceipt = {
  balance: string;
  status: "Aprovada" | "Em processamento";
  date: string;
  agency: number;
  account: number;
  value: string;
  yourAccount: number | undefined;
  yourAgency: number | undefined;
};
