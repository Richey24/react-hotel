import http from "./http";

/**
 * 
 * @param {email form the user account} email 
 * @param {the password for the user account} password 
 * @returns the user information and session token if the user was authenticated successfully
 */
function signIn(email, password){
  return http.post("/user/login", { email, password })
}

export {
  signIn
}