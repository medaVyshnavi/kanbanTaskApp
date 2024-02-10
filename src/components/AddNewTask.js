import React, { useState } from "react";
import Button from "./Button";
import Cross from "../assets/icon-cross.svg";

const AddNewTask = () => {
  const newTaskInitialState = {
    title: "",
    description: "",
    subtasks: [],
    status: "",
  };

  const [addTask, setAddTask] = useState(newTaskInitialState);
  const [addSubTasks, setAddSubTasks] = useState([]);
  const [counter, setCounter] = useState(1);

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setAddTask({ ...addTask, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddTask((prevState) => ({
      ...prevState,
      subtasks: [...prevState.subtasks, addSubTasks],
    }));
  };

  const handleAddSubTasks = (e) => {
    const subTask = {
      id: e.target.id,
      title: e.target.value,
      isCompleted: false,
    };
    setAddSubTasks((prevState) => [...prevState, subTask]);
  };

  return (
    <div className="text-mediumGray tracking-wide overflow-y-scroll max-h-[640px]">
      <h1 className="text-xl text-black">Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-4">
          <label className="text-xs font-bold " htmlFor="title">
            Title
          </label>
          <input
            type="text"
            placeholder="e.g.Take coffee break"
            value={addTask.title}
            onChange={(e) => handleInputChange(e)}
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
            value={addTask.description}
            onChange={(e) => handleInputChange(e)}
            className="text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none h-28"
          ></textarea>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-xs font-bold " htmlFor="subTask">
            Subtasks
          </label>
          {Array.from(Array(counter)).map((c, index) => {
            return (
              <div className="flex justify-between items-center" key={index}>
                <input
                  type="text"
                  id={index}
                  onChange={handleAddSubTasks}
                  placeholder="e.g. Make coffee"
                  className="flex-1 text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none"
                />
                <img
                  src={Cross}
                  alt="cancel"
                  className="ml-6 cursor-pointer"
                  onClick={() => setCounter((prev) => prev - 1)}
                />
              </div>
            );
          })}

          <Button
            text="+Add New Subtask"
            className="text-purple bg-light"
            click={() => setCounter((prev) => prev + 1)}
          />
        </div>
        <div>
          <label className="text-xs font-bold " htmlFor="status">
            Status
            <select
              value={addTask.status}
              onChange={(e) => handleInputChange(e)}
              id="status"
              className="text-sm w-full border border-mediumGray rounded-md p-3"
            >
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col">
          <Button
            text="Create Task"
            type="submit"
            className="bg-purple text-white"
            click={() => console.log("submit")}
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
