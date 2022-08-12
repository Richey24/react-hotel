import * as yup from "yup";

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