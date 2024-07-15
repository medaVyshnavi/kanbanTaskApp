import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewColumn } from "../utils/store/boardSlice";
import Button from "./Button";

const AddNewColumn = ({ close }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const val = data.boards.find((board) => board.id === selectedBoard);
  const newData = data.boards.indexOf(val);
  const selectedBoardColumns = data.boards[newData]?.columns?.map((col) =>
    col.name.toLowerCase()
  );

  const [newColumn, setNewColumn] = useState("");
  const [error, setError] = useState({ name: false, duplicate: false });

  const newBoardHandler = () => {
    if (newColumn.length == 0) {
      setError((prev) => ({ ...prev, name: true }));
      return;
    }
    if (selectedBoardColumns.includes(newColumn.toLowerCase())) {
      setError((prev) => ({ ...prev, duplicate: true }));
      return;
    }
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
        <p className="text-red text-[10px] ml-1">
          {error?.name ? "Column name is required" : ""}
          {error?.duplicate ? "Duplicate Board name." : ""}
        </p>
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
