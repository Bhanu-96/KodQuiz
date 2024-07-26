import React from 'react'
import Login from './Login';
import { useState } from 'react';

export default function Index() {
  const user ={
    username:'Bhanu',
    wallet: 25000
  }

  const [isClicked, setIsClicked] = useState(false);
  function handleOnClick(){
    setIsClicked(true);
  }
  if(isClicked){
    return (
      <Login  user = {user} />
    )
  }
 return (
  <>
  <h2>Welcome to index page!</h2>
  <button onClick = {handleOnClick}>Login</button>
  </>
 )
}
