import http from "./http";

function fetchBookings(){
  return http.get("book/get/all");
}

function addBooking({roomNum, cusId, checkInDate, checkOutDate, cost}){
  return http.post("book/create", {roomNum, cusId, checkInDate, checkOutDate, cost})
}

function deleteBooking(id){
  return http.delete(`book/remove/${id}`)
}

export {
  fetchBookings,
  addBooking,
  deleteBooking
}