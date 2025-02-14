
import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

const CartlocalStorge = () => {
  const getcarts = localStorage.getItem("cart-food");
  return getcarts ? JSON.parse(getcarts) : []
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart-food" , JSON.stringify(cart))
}

const cartslice = createSlice({
  name: "cartslice",
  initialState: CartlocalStorge(),
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
      saveCartToLocalStorage(state);

    },
    morequantity: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        foundedproduct.quantity += 1;
      }
      saveCartToLocalStorage(state);
    },
    lessquantity: (state, action) => {
      const foundedproduct = state.find((product) => product.id === action.payload.id)
      if (foundedproduct) {
        foundedproduct.quantity == 1 ? null : foundedproduct.quantity -= 1;
      }
      saveCartToLocalStorage(state);
    },
    removecart: (state, action) => {
      const updatedCart = state.filter((product) => product.id !== action.payload.id);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    },
  }
})

export const { addItem, morequantity, lessquantity, removecart } = cartslice.actions

export default cartslice.reducer