import React from "react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Search from "../Components/Search";
import Transactions from "../Components/Transactions";
import TransactionGenerator from "../Components/TransactionsGenerator";

export default function Home({
  data,
  dateFormatter,
  currencyFormatter,
  transactionsGrouper,
  transactionsDisplay,
  onTransactionAdd,
  setCount,
  count,
}) {
  return (
    <>
      <div className="page-header">
        <h1>HOME</h1>
        <div className="btn-container">
          <TransactionGenerator
            data={data}
            onTransactionAdd={onTransactionAdd}
          />
          <Button onClick={() => setCount(count + 1)} text={"Load more"} />
        </div>
      </div>
      <Link to="/search" className="search-link">
        <div className="search-container">
          <Search />
        </div>
      </Link>
      <Transactions
        data={transactionsDisplay(data, count)}
        dateFormatter={dateFormatter}
        currencyFormatter={currencyFormatter}
        transactionsGrouper={transactionsGrouper}
      />
    </>
  );
}
