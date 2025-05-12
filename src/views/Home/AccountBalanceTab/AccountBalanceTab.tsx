import React, { useState } from "react";
import { useHomeViewModel } from "../../../viewmodels/useHomeViewModel";

export function AccountBalanceTab() {
  const { name, balance, agency, lastUpdate } = useHomeViewModel();

  const [hideUserData, setHideUserData] = useState(true);

  return (
    <div>
      <h2>Bom dia, {name}</h2>
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

          {hideUserData ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={() => setHideUserData(!hideUserData)}>
              <path
                d="M17.6704 18.0124L21.4314 22M13.9644 19.5829C13.3281 19.7109 12.6714 19.7778 12.0001 19.7778C7.30755 19.7778 3.3354 16.5079 2 12C2.36354 10.7728 2.92249 9.63734 3.63818 8.63464L13.9644 19.5829ZM9.77646 9.64298C10.3454 9.03977 11.1314 8.66667 11.9996 8.66667C13.736 8.66667 15.1435 10.159 15.1435 12C15.1435 12.9204 14.7916 13.7538 14.2226 14.357L9.77646 9.64298ZM9.77646 9.64298L14.2226 14.357L9.77646 9.64298ZM9.77646 9.64298L6.32911 5.98796L9.77646 9.64298ZM14.2226 14.357L17.6704 18.0124L14.2226 14.357ZM2.56774 2L6.32911 5.98796L2.56774 2ZM6.32911 5.98796C7.96377 4.8706 9.91051 4.22222 12 4.22222C16.6925 4.22222 20.6647 7.49212 22 12C21.2592 14.5008 19.7069 16.6206 17.6704 18.0124L6.32911 5.98796Z"
                stroke="#313944"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              cursor="pointer"
              onClick={() => setHideUserData(!hideUserData)}>
              <path
                d="M2 12C3.33541 7.36329 7.30754 4 12 4C16.6924 4 20.6646 7.36333 22 12C20.6646 16.6367 16.6924 20 12 20C7.30753 20 3.33538 16.6367 2 12Z"
                stroke="#313944"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M15 12C15 13.6569 13.6568 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6568 9 15 10.3431 15 12Z"
                stroke="#313944"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          )}
        </div>
        <h2>R$ {balance}</h2>
        <p>Atualizado em {lastUpdate}</p>
        <p>
          Agência: <strong>{agency}</strong>
        </p>
      </div>
    </div>
  );
}
