import React from "react";
import { useDispatch } from "react-redux";
import showSideBarIcon from "../assets/icon-show-sidebar.svg";
import { handleSideBar } from "../utils/store/appSlice";

const SideBarIcon = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-purple rounded-r-full px-5 py-4 fixed bottom-14 flex justify-center items-center cursor-pointer hover:bg-purpleHover"
      onClick={() => dispatch(handleSideBar())}
    >
      <img
        src={showSideBarIcon}
        alt="show"
        className="w-4 h-3 fixed bottom-16"
      />
    </div>
  );
};

export default SideBarIcon;
