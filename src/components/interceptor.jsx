import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://..."
});

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers["X-CodePen"] = "http://localhost:3000/products/";
  }
  return request;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

///////// response

const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
    console.log("error handle");
  }
  return Promise.reject({ ...error });
};

const successHandler = response => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
    console.log("succes handle");
  }
  return response;
};

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default axiosInstance;
