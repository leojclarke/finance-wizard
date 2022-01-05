import React from "react";

export default function TransactionsSlicer({ data, onTransactionsSlice }) {
  function handleTransactionsSlice(event, sliceAmount) {
    event.preventDefault();
    sliceAmount = 10;
    let slicedTransactions = data.slice(0, sliceAmount);
    onTransactionsSlice(slicedTransactions);
    console.log(slicedTransactions);
  }
  return (
    <div>
      <button onClick={(event) => handleTransactionsSlice(event)}>SLICE</button>
    </div>
  );
}
