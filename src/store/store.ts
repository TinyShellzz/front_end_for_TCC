import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice";
import loginReducer from "./slice/LoginSlice";
import mobileReducer from "./slice/MobileSlice";
import ChapterReducer from "./doc_slice/ChapterSlice";
import EditDocumentReducer from "./doc_slice/EditDocumentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    mobile: mobileReducer,
    chapter: ChapterReducer,
    edit: EditDocumentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
