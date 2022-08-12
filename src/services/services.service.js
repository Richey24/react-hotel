import http from "./http"

function fetchServices(){
  return http.get("service/get/all")
}

function addServices({roomNum, description, status, date}){
  return http.post("service/create", {roomNum, description, status, date})
}

function updateService(id){
  return http.put(`service/update/${id}`)
}

function deleteService(id){
  return http.delete(`service/delete/${id}`)
}

export {
  fetchServices,
  addServices,
  updateService,
  deleteService
}