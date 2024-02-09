import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import ViewTaskModal from "./ViewTaskModal";

const TaskCard = ({ task, status }) => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const [isOpen, setIsOpen] = useState(false);
  const { title, subtasks } = task;

  const completedTask = subtasks.filter((task) => task.isCompleted).length;
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`bg-${
          darkMode ? "darkGray" : "white"
        } m-3 px-4 py-5 rounded-lg shadow-md w-72 cursor-pointer`}
        onClick={handleOpenModal}
      >
        <h3 className={`text-base ${darkMode ? "text-white" : "text-black"}`}>
          {title}
        </h3>
        <p className="text-xs text-mediumGray pt-2">{`${completedTask} of ${subtasks?.length} subtasks`}</p>
      </div>
      <Modal open={isOpen} close={handleCloseModal}>
        <ViewTaskModal mainTask={task} status={status} />
      </Modal>
    </>
  );
};

export default TaskCard;
