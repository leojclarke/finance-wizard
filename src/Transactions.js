import React from "react";
import "./Transactions.css";

export default function Transactions({
  data,
  dateFormatter,
  currencyFormatter,
}) {
  data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const sortedDates = [];

  data.forEach((entry) => {
    const date = new Date(entry.date);
    const month = months[date.getMonth()];
    const monthObject = sortedDates.find(
      (datesByMonth) => datesByMonth.name === month
    );

    monthObject === undefined
      ? sortedDates.push({
          id: Math.random() * 1,
          name: month,
          entries: [entry],
        })
      : monthObject.entries.push(entry);
  });

  return (
    <section>
      <div className="transaction-section-header">
        {sortedDates.map((transactions, index) => {
          return (
            <div key={transactions.id}>
              <div className="transaction-month-header">
                <h2>{transactions.name}</h2>
              </div>
              <div className="transactions-list-container">
                <ul className="transactions-list">
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
