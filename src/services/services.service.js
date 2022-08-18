import http from "./http"

/**
 * 
 * @returns All the services inside the database
 */
function fetchServices(){
  return http.get("service/get/all")
}

/**
 * 
 * @param {An object representation of the service containing all the details of the service} param0 
 * @returns 
 */
function addServices({roomNum, description, status, date}){
  return http.post("service/create", {roomNum, description, status, date})
}

/**
 * 
 * @param {the id for the service to delete} id 
 * @returns 
 */
function deleteService(id){
  return http.delete(`service/delete/${id}`)
}

export {
  fetchServices,
  addServices,
  deleteService
}