import { useParams } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import type { Task } from "../types/task";

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();

  const task = tasks.find((t: Task) => t.id === id);

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
}
