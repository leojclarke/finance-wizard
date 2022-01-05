import "./App.css";
import { getLocal, setLocal } from "./utils/services";

import Header from "./Header";
import TransactionGenerator from "./TransactionsGenerator";
import TransactionList from "./Transactions";
import sampleTransactions from "./data.json";
import { useState, useEffect } from "react";
import TransactionsSlicer from "./TransactionsSlicer";

export default function App() {
  sampleTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  const [transactions, setTransactions] = useState(
    getLocal("transactions") || sampleTransactions
  );

  useEffect(() => setLocal("transactions", transactions), [transactions]);

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-UK", options);
  };

  const getFormattedAmount = (amount) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  function handleTransactionAdd(newTransactions) {
    newTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log({ newTransactions });
    setTransactions(newTransactions);
  }

  function handleTransactionsDisplay(slicedTransactions) {
    slicedTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    console.log({ slicedTransactions });

    setTransactions(slicedTransactions);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionGenerator
          data={transactions}
          onTransactionAdd={handleTransactionAdd}
        />
        <TransactionsSlicer
          data={transactions}
          onTransactionsSlice={handleTransactionsDisplay}
        />
        <TransactionList
          data={transactions}
          dateFormatter={getFormattedDate}
          currencyFormatter={getFormattedAmount}
        />
      </main>
    </div>
  );
}
