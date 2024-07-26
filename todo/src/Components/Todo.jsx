import React from 'react'
import Completed from './Completed'
import { useState } from 'react';

function Todo({ todoList }) {
 const[compList, setCompList] = useState([]);
  return (
    <div>
    <h2>To-do List</h2>
    <ul>
      {todoList.map((task) => (
        <li>{task} <button>Mark complete</button></li>
      ))}
    </ul>
    <Completed  compList = {compList}/>
    </div>
  );
}
export default Todo;
