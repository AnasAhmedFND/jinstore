import { createSlice } from '@reduxjs/toolkit'

export const cart_Slice = createSlice({
  name: 'cartItemSlice',
  initialState: {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  },
  reducers: {
    addToCart: (state, action) => {
        let findProduct = state.cartItems.findIndex((item) => item.id === action.payload.id)
        
        if(findProduct === -1) {
            state.cartItems.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
            
        }else{
            state.cartItems[findProduct].qty += 1;
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        }               

    }, 

    deleteCartItem:(state, action) => {
      state.cartItems.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    }
   
  }
})


export const { addToCart, deleteCartItem } = cart_Slice.actions

export default cart_Slice.reducer