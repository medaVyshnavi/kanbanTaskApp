import React from "react";
import { useSelector } from "react-redux";
import EmptyBoard from "./EmptyBoard";
import Board from "./Board";

const Body = () => {
  const boardList = useSelector((state) => state.board.allBoards.boards);
  const boardIndex = useSelector((state) => state.board.selectedBoard);
  const board = boardList.filter((board) => board.id === boardIndex);
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <div className={`${darkMode ? "bg-dark" : "bg-light"} overflow-x-auto`}>
      {board[0].columns.length === 0 ? <EmptyBoard /> : <Board />}
    </div>
  );
};

export default Body;
