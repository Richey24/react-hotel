// import layoutRoutes from "./routes/layout.routes";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import RoomPage from "./pages/Rooms" 
import ServicesPage from "./pages/Services"
import CustomersPage from "./pages/Customers"
import DashboardPage from "./pages/Dashboard"
import BookingsPage from "./pages/Bookings"
import Error404Page from "./pages/404";
import LoginPage from "./pages/Login";
import AppLayout from "./layouts/AppLayout"

function App() {
  
  const { isLoggedIn, loggedInUser } = useSelector((state) => state.authModule);
  return (
    /**
     * React Router requires every route to be wrapped inside a Routes tag to make routing work
     * Each Route tag contains the url and the component that should be displayed on that route
     * The "path" attribute describe the url of the page and the "element" attribute holds the 
     * component that will get displayed on that route
     **/
    <Routes>
      <Route path="/" element={<Navigate to={ isLoggedIn ? "/app/dashboard" : "/login" }/>}/> 
      <Route path="/login" element={<LoginPage/>} />
      <Route path="app" element={ isLoggedIn ? <AppLayout/> : <Navigate to="/login"/> }>
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
