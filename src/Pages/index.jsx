import React from "react";
import Transactions from "../Components/Transactions";
import TransactionGenerator from "../Components/TransactionsGenerator";

export default function Home({
  data,
  dateFormatter,
  currencyFormatter,
  transactionsGrouper,
  onTransactionAdd,
  setCount,
  count,
}) {
  return (
    <>
      <div className="btn-container">
        <TransactionGenerator data={data} onTransactionAdd={onTransactionAdd} />
        <button onClick={() => setCount(count + 1)}>EXPAND</button>
      </div>

      <Transactions
        data={data}
        dateFormatter={dateFormatter}
        currencyFormatter={currencyFormatter}
        transactionsGrouper={transactionsGrouper}
      />
    </>
  );
}
