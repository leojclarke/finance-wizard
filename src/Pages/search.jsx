import React from "react";
import Merchants from "../Components/Merchants";
import Search from "../Components/Search";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import TransactionRow from "../Components/TransactionRow";

export default function SearchPage({
  data,
  dateFormatter,
  currencyFormatter,
  filteredResults,
  searchInput,
  onFilterResults,
  onInputEntry,
  onInputFocus,
  isFocussed,
}) {
  console.log(dateFormatter("2022-01-30T05:05:01.562Z"));

  const merchants = [];

  data.map((merchant) => {
    return merchants.push({
      id: Math.random() * 1,
      name: merchant.merchant.shortName,
      url: merchant.merchant.imgSrc,
    });
  });

  return (
    <section className="transaction-section pt-24">
      <div className="transaction-section-header flex-sb">
        <h1 className="page-title">Search</h1>
        <Link to="/transactions">
          <XIcon />
        </Link>
      </div>
      <div className="search-container">
        <Search
          data={data}
          dateFormatter={dateFormatter}
          currencyFormatter={currencyFormatter}
          searchInput={searchInput}
          isFocussed={isFocussed}
          onInputFocus={onInputFocus}
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

      <div>
        {filteredResults.map((entry) => {
          return (
            <TransactionRow
              item={entry}
              dateFormatter={dateFormatter}
              currencyFormatter={currencyFormatter}
              key={entry.id}
            />
          );
        })}
      </div>
    </section>
  );
}
