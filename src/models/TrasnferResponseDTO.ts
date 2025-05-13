export type TransferResponseDTO = {
  status: "APPROVED" | "REJECTED";
  dateTime: string;
  to: {
    agency: number;
    account: number;
  };
  value: number;
};
