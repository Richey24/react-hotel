import Table from "../components/Table";
import { useFormik } from "formik";
import customerSchema from "../validation_schemas/customers.schema";
import { useSelector, useDispatch } from "react-redux";
import { customerActions } from "../store/customer.module";
import { useEffect } from "react";
import {
  fetchCustomers,
  deleteCustomer,
  addCustomer,
} from "../services/customer.service";

export default function CustomerPage() {
  const dispatch = useDispatch();
  const handleOnClick = (props) =>
    deleteCustomer(props.id).then((res) =>
      fetchCustomers().then((res) => {
        dispatch(customerActions.setCustomers(res.data.user));
      })
    );

  useEffect(() => {
    fetchCustomers().then((res) => {
      dispatch(customerActions.setCustomers(res.data.user));
    });
  }, [dispatch]);

  const headers = [
    { text: "SN", value: "serialNumber" },
    { text: "Name", value: "name" },
    { text: "Email", value: "email" },
    { text: "Phone Number", value: "phone" },
    {
      text: "Action",
      value: (props) => {
        return (
          <span className="icon btn_delete" onClick={ () => handleOnClick(props)}>
            <i className="fa fa-trash"></i>
          </span>
        );
      },
      isJSX: true,
    },
  ];

  return (
    <div className="page_content">
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

function CustomerForm() {
  const dispatch = useDispatch();
  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
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

      validationSchema: customerSchema,

      onSubmit: (values) => {
        addCustomer(values).then(() =>
          fetchCustomers().then((res) => {
            dispatch(customerActions.setCustomers(res.data.user));
          })
        );
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name ? (
          <p className="error"> {errors.name} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          value={values.email}
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email ? (
          <p className="error"> {errors.email} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="role">Role</label>
        <br />
        <select
          value={values.role}
          name="role"
          type="role"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.role && touched.role ? "input-error" : ""}
        >
          <option value="Employee">Employee</option>
          <option value="Customer">Customer</option>
        </select>
        {errors.role && touched.role ? (
          <p className="error"> {errors.role} </p>
        ) : (
          ""
        )}
      </div>

      <div className="double_input_wrapper">
        <div className="input_col_one">
          <label htmlFor="age">Age</label>
          <br />
          <input
            value={values.age}
            name="age"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? "input-error" : ""}
          />
          {errors.age && touched.age ? (
            <p className="error"> {errors.age} </p>
          ) : (
            ""
          )}
        </div>
        <div className="input_col_two">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            name="dob"
            type="date"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dob && touched.dob ? "input-error" : ""}
          />
          {errors.dob && touched.dob ? (
            <p className="error"> {errors.dob} </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <br />
        <input
          value={values.phone}
          name="phone"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.phone && touched.phone ? "input-error" : ""}
        />
        {errors.phone && touched.phone ? (
          <p className="error"> {errors.phone} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <br />
        <select
          name="gender"
          value={values.gender}
          onChange={handleChange}
          className={errors.gender && touched.gender ? "input-error" : ""}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && touched.gender ? (
          <p className="error"> {errors.gender} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <br />
        <input
          name="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.address && touched.address ? "input-error" : ""}
        />
        {errors.address && touched.address ? (
          <p className="error"> {errors.address} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password ? (
          <p className="error"> {errors.password} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <button type="submit">Add Customer</button>
      </div>
    </form>
  );
}
