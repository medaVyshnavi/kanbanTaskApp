import React from "react";
import lightTheme from "../assets/icon-light-theme.svg";
import darkTheme from "../assets/icon-dark-theme.svg";
import hidesidebar from "../assets/icon-hide-sidebar.svg";
import showsidebar from "../assets/icon-show-sidebar.svg";

const Footer = () => {
  return (
    <div>
      <div className="bg-light-bg flex">
        <img src={lightTheme} alt="light theme" />
        <div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="w-10 h-5 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple dark:peer-focus:ring-purple rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-purple after:content-[''] after:absolute after:top-[3px] after:start-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>

        <img src={darkTheme} alt="dark theme" />
      </div>
      <div className="flex justify-start items-center">
        <img src={hidesidebar} alt="side bar" />
        <span>Hide Sidebar</span>
      </div>
    </div>
  );
};

export default Footer;
