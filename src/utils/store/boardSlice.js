import { createSlice, current } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const boardSlice = createSlice({
  name: "Board",
  initialState: {
    allBoards: data,
    selectedBoard: 0,
  },
  reducers: {
    setBoard: (action) => {
      return action.payload;
    },
    isSubTaskCompleted: (state, action) => {
      const val = state.allBoards.boards[state.selectedBoard].columns;
      let data = val
        .find((v) => v.name === action.payload[1])
        .tasks.find((task) => task.id == action.payload[2].id)
        .subtasks.find((item) => item.id == action.payload[0].id);

      data.isCompleted = !data.isCompleted;
    },
    addNewTask: (state, action) => {
      console.log(action.payload, 33);
      const val = state.allBoards.boards[state.selectedBoard].columns;
      const data = val.find((column) => column.name === action.payload.status);
      data.tasks.push({ id: 4, ...action.payload });
    },
  },
});

export default boardSlice.reducer;
export const { setBoard, isSubTaskCompleted, addNewTask } = boardSlice.actions;
