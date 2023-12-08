import { useState, useRef } from "react";

export default function Login() {

  const email = useRef()
  const password = useRef()

  const [emailInvalid, setEmailInvalid] = useState(false)

  function handleSubmit(event){
    event.preventDefault()

    const enteredEmail = email.current.value
    const enteredPassword = password.current.value

    const emailValid = enteredEmail.includes('@')

    // if the email not valid, we do not want to proceed with making request
    if(!emailValid){
      setEmailInvalid(true)
      return
    } 

    setEmailInvalid(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">{emailInvalid && <p>Please enter valid email addr</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
