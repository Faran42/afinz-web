import { useUIContext } from "../hooks/useUIContext";
import { ErrorModal } from "../components/ErrorModal";

export function GlobalUIHandler() {
  const { errorMessage, clearError } = useUIContext();

  return (
    <>
      {errorMessage && (
        <ErrorModal message={errorMessage} onClose={clearError} />
      )}
    </>
  );
}
