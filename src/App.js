import "./App.css";
import { getLocal, setLocal } from "./utils/services";

import Header from "./Header";
import TransactionGenerator from "./TransactionGenerator";
import TransactionList from "./Transactions";
import sampleTransactions from "./data.json";
import { useState, useEffect } from "react";

export default function App() {
  const [transactions] = useState(
    getLocal("transactions") || sampleTransactions
  );

  useEffect(() => setLocal("transactions", transactions), [transactions]);

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-UK", options);
  };

  const getFormattedAmount = (amount) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionList
          data={transactions}
          dateFormatter={getFormattedDate}
          currencyFormatter={getFormattedAmount}
        />
        <TransactionGenerator />
      </main>
    </div>
  );
}
