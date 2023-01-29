import axios from "axios";

const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "34ace716e639973b381f7886b6a7cec7";

export const api = axios.create({
  baseURL: API_BASE,
  params: {
    api_key: API_KEY,
  },
});
