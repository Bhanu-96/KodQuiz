import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateWallet } from '../Store';

export default function Payment() {
  const [isClicked, setIsClicked] = useState(false);

   const user = useSelector(state => state.user);
   const dispatch = useDispatch();

  function handleOnClick(){
    setIsClicked(true);
    dispatch(updateWallet(5000));     //payload (5000)
  }
  if(isClicked){
    return (
      <>
       <Payment />
      <h4>Updated Wallet : {user.wallet}</h4>
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
