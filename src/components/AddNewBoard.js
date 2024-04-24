import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { addNewboard } from "../utils/store/boardSlice";

const AddNewBoard = ({ close }) => {
  const dispatch = useDispatch();
  const [newBoard, setNewBoard] = useState("");
  const [error,setError] = useState(false)

  const newBoardHandler = () => {
    if(newBoard.length == 0){
      setError(true)
      return
    }
    dispatch(addNewboard(newBoard));
    close();
  };

  return (
    <div className="text-mediumGray tracking-wide">
      <h1 className="text-xl text-black">Add New Board</h1>
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
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1"
        />
        <p className="text-red text-[10px] ml-1">{error ? "Board name is required" : ""}</p>
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
