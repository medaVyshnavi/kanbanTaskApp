import React from "react";
import Button from "./Button";

const AddNewTask = () => {
  return (
    <div>
      <h1>Add New Task</h1>
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          placeholder="e.g.Take coffee break"
          id="title"
        ></input>
      </div>
      <div>
        <label for="description">Title</label>
        <textarea
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
          id="description"
        ></textarea>
      </div>
      <div>
        <label for="subTask">Subtasks</label>
        <input type="text" id="subTask"></input>
        <input type="text" id="subTask"></input>
        <Button text="+Add New Subtask" />
      </div>
      <div>
        <label>
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
      <Button text="Create Task" />
    </div>
  );
};

export default AddNewTask;
