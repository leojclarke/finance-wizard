import React from "react";
import Merchants from "../Components/Merchants";
import Search from "../Components/Search";

export default function SearchPage({ data }) {
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
        <Search />
      </div>
      <div>
        <Merchants merchants={merchants} />
      </div>
    </section>
  );
}
