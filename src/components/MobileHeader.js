import React from 'react'
import { useSelector } from 'react-redux';
import logo from "../assets/logo-mobile.svg";
import arrow from "../assets/icon-chevron-down.svg"
import plus from "../assets/icon-add-task-mobile.svg";
import menu from "../assets/icon-vertical-ellipsis.svg";

const MobileHeader = () => {

   const boardList = useSelector((state) => state.board.allBoards.boards);
   const boardIndex = useSelector((state) => state.board.selectedBoard);

   const boardName = boardList
     ?.filter((board) => board.id == boardIndex)
     ?.map((board) => board.name);

   const selecteBoardColumn = boardList?.filter(
     (board) => board.id == boardIndex
   );
  
  return (
    <div className="flex justify-between items-center py-4 bg-white">
      <div className="flex flex-start items-center pl-5">
        <img src={logo} alt="dark theme" className="w-6 h-6" />
        <h1 className='px-3'>{boardName}</h1>
        <img src={arrow} alt="down arrow" className="w-2 h-1" />
      </div>
      <div className="flex flex-start items-center px-5">
        <div className="py-3 px-5 rounded-3xl bg-disabled mx-4">
          <img src={plus} alt="down arrow" className="w-3 h-3" />
        </div>
        <img src={menu} alt="menu" className="w-1 h-4" />
      </div>
    </div>
  );
}

export default MobileHeader