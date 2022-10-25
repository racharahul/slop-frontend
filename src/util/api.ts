import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Bypass-Tunnel-Reminder": true, Authorization: "Bearer " },
  validateStatus: () => true,
});
export default api;
