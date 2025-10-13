import axios from "axios";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const API_DATABASE = import.meta.env.VITE_API_DATABASE;

export const api = axios.create({
  baseURL: `https://api.airtable.com/v0/${API_DATABASE}`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});
