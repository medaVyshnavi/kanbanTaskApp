import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-purple text-white rounded-3xl text-base px-4 py-3">
      {text}
    </button>
  );
};

export default Button;
