import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
  modalid: "",
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (s, a) => {
      s.modal = !s.modal;
      a.payload && (s.modalid = String(a.payload));
    },
  },
});

export const { setModal } = ModalSlice.actions;

export default ModalSlice.reducer;
