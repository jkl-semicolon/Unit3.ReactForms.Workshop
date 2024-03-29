const Results = ({token}) => {
  return (
    <>
      <h2>Congratulations on creating an account!</h2>
      <br/>
      <h3>Here is your token:</h3>
      <br/>
      <p>{token}</p> 
      <button>Press Here to Proceed</button>
    </>
  )
}

export default Results