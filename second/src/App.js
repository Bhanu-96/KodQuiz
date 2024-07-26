

function App() {
  let num=15;
  return (
    //fragment
    <>
    <h1>Even -Odd Checker</h1>
    <h3>Number = {num}</h3>
    <p>
      {num} is {num % 2 === 0 ? 'EVEN' : 'ODD'}
    </p>
    </>
    
  );
}

export default App;
