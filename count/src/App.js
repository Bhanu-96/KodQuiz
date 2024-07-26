//exmple 3: Mini counter application 
import {useState} from 'react'; 

function App() {
  const [count, setCount] = useState(0);
  function decreaseCount(){
    setCount(count - 1);
  }
  function increaseCount(){
    setCount(count + 1);
  }
  return (
    <>
    <h3>Counter:</h3>
    <button onClick= {decreaseCount}> - </button>
    <input type= 'text' value={count}></input>
    <button onClick= {increaseCount}> + </button>

    </>
    
  );
}

export default App;
