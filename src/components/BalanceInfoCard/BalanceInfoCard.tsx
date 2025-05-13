import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import "./BalanceInfoCard.css";
import { formatToBRL } from "../../utils/formatToBRL";
import { useAppContext } from "../../hooks/useAppContext";

export const BalanceInfoCard = () => {
  const { balance } = useAppContext();
  const [showBalance, setShowBalance] = useState(false);

  const toggleBalance = () => {
    setShowBalance((prev) => !prev);
  };

  const formattedDate = new Date().toLocaleString();

  return (
    <div className="balance-card">
      <div className="card-header">
        <span className="card-title">Saldo em conta</span>
        <button
          onClick={toggleBalance}
          className="icon-button"
          aria-label="Alternar visibilidade do saldo">
          {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>

      {showBalance ? (
        <span className="balance-value">{formatToBRL(balance || 0)}</span>
      ) : (
        <div className="balance-bar" />
      )}

      <span className="card-info">Atualizado em {formattedDate}</span>
    </div>
  );
};
