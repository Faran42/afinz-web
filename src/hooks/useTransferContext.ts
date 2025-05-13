import { useContext } from "react";
import { TransferContext } from "../contexts/TransferContext";

export const useTransferContext = () => {
  const context = useContext(TransferContext);
  if (!context) {
    throw new Error(
      "useTransferContext deve estar dentro de um TransferProvider"
    );
  }
  return context;
};
