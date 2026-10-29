import { useEffect, useState } from "react";
import type { ZodType } from "zod";

// A generic hook: T is decided by the caller, so the same code works for a
// board, a theme string, a list of filters, and so on.
//
// TODO (phase 4): use this to persist the board, then replace `useReducer`
// in App.tsx with a version that reads its initial state from localStorage.
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  schema: ZodType<T>,
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return initialValue;
      const result = schema.safeParse(JSON.parse(raw));
      // Corrupted or outdated data falls back to the default instead of
      // crashing the app.
      return result.success ? result.data : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage may be full or disabled; the app still works without it.
    }
  }, [key, value]);

  return [value, setValue] as const;
}
