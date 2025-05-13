import { createContext, useState, type ReactNode } from "react";

type Profile = {
  name: string;
  agency: number;
  account: number;
};

interface AppContextType {
  balance: number | null;
  profile: Profile | null;
  setBalance: (value: number) => void;
  setProfile: (value: Profile) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  return (
    <AppContext.Provider value={{ balance, setBalance, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  );
};
