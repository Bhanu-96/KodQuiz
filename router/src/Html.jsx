import React from 'react'
import { NavLink } from 'react-router-dom'

export default function sql() {
  return (
    <>
    <NavLink to='/java'><button>Java</button></NavLink>
    <NavLink to='/sql'><button>Sql</button></NavLink>
    <NavLink to='/html'><button>Html</button></NavLink>
        <div>
            <h2>Html Quiz:</h2>
            
            <h3>Q 1.What is 'Html'?</h3>
                <input type='radio' name='q1' value='A'></input>Hyper text markup language<br></br>
                <input type='radio' name='q1' value='B'></input>HTTP<br></br>
                <input type='radio' name='q1' value='C'></input>hyper text markup langage<br></br>
                <input type='radio' name='q1' value='D'></input>Hyer text markup<br></br>

                <h3>Q 2.what is 'image tag'?</h3>
                <input type='radio' name='q2' value='A'></input>opening imag tag and closing img<br></br>
                <input type='radio' name='q2' value='B'></input>src<br></br>
                <input type='radio' name='q2' value='C'></input>img<br></br>
                <input type='radio' name='q2' value='D'></input>Aduio<br></br>

                <h3>Q 3.who is the father of 'Html'?</h3>
                <input type='radio' name='q3' value='A'></input>Berners<br></br>
                <input type='radio' name='q3' value='B'></input>Tim berners<br></br>
                <input type='radio' name='q3' value='C'></input>Tim berners-Lee<br></br>
                <input type='radio' name='q3' value='D'></input>le-berners<br></br>

                <h3>Q 4.when did Html came out?</h3>
                <input type='radio' name='q4' value='A'></input>1993<br></br>
                <input type='radio' name='q4' value='B'></input>1421<br></br>
                <input type='radio' name='q4' value='C'></input>1992<br></br>
                <input type='radio' name='q4' value='D'></input>1987<br></br>

                <input type='Submit'></input><br></br>
        </div>
        </>
  )
}