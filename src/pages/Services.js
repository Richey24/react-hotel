import Table from "../components/Table";
import { useFormik } from "formik";
import serviceSchema from "../validation_schemas/service.schema";
import { useSelector, useDispatch } from "react-redux";
import { serviceActions } from "../store/services.module";
import {
  addServices,
  deleteService,
  fetchServices,
} from "../services/services.service";
import { useEffect } from "react";

export default function ServicesPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchServices().then((res) => {
      dispatch(serviceActions.setServices(res.data.requests));
    });
  }, [dispatch]);

  const handleClick = (props) =>
    deleteService(props.id).then(() =>
      fetchServices().then((res) => {
        dispatch(serviceActions.setServices(res.data.requests));
      })
    );

  const headers = [
    { text: "SN", value: "serialNumber" },
    { text: "Room #", value: "roomNum" },
    { text: "Type", value: "description" },
    { text: "Status", value: "status" },
    { text: "Date Assigned", value: "date" },
    {
      text: "Action",
      value: (props) => (
        <span className="icon btn_delete" onClick={() => handleClick(props)}>
          <i className="fa fa-trash"></i>
        </span>
      ),
      isJSX: true,
    },
  ];

  return (
    <div className="page_content">
      <ServiceForm />
      <Table
        items={useSelector((state) => state.serviceModule)}
        headers={headers}
        title="Services"
        subtitle="This table list all the services your staff proforms in your hotel"
      />
    </div>
  );
}

function ServiceForm() {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.roomModule);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      roomNum: "",
      description: "",
      status: "Pending",
      date: "",
    },
    validationSchema: serviceSchema,
    onSubmit: (values) => {
      console.log(values);
      addServices(values).then(() =>
        fetchServices().then((res) => {
          dispatch(serviceActions.setServices(res.data.requests));
        })
      );
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="roomNum">Room Number</label>
        <br />
        <select
          name="roomNum"
          value={values.roomNum}
          onChange={handleChange}
          className={errors.roomNum && touched.roomNum ? "input-error" : ""}
        >
          {rooms.map((room) => (
            <option value={room.roomNum} key={room.roomNum}>
              {room.roomNum}
            </option>
          ))}
        </select>
        {errors.roomNum && touched.roomNum ? (
          <p className="error"> {errors.roomNum} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="description">Type</label>
        <br />
        <select
          name="description"
          value={values.description}
          onChange={handleChange}
          className={
            errors.description && touched.description ? "input-error" : ""
          }
        >
          <option value="Extra Towels">Extra Towels </option>
          <option value="Wifi Passcode">Wifi Passcode </option>
          <option value="Dinning">Dinning</option>
          <option value="Room Cleaning">Room Cleaning</option>
        </select>
        {errors.description && touched.description ? (
          <p className="error"> {errors.description} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="date">Assign</label>
        <br />
        <input
          name="date"
          value={values.date}
          type="date"
          onChange={handleChange}
          className={errors.date && touched.date ? "input-error" : ""}
        ></input>
        {errors.date && touched.date ? (
          <p className="error"> {errors.date} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <button type="submit">Add Service</button>
      </div>
    </form>
  );
}
