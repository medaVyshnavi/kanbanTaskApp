import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "./boardSlice";
import appSlice from "./appSlice";

const appStore = configureStore({
  reducer: {
    board: boardSlice,
    app: appSlice,
  },
});

export default appStore;
