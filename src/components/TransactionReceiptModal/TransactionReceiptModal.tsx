import { X } from "lucide-react";
import "./TransactionReceiptModal.css";
import type { TransactionReceipt } from "../../models/TransactionReceipt";

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
        <p>
          <strong>Novo Saldo</strong>
          <br />
          {receipt?.balance}
        </p>

        <p>
          <strong>Status</strong>
          <br />
          {receipt?.status}
        </p>
        <p>
          <strong>Data - Home</strong>
          <br />
          {receipt?.date}
        </p>
        <p>
          <strong>Agência</strong>
          <br />
          {receipt?.agency}
        </p>
        <p>
          <strong>Conta</strong>
          <br />
          {receipt?.account}
        </p>
        <p>
          <strong>Valor</strong>
          <br />
          {receipt?.value}
        </p>
        <p>
          <strong>Sua conta</strong>
          <br />
          {receipt?.yourAccount}
        </p>
        <p>
          <strong>Sua agência</strong>
          <br />
          {receipt?.yourAgency}
        </p>
      </div>
    </div>
  );
};
