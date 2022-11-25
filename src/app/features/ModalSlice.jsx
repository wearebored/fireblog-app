import { createSlice } from '@reduxjs/toolkit'

const initialState = {
modal:false,
modaldata:"",
}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal:(s,a)=>{
        s.modal=!s.modal
        s.modaldata=a.payload
    }
  }
});

export const {setModal} = ModalSlice.actions

export default ModalSlice.reducer