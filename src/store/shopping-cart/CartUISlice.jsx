import { createSlice } from "@reduxjs/toolkit";

const CartUiSlice = createSlice({
  name:'CartUiSlice',
  initialState: {cartIsVisible:false},
  reducers: {
    toggle:(state)=>{
      state.cartIsVisible = !state.cartIsVisible
    }
  }
})


export const {toggle} = CartUiSlice.actions

export default CartUiSlice.reducer