import React from "react";

export default function TransactionDetail() {
  return (
    <div>
      <div className="transaction-logo-container">
        <img
          className="transaction-logo"
          src={entry.payee.imgSrc}
          alt={entry.payee.shortName}
        />
      </div>
    </div>
  );
}
