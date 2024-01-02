import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import SideBarIcon from "./SideBarIcon";
import TaskCard from "./TaskCard";
import Column from "./Column";

const Body = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = data.boards[0];
  const column = selectedBoard.columns[0];

  return (
    <>
      <div>
        <div
          className={`bg-${
            darkMode ? "dark" : "light"
          } h-[88vh] flex flex-col justify-center items-center  ${
            sideBar ? "pl-72" : "pl-0"
          }`}
        >
          <h1 className="text-lg text-medium-gray pl-5">
            This board is empty. Create a new column to get started.
          </h1>
          <Button text="+ Add New Column" />
        </div>
        {!sideBar && (
          <div className="relative">
            <SideBarIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
