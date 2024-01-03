import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const boardSlice = createSlice({
  name: "Board",
  initialState: {
    allBoards: data,
    selectedBoard: 1,
  },
  reducers: {
    setBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
  },
});

export default boardSlice.reducer;
export const { setBoard } = boardSlice.actions;
