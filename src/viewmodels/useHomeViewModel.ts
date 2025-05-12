import { useState, useEffect } from "react";

export function useHomeViewModel() {
  const [name, setName] = useState("Fulano");
  const [balance, setBalance] = useState("1.250,00");
  const [agency, setAgency] = useState("001");
  const [lastUpdate, setLastUpdate] = useState("11/05/2025 às 15:42");

  useEffect(() => {
    // Aqui entraria a chamada para a API para buscar os dados
    // Exemplo fictício para simular os dados
    setTimeout(() => {
      setName("Ana Paula");
      setBalance("3.150,99");
      setAgency("234");
      setLastUpdate("11/05/2025 às 17:05");
    }, 1000);
  }, []);

  return {
    name,
    balance,
    agency,
    lastUpdate,
  };
}
