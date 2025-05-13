import { useState, useEffect } from "react";
import { getBalance, getProfile } from "../services/bankService";
import { useAppContext } from "../hooks/useAppContext";

export function useHomeViewModel() {
  const { balance, profile, setBalance, setProfile } = useAppContext();

  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingBalance, setLoadingBalance] = useState(false);

  const [lastUpdate, setLastUpdate] = useState<string | null>(null); //pegar data atual mais tarde

  const isLoading = loadingProfile || loadingBalance;

  const fetchProfile = async () => {
    setLoadingProfile(true);
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchBalance = async () => {
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
