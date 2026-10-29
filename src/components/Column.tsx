import type { Column as ColumnModel, Priority, Task } from "../types";
import { AddTaskForm } from "./AddTaskForm";
import { TaskCard } from "./TaskCard";

interface ColumnProps {
  column: ColumnModel;
  tasks: Task[];
  onAddTask: (title: string, priority: Priority) => void;
}

export function Column({ column, tasks, onAddTask }: ColumnProps) {
  return (
    <section className="column" aria-label={column.title}>
      <h2>
        {column.title} <span className="count">{tasks.length}</span>
      </h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
      <AddTaskForm onAdd={onAddTask} />
    </section>
  );
}
