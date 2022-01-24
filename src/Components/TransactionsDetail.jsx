import React from "react";
import "./TransactionsDetail.css";

export default function TransactionsDetail({
  data,
  dateFormatter,
  currencyFormatter,
}) {
  const entry = data[0];

  return (
    <div className="transaction-detail-container">
      <section className="transaction-detail-section">
        <img
          className="vendor-logo"
          src="https://logo.clearbit.com/penny.de"
          alt="vendor logo"
          width="70px"
        />
        <p className="vendor">{entry.payee.shortName}</p>
        <p className="amount-detail">{currencyFormatter(entry.amount)}</p>
        <p className="date">{entry.date}</p>

        <h2 className="transaction-detail-header">Details</h2>
        <div className="detail-list-container">
          <ul className="transactions-detail-list">
            <li className="transaction-detail-row">
              <div className="transaction-icon-column">
                <p className="icon">C</p>
              </div>
              <div className="transaction-detail-column">
                <p className="label">Category</p>
                <p className="description">Food & Groceries</p>
              </div>
              <div className="transaction-detail-further">></div>
            </li>
            <li className="transaction-detail-row">
              <div className="transaction-icon-column">
                <p className="icon">T</p>
              </div>
              <div className="transaction-detail-column">
                <p className="label">Transaction Type</p>
                <p className="description">Card Payment</p>
              </div>
              <div className="transaction-detail-further"></div>
            </li>
            <li className="transaction-detail-row">
              <div className="transaction-icon-column">
                <p className="icon">V</p>
              </div>
              <div className="transaction-detail-column">
                <p className="label">Vendor</p>
                <p className="description">{entry.payee.longName}</p>
              </div>
              <div className="transaction-detail-further"></div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
