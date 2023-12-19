import React from "react";
import Logo from "../assets/logo-dark.svg";
import { useSelector } from "react-redux";
import iconBoard from "../assets/icon-board.svg";

const Navbar = () => {
  const selector = useSelector((state) => state.board.allBoards);
  const board = selector.boards;
  return (
    <nav className="bg-yellow-300 ">
      <div>
        <img src={Logo} alt="logo" />
        <h3 className="text-xs text-medium-gray">
          ALL BOARDS ({board.length})
        </h3>
        <div>
          {board.map((item, index) => (
            <div key={index} className="flex text-medium-gray my-2">
              <img src={iconBoard} alt="board-icon" />
              <h4 className="text-base px-3">{item.name}</h4>
            </div>
          ))}
          <div className="flex text-purple">
            <img src={iconBoard} alt="board-icon" />
            <h4 className="text-base px-3">+ Create New Board</h4>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
