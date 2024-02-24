import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [game, setGame] = useState(Array(9).fill(""));
  const [changer, setChanger] = useState(true);

  const play = (index) => {
    const newGame = [...game];

    if (checkWinner(newGame) || newGame[index]) {
      return;
    }

    newGame[index] = changer ? "X" : "O";
    setGame(newGame);
    setChanger(!changer);
    checkWinner(index);
  };

  const renderBox = (index) => (
    <div className="box" onClick={() => play(index)}>
      {game[index]}
    </div>
  );

  const checkWinner = (squares) => {
    const winningComp = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (var i = 0; i < winningComp.length; i++) {
      const [a, b, c] = winningComp[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const winner = checkWinner(game);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${changer ? "X" : "O"}`;

  const resetGame = () => {
    setGame(Array(9).fill(""));
    setChanger(true);
  };

  return (
    <>
      <div class="title">
        <h1>Tic-Tac-Toe</h1>
        <p>{status}</p>
      </div>

      <div className="game-box">
        {renderBox(0)}
        {renderBox(1)}
        {renderBox(2)}
        {renderBox(3)}
        {renderBox(4)}
        {renderBox(5)}
        {renderBox(6)}
        {renderBox(7)}
        {renderBox(8)}
      </div>
      <button onClick={resetGame}>Reset</button>
    </>
  );
}

export default App;
