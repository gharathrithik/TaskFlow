import type { Task } from "../types";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <li className="task-card">
      <span className={`priority priority-${task.priority}`}>
        {task.priority}
      </span>
      <p className="task-title">{task.title}</p>
      {task.labels.length > 0 && (
        <ul className="labels">
          {task.labels.map((label) => (
            <li key={label} className="label">
              {label}
            </li>
          ))}
        </ul>
      )}
      {/* TODO (phase 2): add Edit and Delete buttons that call props
          callbacks (onEdit, onDelete) passed down from Board. */}
    </li>
  );
}
