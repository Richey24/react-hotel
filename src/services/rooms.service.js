import http from "./http";

function fetchRooms(){
  return http.get("room/get/all")
}

function addRoom({ roomNum, category, isAvailable, price }){
  return http.post("room/create", {roomNum, category, isAvailable, price})
}

function deleteRoom(id){
  return http.delete(`room/delete/${id}`)
}

export {
  fetchRooms,
  addRoom,
  deleteRoom
}