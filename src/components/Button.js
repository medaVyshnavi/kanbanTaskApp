import React from "react";

const Button = ({ text, click }) => {
  return (
    <button
      onClick={() => click()}
      className="bg-purple text-white rounded-3xl text-base px-4 py-3 my-6"
    >
      {text}
    </button>
  );
};

export default Button;
