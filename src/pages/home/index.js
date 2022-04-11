import React from 'react'
import Navbar from '../../components/navbar'
import './home.css'

function Home() {
  return (
    <div>
        <Navbar />
        <div className="main-content">
            <h1>Welcome to the bank</h1>
            <p>For all your banking needs</p>
            <svg className="card" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
        </div>
    </div>
  )
}

export default Home