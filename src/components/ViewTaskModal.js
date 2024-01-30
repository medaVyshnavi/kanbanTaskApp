import React, { useEffect } from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";

const ViewTaskModal = ({ task, status }) => {
  const { title, description, subtasks } = task;
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
      <p className="text-xs text-mediumGray mb-2">Subtasks(2 of 3)</p>
      <div>
        {subtasks.map((task, index) => (
          <div
            key={index}
            className={`flex justify-start items-center px-5 py-2 rounded-md bg-light ${
              task.isCompleted &&
              "line-through decoration-1 decoration-mediumGray"
            } my-3`}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              className="pr-4 checked:bg-purple"
              onChange={() => {}}
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
