import http from "./http";

/**
 * 
 * @returns All the rooms inside the database
 */
function fetchRooms(){
  return http.get("room/get/all")
}

/**
 * 
 * @param {An object representation of the rooms containing all the room details} param0 
 * @returns 
 */
function addRoom({ roomNum, category, isAvailable, price }){
  return http.post("room/create", {roomNum, category, isAvailable, price})
}

/**
 * 
 * @param {the id of the room to delete} id 
 * @returns 
 */
function deleteRoom(id){
  return http.delete(`room/delete/${id}`)
}

export {
  fetchRooms,
  addRoom,
  deleteRoom
}