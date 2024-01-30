import React from "react";
import Column from "./Column";
import { useSelector } from "react-redux";
import SideBarIcon from "./SideBarIcon";
import NewColumn from "./NewColumn";

const Board = () => {
  const data = useSelector((state) => state.board.allBoards);
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const selectedBoardDetails = data.boards[selectedBoard].columns;

  return (
    <div className="overflow-y-auto">
      <div
        className={`bg-${
          darkMode ? "dark" : "light"
        } h-[88vh] flex justify-start  ${sideBar ? "pl-[19rem]" : "pl-0 "}`}
      >
        {selectedBoardDetails.map((board, index) => (
          <Column data={board} key={index} />
        ))}
        <NewColumn />
      </div>
      {!sideBar && (
        <div>
          <SideBarIcon />
        </div>
      )}
    </div>
  );
};

export default Board;
