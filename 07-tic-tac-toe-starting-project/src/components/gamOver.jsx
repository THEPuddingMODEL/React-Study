export default function Gameover({ winner, hasDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won!</p>}
      {hasDraw && <p>Draw</p>}
      <p>
        <button>Rematch</button>
      </p>
    </div>
  );
}
