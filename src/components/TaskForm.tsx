
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
			<div>
				<label>Title</label>
				<input value={title} onChange={e => setTitle(e.target.value)} required />
			</div>
			<div>
				<label>Description</label>
				<textarea value={description} onChange={e => setDescription(e.target.value)} required />
			</div>
			<div>
				<label>Status</label>
				<select value={status} onChange={e => setStatus(e.target.value as Task["status"])}>
					<option value="todo">To Do</option>
					<option value="in-progress">In Progress</option>
					<option value="done">Done</option>
				</select>
			</div>
			<button type="submit">Save</button>
		</form>
	);
}
