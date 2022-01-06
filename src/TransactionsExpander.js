import React from "react";

export default function TransactionsExpander({ data, onTransactionsExpand }) {
  function handleTransactionsExpand(event) {
    event.preventDefault();
    let expandedTransactions = data.slice(0, 4);
    onTransactionsExpand(expandedTransactions);
  }
  return (
    <div>
      <button onClick={(event) => handleTransactionsExpand(event)}>
        SLICE
      </button>
    </div>
  );
}
