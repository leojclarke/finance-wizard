import React from "react";
import Merchants from "../Components/Merchants";
import Search from "../Components/Search";

export default function SearchPage({
  data,
  dateFormatter,
  currencyFormatter,
  filteredResults,
  searchInput,
  onFilterResults,
  onInputEntry,
}) {
  const merchants = [];

  data.map((merchant) => {
    return merchants.push({
      id: Math.random() * 1,
      name: merchant.payee.shortName,
      url: merchant.payee.imgSrc,
    });
  });

  return (
    <section className="transactions-section">
      <div className="transaction-section-header">
        <h1 className="page-title">Search</h1>
      </div>
      <div className="search-container">
        <Search
          data={data}
          dateFormatter={dateFormatter}
          currencyFormatter={currencyFormatter}
          searchInput={searchInput}
          handleTransactionsFilter={onFilterResults}
          handleInputEntry={onInputEntry}
        />
      </div>
      <div>
        <Merchants
          handleInputEntry={onInputEntry}
          handleTransactionsFilter={onFilterResults}
          merchants={merchants}
          data={data}
        />
      </div>
    </section>
  );
}
