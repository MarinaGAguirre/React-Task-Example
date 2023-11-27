import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-blue-800 px-4 py-1 rounded-lg mt-4 mb-2 hover:bg-blue-500"
        onClick={() => deleteTask(task.id)}
      >
        DELETE TASK
      </button>
    </div>
  );
}

export default TaskCard;
