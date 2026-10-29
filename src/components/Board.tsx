import type { Dispatch } from "react";
import type { BoardState, ColumnId, Priority, Task } from "../types";
import type { BoardAction } from "../state/boardReducer";
import { Column } from "./Column";

interface BoardProps {
  state: BoardState;
  dispatch: Dispatch<BoardAction>;
}

export function Board({ state, dispatch }: BoardProps) {
  function addTask(columnId: ColumnId, title: string, priority: Priority) {
    const task: Task = {
      id: crypto.randomUUID(),
      title,
      priority,
      labels: [],
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "ADD_TASK", payload: { columnId, task } });
  }

  return (
    <main className="board">
      {state.columns.map((column) => {
        // Derive the tasks to show from state instead of storing them twice.
        const tasks = column.taskIds
          .map((id) => state.tasks[id])
          .filter((task): task is Task => task !== undefined);

        return (
          <Column
            key={column.id}
            column={column}
            tasks={tasks}
            onAddTask={(title, priority) =>
              addTask(column.id, title, priority)
            }
          />
        );
      })}
    </main>
  );
}
