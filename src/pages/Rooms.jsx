import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Table";
import roomSchema from "../schemas/room.schema";
import { roomActions } from "../store/room.module";
import { fetchRooms, addRoom, deleteRoom } from "../services/rooms.service";
import { useEffect } from "react";
import Button from "../components/form/Button";
import SelectInput from "../components/form/SelectInput";
import TextInput from "../components/form/TextInput";

/**
 * 
 * @returns A react component representing the room page
 */
export default function RoomPage() {
  const dispatch = useDispatch(); //stores the dispatch hook for later use
  
  //Function that deletes a room from the database
  const handleClick = (props) =>
    deleteRoom(props.id).then((res) =>
      fetchRooms().then((res) => dispatch(roomActions.setRooms(res.data.rooms)))
    );

  //react hook that runs when the page loads
  useEffect(() => {
    //fetch the all the rooms from the database
    fetchRooms().then((res) => dispatch(roomActions.setRooms(res.data.rooms)));
  }, [dispatch]);

  /**
   * A list of all the headers for the table
   * The text represent the display name
   * The value represent the corresponding item property name
   * */ 
  const headers = [
    { text: "Room #", value: "roomNum" },
    { text: "Type", value: "category" },
    { text: "Status", value: "isAvailable" },
    { text: "Price", value: "price" },
    {
      text: "Action",
      //A react component representing the delete button for the table
      value: (props) => {
        return (
          <span className="icon cursor-pointer text-red-400" onClick={() => handleClick(props)}>
            <i className="fa fa-trash"></i>
          </span>
        );
      },
      isJSX: true,
    },
  ];

  /**
   * Returns the JSX representation of the room for page
   */
  return (
    <div className="flex gap-10 justify-center mx-auto items-start flex-wrap">
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

/**
 * 
 * @returns A react componen representing the rooms form
 */
function RoomForm() {
  const dispatch = useDispatch(); //stores the dispatch for later use 
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =  useFormik({
    //initial value of the form inputs  
    initialValues: {
        roomNum: "",
        category: "ECONOMY",
        isAvailable: true,
        price: "",
      },

      //The yup schema for valudation 
      validationSchema: roomSchema,

      //The submit function that runs when the user clicks the submit button
      onSubmit: (values) => {
        //Sends a request to the api to add the room when submit button is click
        addRoom(values).then((res) => {
          if (res.status === 200) {
            fetchRooms().then((res) =>
              dispatch(roomActions.setRooms(res.data.rooms))
            );
          }
        });
      },
    });

  /**
   * Returns the JSX representation of the room form
   */
  return (
    <form 
      onSubmit={handleSubmit} 
      autoComplete="off"
      className="flex flex-col gap-10 p-9 shadow-md shadow-primary-100 bg-white w-[26rem] rounded-md"
    >

    <div>
      <p className="text-xl font-normal text-center pb-3 text-primary-500">Create Room</p>
      <hr/>
    </div>

      <TextInput
        name="roomNum"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.roomNum}
        touched={touched.roomNum}
        label="Room Number"
        value={values.roomNum}
      />

      <SelectInput
        name="category"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.category}
        touched={touched.category}
        label="Type"
        value={values.category}
        items={[
          { text: "ECONOMY", value: "ECONOMY" },
          { text: "VIP", value: "VIP" },
          { text: "EXECUTIVE", value: "EXECUTIVE" },
          { text: "PRESIDENTIAL", value: "PRESIDENTIAL" }
        ]}
      />

      <TextInput
        name="price"
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors.price}
        touched={touched.price}
        label="Price"
        value={values.price}
      />

      <Button text="Add Room"/>
    </form>
  );
}
