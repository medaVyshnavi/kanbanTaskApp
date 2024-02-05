import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";

const Modal = ({ open, close, children }) => {
  const darkMode = useSelector((state) => state.app.darkMode);
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        onClick={() => close()}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50 opacity-50"
      ></div>
      <div
        className={`bg-white fixed z-50 top-[15%] left-1/3 transform translate-x-0 translate-y-0 w-[480px] h-max-[523px] rounded-md p-7 ${
          darkMode ? "bg-darkGray text-white" : "bg-white text-black"
        }`}
      >
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
