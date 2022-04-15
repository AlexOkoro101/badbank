import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import useBalance from '../../components/utils/useBalance';
import './deposit.css';

function Deposit() {
    const [depositVal, setdepositVal] = useState("")
    const {balance, deposit} = useBalance();

  return (
    <div className="main">
        <Navbar />

        <h1 className="depositHeader">Deposit</h1>
        <div className="deposit">
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">Balance: ${balance}</h4>
                    <h6 className="card-subtitle text-muted">Quickly add to your wallet</h6>
                    <input type="number"  value={depositVal} onChange={(e) => setdepositVal(e.target.value)} className="input form-control" />
                    <button className="btn btn-primary" type="button" onClick={() => deposit(Number(depositVal))}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deposit