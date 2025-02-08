
import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'


const cartslice = createSlice({
  name: "cartslice",
  initialState: [],
  reducers: {
    addItem(state, action) {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {

        Swal.fire({
          title: "This product in your cart.",
          icon: "info"
        });

      } else {
        const productClone = { ...action.payload, quantity: 1 }
        state.push(productClone)

        Swal.fire({
          position: "center",
          icon: "success",
          title: " Added To Cart ",
          showConfirmButton: false,
          timer: 700,
          
        });
      }

      return state

    },
    morequantity: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        foundedproduct.quantity += 1;
      }
    },
    lessquantity: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        foundedproduct.quantity == 1 ? null : foundedproduct.quantity -= 1;
      }
    },
    removecart: (state, action) =>{
      const updatedCart = state.filter((product) => product.id !== action.payload.id);
      return updatedCart;
    },
  }
})

export const { addItem, morequantity, lessquantity , removecart } = cartslice.actions

export default cartslice.reducer