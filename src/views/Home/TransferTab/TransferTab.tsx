import { TransferForm } from "../../../components/TransferForm";
import { BalanceInfoCard } from "../../../components/BalanceInfoCard";
import { TransactionReceiptModal } from "../../../components/TransactionReceiptModal";
import "./TransferTab.css";
import { useTransferContext } from "../../../hooks/useTransferContext";

export const TransferTab = () => {
  const { isReceiptModalOpen, transactionReceipt, closeReceiptModal } =
    useTransferContext();

  return (
    <div className="transfer-tab">
      <TransferForm />
      <BalanceInfoCard />

      {isReceiptModalOpen && (
        <TransactionReceiptModal
          receipt={transactionReceipt}
          onClose={closeReceiptModal}
        />
      )}
    </div>
  );
};
