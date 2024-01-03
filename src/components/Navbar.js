import React from "react";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo-light.svg";
import { useSelector } from "react-redux";
import iconBoard from "../assets/icon-board.svg";
import NavFooter from "./NavFooter";

const Navbar = () => {
  const selector = useSelector((state) => state.board.allBoards.boards);
  const darkMode = useSelector((state) => state.app.darkMode);
  const sideBar = useSelector((state) => state.app.sideBar);
  return (
    <>
      {sideBar ? (
        <nav
          className={`bg-${
            darkMode ? "dark-gray" : "white"
          } h-screen w-[300px] absolute top-0 pt-8 pl-[34px] border-r-[1px] border-${
            darkMode ? "linesDark" : "linesLight"
          }
          `}
        >
          <div>
            <img src={darkMode ? lightLogo : darkLogo} alt="logo" />
            <h3 className="text-xs text-mediumGray pt-14 pb-2">
              ALL BOARDS ({selector.length})
            </h3>
            <div>
              {selector.map((item, index) => (
                <div
                  key={index}
                  className="flex text-mediumGray my-2 items-center h-12"
                >
                  <img src={iconBoard} alt="board-icon" className="w-4 h-4" />
                  <h4 className="text-base px-3">{item.name}</h4>
                </div>
              ))}
              <div className="flex text-purple items-center h-12 my-2">
                <img src={iconBoard} alt="board-icon" className="w-4 h-4" />
                <h4 className="text-base px-3">+ Create New Board</h4>
              </div>
            </div>
            <div>
              <NavFooter />
            </div>
          </div>
        </nav>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
