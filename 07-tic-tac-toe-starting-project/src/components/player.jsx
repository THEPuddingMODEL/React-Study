import { useState } from "react";

export default function Player({ initialName, symbol, isActive}) {
  // two goal:
  // 1. store user name (pass it back to parent?)
  // 2. change the edit button

  // handle the user click event,
  // change the username, should this be using state?

  //const [username, setUsername] = useState("");

  const [playerName, setPlayerName] = useState(initialName)

  const [isEditing, setIsEditing] = useState(false)


  let editPlayerName = <span className="player-name">{playerName}</span> 

  if (isEditing) {

    editPlayerName = (<input type="text" required value = {playerName} onChange={handleChangeName}/>)

  }

  function handleChangeName(event) {
    setPlayerName(event.target.value)

  }

  function handleClick() {
    //setIsEditing(isEditing?false:true)

    setIsEditing((isEditing)=>!isEditing)
  }

  return (

    // we need to know whether the current player is his turn or not
    <li className={isActive? 'active': undefined}>
      <span className="player" >

        {editPlayerName}

        {/* {!isEditing && <span className="player-name">{name}</span> }

        { isEditing && <input type="text" /> } */}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick = {handleClick}>{isEditing?'Save':'Edit'}</button>
    </li>
  );
}
