import "./styles/app.css";
import "./styles/form.css";
import { Routes, Route } from "react-router-dom";
import layoutRoutes from "./routes/layout.routes";

import RoomPage from "./pages/Rooms"
import ServicesPage from "./pages/Services"
import CustomersPage from "./pages/Customers"
import DashboardPage from "./pages/Dashboard"
import BookingsPage from "./pages/Bookings"
import Error404Page from "./pages/404";
import LoginPage from "./pages/Login";
import AppLayout from "./layouts/AppLayout"

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="app" element={<AppLayout/>}>
        <Route path="dashboard" element={<DashboardPage/>}/>
        <Route path="rooms" element={<RoomPage/>}/>
        <Route path="services" element={<ServicesPage/>}/>
        <Route path="customers" element={<CustomersPage/>}/>
        <Route path="bookings" element={<BookingsPage/>}/>
      </Route>
      <Route path="*" element={<Error404Page/>}/>
    </Routes>

    // <Routes>
    //   {layoutRoutes.map((route, index) =>
    //     route.children ? (
    //       <Route path={route.path} element={route.component} key={index}>
    //         {route.children.map((childRoute, index) => (
    //           <Route path={childRoute.path} element={childRoute.component} key={index} />
    //         ))}
    //       </Route>
    //     ) : (
    //       <Route path={route.path} element={route.component} key={index} />
    //     )
    //   )}
    // </Routes>
  );
}

export default App;
