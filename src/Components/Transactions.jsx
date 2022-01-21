import React from "react";
import "./Transactions.css";

export default function Transactions({
  data,
  dateFormatter,
  currencyFormatter,
  transactionsGrouper,
}) {
  return (
    <section className="transactions-section">
      <div className="transaction-section-header">
        {transactionsGrouper(data).map((transactions) => {
          return (
            <div key={transactions.id}>
              <div className="transaction-month-header">
                <h2>{transactions.name}</h2>
              </div>
              <div className="transactions-list-container">
                <ul
                  className={
                    transactions.entries.length > 1
                      ? "transactions-list"
                      : "transactions-short-list"
                  }
                >
                  {transactions.entries.map((entry) => {
                    return (
                      <li className="transaction-row" key={entry.id}>
                        <div className="transaction-logo-container">
                          <img
                            className="transaction-logo"
                            src={entry.payee.imgSrc}
                            alt={entry.payee.shortName}
                          />
                        </div>
                        <div className="transaction-description">
                          <p className="transaction-payee">
                            {entry.payee.shortName}
                          </p>
                          <p>{dateFormatter(entry.date)}</p>
                        </div>
                        <div className="transaction-amount">
                          <p>{currencyFormatter(entry.amount)}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
