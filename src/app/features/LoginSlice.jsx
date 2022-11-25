import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  uid: "",
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    setLogout: (state, action) => {
      state.email = "";
      state.uid = "";
    },
    setLoginData: (state, action) => {},
  },
});

export const { setLogin, setLogout, setLoginData } = LoginSlice.actions;

export default LoginSlice.reducer;
