import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isSubTaskCompleted } from "../utils/store/boardSlice";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";

const ViewTaskModal = ({ mainTask, status, openModal }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const val = data.boards.find((board) => board.id === selectedBoard);
  const newData = data.boards.indexOf(val);
  const selectedBoardDetails = data.boards[newData]?.columns;

  const { title, description, subtasks } = mainTask;
  const completedTask = subtasks.filter((task) => task.isCompleted).length;
  const [taskStatus, setTaskStatus] = useState(status);

  const handleCheckbox = (task, status) => {
    dispatch(isSubTaskCompleted([task, status, mainTask]));
  };

  const handleInputChange = (e) => {
    console.log(e.target.value, 777);
  };

  return (
    <div className="text-black">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg flex-1">{title}</h1>
        <img
          src={ellipsis}
          alt="ellipse"
          className="ml-6 cursor-pointer"
          onClick={() => openModal()}
        />
      </div>

      <p className="text-sm text-mediumGray mb-5 leading-6">{description}</p>
      <p className="text-xs text-mediumGray mb-2">{`Subtasks(${completedTask} of ${subtasks.length})`}</p>
      <div>
        {subtasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-start items-center px-5 py-3 rounded-md bg-light ${
              task.isCompleted &&
              "line-through decoration-1 decoration-mediumGray"
            } my-4`}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              className="pr-4 checked:bg-purple rounded-sm hover:checked:bg-purple focus:checked:bg-purple focus:outline-none focus:ring outline-none active:bg-purple"
              onChange={() => {
                handleCheckbox(task, status);
              }}
            />
            <p
              className={`text-xs font-bold pl-6 flex-1 text-${
                task.isCompleted ? "mediumGray" : "black"
              }`}
            >
              {task.title}{" "}
            </p>
          </div>
        ))}
      </div>
      <label className="text-xs mb-3 text-mediumGray">
        Current Status
        <select
          value={taskStatus}
          onChange={(e) => handleInputChange(e)}
          id="status"
          className="text-sm w-full border border-mediumGray rounded-md p-3"
        >
          <option value="" defaultChecked hidden>
            Select status
          </option>
          {selectedBoardDetails.map((column, index) => (
            <option key={index} value={column.name}>
              {column.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ViewTaskModal;
