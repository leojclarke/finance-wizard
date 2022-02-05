import React from "react";
import { Link } from "react-router-dom";
import "./TransactionRow.css";

export default function TransactionRow({
  item,
  dateFormatter,
  currencyFormatter,
}) {
  return (
    <Link to={"detail/" + item.id} key={item.id} className="row-link">
      <li className="transaction-row">
        <div className="transaction-logo-container">
          <img
            className="transaction-logo"
            src={item.merchant.imgSrc}
            alt={item.merchant.shortName}
          />
        </div>
        <div className="transaction-description">
          <p className="transaction-merchant">{item.merchant.shortName}</p>

          <p>{dateFormatter(item.date)}</p>
        </div>
        <div className="transaction-amount">
          <p>{currencyFormatter(item.amount)}</p>
        </div>
      </li>
    </Link>
  );
}
