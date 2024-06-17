import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import loginReducer from "./slice/LoginSlice";
import mobileReducer from "./slice/MobileSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    mobile: mobileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
