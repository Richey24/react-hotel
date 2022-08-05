import * as yup from "yup"

const serviceSchema = yup.object().shape({
  room: yup.number().required("Required"),
  type: yup.string().required("Required"),
  assignDate: yup.date().required("Required"),
});

export default serviceSchema;