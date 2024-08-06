import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cross from "../assets/icon-cross.svg";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { updateBoard } from "../utils/store/boardSlice";

const EditBoard = ({ close }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const val = data.boards.find((board) => board.id === selectedBoard);
  const darkMode = useSelector((state) => state.app.darkMode);

  const [boardName, setBoardName] = useState(val.name);
  const [boardColumns, setBoardColumns] = useState(val.columns);

  const handleEditColumnName = (column, e) => {
    let res = boardColumns.map((board) =>
      board.id === column.id ? { ...board, name: e.target.value } : board
    );
    setBoardColumns(res);
  };

  const handleAddNewColumn = () => {
    setBoardColumns([...boardColumns, { id: uuidv4(), name: "", tasks: [] }]);
  };

  const handleSaveTasks = () => {
    const res = { id: val.id, name: boardName, columns: boardColumns };
    console.log(res);
    dispatch(updateBoard(res));
    close();
  };

  const handleRemoveTask = (id) => {
    let res = boardColumns.filter((col) => col.id !== id);
    setBoardColumns(res);
  };

  return (
    <div>
      <h1 className="font-lg">Edit Board</h1>
      <div className="flex flex-col my-3">
        <label htmlFor="name" className="text-xs font-bold text-mediumGray">
          Board Name
        </label>
        <input
          type="text"
          name="name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder="e.g. Web Design"
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1"
        />
      </div>
      <div>
        <label htmlFor="name" className="text-xs font-bold text-mediumGray">
          Board Columns
        </label>
        {boardColumns.map((col) => (
          <div className="flex justify-between items-center" key={col.id}>
            <input
              type="text"
              value={col.name}
              name="columnName"
              onChange={(e) => handleEditColumnName(col, e)}
              className={`${
                darkMode
                  ? "bg-darkGray border-dark"
                  : "bg-white border-linesLight "
              } flex-1 text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none`}
            />
            <img
              src={Cross}
              alt="cancel"
              className={`ml-6 cursor-pointe`}
              onClick={() => handleRemoveTask(col.id)}
            />
          </div>
        ))}
      </div>
      <Button
        text="+Add New Column"
        className={`text-purple bg-light hover:${
          darkMode ? "bg-white" : "bg-purpleHover "
        }r block w-full`}
        click={handleAddNewColumn}
      />
      <Button
        text="Save Changes"
        type="submit"
        className="bg-purple text-white hover:bg-purpleHover block w-full"
        click={handleSaveTasks}
      />
    </div>
  );
};

export default EditBoard;
