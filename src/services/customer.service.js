import http from "./http";

function fetchCustomers(){
  return http.get("user/get/all")
}

function addCustomer({name, phone, gender, email, password, role, address, dob}){
  return http.post("user/register", {name, phone, gender, email, password, role, address, dob})
}

function deleteCustomer(id) {
  return http.delete(`user/delete/${id}`)
}

export {
  fetchCustomers,
  addCustomer,
  deleteCustomer
}