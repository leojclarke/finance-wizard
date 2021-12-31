import React from "react";
import "./Transactions.css";

export default function Transactions({
  data,
  dateFormatter,
  currencyFormatter,
}) {
  return (
    <section>
      <div className="transaction-section-header">
        <h2 className="transaction-month-header">November</h2>
      </div>
      <div>
        <ul className="transactions-list">
          {data.map((transactions, key) => {
            return (
              <li className="transaction-row" key={key}>
                <div>
                  <img
                    className="transaction-logo"
                    src={transactions.payee.imgSrc}
                    alt={transactions.payee.shortName}
                    width="60px"
                  />
                </div>
                <div className="transaction-description">
                  <p className="transaction-payee">
                    {transactions.payee.shortName}
                  </p>
                  <p>{dateFormatter(transactions.date)}</p>
                </div>
                <div className="transaction-amount">
                  <p>{currencyFormatter(transactions.amount)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
