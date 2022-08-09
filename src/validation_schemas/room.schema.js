import * as yup from "yup";

const roomSchema = yup.object().shape({
  number: yup
    .number()
    .typeError("Value must be of type number")
    .positive("Number can't be below zero (0)")
    .required("Required"),
  type: yup.string().required("Required"),
  price: yup
    .number()
    .positive("Price can't be below zero (0)")
    .required("Required"),
});

export default roomSchema;
