import { createContext, useState } from "react";

interface UIContextType {
  errorMessage: string | null;
  showError: (msg: string) => void;
  setErrorMessage: (msg: string) => void;
  clearError: () => void;
}

export const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showError = (msg: string) => setErrorMessage(msg);
  const clearError = () => setErrorMessage(null);

  return (
    <UIContext.Provider
      value={{ errorMessage, setErrorMessage, showError, clearError }}>
      {children}
    </UIContext.Provider>
  );
};
