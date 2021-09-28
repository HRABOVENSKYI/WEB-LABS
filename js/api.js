const BASE_URL = "http://localhost:3000/api/zoos";

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${BASE_URL}${urlPath}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

const getAllZoos = async () => {
  const rawResponse = await baseRequest({ method: "GET" });
  return await rawResponse.json();
};

const getZooById = async (id) => {
  const rawResponse = await baseRequest({ urlPath: `/${id}`, method: "GET" });
  return await rawResponse.json();
};

const searchZoos = async (key) => {
  const rawResponse = await baseRequest({
    urlPath: `?searchKey=${key}`,
    method: "GET",
  });
  return await rawResponse.json();
};

const postZoo = (body) => baseRequest({ method: "POST", body });

const deleteZoo = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });

const editZoo = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export { getAllZoos, searchZoos, postZoo, deleteZoo, editZoo, getZooById };
