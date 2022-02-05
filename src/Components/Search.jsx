import React from "react";
import "./Search.css";
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
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchInput}
        onChange={(event) => handleInputEntry(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
