const initialState = [
  {
    room: "1",
    type: "economy",
    status: "Available",
    price: "400",
    action: "Delete",
  },
  {
    room: "1",
    type: "economy",
    status: "Available",
    price: "400",
    action: "Delete",
  },
]

export const actions = {
  getRooms: () => ({
    type: "GET_ROOMS",
    payload: {
      room: "2",
      type: "Updates",
      status: "Not Available",
      price: "600",
      action: "Delete",
    },
  }),

  updateRooms: (updates) => ({
    type: "UPDATE_ROOMS",
    payload: updates
  })
}


export const reducer = (state, action) => {
  switch(action.type){
    case "GET_ROOMS":
      return {
        ...action.payload
      }
    case "UPDATE_ROOMS": 
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
