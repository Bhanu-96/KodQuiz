import React from 'react'
import Cart from './Cart'
import { useState } from 'react';

export default function Shopping() {
  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Cart />
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

