import React from "react";
import Column from "./Column";
import { useSelector } from "react-redux";
import SideBarIcon from "./SideBarIcon";
import NewColumn from "./NewColumn";

const Board = () => {
  const data = useSelector((state) => state.board.allBoards);
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  const selectedBoard = data.boards[0].columns;

  return (
    <div className="py-5 px-5 overflow-y-auto">
      <div
        className={`bg-${
          darkMode ? "dark" : "light"
        } h-[88vh] flex justify-start  ${sideBar ? "pl-72" : "pl-0 "}`}
      >
        {selectedBoard.map((board, index) => (
          <Column data={board} key={index} />
        ))}
        <NewColumn />
      </div>
      {!sideBar && (
        <div className="relative">
          <SideBarIcon />
        </div>
      )}
    </div>
  );
};

export default Board;
