import axios from "axios";

//Creates an axios instance with the specified confiuration
const http = axios.create({
  baseURL: "https://hotel-backend.azurewebsites.net/",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})

//creating an instance interceptor for the response from the api
http.interceptors.response.use(
  function (response) {
    const { status, data } = response;
    return { status, data }
  },
  function (err) {
    console.log(err);
  }
)

/**
 * Creating an interceptro for the axios instance request 
 * Every time a request is made to the api the header will contain the session token
 *  */
http.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
  }
)

export default http