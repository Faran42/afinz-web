import { createContext, useState } from "react";
import type { TransactionReceipt } from "../models/TransactionReceipt";

type TransferContextType = {
  isReceiptModalOpen: boolean;
  transactionReceipt: TransactionReceipt | null;
  showReceipt: (receipt: TransactionReceipt) => void;
  closeReceiptModal: () => void;
};

export const TransferContext = createContext<TransferContextType | undefined>(
  undefined
);

export const TransferProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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

  return (
    <TransferContext.Provider
      value={{
        isReceiptModalOpen,
        transactionReceipt,
        showReceipt,
        closeReceiptModal,
      }}>
      {children}
    </TransferContext.Provider>
  );
};
