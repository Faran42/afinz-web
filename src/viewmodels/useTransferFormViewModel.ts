// src/viewmodels/useTransferViewModel.ts
import { useState } from "react";
import { consultAgencyAccount, makeTransfer } from "../services/bankService";
import { useAppContext } from "../hooks/useAppContext";
import { useUIContext } from "../hooks/useUIContext";
import { formatToBRL } from "../utils/formatToBRL";
import type { TransactionReceipt } from "../models/TransactionReceipt";
import type { TransferResponseDTO } from "../models/TrasnferResponseDTO";
import { useTransferContext } from "../hooks/useTransferContext";

export function useTransferFormViewModel() {
  const { balance, setBalance, profile } = useAppContext();
  const { setErrorMessage } = useUIContext();
  const { showReceipt } = useTransferContext();

  const [loading, setLoading] = useState(false);

  function userHasBalance(valor: number): boolean {
    if (!balance) return false;
    return valor <= balance;
  }

  async function isAccountValid(agency: number, account: number) {
    try {
      const response = await consultAgencyAccount(agency, account);
      return response;
    } catch (error) {
      setErrorMessage(
        "Erro, conta ou agência inválida, verifique os dados e tente novamente."
      );
      console.log("[checkIfAccountIsValid-error]");
      throw error;
    }
  }

  function parseTransferReceipt(raw: TransferResponseDTO): TransactionReceipt {
    return {
      balance: formatToBRL(balance - raw.value), //existe um bug aqui, que ainda não foi resolvido.
      status: raw.status === "APPROVED" ? "Aprovada" : "Em processamento",
      date: raw.dateTime,
      agency: raw.to.agency,
      account: raw.to.account,
      value: formatToBRL(raw.value),
      yourAgency: profile?.agency,
      yourAccount: profile?.account,
    };
  }

  const submitTransfer = async (formData: {
    agency: number;
    account: number;
    value: number;
  }) => {
    try {
      if (!balance) {
        throw new Error("Erro ao carregar saldo, atualize a página");
      }

      const { agency, account, value } = formData;
      const balanceCheck = userHasBalance(value);
      const accountCheck = await isAccountValid(agency, account);

      if (!balanceCheck) {
        throw new Error("Saldo insuficiente");
      }

      if (!accountCheck) {
        throw new Error("Conta inválida");
      }

      setLoading(true);
      const data = await makeTransfer(formData);

      const updatedBalance = balance - value;

      setBalance(updatedBalance);

      const dataParsed = parseTransferReceipt(data);

      showReceipt(dataParsed);
    } catch (error) {
      setErrorMessage(
        error.status === 500
          ? "Não foi possível realizar a transferência, tente novamente mais tarde"
          : error.status === 400
          ? "Dados inválidos, verifique os dados e tente novamente"
          : error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submitTransfer,
  };
}
