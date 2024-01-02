import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ data }) => {
  return (
    <div>
      <div className="flex items-center text-medium-gray text-xs tracking-wide">
        <span className="w-4 h-4 bg-bubbleOne block rounded-full"></span>
        <h1 className="px-3">{`${data.name.toUpperCase()} `}</h1>
        <h2>{`(${data.tasks.length})`}</h2>
      </div>

      {data.tasks?.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};

export default Column;
