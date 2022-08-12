import * as yup from "yup";

const customerSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must have atleast 3 letters")
    .required("Required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required"),
  age: yup
    .number()
    .positive("Age must be greater than zero (0)")
    .min(1, "Age must be greater than zero (0)")
    .required("Required"),
  phone: yup
    .number()
    .positive("Phone number must be positive")
    .min(7, "Phone number must have 7 or more characters")
    .required("Required"),
  gender: yup.string().required("Required"),
  dob: yup.date().required("Required"),
  address: yup
  .string()
  .required("Required"),
  password: yup.string().min(8, "Password requires 8 characters").required("Required"),
  role: yup.string().required("Required")
});

export default customerSchema;
