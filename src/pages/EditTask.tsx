import { useParams, useNavigate, Link } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import { TaskForm } from "../components/TaskForm";
import type { Task } from "../types/task";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t: Task) => t.id === id);

  if (!task) {
    return (
      <div className="app-container">
        <div className="empty-state">
          <h3>Task not found</h3>
          <p>The task you're trying to edit doesn't exist.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Back to Tasks
          </Link>
        </div>
      </div>
    );
  }

  const handleUpdate = (data: Partial<Task>) => {
    updateTask(task.id, data);
    navigate("/");
  };

  return (
    <div className="app-container">
      <div style={{ maxWidth: "600px" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem", color: "var(--primary)", textDecoration: "none" }}>
          ← Back to Tasks
        </Link>
        
        <h1>Edit Task</h1>
        <p style={{ marginBottom: "2rem", color: "var(--text-secondary)" }}>
          Update the task details below.
        </p>
        
        <div className="card">
          <TaskForm initial={task} onSubmit={handleUpdate} />
        </div>
      </div>
    </div>
  );
}
