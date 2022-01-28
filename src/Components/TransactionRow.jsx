import React from "react";
import { Link } from "react-router-dom";

export default function TransactionRow({
  item,
  dateFormatter,
  currencyFormatter,
}) {
  return (
    <li className="transaction-row" key={item.id}>
      <div className="transaction-logo-container">
        <img
          className="transaction-logo"
          src={item.payee.imgSrc}
          alt={item.payee.shortName}
        />
      </div>
      <div className="transaction-description">
        <Link to="detail">
          <p className="transaction-payee">{item.payee.shortName}</p>
        </Link>
        <p>{dateFormatter(item.date)}</p>
      </div>
      <div className="transaction-amount">
        <p>{currencyFormatter(item.amount)}</p>
      </div>
    </li>
  );
}
