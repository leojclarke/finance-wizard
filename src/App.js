import { getLocal, setLocal } from "./Helpers/services";
import { useState, useEffect } from "react";
import sampleTransactions from "./Assets/JSON/data.json";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Pages";
import AccountsPage from "./Pages/accounts";
import SearchPage from "./Pages/search";
import TransactionsDetail from "./Components/TransactionsDetail";
import AnalysisPage from "./Pages/analysis";

export default function App() {
  sampleTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  const [transactions, setTransactions] = useState(
    getLocal("transactions") || sampleTransactions
  );
  const [count, setCount] = useState(5);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [isFocussed, setIsFocussed] = useState(false);

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

  const handleTransactionAdd = (newTransactions) => {
    newTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    setTransactions(newTransactions);
  };

  const handleTransactionsGroup = (data) => {
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
  };

  const handleTransactionsDisplay = (data, count) => {
    return data.slice(0, count);
  };

  const handleTransactionsFilter = (queryResults) => {
    setFilteredResults(queryResults);
  };

  const handleInputEntry = (value) => {
    setSearchInput(value);
  };

  const handleSetInputFocus = (state) => {
    setIsFocussed(state);
  };

  return (
    <div className="App">
      <Header data={transactions} currencyFormatter={getFormattedAmount} />
      <main className="main">
        <Routes>
          <Route
            index
            path="/transactions"
            element={
              <Home
                data={transactions}
                dateFormatter={getFormattedDate}
                currencyFormatter={getFormattedAmount}
                transactionsGrouper={handleTransactionsGroup}
                transactionsDisplay={handleTransactionsDisplay}
                onTransactionAdd={handleTransactionAdd}
                setCount={setCount}
                count={count}
                onInputFocus={handleSetInputFocus}
                isFocussed={isFocussed}
              />
            }
          />
          <Route
            path="transactions/detail/:transactionId"
            element={
              <TransactionsDetail
                data={transactions}
                dateFormatter={getFormattedDate}
                currencyFormatter={getFormattedAmount}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchPage
                data={transactions}
                dateFormatter={getFormattedDate}
                currencyFormatter={getFormattedAmount}
                searchInput={searchInput}
                isFocussed={isFocussed}
                onInputFocus={handleSetInputFocus}
                filteredResults={filteredResults}
                onFilterResults={handleTransactionsFilter}
                onInputEntry={handleInputEntry}
              />
            }
          />
          <Route
            path="/search/detail/:transactionId"
            element={
              <TransactionsDetail
                data={filteredResults}
                dateFormatter={getFormattedDate}
                currencyFormatter={getFormattedAmount}
              />
            }
          />
          <Route path="/accounts" element={<AccountsPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="*" element={<Navigate to="/transactions" replace />} />
        </Routes>
      </main>
    </div>
  );
}
