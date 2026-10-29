# TaskFlow

A Kanban task board built with React and strict TypeScript.

> Status: in progress. See the roadmap below.

## Run it

```bash
npm install
npm run dev        # start the dev server
npm run typecheck  # TypeScript, no emit
npm test           # Vitest
```

## What it demonstrates

- **Typed domain models** (`src/types.ts`), including a `Priority` union type
- **Discriminated-union reducer actions** (`src/state/boardReducer.ts`) with an
  exhaustive `assertNever` check
- **Generic custom hook** `useLocalStorage<T>` (`src/hooks/useLocalStorage.ts`)
- **Runtime validation with Zod** (`src/schema.ts`) so corrupted storage cannot
  crash the app
- **Strict mode** with `noUncheckedIndexedAccess` and no `any`

## Project structure

```
src/
  components/   Board, Column, TaskCard, AddTaskForm
  data/         initial board state
  hooks/        useLocalStorage<T>
  state/        boardReducer + tests
  schema.ts     Zod schemas
  types.ts      domain types
  App.tsx
  main.tsx
```

## Roadmap

- [x] Project skeleton, types, reducer (ADD_TASK), board rendering
- [ ] Phase 2: edit and delete tasks (UPDATE_TASK, DELETE_TASK)
- [ ] Phase 3: drag and drop between columns (MOVE_TASK, `@dnd-kit`)
- [ ] Phase 4: persistence, filters, more tests, deploy to Vercel

## Screenshots

_Add a screenshot or GIF here once the board is working._
