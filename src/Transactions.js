import React from "react";
import "./Transactions.css";
import transactionData from "./data";

export default function Transactions() {
  return (
    <section>
      <div className="transaction-section-header">
        <h2 className="transaction-month-header">November</h2>
      </div>
      <div>
        <ul className="transactions-list">
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
                <div className="transaction-amount">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  }).format(data.amount)}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
