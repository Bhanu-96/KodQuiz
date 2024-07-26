import React from 'react'
import Todo from './Todo'
import{ useState } from 'react'


export default function Home() {
  const[todoList, setTodoList] = useState([]);
  
  const[task, setTask] = useState('');

  function handleOnChange(e){
    setTask(e.target.value);
  }
  function handleOnClick(){
    if(task){
      setTodoList(todoList.concat(task));
      setTask('');
    }
  }
  return (
    <>
    <h1>My To-do List</h1>
    <input type= "text"
            value={task}
            onChange={handleOnChange}>
            </input>
    <button onClick={handleOnClick}> Add Task </button>
    <Todo todoList = {todoList}/>
   
    </>
  )
}
