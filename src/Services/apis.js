// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://citizencareev-server-prod-negd46p6yq-el.a.run.app";

export const endpoints = {
  GET_PRODUCTS:BASE_URL+"/api/v1/products",
  GET_PRODUCT: (id) => BASE_URL + `/api/v1/products/${id}`,
  GET_IN_TOUCH:BASE_URL+"/api/v1/get-in-touch"
};
