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
    const monthObj = sortedDates.find(
      (datesByMonth) => datesByMonth.name === month
    );

    monthObj === undefined
      ? sortedDates.push({ name: month, entries: [entry] })
      : monthObj.entries.push(entry);
  });

  return (
    <section>
      <div className="transaction-section-header">
        {sortedDates.map((transactions) => {
          return (
            <div key={transactions.name}>
              <h2 className="transactions-month-header">{transactions.name}</h2>
              <div>
                {transactions.entries.map((entry) => {
                  return (
                    <ul className="transactions-list" key={entry.id}>
                      <li className="transaction-row">
                        <div>
                          <img
                            className="transaction-logo"
                            src={entry.payee.imgSrc}
                            alt={entry.payee.shortName}
                            width="60px"
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
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
