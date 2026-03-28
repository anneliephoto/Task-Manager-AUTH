import { useTasks } from "../context/useTasks";
import type { Task } from "../types/task";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/create">Create Task</Link>

      {tasks.length === 0 && <p>No tasks yet</p>}

      {tasks.map((task: Task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.status}</p>

          <Link to={`/task/${task.id}`}>View</Link>
          <Link to={`/edit/${task.id}`}>Edit</Link>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
