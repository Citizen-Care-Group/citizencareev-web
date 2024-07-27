// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://citizencareev-server-prod-negd46p6yq-el.a.run.app";

export const endpoints = {
  GET_PRODUCTS:BASE_URL+"/api/v1/products",
  GET_PRODUCTS_BY_TYPE: (type,speed) => BASE_URL+`/api/v1/products?type=${type}&speedType=${speed}`,
  GET_PRODUCT: (id) => BASE_URL + `/api/v1/products/${id}`,
  GET_IN_TOUCH:BASE_URL+"/api/v1/get-in-touch",
  CONTACT_US:BASE_URL+"/api/v1/get-in-touch",
  SAVING:(distance, id) => BASE_URL+`/api/v1/saving/${id}?km=${distance}`,
  GET_CAROUSAL2:BASE_URL+"/api/v1/slider-images",
  GET_NEWS:BASE_URL+"/api/v1/reports"
};
