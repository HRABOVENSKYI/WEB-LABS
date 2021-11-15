import axios from "axios";
import qs from "qs";

const baseAxios = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

baseAxios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().toLocaleString()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const zoosApi = {
  getZoos: (params) =>
    baseAxios.get("/zoos", {
      params: {
        ...params,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params);
      },
    }),
};

export default zoosApi;
