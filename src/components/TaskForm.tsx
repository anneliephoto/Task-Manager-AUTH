
import { useState } from "react";
import type { Task } from "../types/task";

type TaskFormProps = {
	onSubmit: (data: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
	initial?: Partial<Omit<Task, "id" | "createdAt" | "updatedAt">>;
};

export function TaskForm({ onSubmit, initial }: TaskFormProps) {
	const [title, setTitle] = useState(initial?.title ?? "");
	const [description, setDescription] = useState(initial?.description ?? "");
	const [status, setStatus] = useState<Task["status"]>(initial?.status ?? "todo");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ title, description, status });
		setTitle("");
		setDescription("");
		setStatus("todo");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="title">Task Title</label>
				<input
					id="title"
					value={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Enter a task title..."
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					value={description}
					onChange={e => setDescription(e.target.value)}
					placeholder="Enter a detailed description..."
					required
				/>
			</div>

			<div className="form-group">
				<label htmlFor="status">Status</label>
				<select
					id="status"
					value={status}
					onChange={e => setStatus(e.target.value as Task["status"])}
				>
					<option value="todo">To Do</option>
					<option value="in-progress">In Progress</option>
					<option value="done">Done</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">
				Save Task
			</button>
		</form>
	);
}
