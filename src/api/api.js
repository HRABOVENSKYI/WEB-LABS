import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:8088";

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
  getZoos: (filters) =>
    baseAxios.get("/zoos", {
      params: {
        filters: filters,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    }),

  getZooTypes: () => baseAxios.get("/zoos/types"),

  createZoo: (zoo) =>
    baseAxios.post("/zoos", {
      name: zoo.name,
      numOfVisitors: zoo.numOfVisitors,
      numOfAnimals: zoo.numOfAnimals,
      type: zoo.type,
      entranceFee: zoo.entranceFee,
    }),

  editZoo: (zoo) =>
    baseAxios.put("/zoos", {
      id: zoo.id,
      name: zoo.name,
      numOfVisitors: zoo.numOfVisitors,
      numOfAnimals: zoo.numOfAnimals,
      type: zoo.type,
      entranceFee: zoo.entranceFee,
    }),

  deleteZoo: (id) => baseAxios.delete(`/zoos/${id}`),
};

export default zoosApi;
