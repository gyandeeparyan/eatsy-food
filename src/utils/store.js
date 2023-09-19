import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import app from './appSlice';
const store =configureStore({

    reducer:{
        cart:cartSlice,
        filter:filterSlice,
        app:app,

}})

export default store;