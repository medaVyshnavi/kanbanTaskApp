import React from "react";

const Button = ({
  text,
  click,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={() => click()}
      className={`${className} rounded-3xl text-base px-4 py-3 my-6`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
