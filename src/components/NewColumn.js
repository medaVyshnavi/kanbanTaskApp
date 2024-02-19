import React, { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import AddNewColumn from "./AddNewColumn";

const NewColumn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-64 h-5/6 bg-linesLight text-mediumGray flex items-center justify-center mt-14 ml-2 rounded-md">
        <Button text={"+ New Column"} click={handleOpenModal} />
      </div>
      <Modal open={isOpen} close={handleCloseModal}>
        <AddNewColumn close={handleCloseModal} />
      </Modal>
    </>
  );
};

export default NewColumn;
