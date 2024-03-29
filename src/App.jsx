import './App.css'
import SignUp from './SignUp.jsx'
import Authenticate from './Authenticate.jsx'
import { useState } from 'react'

export const API_URL = 'https://fsa-jwt-practice.herokuapp.com'

function App() {

  const [ourUsername, setUsername] = useState('')
  const [ourPassword, setPassword] = useState('')
  const [token, setToken] = useState('')
  const [toWelcome, setToWelcome] = useState(false)

  return (
    <>
      {
        !toWelcome ? (
          <SignUp 
            ourUsername={ourUsername} 
            setUsername={setUsername} 
            ourPassword={ourPassword} 
            setPassword ={setPassword}
            token={token}
            setToken={setToken}
            setToWelcome={setToWelcome}
          /> ) : (
          <Authenticate 
            token={token} 
            setToken={setToken}
            setUsername={setUsername} 
            setPassword ={setPassword}
            setToWelcome={setToWelcome}
          />
        )
      }
    </>
  )
}

export default App

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this workshop, you will write controlled React forms that will hit an external API. 
// The API we are using is a small internal FSA APILinks to an external site. with only two routes, /signup and /authenticate.

// https://fsa-jwt-practice.herokuapp.com/

// In this workshop, you will pass the /signup route, either a username and password which will come from a React form. 
// On success, the API will send back a token, which you can store, then pass to the server to authenticate future requests.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
