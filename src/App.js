import { getLocal, setLocal } from "./Helpers/services";
import Header from "./Components/Header.jsx";
import TransactionGenerator from "./Components/TransactionsGenerator";
import TransactionList from "./Components/Transactions";
import sampleTransactions from "./Assets/JSON/data.json";
import { useState, useEffect } from "react";

export default function App() {
  sampleTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  const [transactions, setTransactions] = useState(
    getLocal("transactions") || sampleTransactions
  );
  const [count, setCount] = useState(5);

  useEffect(() => setLocal("transactions", transactions), [transactions]);
  useEffect(() => setLocal("count", count), [count]);

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
      const year = date.getFullYear();
      const monthObject = groupedTransactions.find(
        (datesByMonthAndYear) => datesByMonthAndYear.name === month + " " + year
      );

      monthObject === undefined
        ? groupedTransactions.push({
            id: Math.random() * 1,
            name: month + " " + year,
            entries: [entry],
          })
        : monthObject.entries.push(entry);
    });

    return groupedTransactions;
  }

  function handleTransactionsDisplay(data, count) {
    return data.slice(0, count);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionGenerator
          data={transactions}
          onTransactionAdd={handleTransactionAdd}
        />
        <button onClick={() => setCount(count + 1)}>EXPAND</button>

        <TransactionList
          data={handleTransactionsDisplay(transactions, count)}
          dateFormatter={getFormattedDate}
          currencyFormatter={getFormattedAmount}
          transactionsGrouper={handleTransactionsGroup}
        />
      </main>
    </div>
  );
}
