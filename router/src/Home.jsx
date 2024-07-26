import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>Welcome to Quize App</h2>
        <h3>Select Quize:</h3>
        <NavLink to='/java'><button>Java</button></NavLink>
        <NavLink to='/sql'><button>Sql</button></NavLink>
        <NavLink to='/html'><button>Html</button></NavLink>
    </div>
  )
}