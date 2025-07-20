import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.mapog.xyz",
  headers: { "Content-Type": "application/json" },
});

export const login = (credentials) => API.post("/auth/login", credentials);
export const register = (data) => API.post("/auth/register", data);
export const fetchSchools = () => API.get("/schools");

export default API;
