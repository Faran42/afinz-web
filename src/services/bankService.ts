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
    return response.data;
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};

export const consultAgencyAccount = async (agency: number, account: number) => {
  try {
    const response = await api.get(
      `/consult-agency-account/${agency}/${account}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching agency-acount data:", error);
    throw error;
  }
};

export const makeTransfer = async (payload: {
  agency: number;
  account: number;
  value: number;
}) => {
  try {
    const response = await api.post("/transfer", payload);
    return response.data;
  } catch (error) {
    console.error(" Error tranfering balance:", error);
    throw error;
  }
};
