import { createSlice } from '@reduxjs/toolkit'

export const wish_Slice = createSlice({
  name: 'wishItemSlice',
  initialState: {
    wishItem: localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : []
  },
  reducers: {
    addToWish: (state, action) => {
        let findProduct = state.wishItem.findIndex((item) => item.id === action.payload.id);
        
        if(findProduct === -1) {
            state.wishItem.push(action.payload)
            localStorage.setItem("wish", JSON.stringify(state.wishItem));
            
        }else{
            state.wishItem[findProduct].qty += 1;
            localStorage.setItem("wish", JSON.stringify(state.wishItem));
        }               

    },

    deleteWishItem: (state, action) => {
        state.wishItem.splice(action.payload, 1)
        localStorage.setItem("wish", JSON.stringify(state.wishItem));

    }

   
   
  }
})


export const { addToWish, deleteWishItem } = wish_Slice.actions

export default wish_Slice.reducer