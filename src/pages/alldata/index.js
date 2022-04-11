import React from 'react'
import Navbar from '../../components/navbar'
import data from '../../components/utils/data'
import './alldata.css'

function AllData() {
  return (
    <div className="main">
        <Navbar />

        <div className="table">
            <h1>All Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AllData