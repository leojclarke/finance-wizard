import React from "react";
import "./Search.css";
import { SearchIcon, XIcon } from "@heroicons/react/solid";

export default function Search({
  data,
  searchInput,
  handleTransactionsFilter,
  handleInputEntry,
  isFocussed,
  onInputFocus,
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

  const clearSearch = () => {
    handleInputEntry("");
  };
  return (
    <form onSubmit={(event) => searchTransactions(event, searchInput)}>
      <div className="search-container">
        <div className="input-wrapper">
          <label htmlFor="search">Search Transactions</label>
          <input
            id="search"
            type="text"
            placeholder="Search transactions..."
            value={searchInput}
            autoFocus={isFocussed}
            onFocus={(e) => {
              e.currentTarget.select();
            }}
            onChange={(event) => {
              handleInputEntry(event.target.value);
            }}
          />

          <SearchIcon className="search-icon" />

          <XIcon
            className={`cancel-icon ${
              searchInput === undefined || searchInput.length <= 0
                ? "cancel-hidden"
                : "not-hidden"
            }`}
            onClick={() => clearSearch()}
          />
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}
