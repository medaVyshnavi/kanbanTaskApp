import React from "react";
import Button from "./Button";

const NewColumn = () => {
  return (
    <div className="w-64 h-5/6 bg-linesLight text-mediumGray flex items-center justify-center mt-14 ml-2 rounded-md">
      <Button text={"+ NewColumn"} />
    </div>
  );
};

export default NewColumn;
