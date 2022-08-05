import Table from "../components/Table";
import { useFormik } from "formik";
import bookingSchema from "../validation_schemas/bookingSchema";

export default function BookingsPage() {
  const headers = [
    {text: "Room #", value: "room"},
    {text: "Customer Name", value: "customer"},
    {text: "Check-in Date", value: "CheckInDate"},
    {text: "Check-out Date", value: "checkOutDate"},
    {text: "Cost", value: "cost"},
  ]

  const items = [
    { 
      room: "2",
      customer: "John Doe",
      CheckInDate: "7/26/2022",
      checkOutDate: "7/29/2022",
      cost: "15000" 
    },
  ]

  return (
    <div className="page_content">
      <BookingsForm/>
      <Table items={items} headers={headers} title="Bookings" subtitle="This table list all the reservations in your hotel"/>
    </div>
  )
}



function BookingsForm(){
  const {errors, values, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      room: "",
      customer: "",
      checkInDate: "",
      checkOutDate: "",
      cost: ""
    },

    validationSchema: bookingSchema,

    onSubmit: () => { console.log("submitted") }
  })

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="room">Room Number</label>
        <br/>
        <input 
          type="text"
          name="room"
          value={values.room} 
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.room && touched.room ? "input-error" : ""}
        />
        { errors.room && touched.room ? <p className="error"> { errors.room } </p> : ""}
      </div>
      <div>
        <label htmlFor="customer">Customer Name</label>
        <br/>
        <input 
          type="text"
          name="customer"
          value={values.customer} 
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.customer && touched.customer ? "input-error" : ""}
        />
        { errors.customer && touched.customer ? <p className="error"> { errors.customer } </p> : ""}
      </div>
      <div>
        <label htmlFor="checkInDate">Check In Date</label>
        <br/>
        <input 
          type="date"
          name="checkInDate"
          value={values.CheckInDate} 
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.checkInDate && touched.checkInDate ? "input-error" : ""}
        />
        { errors.checkInDate && touched.checkInDate ? <p className="error"> { errors.checkInDate } </p> : ""}
      </div>
      <div>
        <label htmlFor="checkOutDate">Check Out Date</label>
        <br/>
        <input 
          type="date"
          name="checkOutDate"
          value={values.checkOutDate} 
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.checkOutDate && touched.checkOutDate ? "input-error" : ""}
        />
        { errors.checkOutDate && touched.checkOutDate ? <p className="error"> { errors.checkOutDate } </p> : ""}
      </div>
      <div>
        <label htmlFor="cost">Cost</label>
        <br/>
        <input 
          type="text"
          name="cost"
          value={values.cost} 
          onChange={handleChange}
          onBlur={handleBlur}
          className={ errors.cost && touched.cost ? "input-error" : ""}
        />
        { errors.cost && touched.cost ? <p className="error"> { errors.cost } </p> : ""}
      </div>
      <div>
        <button type="submit">Add Reservation</button>
      </div>
    </form>
  )
}