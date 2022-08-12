import axios from "axios";

const http = axios.create({
  baseURL: "https://dreamtechhotel.herokuapp.com/",
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})


http.interceptors.response.use(
  function(response) {
    const { status, data } = response;
    return { status, data }
  },
  function(err){
    console.log(err);
  }
)

export default http