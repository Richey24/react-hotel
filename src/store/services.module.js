const initialState =  []

export const serviceActions = {
  setServices: services => ({
    type: "SET_SERVICES",
    payload: services
  }),

  updateService: updates => ({
    type: "UPDATE_SERVICE",
    payload: updates
  }),

  deleteService: id => ({
    type: "DELETE_SERVICE",
    payload: id
  })
}


export const serviceReducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_SERVICES": 
      return action.payload.map((service, index) => ({
        ...service,
        serialNumber: index + 1,
      }));
    case "UPDATE_SERVICE": 
      return [
        ...state,
        action.payload
      ]
    case "DELETE_SERVICE":
      return state.filter( v => v.room === action.payload)
    default:
      return state
  }
}
