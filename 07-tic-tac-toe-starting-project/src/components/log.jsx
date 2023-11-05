export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.position.row}${turn.position.col}`}>
          {turn.player}at row:{turn.position.row} col:{turn.position.col}
        </li>
      ))}
    </ol>
  );
}

//{ position: { row: rowIndex, col: colIndex}, player: tempPlayer },
