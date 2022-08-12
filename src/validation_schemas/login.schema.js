import * as yup from "yup"

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Required"),
  password: yup.string().required("Required")
})

export default loginSchema