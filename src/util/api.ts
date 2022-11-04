import axios from "axios";
const api = axios.create({
  baseURL: "https://breezy-ends-pick-122-172-232-163.loca.lt/api",
  headers: { "Bypass-Tunnel-Reminder": true, Authorization: "Bearer " },
  validateStatus: () => true,
});
export default api;
