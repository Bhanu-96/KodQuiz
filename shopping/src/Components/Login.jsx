import React from 'react'
import Shopping from './Shopping';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Login() {
  const [isClicked, setIsClicked] = useState(false);

const user = useSelector(state => state.user);

  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Shopping />
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
