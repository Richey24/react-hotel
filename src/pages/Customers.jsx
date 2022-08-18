import Table from "../components/Table";
import { useFormik } from "formik";
import customerSchema from "../schemas/customers.schema";
import { useSelector, useDispatch } from "react-redux";
import { customerActions } from "../store/customer.module";
import { useEffect } from "react";
import {
  fetchCustomers,
  deleteCustomer,
  addCustomer,
} from "../services/customer.service";
import Button from "../components/form/Button";
import DateInput from "../components/form/DateInput";
import SelectInput from "../components/form/SelectInput";
import TextInput from "../components/form/TextInput";

/**
 * 
 * @returns The React Component representation of the Customer Page
 */
export default function CustomerPage() {
  const dispatch = useDispatch(); // stores the dispatch hook for later use inside the use effect hook

  //An arrow function that deletes a customer when fired
  const handleOnClick = (props) =>
    deleteCustomer(props.id).then((res) =>
      fetchCustomers().then((res) => {
        dispatch(customerActions.setCustomers(res.data.user));
      })
    );
  
  //The react hook that fires on page load
  useEffect(() => {
    //fetches all the customers from the database 
    fetchCustomers().then((res) => {
      dispatch(customerActions.setCustomers(res.data.user));
    });
  }, [dispatch]);

  //Alist of all the headers for the table
  const headers = [
    { text: "SN", value: "serialNumber" },
    { text: "Name", value: "name" },
    { text: "Email", value: "email" },
    { text: "Phone Number", value: "phone" },
    {
      text: "Action",
      value: (props) => {
        return (
          <span className="icon cursor-pointer text-red-400" onClick={ () => handleOnClick(props)}>
            <i className="fa fa-trash"></i>
          </span>
        );
      },
      isJSX: true,
    },
  ];

  // Returns the JSX representation of the Customer Page
  return (
    <div className="flex gap-10 justify-center mx-auto items-start flex-wrap">
      <CustomerForm />
      <Table
        items={useSelector((state) => state.customerModule)}
        headers={headers}
        title="Customers"
        subtitle="This table list all the customers in your hotel"
      />
    </div>
  );
}

/**
 * 
 * @returns A React Component representing the customer form 
 */
function CustomerForm() {
  const dispatch = useDispatch();//stores the dispatch hook for later use inside the submit function

  const { values, touched, errors, handleSubmit, handleChange, handleBlur } = useFormik({
      //the initial values that the form will use for each input
      initialValues: {
        name: "",
        email: "",
        age: "",
        phone: "",
        gender: "male",
        address: "",
        dob: "",
        role: "Customer",
        password: "",
      },

      //the ypu shema that will be used to validate the form input
      validationSchema: customerSchema,

      //function runs when the submit button is pressed on the form
      onSubmit: (values) => {
        //sends a request containing the form details to the api for it to save the details in the database
        addCustomer(values).then(() =>
          fetchCustomers().then((res) => {
            dispatch(customerActions.setCustomers(res.data.user));
          })
        );
      },
    });
  
  //Returns the JSX representation of the customer form
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-9 p-9 shadow-md shadow-primary-100 bg-white w-[26rem] rounded-md"
    >
      <div>
        <p className="text-xl font-normal text-center pb-3 text-primary-500">Create Customer</p>
        <hr/>
      </div>


      <TextInput
        name="name"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.name}
        touched={touched.name}
        label="Name"
        value={values.name}
      />

      <TextInput
        name="email"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.email}
        touched={touched.email}
        label="Email"
        value={values.email}
      />

      <TextInput
        name="phone"
        type="number"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.phone}
        touched={touched.phone}
        label="Phone Number"
        value={values.phone}
      />

      <div className="flex gap-2">
        <SelectInput
          label="Role"
          name="role"
          value={values.role}
          handleChange={handleChange}
          onBlur={handleBlur}
          touched={touched.role}
          errors={errors.role}
          items={[
            {text: "Employee", value: "Employee"},
            {text: "Customer", value: "Customer"}
          ]}
        />

        <SelectInput
          label="Gender"
          name="gender"
          value={values.gender}
          handleChange={handleChange}
          onBlur={handleBlur}
          touched={touched.gender}
          errors={errors.gender}
          items={[
            {text: "male", value: "Male"},
            {text: "female", value: "Female"}
          ]}
        />
      </div>


      <div className="flex gap-2">
        <TextInput
          name="age"
          type="number"
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors.age}
          touched={touched.age}
          label="Age"
          value={values.age}
        />

        <DateInput
          name="dob"
          value={values.date}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.dob}
          errors={errors.dob}
          label="Date Of Birth"
        />
      </div>

      <TextInput
        name="address"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.address}
        touched={touched.address}
        label="Address"
        value={values.address}
      />
      
      <TextInput
        name="password"
        type="password"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.password}
        touched={touched.password}
        label="Password"
        value={values.password}
      />
      

      <Button text="Add Customer"/>
    </form>
  );
}
