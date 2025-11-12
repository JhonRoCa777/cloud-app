import { SwalHelper } from "@/helpers";
import { ROUTER } from "@/router";
import axios, { AxiosError } from "axios";

const BASE_API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Interceptor de salida (request)
BASE_API.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Interceptor de entrada (response)
BASE_API.interceptors.response.use(
  
  (response) => response.data,

  async (error: AxiosError<any>) => {

    const status = error?.response?.status;
    const data = error?.response?.data;

    switch (status) {
      case 400: // MOSTRAR
        SwalHelper.error(data);
        break;
      case 422: // MOSTRAR - JSON
        SwalHelper.error(JSON.stringify(data));
        break;
      case 401: // IR A HOME
        SwalHelper.timer(data, ROUTER.HOME);
        break;
      case 403: // IR A LOGIN
        //SwalHelper.timer(data, ROUTER.LOGIN);
        break;
      default:
        SwalHelper.error('Comunícate con SISTEMAS');
        break;
    }

    return Promise.reject(error);
  }
);

export default BASE_API;
