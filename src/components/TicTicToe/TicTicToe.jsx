import React, { useState } from "react";
import "./TicTicToe.css";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  const handleClick = (index) => {
    if (winner || tie) {
      return;
    }
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      if (checkForWinner(newBoard)) {
        setWinner(currentPlayer);
      } else if (checkForTie(newBoard)) {
        setTie(true);
      } else {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const checkForWinner = (board) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const checkForTie = (board) => {
    return board.every((square) => square !== null);
  };

  const renderSquare = (index) => {
    return (
      <div key={index} className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <div>
      {winner ? (
        `The winner is ${winner}`
      ) : tie ? (
        "It's a tie"
      ) : (
        <div className="board">
          {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
