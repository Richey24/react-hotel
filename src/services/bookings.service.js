import http from "./http";

/**
 * 
 * @returns All the bookings inside the database
 */
function fetchBookings(){
  return http.get("book/get/all");
}

/**
 * 
 * @param {An object representation containing the new booking detals} param0 
 * @returns The delted booking
 */
function addBooking({roomNum, cusId, checkInDate, checkOutDate, cost}){
  return http.post("book/create", {roomNum, cusId, checkInDate, checkOutDate, cost})
}

/**
 * 
 * @param {the id of the booking that should be deleted} id 
 * @returns The delted booking
 */
function deleteBooking(id){
  return http.delete(`book/remove/${id}`)
}

export {
  fetchBookings,
  addBooking,
  deleteBooking
}