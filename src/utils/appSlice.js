import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
  isDark: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },

}})

export const { toggleTheme } = appSlice.actions;
export default appSlice.reducer;