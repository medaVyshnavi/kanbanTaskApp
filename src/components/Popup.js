import { useState } from "react";
import Modal from "react-modal";

const Popup = ({ isOpen, setIsOpen }) => {
  const handleAfterClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onAfterClose={handleAfterClose}>
      <div>
        <h1 className="text-lg">
          Research pricing points of various competitors and trial different
          business models
        </h1>
        <p className="text-sm">
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        <p className="text-sm">Subtasks(2 of 3)</p>
        <div>
          <div>
            <input type="checkbox" checked />
            <p className="text-sm font-bold">
              Research competitor pricing and business models
            </p>
          </div>
          <div>
            <input type="checkbox" checked />
            <p className="text-sm font-bold">
              Outline a business model that works for our solution
            </p>
          </div>
          <div>
            <input type="checkbox" />
            <p className="text-sm font-bold">
              Talk to potential customers about our proposed solution and ask
              for fair price expectancy
            </p>
          </div>
        </div>
        <p className="text-sm">Current Status</p>
        <select>
          <option value="0">To do</option>
          <option value="1" selected>
            Doing
          </option>
          <option value="2">Done</option>
        </select>
      </div>
    </Modal>
  );
};

export default Popup;
