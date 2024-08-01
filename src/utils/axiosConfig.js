import axios, { isAxiosError, AxiosHeaders } from "axios";

const API_URL = import.meta.env.VITE_SERVER_URL;

export const apiRequester = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

const httpErrorHandler = (error) => {
  if (isAxiosError(error)) {
    console.error("Error message: ", error.message);
  } else {
    console.error("Unexpected error: ", error);
  }
  return Promise.reject(error);
};

const setRequestDefaultHeader = (requestConfig) => {
  const config = requestConfig;
  if (config.headers) {
    config.headers.set("Content-Type", "application/json;charset=utf-8");
  } else {
    config.headers = new AxiosHeaders();
    config.headers.set("Content-Type", "application/json;charset=utf-8");
  }
  return config;
};

apiRequester.interceptors.request.use(setRequestDefaultHeader, (error) =>
  Promise.reject(error)
);
apiRequester.interceptors.response.use(
  (response) => response,
  httpErrorHandler
);
