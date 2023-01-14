import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./feautures/authSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
