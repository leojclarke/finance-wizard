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
      <div className="search-container">
        <div className="input-wrapper">
          <label for="search">Search Transactions</label>
          <input
            id="search"
            type="text"
            placeholder="Search transactions..."
            value={searchInput}
            autoFocus
            onChange={(event) => handleInputEntry(event.target.value)}
          />

          <SearchIcon className="search-icon" />
          <XIcon className="cancel-icon" />
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}
