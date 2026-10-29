import type { BoardState, ColumnId, Task } from "../types";

// Discriminated union: the `type` field tells TypeScript which payload shape
// to expect inside each `case`.
export type BoardAction =
  | { type: "ADD_TASK"; payload: { columnId: ColumnId; task: Task } }
  | {
      type: "UPDATE_TASK";
      payload: { taskId: string; changes: Partial<Omit<Task, "id">> };
    }
  | { type: "DELETE_TASK"; payload: { taskId: string } }
  | {
      type: "MOVE_TASK";
      payload: { taskId: string; toColumnId: ColumnId; toIndex: number };
    };

// If you add a new action type and forget to handle it, the call to this
// function in the `default` branch becomes a compile error.
function assertNever(value: never): never {
  throw new Error(`Unhandled action: ${JSON.stringify(value)}`);
}

export function boardReducer(
  state: BoardState,
  action: BoardAction,
): BoardState {
  switch (action.type) {
    case "ADD_TASK": {
      const { columnId, task } = action.payload;
      return {
        tasks: { ...state.tasks, [task.id]: task },
        columns: state.columns.map((column) =>
          column.id === columnId
            ? { ...column, taskIds: [...column.taskIds, task.id] }
            : column,
        ),
      };
    }

    case "UPDATE_TASK": {
      // TODO (phase 2): merge `action.payload.changes` into the existing task.
      // Hint: return a new `tasks` object; never mutate `state`.
      return state;
    }

    case "DELETE_TASK": {
      // TODO (phase 2): remove the task from `tasks` AND from every
      // column's `taskIds`.
      return state;
    }

    case "MOVE_TASK": {
      // TODO (phase 3): remove the id from its current column, then insert it
      // at `toIndex` in `toColumnId`. This powers drag and drop.
      return state;
    }

    default:
      return assertNever(action);
  }
}
