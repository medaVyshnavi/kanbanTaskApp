import React from "react";
import Logo from "../assets/logo-dark.svg";

const Navbar = () => {
  return (
    <nav className="bg-yellow-300 ">
      <div>
        <img src={Logo} alt="logo" />
        <h1>Hello</h1>
      </div>
    </nav>
  );
};

export default Navbar;
