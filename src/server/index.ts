import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://dry-bastion-76988.herokuapp.com/api/v1",
};

export const api: AxiosInstance = axios.create(config);
