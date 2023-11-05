import Player from "./components/player";
import Log from "./components/log";
import GameBoard from "./components/Gameboard";
import Gameover from "./components/gamOver"
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  // do not need to manage the active player state
  const [currTurns, setCurrTurn] = useState([]);

  let gameBoard = initialGameBoard;

  // re computing the board, so we have a gameBoard which can be used in other component
  for (const turn of currTurns) {
    // desturcturing
    const { position, player } = turn;
    const { row, col } = position;
    gameBoard[row][col] = player;
  }

  // detecting winner
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstQi = gameBoard[combination[0].row][combination[0].column];
    const secondQi = gameBoard[combination[1].row][combination[1].column];
    const thirdQi = gameBoard[combination[2].row][combination[2].column];

    if (firstQi && firstQi === secondQi && firstQi === thirdQi) {
      winner = firstQi;
    } 
  }

  const hasDraw = (currTurns.length === 9 && !winner)

  // this is only for initialisation
  let tempPlayer = "X";
  if (currTurns.length > 0 && currTurns[0].player === "X") {
    tempPlayer = "O";
  }

  // when user click the button, we will update current turn
  function handleUserChange(rowIndex, colIndex) {
    // if the player was set to be player: currPlayer, we cannot gurantee it is the latest state
    setCurrTurn((prevTurn) => {
      let tempPlayer = "X";

      // the prevTurn head is always the latest turn, thus, we will choose the 0
      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        tempPlayer = "O";
      }

      // adding new objects to the head of the array
      const updatedTurns = [
        { position: { row: rowIndex, col: colIndex }, player: tempPlayer },
        ...prevTurn,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={tempPlayer === "X"}
          ></Player>

          <Player
            initialName="Player 2"
            symbol="O"
            isActive={tempPlayer === "O"}
          ></Player>
        </ol>
        {winner && <Gameover winner={winner} hasDraw={hasDraw} ></Gameover>}
        <GameBoard onUserChange={handleUserChange} gameBoard={gameBoard} />
        <Log turns={currTurns}></Log>
      </div>
    </main>
  );
}

export default App;
