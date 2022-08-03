import Table from "../components/table"

const headers = [
  { text: "Room #", value: "room" },
  { text: "Type", value: "type" },
  { text: "Status", value: "status" },
  { text: "Price", value: "price" },
  { text: "Action", value: "action" }
]

const items = [
  {
    room: "1",
    type: "economy",
    status: "Available",
    price: "400",
    action: "Delete"
  },
  {
    room: "1",
    type: "economy",
    status: "Available",
    price: "400",
    action: "Delete"
  }
]


function RoomPage() {
  return (
    <div className="page_content">
      <div className="">
      </div>
      <Table headers={ headers } items={ items } />
    </div>
  );
}

export default RoomPage;