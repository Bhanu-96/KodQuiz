import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Java() {
  return (
    <>
    <NavLink to='/java'><button>Java</button></NavLink>
    <NavLink to='/sql'><button>Sql</button></NavLink>
    <NavLink to='/html'><button>Html</button></NavLink>
        <div>
            <h2>Java Quiz:</h2>
            
            <form>
                <h3>Q 1.Size of 'int'?</h3>
                <input type='radio' name='q1' value='A'></input>2 bytes<br></br>
                <input type='radio' name='q1' value='B'></input>4 bytes<br></br>
                <input type='radio' name='q1' value='C'></input>6 bytes<br></br>
                <input type='radio' name='q1' value='D'></input>8 bytes<br></br>

                <h3>Q 2.Size of 'short'?</h3>
                <input type='radio' name='q2' value='A'></input>2 bytes<br></br>
                <input type='radio' name='q1' value='B'></input>4 bytes<br></br>
                <input type='radio' name='q1' value='C'></input>6 bytes<br></br>
                <input type='radio' name='q1' value='D'></input>8 bytes<br></br>

                <h3>Q 3.Size of 'byte'?</h3>
                <input type='radio' name='q3' value='A'></input>2 bytes<br></br>
                <input type='radio' name='q1' value='B'></input>4 bytes<br></br>
                <input type='radio' name='q1' value='C'></input>6 bytes<br></br>
                <input type='radio' name='q1' value='D'></input>8 bytes<br></br>

                <h3>Q 4.Size of 'long'?</h3>
                <input type='radio' name='q4' value='A'></input>2 bytes<br></br>
                <input type='radio' name='q4' value='B'></input>4 bytes<br></br>
                <input type='radio' name='q4' value='C'></input>6 bytes<br></br>
                <input type='radio' name='q4' value='D'></input>8 bytes<br></br>


                <input type='Submit'></input><br></br>
            </form>
        </div>
        </>
  )
}
