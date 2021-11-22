import React from 'react'
import './Transactions.css'
import transactionData from './data'

export default function Transactions() {

    return (
        <ul>
          <li className="transaction-row"><h2>November</h2></li>
            {transactionData.map((data, key) => {
                return (
                  <li className="transaction-row" key={key}>
                    <div>
                      <img 
                        className="transaction-logo"
                        src={data.payee.imgsrc}
                        alt={data.payee.shortname}
                        width="60px"
                      />
                    </div>
                    <div className="transaction-description">
                      <p className="transaction-payee">{data.payee.shortname}</p>
                      <p>{data.date}</p>
                    </div>
                    <div className="transaction-amount">{" € " + data.amount}</div>
                  </li>
                );
            })}
        </ul>
    );
};
