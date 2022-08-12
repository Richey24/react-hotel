import http from "./http";

function signIn(email, password){
  return http.post("/user/login", { email, password })
}

function signOut(username){
  return http.post("/logout", )
}

export {
  signIn, 
  signOut
}