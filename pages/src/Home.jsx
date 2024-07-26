import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'


export default function Home() {
  return (
    <div className='Home'>
    <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/one'><button>One</button></NavLink>
        <NavLink to='/two'><button>Two</button></NavLink>
        <NavLink to='/three'><button>Three</button></NavLink>
        <h3>Welcome Home!</h3>
    </div>
  )
}