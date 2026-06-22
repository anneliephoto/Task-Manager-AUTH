import { useTasks } from "../context/useTasks";
import type { Task } from "../types/task";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { tasks, deleteTask } = useTasks();

  return (
    <div className="app-container">
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <h1>My Tasks</h1>
          <Link to="/create" className="btn btn-primary">
            Create New Task
          </Link>
        </div>

        {tasks.length === 0 && (
          <div className="empty-state">
            <h3>No tasks yet</h3>
            <p>Get started by creating your first task to stay organized and productive.</p>
            <Link to="/create" className="btn btn-primary" style={{ marginTop: "1rem" }}>
              Create a Task
            </Link>
          </div>
        )}

        <div className="task-grid">
          {tasks.map((task: Task) => (
            <div key={task.id} className="task-card">
              <div className="task-card-header">
                <h3 className="task-card-title">{task.title}</h3>
                <span className={`task-status status-${task.status}`}>
                  {task.status === "todo" && "To Do"}
                  {task.status === "in-progress" && "In Progress"}
                  {task.status === "done" && "Done"}
                </span>
              </div>

              {task.description && (
                <p className="task-card-description">{task.description}</p>
              )}

              <div className="task-card-actions">
                <Link to={`/task/${task.id}`} className="btn btn-secondary">
                  View
                </Link>
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
          ))}
        </div>
      </div>
    </div>
  );
}
