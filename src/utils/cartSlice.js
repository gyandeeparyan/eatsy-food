import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item =>item.id !== action.payload.id);
      state.total -= action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
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

export const { addItem, removeItem, clearCart,increase,decrease,calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
