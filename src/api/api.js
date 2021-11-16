import axios from "axios";

const BASE_URL = "http://localhost:8080";

const baseAxios = axios.create({
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

const zoosApi = {
  getZoos: () => baseAxios.get("/zoos"),
};

export default zoosApi;
