import axiosInstance from "../config/axiosInstance";

export const loginRequest = (userData) => {
  return axiosInstance.post("api/auth/sign-in", userData);
};
