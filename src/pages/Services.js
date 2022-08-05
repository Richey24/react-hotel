import Table from "../components/Table"
import { useFormik } from "formik"
import serviceSchema from "../validation_schemas/serviceSchema"

export default function ServicesPage() {
  const headers= [
    { text: "SN", value: "serialNumber" },
    { text: "Room #", value: "room" },
    { text: "Type", value: "type" },
    { text: "Status", value: "status" },
    { text: "Date Assigned", value: "dateAssigned" },
    { text: "Action", value: "action" },
  ]

  const items= [
    {
      serialNumber: "1",
      room: "2",
      type: "Extra Towels",
      status: "Complete",
      dateAssigned: "7/26/2022"
    },
    {
      serialNumber: "1",
      room: "2",
      type: "Extra Towels",
      status: "Complete",
      dateAssigned: "7/26/2022"
    }
  ]

  return (
    <div className="page_content">
      <ServiceForm/>
      <Table items={items} headers={headers} title="Services" subtitle="This table list all the services your staff proforms in your hotel"/>
    </div>
  )
}


function ServiceForm(){
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      room: "",
      type: "",
      assignDate: "",
    },

    validationSchema: serviceSchema,

    onSubmit: () => { console.log("submitted"); }
  })

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="room">Room Number</label>
        <br/>
        <select
          name="room"
          value={values.room}
          onChange={handleChange}
          className={ errors.room && touched.room ? "input-error" : ""}
        >
        </select>
        { errors.room && touched.room ? <p className="error"> { errors.room } </p> : ""}
      </div>

      <div>
        <label htmlFor="type">Type</label>
        <br/>
        <select
          name="type"
          value={values.type}
          onChange={handleChange}
          className={ errors.type && touched.type ? "input-error" : ""}
        >
        </select>
        { errors.type && touched.type ? <p className="error"> { errors.type } </p> : ""}
      </div>

      <div>
        <label htmlFor="assignDate">Assign</label>
        <br/>
        <select
          name="assignDate"
          value={values.assignDate}
          onChange={handleChange}
          className={ errors.assignDate && touched.assignDate ? "input-error" : ""}
        >
        </select>
        { errors.assignDate && touched.assignDate ? <p className="error"> { errors.assignDate } </p> : ""}
      </div>

      <div>
        <button>Add Service</button>
      </div>
    </form>
  )
}