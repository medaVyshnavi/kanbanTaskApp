import React, { useState } from "react";
import lightTheme from "../assets/icon-light-theme.svg";
import darkTheme from "../assets/icon-dark-theme.svg";
import { useDispatch, useSelector } from "react-redux";
import iconBoard from "../assets/icon-board.svg";
import iconBoardFilled from "../assets/filled/icon-board.svg";
import iconBoardWhite from "../assets/filled/icon-board-white.svg";
import { setBoard } from "../utils/store/boardSlice";
import Modal from "./Modal";
import { changeTheme } from "../utils/store/appSlice";


const Menu = ({ openMenu,setOpenMenu }) => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.board);
  const darkMode = useSelector((state) => state.app.darkMode);

  const boardData = board.allBoards.boards;
  const selectedBoard = board.selectedBoard;

  const handleSelectBoard = (id) => {
    dispatch(setBoard(id));
  };

  const handleCloseModal = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenModel = () => {
    // setIsOpen(true);
  };

  return (
    <Modal open={openMenu} close={handleCloseModal}>
      <div className="absolute z-20 top-0 left-0">
        <nav
          className={`bg-${
            darkMode ? "darkGray" : "white"
          } h-[322px] w-[264px] absolute top-0 border-r-[1px] border-${
            darkMode ? "linesDark" : "linesLight"
          }
          `}
        >
          <div>
            <div className="px-[34px]">
              <h3 className="text-xs text-mediumGray py-5">
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
          </div>
          <div
            className={`bg-${
              darkMode ? "dark" : "light"
            } flex rounded-md items-center justify-center mx-3 py-3 px-2`}
          >
            <img src={lightTheme} alt="light theme" className="w-5 h-5" />
            <div className="px-6 cursor-pointer">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onClick={() => dispatch(changeTheme())}
                />
                <div className="w-10 h-5 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple dark:peer-focus:ring-purple rounded-full peer dark:bg-purple peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-purple after:content-[''] after:absolute after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
              </label>
            </div>

            <img src={darkTheme} alt="dark theme" className="w-4 h-4" />
          </div>
        </nav>
      </div>
    </Modal>
  );
};

export default Menu;
