import axios from "axios";

const BASE_URL = "http://localhost:8088";

const baseAxios = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  timeout: 5000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `Method: ${config.method.toUpperCase()}\n` +
        `URL: ${BASE_URL}${config.url}\n` +
        `Params: ${JSON.stringify(config.params)}\n` +
        `Time: ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const authApi = {
  login: (email, password) =>
    baseAxios.post("/user/login", { email, password }),

  registration: ({ firstName, lastName, email, password }) =>
    baseAxios.post("/user/register", { firstName, lastName, email, password }),

  logout: () => baseAxios.post("/user/logout"),
};

export default authApi;
