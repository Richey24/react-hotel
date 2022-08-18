import * as yup from "yup"

/**
 * This schema is used to validate the form on the
 * customers page each function describes what the 
 * form will validate for.
 */ 
const loginSchema = yup.object().shape({
  email: yup
  .string() // checks if the username is a string
  .email().required("Required"), //checks the user entered a username value

  password: yup
  .string() //checks if the password is a string
  .required("Required") //checks if the user entered a password
})

export default loginSchema