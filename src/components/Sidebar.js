import React, { useState } from "react";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo-light.svg";
import { useDispatch, useSelector } from "react-redux";
import iconBoard from "../assets/icon-board.svg";
import iconBoardFilled from "../assets/filled/icon-board.svg";
import iconBoardWhite from "../assets/filled/icon-board-white.svg";
import NavFooter from "./NavFooter";
import { setBoard } from "../utils/store/boardSlice";
import Modal from "./Modal";
import AddNewBoard from "./AddNewBoard";

const Sidebar = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);

  const boardData = board.allBoards.boards;
  const selectedBoard = board.selectedBoard;

  const [isOpen, setIsOpen] = useState(false);

  const handleSelectBoard = (id) => {
    dispatch(setBoard(id));
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModel = () => {
    setIsOpen(true);
  };

  return (
    <div className="hidden md:block">
      {sideBar ? (
        <nav
          className={`bg-${
            darkMode ? "darkGray" : "white"
          } h-screen w-[300px] absolute top-0 pt-8 border-r-[1px] border-${
            darkMode ? "linesDark" : "linesLight"
          }
          `}
        >
          <div>
            <div className="px-[34px]">
              <img src={darkMode ? lightLogo : darkLogo} alt="logo" />
              <h3 className="text-xs text-mediumGray pt-14 pb-2">
                ALL BOARDS ({boardData?.length})
              </h3>
            </div>

            <div>
              {boardData?.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    selectedBoard == item.id
                      ? "bg-purple  text-white"
                      : "text-mediumGray hover:bg-lightGray hover:text-purple"
                  } mr-6 rounded-r-3xl`}
                  onClick={() => handleSelectBoard(item.id)}
                >
                  <div
                    key={item.index}
                    className="flex items-center h-12 pl-[34px]"
                  >
                    <img
                      src={
                        selectedBoard == item.id ? iconBoardWhite : iconBoard
                      }
                      alt="board-icon"
                      className="w-4 h-4"
                    />
                    <h4 className="text-base px-3 cursor-pointer">
                      {item.name}
                    </h4>
                  </div>
                </div>
              ))}
              <div className="flex text-purple items-center h-12 my-2 pl-[34px]">
                <img
                  src={iconBoardFilled}
                  alt="board-icon"
                  className="w-4 h-4 text-purple"
                />
                <h4
                  className="text-base px-3 cursor-pointer"
                  onClick={handleOpenModel}
                >
                  + Create New Board
                </h4>
              </div>
            </div>
            <div className="px-[34px]">
              <NavFooter />
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
      <Modal open={isOpen} close={handleCloseModal}>
        <AddNewBoard close={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default Sidebar;
