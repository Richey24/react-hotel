const initialState = []

export const roomActions = {
  setRooms: rooms => ({
    type: "SET_ROOMS",
    payload: rooms
  }),

  updateRoom: updates => ({
    type: "UPDATE_ROOM",
    payload: { ...updates, status: "Available" }
  })
}


export const roomReducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_ROOMS":
      return [
        ...action.payload
      ]
    case "UPDATE_ROOM":
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}
