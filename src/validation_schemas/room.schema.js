import * as yup from "yup";

/**
 * This schema is used to validate the form on the
 * room page each function describes what the 
 * form will validate for.
 */ 
const roomSchema = yup.object().shape({
  roomNum: yup
    .number() //checks if the room number is a type of number
    .typeError("Value must be of type number")
    .positive("Number can't be below zero (0)") //checks if the room number is a positive value
    .required("Required"), //checks if the user entered room number

  category: yup
  .string() //checks if room category is a string
  .required("Required"),//checks if the user entered a category
  
  price: yup
    .number()//checks if the price value is a type of number
    .positive("Price can't be below zero (0)")//checks if the price is a positive value
    .required("Required"),//checks if the user entered a price
});

export default roomSchema;
