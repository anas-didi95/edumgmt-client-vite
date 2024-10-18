import axios from "axios";

export const useAxios = (contextPath: string, basePath: string = "") => {
  const instance = axios.create({
    baseURL: `${contextPath}${basePath}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${import.meta.env.VITE_APP_EDUMGMT_DEV_TOKEN}`;
      return config;
    },
    (error) => {
      console.error("[useAxios] Request error!", error);
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.error("[useAxios] Response error!", error);
      return Promise.reject(error);
    },
  );

  return instance;
};
