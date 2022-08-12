import * as yup from "yup";

/**
 * This schema is used to validate the form on the
 * bookings page each function describes what the 
 * form will validate for.
 * 
 * for example: 
 * The form validates the room value for the following: 
 * The room must be a number, It must be positive and It is required  
 * 
 */ 
const bookingSchema = yup.object().shape({
  roomNum: yup
    .number()
    .typeError("Value must be a number")
    .positive("Room number can not be negative")
    .required("Required"),
  cusId: yup.string().required("Required"),
  checkInDate: yup.date().required("Required"),
  checkOutDate: yup.date().required("Required"),
  cost: yup
    .number()
    .typeError("Value must be a number")
    .positive("Cost must be positive")
    .required("Required"),
});


export default bookingSchema;