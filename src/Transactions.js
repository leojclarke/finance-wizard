import React from "react";
import "./Transactions.css";
import transactions from "./data.json";
import payees from "./payees.json";

export default function Transactions() {
  console.log(payees[0].shortName);

  return (
    <section>
      <div className="transaction-section-header">
        <h2 className="transaction-month-header">November</h2>
      </div>
      <div>
        <ul className="transactions-list">
          {transactions.map((data, key) => {
            let date = data.date;
            console.log(date);

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
                  <p>{date}</p>
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
