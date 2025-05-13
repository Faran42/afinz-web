import { X } from "lucide-react";
import "./TransactionReceiptModal.css";

type Props = {
  receipt: {
    balance: string;
    status: string;
    date: string;
    agency: string;
    account: string;
    value: string;
    yourAccount: string;
    yourAgency: string;
  };
  onClose: () => void;
};

export const TransactionReceiptModal = ({ receipt, onClose }: Props) => {
  return (
    <div className="receipt-modal">
      <button className="close-btn" onClick={onClose}>
        <X size={20} />
      </button>

      <h2>Novo Saldo</h2>
      <p className="balance">{receipt?.balance}</p>

      <div className="info">
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
