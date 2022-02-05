import React from "react";
import TransactionRow from "./TransactionRow";
import "./Transactions.css";

export default function Transactions({
  data,
  dateFormatter,
  currencyFormatter,
  transactionsGrouper,
}) {
  return (
    <section>
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
                      <TransactionRow
                        item={entry}
                        dateFormatter={dateFormatter}
                        currencyFormatter={currencyFormatter}
                        key={entry.id}
                      />
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
