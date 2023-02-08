import axios from "axios";
const host = process.env.SLOP_API_URL || "http://localhost:8080";
const api = axios.create({
  baseURL: `${host}/api`,
  headers: { "Bypass-Tunnel-Reminder": true, Authorization: "Bearer " },
  validateStatus: () => true,
});
export default api;
