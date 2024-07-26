import React, { useState } from 'react'

export default function Login({user}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <>
      <h2>Payment page</h2>
      <h4>Usrename : {user.username}</h4>
      <h4>Wallet : {user.wallet}</h4>
      <button onClick={handleOnClick}>PAY</button>
      <h4>Updated Wallet : {user.wallet - 5000}</h4>
      </>
    )
  }
  return (
    <>
    <div>Payment page</div>
    <h4>Username : {user.username}</h4>
    <h4>wallet : {user.wallet}</h4>
    <button onClick = {handleOnClick}>PAY</button>
    </>
  )
}
