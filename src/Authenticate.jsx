import { API_URL } from "./App"
import { useState } from 'react'
import AuthMsg from './AuthMsg.jsx'

const Authenticate = ({token, setToken, setUsername, setPassword}) => {

  const[authMessage, setAuthMessage] = useState('');
  const[authUsername, setAuthUsername] = useState('');

  const authenResults = async() => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL + '/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      })
      const json = await response.json();
      setAuthMessage(json.message)
      setAuthUsername(json.data.username)
      console.log(json);
      } catch (err) {
        alert("Error with Authenticating Token!", err)
        console.log(err)
      }
  }

  const returnToSignup = () => {
    setUsername('')
    setPassword('')
    setToken('')
  }

  return (
    <>
      <h1>Welcome to our Website</h1>
      <br/>
      <h2>We hope you are enjoying your token!</h2>
      <br/>
      <p>{token}</p>
      <br/>
      <button onClick={authenResults}>Press Here to Validate your Token</button>
      <br/>
      {authMessage && <AuthMsg authMessage={authMessage} authUsername={authUsername}/>}
      <button onClick={returnToSignup}>Press Here to Return to Sign-up Page</button>
    </>
  )
}

export default Authenticate