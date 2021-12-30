import React from "react";
import "./Transactions.css";

export default function Transactions({ data }) {
  console.log(data[1]);

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-UK", options);
  };

  const getFormattedAmount = (amount) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

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
                    src={transactions.payee.imgsrc}
                    alt={transactions.payee.shortname}
                    width="60px"
                  />
                </div>
                <div className="transaction-description">
                  <p className="transaction-payee">
                    {transactions.payee.shortname}
                  </p>
                  <p>{getFormattedDate(transactions.date)}</p>
                </div>
                <div className="transaction-amount">
                  <p>{getFormattedAmount(transactions.amount)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
