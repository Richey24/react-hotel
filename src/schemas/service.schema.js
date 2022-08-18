import * as yup from "yup"

/**
 * This schema is used to validate the form on the
 * customers page each function describes what the 
 * form will validate for.
 */ 
const serviceSchema = yup.object().shape({
  roomNum: yup
  .number() // checks if the service is a type of number
  .required("Required"), //checks if the user entered a room value
  
  description: yup
  .string() //checks if the service type is a type of string
  .required("Required"), //checks if the user entered a value for the service type
  
  date: yup
  .date() //checks if the service assignDate is a type of date
  .required("Required"), //checks if the user entered a assigned date value
});

export default serviceSchema;