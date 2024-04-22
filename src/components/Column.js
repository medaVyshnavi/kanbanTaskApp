import React from "react";
import TaskCard from "./TaskCard";
import {generateColor} from '../utils/colorGenerator'

const Column = ({ data }) => {
  return (
    <div className="mb-3 h-full">
      <div className="flex items-center text-mediumGray text-xs tracking-wide py-3 pl-3">
        <span className="w-4 h-4 block rounded-full" style={{backgroundColor:generateColor()}}></span>
        <h1 className="px-3">{`${data.name.toUpperCase()} `}</h1>
        <h2>{`(${data.tasks?.length})`}</h2>
      </div>
      <div className="overflow-y-scroll h-[90%]">
        {data.tasks?.map((task, index) => (
          <TaskCard task={task} key={index} status={data.name} />
        ))}
      </div>
    </div>
  );
};

export default Column;
