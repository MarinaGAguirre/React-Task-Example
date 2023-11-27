import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto ">
      <form onSubmit={handleSubmit} className="bg-zinc-400 p-10 mb-5 rounded-lg">
        <h1 className="text-2xl font-bold pb-3 mb-3 text-center text-lg">CREATE YOUR TASK</h1>
        <input
          placeholder="Write your task here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-200 p-2 rounded-lg w-full mb-4"
          autoFocus
        />

        <textarea
          placeholder="Describe the task here"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-200 p-2 rounded-lg w-full mb-4"
          value={description}
        ></textarea>

        <button 
          className="bg-pink-600 px-4 py-1 rounded-lg text-white  hover:bg-green-400 hover:text-black ">
            SAVE</button>
      </form>
    </div>
  );
}
export default TaskForm;
