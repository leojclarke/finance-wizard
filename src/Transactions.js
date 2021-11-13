import React from 'react'
import './Transactions.css'
import transactionData from './data'

export default function Transactions() {

    return (
        <ul>
            {transactionData.map((data, key) => {
                return (
                  <li key={key}>
                    <div className="logo">
                      <img
                        src={data.payee.imgsrc}
                        alt="brandlogo"
                        width="60px"
                      />
                    </div>
                    <div className="description">
                      <p>{data.payee.shortname}</p>
                      <p>{data.date}</p>
                    </div>
                    <div className="amount">{" € " + data.amount}</div>
                  </li>
                );
            })}
        </ul>
    );
};
