import React from 'react'
import Todo from './Todo'
import { useState } from 'react';



function Comp({ compList }) {
  const[todoList, setodoList] = useState([]);
  return (
    <div>
    <h2>To-do List</h2>
    <ul>
      {compList.map((task) => (
        <li>{task} <button>Mark Complete</button></li>
      ))}
    </ul>
    <Todo  todoList = {todoList}/>
    </div>
  );
}
export default Comp;
