import { useState } from "react";

function Square({ index, winner, value, onSquareClick }) {
  if (winner && (winner[0] === index || winner[1] === index || winner[2] === index))
    return (
      <button style={{ backgroundColor: 'red' }} className="square" onClick={onSquareClick}>{value}</button>
    );
  else {
    return (
      <button className="square" onClick={onSquareClick}>{value}</button>
    );
  }
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = ((xIsNext % 2) ? 'O' : 'X')
    onPlay(nextSquares)
  }
  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = 'winner : ' + squares[winner[0]]
  }
  else if (xIsNext === 9) {
    status = 'No winner'
  }
  else {
    status = 'next turn : ' + ((xIsNext % 2) ? 'O' : 'X')
  }
  const boardrow = []
  for (let row = 0; row < 3; row++) {
    const boardcol = []
    for (let col = 0; col < 3; col++) {
      const squareindex = row * 3 + col
      boardcol.push(
        <Square index={squareindex} winner={winner} value={squares[squareindex]} onSquareClick={() => handleClick(squareindex)} />
      )
    }
    boardrow.push(
      <div className="board-row">
        {boardcol}
      </div>
    )
  }
  return (
    <>
      <div className="status">{status}</div>
      {boardrow}
    </>
  );
}


function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i]
    }
  }
  return null
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [isAscOrder, setIsAscOrder] = useState(true);
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextmoves) {
    setCurrentMove(nextmoves)
  }

  const moves = history.map((squares, move) => {
    let description
    let diff
    let len = history.length
    if (isAscOrder) {
      if (move > 0 && move !== currentMove) {
        description = 'go to move #' + move
      }
      else if (move === currentMove) {
        description = 'you are at move#' + move
        return <li key={move}>{description}</li>
      }
      else if (move === 0) {
        description = 'go to start'
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    }
    else {
      diff = len - move - 1
      if (diff > 0 && diff !== currentMove) {
        description = "go to move#" + diff
      }
      else if (diff === currentMove) {
        description = 'you are at move#' + diff
        return <li key={move}>{description}</li>
      }
      else if (diff === 0) {
        description = "go to start"
      }
      return (
        <li key={move}>
          <button onClick={() => jumpTo(diff)}>{description}</button>
        </li>
      );
    }
  })

  function onToggle() {
    setIsAscOrder(!isAscOrder)
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={currentMove} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={onToggle}>{isAscOrder ? "ascending order" : "decending order"}</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
