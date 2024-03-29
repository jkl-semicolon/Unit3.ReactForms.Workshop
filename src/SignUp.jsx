import { API_URL } from "./App"
import Results from './Results.jsx'
import Oops from './Oops.jsx'
import { useState } from 'react'

const SignUp = ({ourUsername, setUsername, ourPassword, setPassword, token, setToken}) => {

  const [outcome, setOutcome] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const changeUN = () => setUsername(event.target.value)
  const changePW = () => setPassword(event.target.value)

  const generateToken = async () => {
    event.preventDefault();
    if (!ourUsername || !ourPassword) {
      setEmptyInput(true);
      return;
    }
    try {
    const response = await fetch(API_URL + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: ourUsername,
        password: ourPassword,
      }),
    })
    const json = await response.json();
    setToken(json.token)
    setEmptyInput(false)
    setOutcome(json.success)
    } catch (err) {
      alert("Error with Making Account!", err)
      console.log(err)
    }
  }

  return (
    <>
      <h1>Sign Up To Receive a Token</h1>
      <form onSubmit={generateToken}>
        <label>Enter Desired Username:</label>
        <input type="text" placeholder="username" onChange={changeUN}></input>
        <br/>
        <label>Enter Desired Password:</label>
        <input type="password" placeholder="password" onChange={changePW}></input>
        <br/>
        <button type='submit'>Submit</button>
      </form>
      <br/>
      {outcome && <Results token={token}/>}
      {emptyInput && <Oops/>}
    </>
  )
}

export default SignUp