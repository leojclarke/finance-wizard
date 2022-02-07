import React from "react";
import "./Search.css";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

export default function Search({
  data,
  searchInput,
  handleTransactionsFilter,
  handleInputEntry,
}) {
  const searchTransactions = (event, searchInput) => {
    event.preventDefault();
    handleInputEntry(searchInput);

    const searchResults = data.filter((entry) => {
      return Object.values(entry.merchant)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });

    return handleTransactionsFilter(searchResults);
  };

  return (
    <form onSubmit={(event) => searchTransactions(event, searchInput)}>
      <div className="icon-container">
        <SearchIcon className="start-icon" />

        <label for="search">Search Transactions</label>
        <input
          id="search"
          type="text"
          placeholder="Search transactions..."
          value={searchInput}
          onChange={(event) => handleInputEntry(event.target.value)}
        />

        <XIcon className="end-icon" />
      </div>

      <button type="submit">Search</button>
    </form>
  );
}
