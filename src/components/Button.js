import React from "react";

const Button = ({ text, click, className }) => {
  return (
    <button
      onClick={() => click()}
      className={`bg-purple text-white rounded-3xl text-base px-4 py-3 my-6 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
