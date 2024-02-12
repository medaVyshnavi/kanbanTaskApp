import { createSlice, current } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const boardSlice = createSlice({
  name: "Board",
  initialState: {
    allBoards: data,
    selectedBoard: data.boards[0].id,
  },
  reducers: {
    setBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
    isSubTaskCompleted: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      const val = state.allBoards.boards[index].columns;
      let data = val
        .find((v) => v.name === action.payload[1])
        .tasks.find((task) => task.id == action.payload[2].id)
        .subtasks.find((item) => item.id == action.payload[0].id);

      data.isCompleted = !data.isCompleted;
    },
    addNewTask: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      const val = state.allBoards.boards[index].columns.find(
        (column) => column.name === action.payload.status
      );
      let obj = val.tasks.reduce((a, c) => ((a[c.id] = c), a), {});
      val.tasks.push({
        id: Math.max(...Object.keys(obj)) + 1,
        ...action.payload,
      });
    },
    deleteBoard: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === action.payload
      );
      index !== -1 && state.allBoards.boards.splice(index, 1);
      state.selectedBoard = state.allBoards.boards[0].id;
    },
    deleteTask: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      const val = state.allBoards.boards[index].columns;
      const data = val.find((column) => column.name == action.payload[1]);
      data.tasks.splice(action.payload[0], 1);
    },
  },
});

export default boardSlice.reducer;
export const {
  setBoard,
  isSubTaskCompleted,
  addNewTask,
  deleteBoard,
  deleteTask,
} = boardSlice.actions;
