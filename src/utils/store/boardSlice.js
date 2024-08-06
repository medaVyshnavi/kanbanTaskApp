import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
    addNewboard: (state, action) => {
      state.allBoards.boards.push({
        id: uuidv4(),
        name: action.payload,
        columns: [],
      });
      state.selectedBoard =
        state.allBoards.boards[state.allBoards.boards.length - 1].id;
    },
    addNewTask: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      const val = state.allBoards.boards[index].columns.find(
        (column) => column.name === action.payload.status
      );

      val.tasks.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    addNewColumn: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      if (state.allBoards.boards[index].columns.length === 0) {
        state.allBoards.boards[index].columns.push({
          id: uuidv4(),
          name: action.payload,
          tasks: [],
        });
      } else {
        state.allBoards.boards[index].columns.push({
          id: uuidv4(),
          name: action.payload,
          tasks: [],
        });
      }
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
      data.tasks.splice(action.payload[0].id, 1);
    },
    updateBoard: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      state.allBoards.boards.splice(0, 1, action.payload);
    },
    updateTask: (state, action) => {
      const index = state.allBoards.boards.findIndex(
        (board) => board.id === state.selectedBoard
      );
      const val = state.allBoards.boards[index].columns.find(
        (column) => column.name === action.payload[1]
      );
      const taskIndex = val.tasks.findIndex(
        (task) => task.id == action.payload[0]["id"]
      );
      if (taskIndex !== -1) {
        val.tasks[taskIndex] = action.payload[0];
      }
    },
  },
});

export default boardSlice.reducer;
export const {
  setBoard,
  isSubTaskCompleted,
  addNewTask,
  addNewboard,
  addNewColumn,
  deleteBoard,
  deleteTask,
  updateBoard,
  updateTask,
} = boardSlice.actions;
