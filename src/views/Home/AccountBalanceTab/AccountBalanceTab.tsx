import { useState } from "react";
import { useHomeViewModel } from "../../../viewmodels/useHomeViewModel";
import { formatToBRL } from "../../../utils/formatToBRL";
import { useAppContext } from "../../../hooks/useAppContext";
import "./AccountBalanceTab.css";
import { Eye, EyeOff } from "lucide-react";

export function AccountBalanceTab() {
  const { isLoading, lastUpdate } = useHomeViewModel();
  const { balance, profile } = useAppContext();

  const [hideBalance, setHideBalance] = useState(true);

  return (
    <>
      {isLoading ? (
        <div>Carregando...</div>
      ) : (
        <div>
          <h2>Olá, {profile?.name}</h2>
          <p>Veja como anda a saúde da sua conta bancária</p>

          <div
            style={{
              marginTop: 24,
              background: "#fff",
              borderRadius: 12,
              padding: 16,
              width: 320,
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <h3>Saldo em conta</h3>

              <button
                onClick={() => setHideBalance(!hideBalance)}
                className="icon-button"
                aria-label="Alternar visibilidade do saldo">
                {hideBalance ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {hideBalance ? (
              <div className="balance-bar" />
            ) : (
              <h2> {formatToBRL(Number(balance))}</h2>
            )}

            <p>Atualizado em {lastUpdate}</p>
            <p>
              Agência: <strong>{profile?.agency}</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
