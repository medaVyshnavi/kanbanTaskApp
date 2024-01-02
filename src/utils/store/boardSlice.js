import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const boardSlice = createSlice({
  name: "Board",
  initialState: {
    allBoards: data,
  },
  reducers: {
    // getBoardData: (state, action) => {
    //   state.allBoards = action.payload;
    // },
  },
});

export default boardSlice.reducer;
export const { getBoardData } = boardSlice.actions;
