import { useTasks } from "../context/useTasks";
import { TaskForm } from "../components/TaskForm";
import type { Task } from "../types/task";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleCreate = (data: Omit<Task, "id" | "createdAt" | "updatedAt">) => {
    addTask(data);
    navigate("/");
  };

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}
