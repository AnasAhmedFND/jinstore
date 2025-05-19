import { configureStore } from '@reduxjs/toolkit'
import reducer, { cart_Slice } from './Components/Slice_/cart_Slice'
import { wish_Slice } from './Components/Slice_/wish_Slice'

export default configureStore({
  reducer: {
    cartItemSlice:cart_Slice.reducer,
    wishItemSlice:wish_Slice.reducer
  }
})