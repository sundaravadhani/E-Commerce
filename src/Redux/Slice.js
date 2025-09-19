import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
     items:[],
     total:0
  },
  reducers: {
    addtoCart: (state,action) => {
      const exist=state.items.find((x)=>x.Id==action.payload.Id)
      if(!exist){
      state.items.push(action.payload)
      }
      else{
               alert(`${exist.Brand} already in your cart`)
          }
    },
    removefromCart: (state,action) => {
      state.items =state.items.filter((x)=>x.Id!==action.payload)
    },
    
  },
})

export const { addtoCart, removefromCart } = cartSlice.actions

export default cartSlice.reducer