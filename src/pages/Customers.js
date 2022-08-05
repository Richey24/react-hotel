import Table from "../components/Table";
import { useFormik } from "formik";
import customerSchema from "../validation_schemas/customerSchema";

export default function CustomerPage() {
  const headers = [
    { text: "SN", value: "serialNumber" },
    { text: "Name", value: "name" },
    { text: "Email", value: "email" },
    { text: "Phone Number", value: "phoneNumber" },
    { text: "Action", value: "action" },
  ]
  
  const items = [
    {
      serialNumber: "1",
      name: "John Doe",
      email: "johndoe@gmail.com", 
      phoneNumber: "136380238834"
    }
  ]

  return (
    <div className="page_content">
      <CustomerForm/>
      <Table items={ items } headers={ headers } title="Customers" subtitle="This table list all the customers in your hotel" />
    </div>
  )
}

function CustomerForm() {
  const { values, touched, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      phoneNumber: "",
      gender: "",
      address: "",
      dob: ""
    },

    validationSchema: customerSchema,
    
    onSubmit: () => { console.log("submitt"); }
  })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br/>
        <input
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.name && touched.name ? "input-error" : ""}
        />
        { errors.name && touched.name ? <p className="error"> { errors.name } </p> : ""}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br/>
        <input
          value={values.email}
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.email && touched.email ? "input-error" : ""}
        />
        { errors.email && touched.email ? <p className="error"> { errors.email } </p> : ""}
      </div>

      <div>
        <div id="age">
          <label htmlFor="age">Age</label>
          <br/>
          <input
            value={values.age}
            name="age"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            className={ errors.age && touched.age ? "input-error" : ""}
          />
          { errors.age && touched.age ? <p className="error"> { errors.age } </p> : ""}
        </div>
        <div id="dob">
          <label htmlFor="dob">Date Of Birth</label>
          <input 
            name="dob"
            type="date" 
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={ errors.dob && touched.dob ? "input-error" : ""}
            />
            { errors.dob && touched.dob ? <p className="error"> { errors.dob } </p> : ""}
        </div>
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <br/>
        <input
          value={values.phoneNumber}
          name="phoneNumber"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.phoneNumber && touched.phoneNumber ? "input-error" : ""}
        />
        { errors.phoneNumber && touched.phoneNumber ? <p className="error"> { errors.phoneNumber } </p> : ""}
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <br/>
        <select 
          name="gender"
          value={values.gender}
          onChange={handleChange}
          className={ errors.gender && touched.gender ? "input-error" : ""}
        >
          <option value="male" selected>Male</option>
          <option value="female">Female</option>
        </select>
        { errors.gender && touched.gender ? <p className="error"> { errors.gender } </p> : ""}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <br/>
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.address && touched.address ? "input-error" : ""}
        />
        { errors.address && touched.address ? <p className="error"> { errors.address } </p> : ""}
      </div>

      <div>
        <button>Add Customer</button>
      </div>
    </form>
  )
}