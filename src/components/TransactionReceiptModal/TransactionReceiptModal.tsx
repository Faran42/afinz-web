import { X } from "lucide-react";
import "./TransactionReceiptModal.css";
import type { TransactionReceipt } from "../../models/TransactionReceipt";
import { formatTimestampToBR } from "../../utils/formatTimestampToBR";

type Props = {
  receipt: TransactionReceipt;
  onClose: () => void;
};

export const TransactionReceiptModal = ({ receipt, onClose }: Props) => {
  return (
    <div className="receipt-modal">
      <button className="close-btn" onClick={onClose}>
        <X size={20} />
      </button>

      <div className="info">
        <strong>Novo Saldo</strong>

        <p>{receipt?.balance}</p>

        <strong>Status</strong>

        <p>{receipt?.status}</p>

        <strong>Data - Home</strong>
        <p>{formatTimestampToBR(receipt?.date)}</p>

        <strong>Agência</strong>
        <p>{receipt?.agency}</p>
        <strong>Conta</strong>
        <p>{receipt?.account}</p>
        <strong>Valor</strong>
        <p>{receipt?.value}</p>
        <strong>Sua conta</strong>
        <p>{receipt?.yourAccount}</p>
        <strong>Sua agência</strong>
        <p>{receipt?.yourAgency}</p>
      </div>
    </div>
  );
};
