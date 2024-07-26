import React from 'react'
import Shopping from './Shopping';
import { useState } from 'react';

export default function Login({user}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Shopping  user = {user} />
    )
  }
  return (
    <>
    <div>Login page</div>
    <h4>Username : {user.username}</h4>
    <h4>Wallet : {user.wallet}</h4>
    <button onClick = {handleOnClick}>Shopping</button>
    </>
  )
}
