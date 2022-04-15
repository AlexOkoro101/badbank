import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../../assets/img/logo.png'

function Navbar() {
  return (
    <div className="navbar">
        <Link to="/">
          <img src={logo} width="50" />
        </Link>
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