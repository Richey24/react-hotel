import * as yup from "yup";

/**
 * This schema is used to validate the form on the
 * customers page each function describes what the 
 * form will validate for.
 */ 
const customerSchema = yup.object().shape({
  name: yup
    .string() //checks if the name is a string
    .min(2, "Name must have atleast 3 letters") //checks if the name has a minimum of 2 characters
    .required("Required"), //checks if user entered a value for the name

  email: yup
    .string() //checks if the email is a string
    .email("Please enter a valid email address") //checks if the email inputted by the user is an email
    .required("Required"), //checks if the user input a value

  age: yup
    .number() //checks if the age is a number
    .positive("Age must be greater than zero (0)")  //checks if the age is a positive number
    .min(1, "Age must be greater than zero (0)") //checks if the age is greater than 1
    .required("Required"), //checks if the user entered a value for the age

  phone: yup
    .number()//checks if the phone number is a number
    .positive("Phone number must be positive") //checks if the phone number is positive
    .min(7, "Phone number must have 7 or more characters") //checks if the phone number is greater than 7 characters
    .required("Required"), //checks if user entered a value for the phone number 

  gender: yup
  .string() //checks if the gender is a string
  .required("Required"), //checks if the user entered a value for the gender

  dob: yup
  .date() //checks if the date of birth entered follows a correct date formate
  .required("Required"), //checks if the user enetered a date

  address: yup
  .string() //checks if the address is a string
  .required("Required"), //checks if the user entered an address
});

export default customerSchema;
