import { configureStore } from '@reduxjs/toolkit'
import reducer, { cart_Slice } from './Components/Slice_/cart_Slice'

export default configureStore({
  reducer: {
    cartItemSlice:cart_Slice.reducer
  }
})