import React, { useState } from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "./Button";
import { useSelector } from "react-redux";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo-light.svg";
import Modal from "./Modal";
import AddNewTask from "./AddNewTask";
import Actions from "./Actions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openActions, setOpenActions] = useState(false);
  const [isDeleteBoard, setIsDeleteBoard] = useState(false);

  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  const boardList = useSelector((state) => state.board.allBoards.boards);
  const boardIndex = useSelector((state) => state.board.selectedBoard);

  const boardName = boardList
    ?.filter((board) => board.id == boardIndex)
    ?.map((board) => board.name);

  const selecteBoardColumn = boardList?.filter(
    (board) => board.id == boardIndex
  );

  const isDisabled =
    selecteBoardColumn && selecteBoardColumn[0].columns?.length > 0
      ? false
      : true;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModel = () => {
    setIsOpen(true);
  };

  const handleActions = () => {
    setOpenActions(!openActions);
  };

  return (
    <div
      className={`bg-${darkMode ? "darkGray" : "white"} ${
        !sideBar &&
        `flex justify-start items-center border-b-[1px] relative ${
          darkMode ? "border-linesDark" : "border-linesLight"
        }`
      } `}
    >
      {!sideBar && (
        <img
          src={darkMode ? lightLogo : darkLogo}
          alt="logo"
          className="pl-10"
        />
      )}
      <div
        className={`flex justify-between items-center bg-${
          darkMode ? "darkGray" : "white"
        } ${
          sideBar ? "pl-80 border-b-[1px]" : "ml-12 flex-1 border-l-[1px]"
        } h-24 border-${darkMode ? "linesDark" : "linesLight"} `}
      >
        {" "}
        <h1 className={`text-xl text-${darkMode ? "white" : "black"} pl-4`}>
          {boardName}
        </h1>
        <div className="flex justify-between items-center pr-10">
          <Button
            text="+ Add New Task"
            click={handleOpenModel}
            disabled={isDisabled}
            className={`text-white hover:bg-purpleHover ${
              isDisabled ? "bg-purpleHover" : "bg-purple"
            }`}
          />
          <img
            src={ellipsis}
            alt="ellipse"
            className="ml-6 cursor-pointer"
            onClick={handleActions}
          />
        </div>
      </div>
      <Modal open={isOpen} close={handleCloseModal} styles="top-[5%]">
        <AddNewTask close={handleCloseModal} />
      </Modal>
      {openActions && (
        <Actions
          setOpenActions={setOpenActions}
          title={"Delete this Board?"}
          message={`Are you sure you want to delete the '${boardName}' board? This action will remove all columns and tasks and cannot be reversed.`}
          index={boardIndex}
          type="Board"
          deleteItem={isDeleteBoard}
          setDeleteItem={setIsDeleteBoard}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Header;
