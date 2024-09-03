import React from "react";
import Column from "./Column";
import { useSelector } from "react-redux";
import SideBarIcon from "./SideBarIcon";
import NewColumn from "./NewColumn";

const Board = () => {
  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const val = data.boards.find((board) => board.id === selectedBoard);
  const newData = data.boards.indexOf(val);
  const selectedBoardDetails = data.boards[newData]?.columns;

  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);

  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-dark" : "bg-light"
        } h-[88vh] flex justify-start pt-3 ${
          sideBar ? "pl-3 md:pl-80" : "pl-4 "
        } w-fit bg`}
      >
        {selectedBoardDetails?.map((board, index) => (
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
