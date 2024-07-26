import React from 'react'
import Cart from './Cart'
import { useState } from 'react';

export default function Shopping({user}) {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Cart  user = {user} />
    )
  }
  return (
    <>
    <div>Shoping</div>
    <h4>Found what you're looking for?</h4>
    <button onClick = {handleOnClick}>Cart</button>
    </>
  )
}

