import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  isSubTaskCompleted,
  updateTaskStatus,
} from "../utils/store/boardSlice";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";
import Actions from "./Actions";

const ViewTaskModal = ({ mainTask, status, setIsOpen,close }) => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.app.darkMode);
  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const val = data.boards.find((board) => board.id === selectedBoard);
  const newData = data.boards.indexOf(val);
  const selectedBoardColumns = data.boards[newData]?.columns?.map(
    (col) => col.name
  );
  const { title, description, subtasks } = mainTask;
  const completedTask = subtasks.filter((task) => task.isCompleted).length;
  const [taskStatus, setTaskStatus] = useState(status);
  const [openActions, setOpenActions] = useState(false);
  const [isDeleteTask, setIsDeleteTask] = useState(false);

  const handleCheckbox = (task, status) => {
    dispatch(isSubTaskCompleted([task, status, mainTask]));
  };

  const handleActions = () => {
    setOpenActions(!openActions);
  };

  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
    dispatch(deleteTask([mainTask, status]));
    dispatch(updateTaskStatus([mainTask, e.target.value]));
    close()
  }

  return (
    <div className={`text-${darkMode ? "white" : "black"}`}>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg flex-1">{title}</h1>
        <img
          src={ellipsis}
          alt="ellipse"
          className="ml-6 cursor-pointer"
          onClick={handleActions}
        />
      </div>

      <p
        className={`text-sm ${
          darkMode ? "text-white" : "text-mediumGray"
        } mb-5 leading-6`}
      >
        {description}
      </p>
      <p
        className={`text-xs ${
          darkMode ? "text-white" : "text-mediumGray"
        } mb-2`}
      >
        {" "}
        {`Subtasks(${completedTask} of ${subtasks.length})`}
      </p>
      <div>
        {subtasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-start items-center px-5 py-3 rounded-md ${
              darkMode ? "bg-linesDark" : "bg-light"
            } cursor-pointer ${
              darkMode ? "hover:bg-linesDark" : "hover:bg-purpleHover"
            } ${
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
                task.isCompleted
                  ? "mediumGray"
                  : `${darkMode ? "white" : "black"}`
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
          onChange={(e)=>handleStatusChange(e)}
          id="status"
          className={`${
            darkMode
              ? "bg-darkGray border-mediumGray text-white "
              : "bg-white border-linesLight text-black "
          } text-sm w-full border border-mediumGray rounded-md px-3 py-2`}
        >
          <option value="" defaultChecked hidden>
            {taskStatus}
          </option>
          {selectedBoardColumns.map((col, index) => (
            <option key={index} value={col}>{col}</option>
          ))}
        </select>
      </label>
      {openActions && (
        <Actions
          setOpenActions={setOpenActions}
          title={"Delete this Task?"}
          message={`Are you sure you want to delete the ‘${title} task and its subtasks? This action cannot be reversed.`}
          index={[mainTask, status]}
          type="Task"
          deleteItem={isDeleteTask}
          setDeleteItem={setIsDeleteTask}
          setIsOpen={setIsOpen}
          closeViewModal = {close}
        />
      )}
    </div>
  );
};

export default ViewTaskModal;
