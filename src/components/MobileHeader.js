import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import logo from "../assets/logo-mobile.svg";
import arrow from "../assets/icon-chevron-down.svg"
import plus from "../assets/icon-add-task-mobile.svg";
import ellipse from "../assets/icon-vertical-ellipsis.svg";
import Menu from './Menu';
import Modal from "./Modal";
import AddNewTask from "./AddNewTask";
import Actions from "./Actions";

const MobileHeader = ({ open,setOpen }) => {
  const boardList = useSelector((state) => state.board.allBoards.boards);
  const boardIndex = useSelector((state) => state.board.selectedBoard);
  const darkMode = useSelector((state) => state.app.darkMode);
  const [openActions, setOpenActions] = useState(false);
  const [isDeleteBoard, setIsDeleteBoard] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  
  const boardName = boardList
    ?.filter((board) => board.id == boardIndex)
    ?.map((board) => board.name);
  
  const handleOpenMenu = () => {
    setOpen(!open)
  }
   const handleOpenModel = () => {
     setIsOpen(true);
   };
  
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleActions = () => {
    setOpenActions(!openActions);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center py-4 bg-${
          darkMode ? "darkGray" : "white"
        } ${darkMode ? "border-linesDark" : "border-linesLight"}`}
      >
        <div className="flex flex-start items-center pl-5">
          <img src={logo} alt="dark theme" className="w-6 h-6" />
          <h1
            className={`text-base text-${darkMode ? "white" : "black"} pl-4`}
            onClick={handleOpenMenu}
          >
            {boardName}
          </h1>
          <div>
            <img
              src={arrow}
              alt="down arrow"
              className="w-2 h-1 mx-3"
              onClick={handleOpenMenu}
            />
          </div>
        </div>
        <div className="flex flex-start items-center px-5">
          <div
            className="py-3 px-5 rounded-3xl bg-disabled mx-4"
            onClick={handleOpenModel}
          >
            <img src={plus} alt="add icon" className="w-3 h-3" />
          </div>
          <img
            src={ellipse}
            alt="menu"
            className="w-1 h-4"
            onClick={handleActions}
          />
        </div>
      </div>
      {open ? <Menu /> : ""}
      <Modal open={isOpen} close={handleCloseModal}>
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
    </>
  );
};

export default MobileHeader