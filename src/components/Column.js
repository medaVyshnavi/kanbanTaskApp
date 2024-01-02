import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.tasks?.map((task, index) => (
        <TaskCard task={task} key={index} />
      ))}
    </div>
  );
};

export default Column;
