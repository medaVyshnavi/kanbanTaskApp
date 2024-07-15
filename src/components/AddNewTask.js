import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../utils/store/boardSlice";
import Button from "./Button";
import Cross from "../assets/icon-cross.svg";

const AddNewTask = ({ close }) => {
  const newTaskInitialState = {
    title: "",
    description: "",
    subtasks: [],
    status: "Todo",
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
  const [addSubTasks, setAddSubTasks] = useState([
    {
      id: "",
      title: "",
      isCompleted: false,
    },
  ]);

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
      dispatch(addNewTask({ ...addTask, subtasks: addSubTasks }));
      close();
    }
  };

  const handleAddSubTasks = () => {
    setAddSubTasks([...addSubTasks, { id: "", title: "", isCompleted: false }]);
  };

  const handleRemoveTask = (index) => {
    const list = [...addSubTasks];
    list.splice(index, 1);
    setAddSubTasks(list);
  };

  const handleTaskChange = (e, index) => {
    const { value } = e.target;
    const list = [...addSubTasks];
    list[index]["title"] = value;
    list[index]["id"] = index;
    list[index]["isCompleted"] = false;
    setAddSubTasks(list);
  };

  return (
    <div
      className={`${
        darkMode ? "text-white" : "text-mediumGray "
      } tracking-wide overflow-y-scroll max-h-[640px]`}
    >
      <h1 className={`text-xl ${darkMode ? "text-white" : "text-black"}`}>
        Add New Task
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
                ? "bg-darkGray border-dark"
                : "bg-white border-linesLight "
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
                ? "bg-darkGray border-dark"
                : "bg-white border-linesLight "
            } text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none h-28`}
          ></textarea>
        </div>
        <div className="flex flex-col my-4">
          <label className="text-xs font-bold " htmlFor="subTask">
            Subtasks
          </label>
          {addSubTasks.map((task, index) => {
            return (
              <div className="flex justify-between items-center" key={index}>
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => handleTaskChange(e, index)}
                  placeholder="e.g. Make coffee"
                  className={`${
                    darkMode
                      ? "bg-darkGray border-dark"
                      : "bg-white border-linesLight "
                  } flex-1 text-sm border border-1 border-linesLight p-2 rounded-md my-1 focus:border-purple focus:border-2 focus-visible:outline-none`}
                />
                <img
                  src={Cross}
                  alt="cancel"
                  className={`ml-6 cursor-pointe`}
                  onClick={() => handleRemoveTask(index)}
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
              value={addTask.status}
              onChange={(e) => handleInputChange(e)}
              id="status"
              className={`${
                darkMode
                  ? "bg-darkGray border-dark"
                  : "bg-white border-linesLight "
              } text-sm w-full border border-mediumGray rounded-md p-3`}
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
            text="Create Task"
            type="submit"
            className="bg-purple text-white hover:bg-purpleHover"
            click={() => console.log("submit")}
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
