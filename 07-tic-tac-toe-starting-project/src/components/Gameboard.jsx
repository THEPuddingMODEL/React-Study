const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onUserChange, gameBoard }) {
  // the following gameboard is a computed and derived state from the given data
  // manage as little needed, try to derive more

  //const [gameBoard,setGameBoard] = useState(initialGameBoard)

  // this logic below is lifted up
  // function handleSelectedSQuare(rowIndex,colIndex){

    //   setGameBoard((prevBoard)=>{

    //       // in this, the spread operator basically a copy, once we copied, we copy each of the inner array over gain

    //       // map returns a new array of array, and we copy the array of array to updateboard again

    //       // if we did updateBoard = [...prevBoard], the inner copy are still references

    //       const updatedBoard = [...prevBoard.map(innerArray=>[...innerArray])]

    //       // on game board, need to out down the symbol based on the user
    //       updatedBoard[rowIndex][colIndex] = currPlayer

    //       return updatedBoard

    //   })

  //     // when user clicked, next user turn
  //     onUserChange()
  // }


  //

  const board = gameBoard.map((row, rowIndex) => (
    // li item use rowIndex
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <li key={colIndex}>
            {/* if want to add  parameter to the function prop? need to add an annoymous function */}
            <button
              // use the annoymous function because onUserChange() will be called straight away
              onClick={() => onUserChange(rowIndex, colIndex)}
              disabled={playerSymbol ? true : false}
            >
              {playerSymbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ))
  
  // the board can be seen that in ol or ul, we can inject code of an array

  console.log(board)

  return (

    <ol id="game-board">

      {board}

    </ol>
  );
}
