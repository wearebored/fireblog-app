import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uyari: false,
  message: "",
};

const UyariSlice = createSlice({
  name: "uyari",
  initialState,
  reducers: {
    setUyari: (s, a) => {
      s.uyari = true;
      s.message = a.payload;
    },
    setUyariFalse: (s, a) => {
      s.uyari = false;
      s.message = "";
    },
  },
});

export const { setUyari,setUyariFalse} = UyariSlice.actions;

export default UyariSlice.reducer;
