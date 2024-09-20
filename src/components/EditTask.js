import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask, updateTaskStatus } from "../utils/store/boardSlice";
import Button from "./Button";
import Cross from "../assets/icon-cross.svg";
import { v4 as uuidv4 } from "uuid";

const EditTask = ({ close, details, closeViewModal }) => {
  const [taskDetails, status] = details;
  const newTaskInitialState = {
    id: taskDetails?.id,
    title: taskDetails?.title,
    description: taskDetails?.description,
    subtasks: taskDetails?.subtasks,
  };

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);
  const data = useSelector((state) => state.board.allBoards);
  const selectedBoard = useSelector((state) => state.board.selectedBoard);
  const val = data.boards.find((board) => board.id === selectedBoard);
  const newData = data.boards.indexOf(val);
  const selectedBoardDetails = data.boards[newData]?.columns;

  const [addTask, setAddTask] = useState(newTaskInitialState);
  const [errors, setErrors] = useState({});
  const [addSubTasks, setAddSubTasks] = useState(taskDetails?.subtasks);
  const [newStatus, setNewStatus] = useState(status);

  const handleInputChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setAddTask({ ...addTask, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddTask((prevState) => ({
      ...prevState,
      subtasks: addSubTasks,
    }));
    const newErrors = {};
    if (!addTask.title) {
      newErrors.title = "Title is required";
    }
    if (!(addTask.subtasks && addTask.subtasks[0]?.title)) {
      newErrors.subtasks = "Add atleast one sub task";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setAddTask([
        {
          ...addTask,
          subtasks: addSubTasks,
        },
      ]);

      if (newStatus === status) {
        dispatch(
          updateTask([
            {
              ...addTask,
              subtasks: addSubTasks,
            },
            newStatus,
          ])
        );
      } else {
        dispatch(deleteTask([taskDetails, status]));
        dispatch(
          updateTaskStatus([
            {
              ...addTask,
              subtasks: addSubTasks,
            },
            newStatus,
          ])
        );
      }
      close();
      closeViewModal();
    }
  };

  const handleAddSubTasks = () => {
    setAddSubTasks([
      ...addSubTasks,
      { id: uuidv4(), title: "", isCompleted: false },
    ]);
  };

  const handleRemoveTask = (id) => {
    const list = [...addSubTasks];
    const index = list.findIndex((task) => task.id == id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    setAddSubTasks(list);
  };

  const handleTaskChange = (e, id) => {
    let updateTask = addSubTasks.map((task) =>
      task.id == id ? { ...task, title: e.target.value } : task
    );
    setAddSubTasks((prev) => updateTask);
  };

  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-mediumGray "
      } tracking-wide overflow-y-scroll max-h-[560px]`}
    >
      <h1 className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
        Edit Task
      </h1>
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
            className={`${
              darkMode
                ? "bg-darkGray border-mediumGray text-white "
                : "bg-white border-linesLight text-black "
            } text-sm border border-1 p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none`}
          ></input>
          {errors.title && (
            <p className="text-red text-[9px]">{errors.title}</p>
          )}
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
            className={`${
              darkMode
                ? "bg-darkGray border-mediumGray text-white "
                : "bg-white border-linesLight text-black "
            } text-sm border border-1 p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none h-28`}
          ></textarea>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-xs font-bold " htmlFor="subTask">
            Subtasks
          </label>
          {addSubTasks?.map((task) => {
            return (
              <div className="flex justify-between items-center" key={task.id}>
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => handleTaskChange(e, task.id)}
                  placeholder="e.g. Make coffee"
                  className={`${
                    darkMode
                      ? "bg-darkGray border-mediumGray text-white"
                      : "bg-white border-linesLight text-black"
                  } flex-1 text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none`}
                />
                <img
                  src={Cross}
                  alt="cancel"
                  className={`ml-6 cursor-pointe`}
                  onClick={() => handleRemoveTask(task.id)}
                />
              </div>
            );
          })}
          {errors.subtasks && (
            <p className="text-red text-[9px]">{errors.subtasks}</p>
          )}

          <Button
            text="+Add New Subtask"
            className={`text-purple bg-light hover:${
              darkMode ? "bg-white" : "bg-purpleHover "
            }r`}
            click={handleAddSubTasks}
          />
        </div>
        <div>
          <label className="text-xs font-bold " htmlFor="status">
            Status
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              id="status"
              className={`${
                darkMode
                  ? "bg-darkGray border-mediumGray text-white "
                  : "bg-white border-linesLight text-black "
              } text-sm w-full border border-mediumGray rounded-md px-3 py-2`}
            >
              <option value="" defaultChecked hidden>
                Select status
              </option>
              {selectedBoardDetails.map((column, index) => (
                <option key={index} value={column.name}>
                  {column.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-col">
          <Button
            text="Edit Task"
            type="submit"
            className="bg-purple text-white hover:bg-purpleHover"
            click={() => console.log("submit")}
          />
        </div>
      </form>
    </div>
  );
};

export default EditTask;
