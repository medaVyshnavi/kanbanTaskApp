import React from "react";
import lightTheme from "../assets/icon-light-theme.svg";
import darkTheme from "../assets/icon-dark-theme.svg";
import hidesidebar from "../assets/icon-hide-sidebar.svg";
import showsidebar from "../assets/icon-show-sidebar.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../utils/appSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);
  return (
    <div>
      <div
        className={`bg-${
          darkMode ? "dark" : "light"
        }-bg flex rounded-md items-center justify-center mr-6 py-3 px-2 mt-96`}
      >
        <img src={lightTheme} alt="light theme" className="w-5 h-5" />
        <div className="px-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => dispatch(changeTheme())}
            />
            <div className="w-10 h-5 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple dark:peer-focus:ring-purple rounded-full peer dark:bg-purple peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-purple after:content-[''] after:absolute after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>

        <img src={darkTheme} alt="dark theme" className="w-4 h-4" />
      </div>
      <div className="flex justify-start items-center mt-7">
        <img src={hidesidebar} alt="side bar" className="h-4 w-6 pr-3" />
        <span className="text-base text-medium-gray">Hide Sidebar</span>
      </div>
    </div>
  );
};

export default Footer;