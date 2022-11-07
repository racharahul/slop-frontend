import axios from "axios";
const host = "https://tall-eggs-exist-122-172-193-93.loca.lt";
const api = axios.create({
  baseURL: `${host}/api`,
  headers: { "Bypass-Tunnel-Reminder": true, Authorization: "Bearer " },
  validateStatus: () => true,
});
export default api;
