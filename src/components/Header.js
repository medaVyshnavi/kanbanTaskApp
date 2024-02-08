import React, { useState } from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Button from "./Button";
import { useSelector } from "react-redux";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo-light.svg";
import Modal from "./Modal";
import AddNewTask from "./AddNewTask";
import DeletePopup from "./DeletePopup";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);

  const boardList = useSelector((state) => state.board.allBoards.boards);
  const boardIndex = useSelector((state) => state.board.selectedBoard);

  const boardName = boardList
    .filter((board) => (board.id == boardIndex ? board.name : ""))
    .map((board) => board.name);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModel = () => {
    setIsOpen(true);
  };

  const handleDelete = () => {
    setIsDelete(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDelete(false);
  };

  return (
    <div
      className={`bg-${darkMode ? "darkGray" : "white"} ${
        !sideBar &&
        `flex justify-start items-center border-b-[1px] border-${
          darkMode ? "linesDark" : "linesLight"
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
          Platform Launch
        </h1>
        <div className="flex justify-between items-center pr-10">
          <Button text="+ Add New Task" click={handleOpenModel} />
          <img
            src={ellipsis}
            alt="ellipse"
            className="ml-6 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
      </div>
      <Modal open={isOpen} close={handleCloseModal}>
        <AddNewTask />
      </Modal>
      <Modal open={isDelete} close={handleCloseDeleteModal}>
        <DeletePopup
          title="Delete this board?"
          description={`Are you sure you want to delete the '${boardName}' board? This action will remove all columns and tasks and cannot be reversed.`}
        />
      </Modal>
    </div>
  );
};

export default Header;
