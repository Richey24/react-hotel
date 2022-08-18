import Table from "../components/Table";
import { useFormik } from "formik";
import bookingSchema from "../schemas/booking.schema";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from "../store/bookings.module";
import { useEffect } from "react";
import { addBooking, deleteBooking, fetchBookings} from "../services/bookings.service";
import Button from "../components/form/Button";
import DateInput from "../components/form/DateInput";
import SelectInput from "../components/form/SelectInput";
import TextInput from "../components/form/TextInput";

/**
 * 
 * @returns A react component representing the bookings page containing the form and the table on the page
 */
export default function BookingsPage() {
  const dispatch = useDispatch(); //storing the dispatch hook from react redux for use inside the use effect react hook
  
  // arrow function that sends a http request to the server to delete a specific book
  const handleClick = (props) =>
    deleteBooking(props.id).then((res) =>
      fetchBookings().then((res) => {
        dispatch(bookingActions.setBookings(res.data.room));
      })
    );
  
  //react hook that runs when the bookings page is loaded.
  useEffect(() => {
    // the use effect hook runs the fetch function which sends out an http request to the server for the server to return
    //a;; the bookings inside the database
    fetchBookings().then((res) => {
      dispatch(bookingActions.setBookings(res.data.room));
    });
  }, [dispatch]);

  /**
   * A list of the headers that are used in the table. 
   * The text is the value that will be displayed on the table
   * The value property tells the table what property from the items array the header coloumn corresponds to
   **/
  const headers = [
    { text: "Room #", value: "roomNum" },
    { text: "Customer Name", value: "cusId" },
    { text: "Check-in Date", value: "checkInDate" },
    { text: "Check-out Date", value: "checkOutDate" },
    { text: "Cost", value: "cost" },
    {
      text: "Action",
      // a function that returns the JSX representation of the delete button
      value: (props) => {
        return (
          <span className="icon cursor-pointer text-red-400" onClick={() => handleClick(props)}>
            <i className="fa fa-trash"></i>
          </span>
        );
      },
      //tells the table to render a JSX instead of a primitive value
      isJSX: true,
    },
  ];

  //Returns the JSX representation of the page for it to be rendered on the webpage as html
  return (
    <div className="flex gap-10 justify-center mx-auto items-start flex-wrap">
      <BookingsForm />
      <Table
        items={useSelector((state) => state.bookingModule)} //the items the table will user
        headers={headers} // the headers the table will use
        title="Bookings" // the title of the table
        subtitle="This table list all the reservations in your hotel" //the subtitle of the table
      />
    </div>
  );
}

/**
 * 
 * @returns The React Component representing the bookings Form
 */
function BookingsForm() {
  const customers = useSelector((state) => state.customerModule); //pulls the customers data from the redux store
  const rooms = useSelector((state) => state.roomModule); //pulls all the rooms data from the redux store
  const dispatch = useDispatch(); //stores the dispatch hook for later use inside the onSubmit formik function
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } = useFormik({
      
    //initial values for the form
      initialValues: {
        roomNum: "",
        cusId: "",
        checkInDate: "",
        checkOutDate: "",
        cost: "",
      },

      //the yup schema to validate the form input
      validationSchema: bookingSchema,
      
      //the function that gets called when the submit button is clicked
      onSubmit: (values) => {
        //sends form booking details to the api for the server to save the details in the database
        addBooking(values).then(() =>
          fetchBookings().then((res) => {
            dispatch(bookingActions.setBookings(res.data.room));
          })
        );
      },
    });

  //returns the JSX representation of the form for it be rendered on the webpage as html
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 p-9 shadow-md shadow-primary-100 bg-white w-[26rem] rounded-md"
    >
      <div>
        <p className="text-xl font-normal text-center pb-3 text-primary-500">Create Booking</p>
        <hr/>
      </div>

      <SelectInput
        label="Room Number"
        name="roomNum"
        value={values.roomNum}
        handleChange={handleChange}
        touched={touched.roomNum}
        errors={errors.roomNum}
        items={rooms.map((room) => ({ text: room.roomNum, value: room.roomNum }))}
      />

      <SelectInput
        label="Customer Name"
        name="cusId"
        value={values.cusId}
        handleChange={handleChange}
        touched={touched.cusId}
        errors={errors.cusId}
        items={customers.map((cust) => ({ text: cust.name, value: cust.name }))}
      />

      <DateInput
        name="checkInDate"
        value={values.checkInDate}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.checkInDate}
        errors={errors.checkInDate}
        label="Check In Date"
      />

      <DateInput
        name="checkOutDate"
        value={values.checkOutDate}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched.checkOutDate}
        errors={errors.checkOutDate}
        label="Check Out Date"
      />

      <TextInput
        name="cost"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.cost}
        touched={touched.cost}
        label="Cost"
        value={values.cost}
      />

      <Button text="Add Reservation"/>
    </form>
  );
}
