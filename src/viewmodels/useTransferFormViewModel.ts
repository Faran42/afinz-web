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
  const [loading, setLoading] = useState(false);
  const { showReceipt } = useTransferContext();

  //Essa função seria usada para validar se o usuário tem saldo suficiente para transferir,
  // contúdo, como o valor será gerenciado apenas na aplicação, essa função acaba não fazendo sentido
  // nesse contexto, o que não é uma prática recomendável, pois, o saldo é um dado sensível,
  // e por segurança deveria ser sempre validado com o backend antes de qualquer transferência

  // const fetchBalance = async () => {
  //   try {
  //     setLoading(true);
  //     const data = await getBalance();
  //     setBalance(data.saldo);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  function userHasBalance(valor: number): boolean {
    if (!balance) return false;
    return valor <= balance;
  }

  async function isAccountValid(agency: number, account: number) {
    try {
      const response = await consultAgencyAccount(agency, account);
      return response;
    } catch (error) {
      console.log("[checkIfAccountIsValid-error]", error);
      throw error;
    }
  }

  function parseTransferReceipt(raw: TransferResponseDTO): TransactionReceipt {
    return {
      balance: formatToBRL(balance),
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
      console.log("[submitTransfer-error]", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    submitTransfer,
  };
}
