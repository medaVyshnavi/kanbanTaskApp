import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";

const appStore = configureStore({
  reducer: {
    board: boardSlice,
  },
});

export default appStore;
