import axios from "axios";
import { cookies } from "next/headers";
const APP_API: string | undefined = process.env.NEXT_PUBLIC_APP_API_URL;
const cookieStore = cookies();
const instance = axios.create({
  baseURL: APP_API,
  timeout: 10000,
  headers: {},
});

instance.interceptors.request.use(
  (config) => {
    // const token = handleToken()
    const access_token   = cookieStore.get("token");
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;