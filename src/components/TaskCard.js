import React from "react";
import { useSelector } from "react-redux";

const TaskCard = ({ task: { title, subtasks } }) => {
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <div
      className={`bg-${
        darkMode ? "dark-gray" : "white"
      } m-3 px-5 py-6 rounded-lg shadow-md w-72`}
    >
      <h3 className={`text-base ${darkMode ? "text-white" : "text-black"}`}>
        {title}
      </h3>
      <p className="text-xs text-medium-gray pt-2">{`0 of ${subtasks?.length} subtasks`}</p>
    </div>
  );
};

export default TaskCard;
