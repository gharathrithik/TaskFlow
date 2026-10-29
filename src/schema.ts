import { z } from "zod";
import type { BoardState } from "./types";

// Runtime validation for data we don't control (e.g. localStorage).
// Annotating with z.ZodType<BoardState> makes TypeScript check that the
// schema and the compile-time type never drift apart.

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  labels: z.array(z.string()),
  createdAt: z.string(),
});

const columnSchema = z.object({
  id: z.enum(["todo", "in-progress", "done"]),
  title: z.string(),
  taskIds: z.array(z.string()),
});

export const boardSchema: z.ZodType<BoardState> = z.object({
  tasks: z.record(taskSchema),
  columns: z.array(columnSchema),
});
