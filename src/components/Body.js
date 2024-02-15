import React from "react";
import { useSelector } from "react-redux";
import EmptyBoard from "./EmptyBoard";
import Board from "./Board";

const Body = () => {
  const boardList = useSelector((state) => state.board.allBoards.boards);
  const boardIndex = useSelector((state) => state.board.selectedBoard);
  const board = boardList.filter((board) => board.id === boardIndex);
  return (
    <div>{board[0].columns.length === 0 ? <EmptyBoard /> : <Board />}</div>
  );
};

export default Body;
