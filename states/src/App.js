import {useState } from "react";

function App() {
    const [year, setYear] = useState(2024)

  function updateYear(){
    setYear(year + 1);
  }
  return (
    <>
      <h3>Current year: {year}</h3>
     
      <button onClick= {updateYear} >Change year</button>
    </>
  );
}

export default App;
