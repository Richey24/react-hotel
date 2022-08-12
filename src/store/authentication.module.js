const initialState = {
  loggedInUser: JSON.parse(localStorage.getItem("user")),
  isLoggedIn: !!JSON.parse(localStorage.getItem("user"))
}

export const authActions = {
  setLoggedInUser: (user) => ({
    type: "SET_LOGGED_IN_USER",
    payload: user
  }),

  signOut: () => ({
    type: "SIGN_OUT",
  })
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_LOGGED_IN_USER": 
      return {
        loggedInUser: JSON.parse(localStorage.getItem("user")),
        isLoggedIn: !!JSON.parse(localStorage.getItem("user"))
      }
    default:
      return state
  }
}