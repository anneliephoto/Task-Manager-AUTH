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
    <div className="app-container">
      <div style={{ maxWidth: "600px" }}>
        <h1>Create New Task</h1>
        <p style={{ marginBottom: "2rem", color: "var(--text-secondary)" }}>
          Add a new task to your task list. Fill in the details below to get started.
        </p>
        <div className="card">
          <TaskForm onSubmit={handleCreate} />
        </div>
      </div>
    </div>
  );
}
