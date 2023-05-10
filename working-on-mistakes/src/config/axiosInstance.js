import axios from "axios";

const BASE_URL = "http://ec2-3-121-202-47.eu-central-1.compute.amazonaws.com/";

const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // getStore().state.token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
