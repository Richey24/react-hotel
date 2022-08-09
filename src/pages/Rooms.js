import { useFormik } from "formik";
import Table from "../components/Table";
import roomSchema from "../validation_schemas/room.schema";

export default function RoomPage() {
  const headers = [
    { text: "Room #", value: "room" },
    { text: "Type", value: "type" },
    { text: "Status", value: "status" },
    { text: "Price", value: "price" },
    { text: "Action", value: "action" },
  ];
  
  const items = [
    {
      room: "1",
      type: "economy",
      status: "Available",
      price: "400",
      action: "Delete",
    },
    {
      room: "1",
      type: "economy",
      status: "Available",
      price: "400",
      action: "Delete",
    },
  ];

  return (
    <div className="page_content">
      <RoomForm />
      <Table headers={headers} items={items} title="Room" subtitle="This table list all the rooms in your hotel" />
    </div>
  );
}

function RoomForm() {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur  } = useFormik({
    initialValues: {
      number: "",
      type: "",
      status: "",
      price: "",
    },
    validationSchema: roomSchema,
    onSubmit: () => { console.log("submitted"); }
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="number">Room Number</label>
        <br />
        <input
          value={ values.number }
          id="number"
          name="number"
          placeholder="Enter Room Number"
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.number && touched.number ? "input-error" : ""}
        />
        { errors.number && touched.number ? <p className="error"> { errors.number } </p> : ""}
      </div>

      <div>
        <label htmlFor="type">Type</label>
        <br />
        <input
          value={ values.type }
          id="type"
          name="type"
          placeholder="Enter Room Type"
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.type && touched.type ? "input-error" : ""}
        />
        { errors.type && touched.type ? <p className="error"> { errors.type } </p> : ""}
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input
          value={ values.price }
          id="number"
          name="price"
          placeholder="Enter Room Price"
          onChange={ handleChange }
          onBlur={ handleBlur }
          className={ errors.price && touched.price ? "input-error" : ""}
        />
        { errors.price && touched.price ? <p className="error"> { errors.price } </p> : ""}
      </div>

      <div>
        <button type="submit">Add Room</button>
      </div>
    </form>
  );
}
