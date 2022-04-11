import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import './withdraw.css';

function Withdraw() {
    const [balance, setbalance] = useState(13.22)
    const [withdrawVal, setwithdrawVal] = useState("")
    const [error, seterror] = useState(false)

    const deposit = () => {
        seterror(false)
        if(Number(withdrawVal) > Number(balance) ) {
            seterror(true)
            return;
        }
        setbalance(Math.round((Number(balance) - Number(withdrawVal)) * 100) / 100);
    }
  return (
    <div className="main">
        <Navbar />

        <h1>Withdraw</h1>
        <div className="deposit">
            <div className="flex">
                <h4>Balance: </h4>
                <h4>{balance}</h4>
            </div>

            <div>
                <h5>Withdraw Amount</h5>
                <input type="number" value={withdrawVal} onChange={(e) => setwithdrawVal(e.target.value)} className="input" />
                {error && (
                    <p className="error">Insufficient Funds</p>
                )}
            </div>

            <button type="button" onClick={deposit}>Submit</button>
        </div>
    </div>
  )
}

export default Withdraw