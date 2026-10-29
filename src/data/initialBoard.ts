import type { BoardState } from "../types";

export const initialBoard: BoardState = {
  tasks: {
    "t-1": {
      id: "t-1",
      title: "Set up the project",
      priority: "high",
      labels: ["setup"],
      createdAt: "2026-10-30T08:00:00.000Z",
    },
    "t-2": {
      id: "t-2",
      title: "Implement DELETE_TASK in the reducer",
      priority: "medium",
      labels: ["state"],
      createdAt: "2026-10-30T08:05:00.000Z",
    },
    "t-3": {
      id: "t-3",
      title: "Deploy to Vercel",
      priority: "low",
      labels: ["deploy"],
      createdAt: "2026-10-30T08:10:00.000Z",
    },
  },
  columns: [
    { id: "todo", title: "To Do", taskIds: ["t-2", "t-3"] },
    { id: "in-progress", title: "In Progress", taskIds: [] },
    { id: "done", title: "Done", taskIds: ["t-1"] },
  ],
};
