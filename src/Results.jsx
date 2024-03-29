const Results = ({token, setToWelcome}) => {
  return (
    <>
      <h2>Congratulations on creating an account!</h2>
      <br/>
      <h3>Here is your token:</h3>
      <br/>
      <p>{token}</p> 
      <br/>
      <button onClick={() => {setToWelcome(true)}}>Press Here to Proceed</button>
    </>
  )
}

export default Results