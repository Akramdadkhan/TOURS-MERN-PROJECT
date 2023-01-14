import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./feautures/authSlice";
import TourReducer from "./feautures/tourSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    tour: TourReducer,
  },
});
