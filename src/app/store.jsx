import { configureStore } from "@reduxjs/toolkit";


import LoginSlice from "./features/LoginSlice";
import ModalSlice from "./features/ModalSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    modal: ModalSlice,
   
  },
});
