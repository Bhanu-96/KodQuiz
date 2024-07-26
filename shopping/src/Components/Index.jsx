import React from 'react'
import Login from './Login';
import { useState } from 'react';

export default function Index() {
  

  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Login  />
    )
  }
 return (
  <>
  <h2>Welcome to index page!</h2>
  <button onClick = {handleOnClick}>Login</button>
  </>
 )
}
