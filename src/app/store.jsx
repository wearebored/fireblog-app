import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./features/LoginSlice";
import ModalSlice from "./features/ModalSlice";
import UyariSlice from "./features/UyariSlice";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    modal: ModalSlice,
    uyari: UyariSlice,
  },
});
