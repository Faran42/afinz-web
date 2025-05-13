import { TransferForm } from "../../../components/TransferForm";
import { BalanceInfoCard } from "../../../components/BalanceInfoCard";
import { TransactionReceiptModal } from "../../../components/TransactionReceiptModal";
import { useTransferViewModel } from "../../../viewmodels/TransferViewModel";
import "./TransferTab.css";

export const TransferTab = () => {
  const {
    isReceiptModalOpen,
    transactionReceipt,
    showReceipt,
    closeReceiptModal,
  } = useTransferViewModel();
  return (
    <div className="transfer-tab">
      <TransferForm />
      <BalanceInfoCard />

      {isReceiptModalOpen && transactionReceipt && (
        <TransactionReceiptModal
          receipt={transactionReceipt}
          onClose={closeReceiptModal}
        />
      )}

      <TransactionReceiptModal
        receipt={transactionReceipt}
        onClose={closeReceiptModal}
      />
    </div>
  );
};
