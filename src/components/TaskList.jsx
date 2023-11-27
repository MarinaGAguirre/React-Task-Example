import TaskCard from "./TaskCard";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h2 className="text-2xl text-white text-center font-medium"> There are no available tasks yet. </h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 text-center py-1 px-1">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
