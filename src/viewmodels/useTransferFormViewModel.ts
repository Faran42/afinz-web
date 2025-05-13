// src/viewmodels/useTransferViewModel.ts
import { useState } from "react";
import { getBalance, makeTransfer } from "../services/bankService";

export function useTransferViewModel() {
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [modalData, setModalData] = useState(null);

  const fetchBalance = async () => {
    try {
      setLoading(true);
      const data = await getBalance();
      setBalance(data.saldo);
    } finally {
      setLoading(false);
    }
  };

  const submitTransfer = async (formData: {
    agencia: string;
    conta: string;
    valor: number;
  }) => {
    try {
      setLoading(true);
      const data = await makeTransfer(formData);
      setModalData(data); // ou tratar para exibir no modal
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    balance,
    modalData,
    fetchBalance,
    submitTransfer,
  };
}
