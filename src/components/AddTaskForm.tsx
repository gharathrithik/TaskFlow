import { useState } from "react";
import type { FormEvent } from "react";
import type { Priority } from "../types";

interface AddTaskFormProps {
  onAdd: (title: string, priority: Priority) => void;
}

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = title.trim();
    if (trimmed === "") return;
    onAdd(trimmed, priority);
    setTitle("");
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="New task"
        aria-label="Task title"
      />
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value as Priority)}
        aria-label="Priority"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
