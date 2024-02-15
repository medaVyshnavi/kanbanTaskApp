import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewColumn } from "../utils/store/boardSlice";
import Button from "./Button";

const AddNewColumn = ({ close }) => {
  const dispatch = useDispatch();
  const [newColumn, setNewColumn] = useState("");

  const newBoardHandler = () => {
    dispatch(addNewColumn(newColumn));
    close();
  };

  return (
    <div className="text-mediumGray tracking-wide">
      <h1 className="text-xl text-black">Add New Column</h1>
      <div className="flex flex-col my-3">
        <label htmlFor="name" className="text-xs font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={newColumn}
          onChange={(e) => setNewColumn(e.target.value)}
          placeholder="e.g. Todo"
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1"
        />
      </div>
      <div className="flex flex-col">
        <Button
          text="Create New Column"
          className="bg-purple text-white"
          click={newBoardHandler}
        />
      </div>
    </div>
  );
};

export default AddNewColumn;
