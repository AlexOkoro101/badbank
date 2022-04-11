import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import './deposit.css';

function Deposit() {
    const [balance, setbalance] = useState(30.4)
    const [depositVal, setdepositVal] = useState("")

    const deposit = () => {
        setbalance(Number(depositVal) + Number(balance));
    }
  return (
    <div className="main">
        <Navbar />

        <h1>Deposit</h1>
        <div className="deposit">
            <div className="flex">
                <h4>Balance: </h4>
                <h4>{balance}</h4>
            </div>

            <div>
                <h5>Deposit Amount</h5>
                <input type="number" value={depositVal} onChange={(e) => setdepositVal(e.target.value)} className="input" />
            </div>

            <button type="button" onClick={deposit}>Submit</button>
        </div>
    </div>
  )
}

export default Deposit