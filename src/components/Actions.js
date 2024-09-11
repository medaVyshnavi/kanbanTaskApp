import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import DeletePopup from "./DeletePopup";
import { deleteBoard } from "../utils/store/boardSlice";
import { deleteTask } from "../utils/store/boardSlice";
import EditBoard from "./EditBoard";
import EditTask from "./EditTask";

const Actions = ({
  setOpenActions,
  title,
  message,
  index,
  type,
  deleteItem,
  setDeleteItem,
  setIsOpen,
}) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);

  const [isEditBoardOpen, setIsEditBoardOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  const handleDeleteAction = () => {
    setDeleteItem(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteItem(false);
    setOpenActions(false);
  };

  const handleDeleteItem = () => {
    if (
      type == "Board"
        ? dispatch(deleteBoard(index))
        : dispatch(deleteTask(index))
    )
      handleCloseDeleteModal();
    setOpenActions(false);
    setIsOpen(false);
  };

  const handleEditBoard = () => {
    setIsEditBoardOpen(true);
  };

  const handleEditTask = () => {
    setIsEditTaskOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditBoardOpen(false);
  };

  const handleCloseEditTaskModal = () => {
    setIsEditTaskOpen(false);
  };

  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-linesDark" : "bg-white"
        } absolute top-[80px] right-[36px] rounded text-sm flex flex-col items-start justify-center`}
      >
        <button
          className="text-mediumGray px-6 pb-3 pt-2"
          onClick={type == "Board" ? handleEditBoard : handleEditTask}
        >{`Edit ${type}`}</button>
        <button
          className="text-red px-6 pb-3"
          onClick={handleDeleteAction}
        >{`Delete ${type}`}</button>
      </div>
      <Modal open={deleteItem} close={handleCloseDeleteModal}>
        <DeletePopup
          title={title}
          description={message}
          onCancel={handleCloseDeleteModal}
          deleteHandler={handleDeleteItem}
        />
      </Modal>
      <Modal
        open={isEditBoardOpen}
        close={handleCloseEditModal}
        styles="top-[5%]"
      >
        <EditBoard close={handleCloseEditModal} />
      </Modal>
      <Modal
        open={isEditTaskOpen}
        close={handleCloseEditTaskModal}
        styles="top-[5%]"
      >
        <EditTask close={handleCloseEditTaskModal} details={index} />
      </Modal>
    </div>
  );
};

export default Actions;
