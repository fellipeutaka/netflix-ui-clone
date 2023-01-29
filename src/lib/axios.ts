import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

if (!API_BASE) {
  throw new Error("Missing VITE_API_BASE in .env");
}

if (!API_TOKEN) {
  throw new Error("Missing VITE_API_BASE in .env");
}

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
