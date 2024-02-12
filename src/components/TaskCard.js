import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "./Modal";
import ViewTaskModal from "./ViewTaskModal";
import DeletePopup from "./DeletePopup";
import { deleteTask } from "../utils/store/boardSlice";

const TaskCard = ({ task, status }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteTask, setIsDeleteTask] = useState(false);
  const { title, subtasks } = task;

  const completedTask = subtasks.filter((task) => task.isCompleted).length;
  const handleOpenTaskModal = () => {
    setIsOpen(true);
  };

  const handleCloseTaskModal = () => {
    setIsOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteTask(false);
    setIsOpen(true);
  };

  const handleOpenDeleteModel = () => {
    setIsDeleteTask(true);
    setIsOpen(false);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask([task.id, status]));
    setIsDeleteTask(false);
  };

  return (
    <>
      <div
        className={`bg-${
          darkMode ? "darkGray" : "white"
        } m-3 px-4 py-5 rounded-lg shadow-md w-72 cursor-pointer`}
        onClick={handleOpenTaskModal}
      >
        <h3 className={`text-base ${darkMode ? "text-white" : "text-black"}`}>
          {title}
        </h3>
        <p className="text-xs text-mediumGray pt-2">{`${completedTask} of ${subtasks?.length} subtasks`}</p>
      </div>
      <Modal open={isOpen} close={handleCloseTaskModal}>
        <ViewTaskModal
          mainTask={task}
          status={status}
          openModal={handleOpenDeleteModel}
        />
      </Modal>
      <Modal open={isDeleteTask} close={handleCloseDeleteModal}>
        <DeletePopup
          title="Delete this task?"
          description={`Are you sure you want to delete the ‘${title} task and its subtasks? This action cannot be reversed.`}
          onCancel={handleCloseDeleteModal}
          deleteHandler={handleDeleteTask}
        />
      </Modal>
    </>
  );
};

export default TaskCard;
