import { Route, Routes } from "react-router-dom";
import Java from './Java';
import Sql from './Sql';
import Html from './Html';
import Home from "./Home";
function App() {
  return (
   <> 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/java' element={<Java />}/>
    <Route path='/sql' element={<Sql />}/>
    <Route path='/html' element={<Html />}/>
   </Routes>
   </>
  );
}

export default App;
