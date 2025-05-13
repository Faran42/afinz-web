import { useEffect, useState } from "react";
import type { TransactionReceipt } from "../models/TransactionReceipt";

export const useTransferViewModel = () => {
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [transactionReceipt, setTransactionReceipt] =
    useState<TransactionReceipt | null>(null);

  const showReceipt = (receipt: TransactionReceipt) => {
    setTransactionReceipt(receipt);
    setIsReceiptModalOpen(true);
  };

  const closeReceiptModal = () => {
    setTransactionReceipt(null);
    setIsReceiptModalOpen(false);
  };

  return {
    isReceiptModalOpen,
    transactionReceipt,
    showReceipt,
    closeReceiptModal,
  };
};
