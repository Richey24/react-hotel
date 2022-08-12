import * as yup from "yup"

const serviceSchema = yup.object().shape({
  roomNum: yup.number().required("Required"),
  description: yup.string().required("Required"),
  date: yup.date().required("Required"),
});

export default serviceSchema;