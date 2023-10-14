import { useState } from "react";
import { Board } from "./App";


export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState(Array(9).fill(null));
    const ; new ;
    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} />
            </div>
        </div>
    );
}
