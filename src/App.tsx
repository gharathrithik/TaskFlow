import { useReducer } from "react";
import { Board } from "./components/Board";
import { initialBoard } from "./data/initialBoard";
import { boardReducer } from "./state/boardReducer";

export default function App() {
  const [state, dispatch] = useReducer(boardReducer, initialBoard);

  return (
    <>
      <header className="app-header">
        <h1>TaskFlow</h1>
      </header>
      <Board state={state} dispatch={dispatch} />
    </>
  );
}
