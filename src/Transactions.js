import React from 'react'
import transactionData from './data'

export default function Transactions() {
    return (
        <div>
            {transactionData.map((data, key) => {
                return (
                    <div key={key}>
                        {data.payee.shortname +
                        " , " +
                        data.date + 
                        " , " +
                        data.amount}
                        </div>
                );
            })}
        </div>
    );
};
