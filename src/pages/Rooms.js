import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Table";
import roomSchema from "../validation_schemas/room.schema";
import { roomActions } from "../store/room.module";
import { fetchRooms, addRoom, deleteRoom } from "../services/rooms.service";
import { useEffect } from "react";

export default function RoomPage() {
  const dispatch = useDispatch();

  const handleClick = (props) =>
    deleteRoom(props.id).then((res) =>
      fetchRooms().then((res) => dispatch(roomActions.setRooms(res.data.rooms)))
    );

  useEffect(() => {
    fetchRooms().then((res) => dispatch(roomActions.setRooms(res.data.rooms)));
  }, [dispatch]);

  const headers = [
    { text: "Room #", value: "roomNum" },
    { text: "Type", value: "category" },
    { text: "Status", value: "isAvailable" },
    { text: "Price", value: "price" },
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
      <RoomForm />
      <Table
        headers={headers}
        items={useSelector((state) => state.roomModule)}
        title="Room"
        subtitle="This table list all the rooms in your hotel"
      />
    </div>
  );
}

function RoomForm() {
  const dispatch = useDispatch();
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        roomNum: "",
        category: "ECONOMY",
        isAvailable: true,
        price: "",
      },
      validationSchema: roomSchema,
      onSubmit: (values) => {
        addRoom(values).then((res) => {
          if (res.status === 200) {
            fetchRooms().then((res) =>
              dispatch(roomActions.setRooms(res.data.rooms))
            );
          }
        });
      },
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label htmlFor="roomNum">Room Number</label>
        <br />
        <input
          value={values.roomNum}
          id="roomNum"
          name="roomNum"
          placeholder="Enter Room Number"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.roomNum && touched.roomNum ? "input-error" : ""}
        />
        {errors.roomNum && touched.roomNum ? (
          <p className="error"> {errors.roomNum} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="category">Type</label>
        <br />
        <select
          value={values.category}
          id="category"
          name="category"
          placeholder="Enter Room Type"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.category && touched.category ? "input-error" : ""}
        >
          <option value="ECONOMY">ECONOMY</option>
          <option value="VIP">VIP</option>
          <option value="EXECUTIVE">EXECUTIVE</option>
          <option value="PRESIDENTIAL">PRESIDENTIAL</option>
        </select>
        {errors.category && touched.category ? (
          <p className="error"> {errors.category} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input
          value={values.price}
          id="number"
          name="price"
          placeholder="Enter Room Price"
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.price && touched.price ? "input-error" : ""}
        />
        {errors.price && touched.price ? (
          <p className="error"> {errors.price} </p>
        ) : (
          ""
        )}
      </div>

      <div>
        <button type="submit">Add Room</button>
      </div>
    </form>
  );
}
