import React from "react";
import { useParams } from "react-router-dom";
import { getTransaction } from "../Helpers/services";
import "./TransactionsDetail.css";

export default function TransactionsDetail({ data, currencyFormatter }) {
  let params = useParams();
  let entry = getTransaction(parseInt(params.transactionId), data);

  return (
    <div className="transaction-detail-container">
      <section className="transaction-detail-section">
        <img
          className="vendor-logo"
          src={entry.merchant.imgSrc}
          alt="vendor logo"
          width="70px"
        />
        <p className="vendor">{entry.merchant.shortName}</p>
        <p className="amount-detail">{currencyFormatter(entry.amount)}</p>
        <p className="date">{entry.date}</p>

        <h2 className="transaction-detail-header">Details</h2>
        <div className="detail-list-container">
          <ul className="transactions-detail-list">
            <li className="transaction-detail-row">
              <div className="transaction-icon-column">
                <div className="icon">
                  <p>C</p>
                </div>{" "}
              </div>
              <div className="transaction-detail-column">
                <p className="label">Category</p>
                <p className="description">{entry.category}</p>
              </div>
              <div className="transaction-detail-further">></div>
            </li>
            <li className="transaction-detail-row">
              <div className="transaction-icon-column">
                <div className="icon">
                  <p>T</p>
                </div>{" "}
              </div>
              <div className="transaction-detail-column">
                <p className="label">Transaction Type</p>
                <p className="description">Card Payment</p>
              </div>
              <div className="transaction-detail-further"></div>
            </li>
            <li className="transaction-detail-row">
              <div className="transaction-icon-column">
                <div className="icon">
                  <p>V</p>
                </div>
              </div>
              <div className="transaction-detail-column">
                <p className="label">Vendor</p>
                <p className="description">{entry.merchant.longName}</p>
              </div>
              <div className="transaction-detail-further"></div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
