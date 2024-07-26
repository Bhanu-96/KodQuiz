import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function Two() {
  return (
    
    <>
    <div className='Two'>
          <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/One'><button>One</button></NavLink>
        <NavLink to='/Two'><button>Two</button></NavLink>
        <NavLink to='/Three'><button>Three</button></NavLink>
        <div>Two</div>
    </div>
    </>
  )
}
