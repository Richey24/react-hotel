import http from "./http";

/**
 * 
 * @returns All the customers in the database
 */
function fetchCustomers(){
  return http.get("user/get/all")
}

/**
 * 
 * @param {An object representation containing all the data for the nex customer} param0 
 * @returns 
 */
function addCustomer({name, phone, gender, email, password, role, address, dob}){
  return http.post("user/register", {name, phone, gender, email, password, role, address, dob})
}

/**
 * 
 * @param {the id of the customer to delete} id 
 * @returns 
 */
function deleteCustomer(id) {
  return http.delete(`user/delete/${id}`)
}

export {
  fetchCustomers,
  addCustomer,
  deleteCustomer
}