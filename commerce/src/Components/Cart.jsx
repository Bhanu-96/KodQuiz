import React from 'react'
import Payment from './Payment';
import { useState } from 'react';

export default function Cart({user}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Payment  user = {user} />
    )
  }
  return (
    <>
    <div>Cart</div>
    <h4>Good to go</h4>
    <button onClick = {handleOnClick}>Payment</button>
    </>
  )
}

