import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ data }) => {
  return (
    <div className="overflow-y-scroll mb-3">
      <div className="flex items-center text-mediumGray text-xs tracking-wide py-3 pl-3">
        <span className="w-4 h-4 bg-bubbleOne block rounded-full"></span>
        <h1 className="px-3">{`${data.name.toUpperCase()} `}</h1>
        <h2>{`(${data.tasks.length})`}</h2>
      </div>
      <div>
        {data.tasks?.map((task, index) => (
          <TaskCard task={task} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Column;
