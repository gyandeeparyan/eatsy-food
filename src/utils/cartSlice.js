import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    
    total: 0,
    isEmpty:true,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price; 
      state.isEmpty = false;
    },
    
    removeItem: (state, action) => {
      if (state.items.length === 1) {
        state.items = [];
        state.total = 0;
        state.isEmpty = true;
      } else {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.total -= action.payload.price; 
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.isEmpty = true;
    },
    increase:(state,{payload})=>{
      const cartItem= state.items.find((item)=>item.id=== payload.id)
      cartItem.amount+=1
    },
    decrease:(state,{payload})=>{
      const cartItem= state.items.find((item)=>item.id=== payload.id)
      cartItem.amount-=1
    },
    // calculateTotals:(state)=>{
    // let amount =0
    // let total =0
    // state.items.forEach((item)=>{
    //   // amount+=item.amount;
    //   total+= item.price
    // })
    // // state.amount=amount;
    // state.total =total;    
    // }
  },
});

export const { addItem, removeItem, clearCart,increase,decrease,calculateTotals,isEmpty } = cartSlice.actions;

export default cartSlice.reducer;
