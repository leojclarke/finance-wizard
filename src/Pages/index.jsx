import React from "react";
import Button from "../Components/Button";
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
        <Button onClick={() => setCount(count + 1)} text={"Load more"} />
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
