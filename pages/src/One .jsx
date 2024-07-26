import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function One () {
  return (
    <>
    <div className='One'>
          <NavLink to='/'><button>Home</button></NavLink>
        <NavLink to='/one'><button>One</button></NavLink>
        <NavLink to='/two'><button>Two</button></NavLink>
        <NavLink to='/three'><button>Three</button></NavLink>
        <div>One</div>
    </div>
    </>
  )
}
