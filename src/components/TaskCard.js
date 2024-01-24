import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Popup from "./Popup";

const TaskCard = ({ task: { title, subtasks } }, status) => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        className={`bg-${
          darkMode ? "dark-gray" : "white"
        } m-3 px-4 py-5 rounded-lg shadow-md w-72`}
        onClick={handleOpenModal}
      >
        <h3 className={`text-base ${darkMode ? "text-white" : "text-black"}`}>
          {title}
        </h3>
        <p className="text-xs text-mediumGray pt-2">{`0 of ${subtasks?.length} subtasks`}</p>
      </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default TaskCard;
