import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function Three() {
  return (
    <>
    <div className='Three'>
          <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/One'><button>One</button></NavLink>
        <NavLink to='/Two'><button>Two</button></NavLink>
        <NavLink to='/Three'><button>Three</button></NavLink>
        <div>Three</div>
    </div>
    </>
  )
}
