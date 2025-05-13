import api from "../api/axios";

export const getProfile = async () => {
  try {
    const response = await api.get("/profile");
    console.log("profile data from api: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const getBalance = async () => {
  try {
    const response = await api.get("/balance");

    console.log("balance data from api: ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};

export const makeTransfer = async (payload: {
  agencia: string;
  conta: string;
  valor: number;
}) => {
  try {
    const response = await api.post("/transfer", payload);

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(" Error tranfering balance:", error);
    throw error;
  }
};
