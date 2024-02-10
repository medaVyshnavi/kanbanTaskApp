import React from "react";
import { useDispatch } from "react-redux";
import { isSubTaskCompleted } from "../utils/store/boardSlice";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";

const ViewTaskModal = ({ mainTask, status }) => {
  const dispatch = useDispatch();
  const { title, description, subtasks } = mainTask;

  const completedTask = subtasks.filter((task) => task.isCompleted).length;

  const handleCheckbox = (task, status) => {
    dispatch(isSubTaskCompleted([task, status, mainTask]));
  };

  return (
    <div className="text-black">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg flex-1">{title}</h1>
        <img
          src={ellipsis}
          alt="ellipse"
          className="ml-6 cursor-pointer
        "
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
          defaultValue={status}
          className="text-sm w-full border border-mediumGray rounded-md p-3"
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </label>
    </div>
  );
};

export default ViewTaskModal;
