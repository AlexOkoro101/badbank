import React, {createContext, useContext, useState,} from 'react'
const BalanceContext = createContext({})

export const BalanceProvider = ({ children, route }) => {
    const [balance, setbalance] = useState(100)

    const withdraw = (val) => {
      setbalance(Math.round((balance - val) * 100) / 100);
    }

    const deposit = (val) => {
      setbalance(balance + val)
    }

    return (
      <BalanceContext.Provider value={{
        balance,
        withdraw,
        deposit
      }}>
          {children}
      </BalanceContext.Provider>
    )
}

export default function useBalance() {
  return useContext(BalanceContext)
}