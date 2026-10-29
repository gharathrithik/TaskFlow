// Domain models. Everything else in the app is built on these types.

export type Priority = "low" | "medium" | "high";

export type ColumnId = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  labels: string[];
  createdAt: string; // ISO date string
}

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: string[]; // ordered: index 0 is the top of the column
}

export interface BoardState {
  tasks: Record<string, Task>;
  columns: Column[];
}
