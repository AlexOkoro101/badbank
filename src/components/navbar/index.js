import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">Bad Bank</Link>
        <ul>
          <li><Link to="/create-account">Create Account</Link></li>
          <li><Link to="/deposit">Deposit</Link></li>
          <li><Link to="/withdraw">Withdraw</Link></li>
          <li><Link to="/data">All Data</Link></li>
        </ul>
    </div>
  )
}

export default Navbar