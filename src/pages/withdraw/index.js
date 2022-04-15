import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import useBalance from '../../components/utils/useBalance';
import './withdraw.css';

function Withdraw() {
    const {balance, withdraw} = useBalance();
    const [withdrawVal, setwithdrawVal] = useState("")
    const [error, seterror] = useState(false)

    const depositCheck = () => {
        seterror(false)
        if(Number(withdrawVal) > Number(balance) ) {
            seterror(true)
            return;
        }
        withdraw(Number(withdrawVal))
        
    }
  return (
    <div className="main">
        <Navbar />

        <h1 className="withdrawHeader">Withdraw</h1>
        <div className="deposit">
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Balance: ${balance}</h4>
                    <h6 className="card-subtitle text-muted mb-10">Quickly withdraw from your wallet</h6>
                    <input type="number" value={withdrawVal} onChange={(e) => setwithdrawVal(e.target.value)} className="input form-control" />
                    {error && (
                        <p className="error">Insufficient Funds</p>
                    )}
                    <button className="btn btn-primary" type="button" onClick={depositCheck}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Withdraw