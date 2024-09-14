import axios, { AxiosResponse, AxiosError } from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export type { AxiosResponse, AxiosError };
export default http;
