import React from "react";
import Logo from "../assets/logo-dark.svg";
import { useSelector } from "react-redux";
import iconBoard from "../assets/icon-board.svg";
import NavFooter from "./NavFooter";

const Navbar = () => {
  const selector = useSelector((state) => state.board.allBoards);
  const darkMode = useSelector((state) => state.app.darkMode);
  const board = selector.boards;
  return (
    <nav
      className={`bg-${
        darkMode ? "dark-gray" : "white"
      } h-screen w-[300px] absolute top-0 pt-8 pl-[34px] border-r-[1px] border-lines-${
        darkMode ? "dark-gray" : "light"
      }`}
    >
      <div>
        <img src={Logo} alt="logo" />
        <h3 className="text-xs text-medium-gray pt-14 pb-2">
          ALL BOARDS ({board.length})
        </h3>
        <div>
          {board.map((item, index) => (
            <div
              key={index}
              className="flex text-medium-gray my-2 items-center"
            >
              <img src={iconBoard} alt="board-icon" className="w-4 h-4" />
              <h4 className="text-base px-3">{item.name}</h4>
            </div>
          ))}
          <div className="flex text-purple items-center">
            <img src={iconBoard} alt="board-icon" className="w-4 h-4" />
            <h4 className="text-base px-3">+ Create New Board</h4>
          </div>
        </div>
        <div>
          <NavFooter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
