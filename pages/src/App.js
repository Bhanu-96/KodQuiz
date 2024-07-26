import { Route, Routes } from "react-router-dom";
import One from './One ';
import Two from './Two';
import Three from './Three';
import Home from "./Home";
import './style.css'
function App() {
  return (
   <> 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/one' element={<One />}/>
    <Route path='/two' element={<Two />}/>
    <Route path='/three' element={<Three />}/>
   </Routes>
   </>
  );
}

export default App;
