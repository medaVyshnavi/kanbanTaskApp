import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkMode: false,
    sideBar: true,
  },
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    handleSideBar: (state) => {
      state.sideBar = !state.sideBar;
    },
  },
});

export default appSlice.reducer;
export const { changeTheme, handleSideBar } = appSlice.actions;
