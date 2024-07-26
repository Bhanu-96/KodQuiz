import React from 'react'
import { NavLink } from 'react-router-dom'

export default function sql() {
  return (
    <>
    <NavLink to='/java'><button>Java</button></NavLink>
    <NavLink to='/sql'><button>Sql</button></NavLink>
    <NavLink to='/html'><button>Html</button></NavLink>
        <div>
            <h2>Sql Quiz:</h2>
            
            <h3>Q 1.who invented Database?</h3>
                <input type='radio' name='q1' value='A'></input>frank tedd<br></br>
                <input type='radio' name='q1' value='B'></input>Edger frank "ted"<br></br>
                <input type='radio' name='q1' value='C'></input>Edger frank<br></br>
                <input type='radio' name='q1' value='D'></input>Edger ted<br></br>

                  
            <h3>Q 2.when invented Database?</h3>
                <input type='radio' name='q2' value='A'></input>1722<br></br>
                <input type='radio' name='q2' value='B'></input>1756<br></br>
                <input type='radio' name='q2' value='C'></input>1960<br></br>
                <input type='radio' name='q2' value='D'></input>1999<br></br>

            <h3>Q 3.what is database?</h3>
                <input type='radio' name='q3' value='A'></input>origanized collection of data<br></br>
                <input type='radio' name='q3' value='B'></input>origanized collection of data and stored electrically in a computer system<br></br>
                <input type='radio' name='q3' value='C'></input>origanized collection of and stored in computer<br></br>
                <input type='radio' name='q3' value='D'></input>origanized collection of information<br></br>


            <h3>Q 4.Query to get Date?</h3>
                <input type='radio' name='q4' value='A'></input>Date<br></br>
                <input type='radio' name='q4' value='B'></input>GETDATE()<br></br>
                <input type='radio' name='q4' value='C'></input>DATE()<br></br>
                <input type='radio' name='q4' value='D'></input>DATE<br></br>

                <input type='Submit'></input><br></br>
        </div>
        </>
  )
}