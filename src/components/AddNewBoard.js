import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addNewboard } from "../utils/store/boardSlice";

const AddNewBoard = ({ close }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.board.allBoards.boards);
  const boardNameList = data.map((board) => board.name.toLowerCase());
  const darkMode = useSelector((state) => state.app.darkMode);

  const [newBoard, setNewBoard] = useState("");
  const [error, setError] = useState({ name: false, duplicate: false });

  const newBoardHandler = () => {
    if (newBoard.length === 0) {
      setError((prev) => ({ ...prev, name: true }));
      return;
    }
    if (boardNameList.includes(newBoard.toLowerCase())) {
      setError((prev) => ({ ...prev, duplicate: true }));
      return;
    }
    dispatch(addNewboard(newBoard));
    close();
  };

  return (
    <div className="text-mediumGray tracking-wide">
      <h1
        className={`text-xl ${
          darkMode ? "text-white" : "text-black"
        } text-center`}
      >
        Add New Board
      </h1>
      <div className="flex flex-col my-3">
        <label htmlFor="name" className="text-xs font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={newBoard}
          onChange={(e) => setNewBoard(e.target.value)}
          placeholder="e.g. Web Design"
          className={`${
            darkMode
              ? "bg-darkGray border-mediumGray text-white "
              : "bg-white border-linesLight text-black "
          } text-sm border border-1 p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none`}
        />
        <p className="text-red text-[10px] ml-1">
          {error?.name ? "Board name is required" : ""}
          {error?.duplicate ? "Duplicate Board name." : ""}
        </p>
      </div>
      <div className="flex flex-col">
        <Button
          text="Create New Board"
          className="bg-purple text-white"
          click={newBoardHandler}
        />
      </div>
    </div>
  );
};

export default AddNewBoard;
