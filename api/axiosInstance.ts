import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://leave-mng-node.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
