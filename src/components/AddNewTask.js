import React from "react";
import Button from "./Button";
import Cross from "../assets/icon-cross.svg";

const AddNewTask = () => {
  return (
    <div className="text-mediumGray tracking-wide">
      <h1 className="text-xl text-black">Add New Task</h1>
      <div className="flex flex-col my-4">
        <label className="text-xs font-bold " htmlFor="title">
          Title
        </label>
        <input
          type="text"
          placeholder="e.g.Take coffee break"
          id="title"
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none"
        ></input>
      </div>
      <div className="flex flex-col my-4">
        <label className="text-xs font-bold " htmlFor="description">
          Description
        </label>
        <textarea
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
          id="description"
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none h-28"
        ></textarea>
      </div>
      <div className="flex flex-col my-4">
        <label className="text-xs font-bold " htmlFor="subTask">
          Subtasks
        </label>
        <div className="flex justify-between items-center">
          <input
            type="text"
            id="subTask"
            placeholder="e.g. Make coffee"
            className="flex-1 text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none"
          />
          <img src={Cross} alt="cancel" className="ml-6 cursor-pointer" />
        </div>

        <Button text="+Add New Subtask" className="text-purple bg-light" />
      </div>
      <div>
        <label className="text-xs font-bold ">
          Status
          <select
            defaultValue={""}
            className="text-sm w-full border border-mediumGray rounded-md p-3"
          >
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col">
        <Button text="Create Task" className="bg-purple text-white" />
      </div>
    </div>
  );
};

export default AddNewTask;
