import RoomPage from "../pages/Rooms"
import ServicesPage from "../pages/Services"
import CustomersPage from "../pages/Customers"
import DashboardPage from "../pages/Dashboard"
import BookingsPage from "../pages/Bookings"

const routes = [
  {
    path: "dashboard",
    component: <DashboardPage/>
  },
  {
    path: "customers",
    component: <CustomersPage/>
  },
  {
    path: "bookings",
    component: <BookingsPage/>
  },
  {
    path: "rooms",
    component: <RoomPage/>
  },
  {
    path: "services",
    component: <ServicesPage/>
  }
]

export default routes;