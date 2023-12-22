import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    darkMode: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default appSlice.reducer;
export const { changeTheme } = appSlice.actions;
