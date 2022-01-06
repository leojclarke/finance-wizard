import "./App.css";
import { getLocal, setLocal } from "./utils/services";

import Header from "./Header";
import TransactionGenerator from "./TransactionsGenerator";
import TransactionList from "./Transactions";
import sampleTransactions from "./data.json";
import { useState, useEffect } from "react";
import TransactionsExpander from "./TransactionsExpander";

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
    setTransactions(newTransactions);
  }

  function handleTransactionsGroup(data) {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const groupedTransactions = [];

    data.forEach((entry) => {
      const date = new Date(entry.date);
      const month = months[date.getMonth()];
      const monthObj = groupedTransactions.find(
        (datesByMonth) => datesByMonth.name === month
      );

      monthObj === undefined
        ? groupedTransactions.push({ name: month, entries: [entry] })
        : monthObj.entries.push(entry);
    });

    console.log({ groupedTransactions });
    return groupedTransactions;
  }

  function handleTransactionsExpand(expandedTransactions) {
    console.log({ expandedTransactions });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionGenerator
          data={transactions}
          onTransactionAdd={handleTransactionAdd}
        />
        <TransactionList
          data={handleTransactionsGroup(transactions)}
          dateFormatter={getFormattedDate}
          currencyFormatter={getFormattedAmount}
        />
        <TransactionsExpander
          data={transactions}
          onTransactionsExpand={handleTransactionsExpand}
        />
      </main>
    </div>
  );
}
