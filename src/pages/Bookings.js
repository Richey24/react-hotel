import Table from "../components/Table";
import { useFormik } from "formik";
import bookingSchema from "../validation_schemas/booking.schema";
import { useSelector, useDispatch } from "react-redux";
import { bookingActions } from "../store/bookings.module";
import { useEffect } from "react";
import {
  addBooking,
  deleteBooking,
  fetchBookings,
} from "../services/bookings.service";

export default function BookingsPage() {
  const dispatch = useDispatch();
  const handleClick = (props) =>
    deleteBooking(props.id).then((res) =>
      fetchBookings().then((res) => {
        console.log(res.data);
        dispatch(bookingActions.setBookings(res.data.room));
      })
    );
    
  useEffect(() => {
    fetchBookings().then((res) => {
      console.log(res.data);
      dispatch(bookingActions.setBookings(res.data.room));
    });
  }, [dispatch]);

  const headers = [
    { text: "Room #", value: "roomNum" },
    { text: "Customer Name", value: "cusId" },
    { text: "Check-in Date", value: "checkInDate" },
    { text: "Check-out Date", value: "checkOutDate" },
    { text: "Cost", value: "cost" },
    {
      text: "Action",
      value: (props) => {
        return (
          <span className="icon btn_delete" onClick={() => handleClick(props)}>
            <i className="fa fa-trash"></i>
          </span>
        );
      },
      isJSX: true,
    },
  ];

  return (
    <div className="page_content">
      <BookingsForm />
      <Table
        items={useSelector((state) => state.bookingModule)}
        headers={headers}
        title="Bookings"
        subtitle="This table list all the reservations in your hotel"
      />
    </div>
  );
}

function BookingsForm() {
  const customers = useSelector((state) => state.customerModule);
  const rooms = useSelector((state) => state.roomModule);
  const dispatch = useDispatch();
  const { errors, values, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        roomNum: "",
        cusId: "",
        checkInDate: "",
        checkOutDate: "",
        cost: "",
      },

      validationSchema: bookingSchema,

      onSubmit: (values) => {
        addBooking(values).then(() =>
          fetchBookings().then((res) => {
            console.log(res.data);
            dispatch(bookingActions.setBookings(res.data.room));
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
          type="text"
          name="roomNum"
          value={values.roomNum}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.roomNum && touched.roomNum ? "input-error" : ""}
        >
          {rooms.map((room, index) => (
            <option value={room.roomNum} key={index}> {room.roomNum} </option>
          ))}
        </select>
        {errors.roomNum && touched.roomNum ? (
          <p className="error"> {errors.roomNum} </p>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="cusId">Customer Name</label>
        <br />
        <select
          type="text"
          name="cusId"
          value={values.cusId}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.cusId && touched.cusId ? "input-error" : ""}
        >
          {customers.map((cust) => (
            <option value={cust.name}> {cust.name} </option>
          ))}
        </select>
        {errors.cusId && touched.cusId ? (
          <p className="error"> {errors.cusId} </p>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="checkInDate">Check In Date</label>
        <br />
        <input
          type="date"
          name="checkInDate"
          value={values.CheckInDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.checkInDate && touched.checkInDate ? "input-error" : ""
          }
        />
        {errors.checkInDate && touched.checkInDate ? (
          <p className="error"> {errors.checkInDate} </p>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="checkOutDate">Check Out Date</label>
        <br />
        <input
          type="date"
          name="checkOutDate"
          value={values.checkOutDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.checkOutDate && touched.checkOutDate ? "input-error" : ""
          }
        />
        {errors.checkOutDate && touched.checkOutDate ? (
          <p className="error"> {errors.checkOutDate} </p>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="cost">Cost</label>
        <br />
        <input
          type="text"
          name="cost"
          value={values.cost}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.cost && touched.cost ? "input-error" : ""}
        />
        {errors.cost && touched.cost ? (
          <p className="error"> {errors.cost} </p>
        ) : (
          ""
        )}
      </div>
      <div>
        <button type="submit">Add Reservation</button>
      </div>
    </form>
  );
}
