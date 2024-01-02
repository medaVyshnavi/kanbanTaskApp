import React from "react";
import Column from "./Column";
import { useSelector } from "react-redux";

const Board = () => {
  const data = useSelector((state) => state.board.allBoards);
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  const selectedBoard = data.boards[0].columns;

  return (
    <div
      className={`bg-${
        darkMode ? "dark" : "light"
      } h-[88vh] flex justify-center  ${sideBar ? "pl-72" : "pl-0"}`}
    >
      {selectedBoard.map((board, index) => (
        <Column data={board} key={index} />
      ))}
    </div>
  );
};

export default Board;
