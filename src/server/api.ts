import axios from "axios";

export const api = axios.create({
  baseURL: "https://pass-in-api-lyart.vercel.app",
});
