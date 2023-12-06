
import { useState } from "react";

export default function StateLogin() {

  const [enteredValue, setEnteredValue] = useState({
    email:'',
    password:''
  })

  // log on button listen to form update
  // html for is the native html for

  function handleSubmit(event){
    event.preventDefault()
    console.log(enteredValue)
  }

  function handleInputchange(identifier, value){

    setEnteredValue(prevEnteredValue => ({
      ...prevEnteredValue,
      [identifier]:value
    }))
  }

  // use onSubmit on the entire form instead of on the button.

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>handleInputchange('email', event.target.value)} value={enteredValue.email}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>handleInputchange('password', event.target.value)} value={enteredValue.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
