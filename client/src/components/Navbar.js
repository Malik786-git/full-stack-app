import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul style={{display: "flex", justifyContent: "flex-start", listStyle: "none"}}>
        <li style={{marginRight: '20px'}}><NavLink to="/">Home</NavLink></li>
        <li style={{marginRight: '20px'}}><NavLink to="/add">Add User</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
