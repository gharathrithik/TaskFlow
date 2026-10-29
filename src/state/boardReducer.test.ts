import { describe, expect, it } from "vitest";
import { boardReducer } from "./boardReducer";
import { initialBoard } from "../data/initialBoard";
import type { Task } from "../types";

const newTask: Task = {
  id: "t-new",
  title: "Write the README",
  priority: "medium",
  labels: [],
  createdAt: "2026-10-30T09:00:00.000Z",
};

describe("boardReducer", () => {
  it("ADD_TASK adds the task and appends its id to the column", () => {
    const next = boardReducer(initialBoard, {
      type: "ADD_TASK",
      payload: { columnId: "todo", task: newTask },
    });

    expect(next.tasks["t-new"]).toEqual(newTask);
    const todo = next.columns.find((c) => c.id === "todo");
    expect(todo?.taskIds.at(-1)).toBe("t-new");
  });

  it("ADD_TASK does not mutate the previous state", () => {
    const before = JSON.stringify(initialBoard);
    boardReducer(initialBoard, {
      type: "ADD_TASK",
      payload: { columnId: "todo", task: newTask },
    });
    expect(JSON.stringify(initialBoard)).toBe(before);
  });

  // Turn these into real tests as you implement each case.
  it.todo("UPDATE_TASK merges changes into the task");
  it.todo("DELETE_TASK removes the task from tasks and from its column");
  it.todo("MOVE_TASK moves a task between columns at the given index");
  it.todo("MOVE_TASK reorders a task within the same column");
});
