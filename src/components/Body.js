import React from "react";
import Button from "./Button";

const Body = () => {
  return (
    <div>
      <h1 className="text-lg text-medium-gray">
        This board is empty. Create a new column to get started.
      </h1>
      <Button text="+ Add New Column" />
    </div>
  );
};

export default Body;
