import { useParams, Link } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import type { Task } from "../types/task";

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks, deleteTask } = useTasks();

  const task = tasks.find((t: Task) => t.id === id);

  if (!task) {
    return (
      <div className="app-container">
        <div className="empty-state">
          <h3>Task not found</h3>
          <p>The task you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Back to Tasks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div style={{ maxWidth: "600px" }}>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "1rem", color: "var(--primary)", textDecoration: "none" }}>
          ← Back to Tasks
        </Link>

        <div className="card">
          <div className="task-card-header">
            <h1 style={{ margin: 0 }}>{task.title}</h1>
            <span className={`task-status status-${task.status}`}>
              {task.status === "todo" && "To Do"}
              {task.status === "in-progress" && "In Progress"}
              {task.status === "done" && "Done"}
            </span>
          </div>

          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <h3 style={{ marginBottom: "0.5rem", color: "var(--text-secondary)" }}>Description</h3>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>{task.description}</p>
          </div>

          {task.createdAt && (
            <div style={{ marginBottom: "1rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <p>Created: {new Date(task.createdAt).toLocaleDateString()}</p>
            </div>
          )}

          <div style={{ display: "flex", gap: "0.5rem", borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}>
            <Link to={`/edit/${task.id}`} className="btn btn-secondary">
              Edit
            </Link>
            <button
              onClick={() => deleteTask(task.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
