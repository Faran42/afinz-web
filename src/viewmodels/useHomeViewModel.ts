import { useState, useEffect } from "react";
import { getBalance, getProfile } from "../services/bankService";
import { useAppContext } from "../hooks/useAppContext";
import { useUIContext } from "../hooks/useUIContext";

export function useHomeViewModel() {
  const { balance, profile, setBalance, setProfile } = useAppContext();
  const { setErrorMessage } = useUIContext();

  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);

  const [lastUpdate, setLastUpdate] = useState<string | null>(null); //pegar data atual mais tarde

  const isLoading = loadingProfile || loadingBalance;

  const fetchProfile = async () => {
    if (profile !== null) return; //evita sobreescrever o estado, caso já tenha sido carregado
    setLoadingProfile(true);
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      setErrorMessage(error.message || "Erro ao realizar a transferência");
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchBalance = async () => {
    if (balance !== null) return; //evita sobreescrever o estado, caso já tenha sido carregado

    setLoadingBalance(true);
    try {
      const data = await getBalance();
      setBalance(data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoadingBalance(false);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchBalance();
    setLastUpdate(new Date().toLocaleString() || null);
  }, []);

  return {
    profile,
    balance,
    lastUpdate,
    isLoading,
  };
}
