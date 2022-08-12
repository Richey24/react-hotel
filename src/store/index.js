import { configureStore } from "@reduxjs/toolkit";
import { roomReducer } from "./room.module"
import { customerReducer } from "./customer.module";
import { bookingReducer } from "./bookings.module";
import { serviceReducer } from "./services.module";
import { authReducer } from "./authentication.module";

export default configureStore({
  reducer: {
    roomModule: roomReducer,
    customerModule: customerReducer,
    bookingModule: bookingReducer,
    serviceModule: serviceReducer,
    authModule: authReducer
  }
})