import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import { TaskForm } from "../components/TaskForm";
import type { Task } from "../types/task";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t: Task) => t.id === id);

  if (!task) return <p>Task not found</p>;

  const handleUpdate = (data: Partial<Task>) => {
    updateTask(task.id, data);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Task</h1>
      <TaskForm initial={task} onSubmit={handleUpdate} />
    </div>
  );
}
