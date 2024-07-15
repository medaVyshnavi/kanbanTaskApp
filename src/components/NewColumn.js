import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Modal from "./Modal";
import AddNewColumn from "./AddNewColumn";

const NewColumn = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={`w-64 h-5/6 ${
          darkMode
            ? "bg-darkGray text-linesDark"
            : "bg-linesLight text-mediumGray"
        } flex items-center justify-center mt-14 m-3 rounded-md`}
      >
        <Button
          text={"+ New Column"}
          click={handleOpenModal}
          className={"hover:text-purple"}
        />
      </div>
      <Modal open={isOpen} close={handleCloseModal}>
        <AddNewColumn close={handleCloseModal} />
      </Modal>
    </>
  );
};

export default NewColumn;
