const initialState =  []

export const bookingActions = {
  setBookings: bookings => ({
    type: "SET_BOOKINGS",
    payload: bookings
  }),

  updateBooking: updates => ({
    type: "UPDATE_BOOKING",
    payload: updates
  }),

  deleteBooking: id => ({
    type: "DELETE_BOOKING",
    payload: id
  })
}


export const bookingReducer = (state = initialState, action) => {
  switch(action.type){
    case "SET_BOOKINGS": 
      return action.payload.map( booking => ({ ...booking, checkInDate: booking.checkInDate.substr(0, 9), checkOutDate: booking.checkOutDate.substr(0, 9) }) )
      
    case "UPDATE_BOOKING": 
      return [
        ...state,
        action.payload
      ]
    case "DELETE_BOOKING":
      return state.filter( v => v.room === action.payload)
    default:
      return state
  }
}
