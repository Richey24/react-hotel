import Table from "../components/Table";
import { useFormik } from "formik";
import serviceSchema from "../schemas/service.schema";
import { useSelector, useDispatch } from "react-redux";
import { serviceActions } from "../store/services.module";
import { addServices, deleteService, fetchServices } from "../services/services.service";
import { useEffect } from "react";
import Button from "../components/form/Button";
import DateInput from "../components/form/DateInput";
import SelectInput from "../components/form/SelectInput";

/**
 * 
 * @returns A react component representation of the service form
 */
export default function ServicesPage() {
  const dispatch = useDispatch(); //stores the dispatch hook for later use in the use effect hook
  useEffect(() => {
    fetchServices().then((res) => {
      dispatch(serviceActions.setServices(res.data.requests));
    });
  }, [dispatch]);

  //function that sends a delete request to the api for it to delete a service from the database
  const handleClick = (props) =>
    deleteService(props.id).then(() =>
      fetchServices().then((res) => {
        dispatch(serviceActions.setServices(res.data.requests));
      })
    );
  
  /**
   * A list of all the headers that will be displayed on the table
   * The text is the display text of the header
   * The value property represent the property name on the item
   * */ 
  const headers = [
    { text: "SN", value: "serialNumber" },
    { text: "Room #", value: "roomNum" },
    { text: "Type", value: "description" },
    { text: "Status", value: "status" },
    { text: "Date Assigned", value: "date" },
    {
      text: "Action",
      value: (props) => (
        <span className="icon cursor-pointer text-red-400" onClick={() => handleClick(props)}>
          <i className="fa fa-trash"></i>
        </span>
      ),
      isJSX: true,
    },
  ];

  /**
   * Returns the JSX representation of the service form
   */
  return (
    <div className="flex gap-10 justify-center mx-auto items-start flex-wrap">
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
    //the initial values used for the inputs of the form
    initialValues: {
      roomNum: "",
      description: "",
      status: "Pending",
      date: "",
    },
    //yup schema used for validation purposes
    validationSchema: serviceSchema,
    
    //function that gets fired when the submit button is clicked
    onSubmit: (values) => {
      addServices(values).then(() =>
        fetchServices().then((res) => {
          dispatch(serviceActions.setServices(res.data.requests));
        })
      );
    },
  });

  //returns the JSX representaion of the service form
  return (
    <form 
    onSubmit={handleSubmit} 
    className="flex flex-col gap-10 p-9 shadow-md shadow-primary-100 bg-white w-[26rem] rounded-md"
    >

    <div>
      <p className="text-xl font-normal text-center pb-3 text-primary-500">Create Service</p>
      <hr/>
    </div>
      
      <SelectInput
        label="Room"
        name="roomNum"
        value={values.roomNum}
        handleChange={handleChange}
        touched={touched.roomNum}
        errors={errors.roomNum}
        items={rooms.map((room) => ({ text: room.roomNum, value: room.roomNum}))}
      />

      <SelectInput
        label="Type"
        name="description"
        value={values.description}
        handleChange={handleChange}
        touched={touched.description}
        errors={errors.description}
        items={[
          { text: "Extra Towels", value: "Extra Towels"},
          { text: "Wifi Passcode", value: "Wifi Passcode"},
          { text: "Dinning", value: "Dinning"},
          { text: "Room Cleaning", value: "Room Cleaning"}
        ]}
      />

      <DateInput
        name="date"
        value={values.date}
        handleChange={handleChange}
        touched={touched.date}
        errors={errors.date}
        label="Assigned Date"
      />

      <Button text="Add Service"/>
    </form>
  );
}
