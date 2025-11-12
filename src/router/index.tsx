import { BASE_URL } from "@/env";

const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

export const ROUTER = {
  MAIN: '',
  HOME: () => window.location.href = window.location.origin + BASE_URL,
  LOGIN: () => window.location.href = LOGIN_URL
};
