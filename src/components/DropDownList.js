import React from "react";

const DropDownList = () => {
  const dropDownList = ["Edit Task", "Delete Task"];
  return (
    <div>
      {dropDownList.map((list) => (
        <p>{list}</p>
      ))}
    </div>
  );
};

export default DropDownList;
