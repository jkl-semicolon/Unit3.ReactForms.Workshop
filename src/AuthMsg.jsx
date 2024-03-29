const AuthMsg = ({authMessage, authUsername}) => {
  return (
    <>
    <br/>
      <h3>{authMessage}</h3>
      <br/>
      {authUsername && <h4>{`Hello there, ${authUsername}!`}</h4>}
      <br/>
    </>
  )
}

export default AuthMsg