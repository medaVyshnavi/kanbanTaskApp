import React from "react";
import ellipsis from "../assets/icon-vertical-ellipsis.svg";

const ViewTaskModal = ({ task, status }) => {
  const { title, description, subtasks } = task;
  return (
    <div className="text-black">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">{title}</h1>
        <img src={ellipsis} alt="ellipse" className="ml-6 cursor-pointer" />
      </div>

      <p className="text-sm text-mediumGray">{description}</p>
      <p className="text-xs text-mediumGray">Subtasks(2 of 3)</p>
      <div>
        {subtasks.map((task, index) => (
          <div
            key={index}
            className={`flex justify-start items-center px-5 bg-light ${
              task.isCompleted && "line-through"
            }`}
          >
            <input
              type="checkbox"
              checked={task.isCompleted}
              className="pr-4 checked:bg-purple"
            />
            <p
              className={`text-xs font-bold pl-6 text-${
                task.isCompleted ? "mediumGray" : "black"
              }`}
            >
              {task.title}{" "}
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm">Current Status</p>
      <select className="text-sm">
        <option value="0">To do</option>
        <option value="1" selected>
          Doing
        </option>
        <option value="2">Done</option>
      </select>
    </div>
  );
};

export default ViewTaskModal;
