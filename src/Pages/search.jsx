import React from "react";
import Search from "../Components/Search";

export default function SearchPage() {
  return (
    <section className="transactions-section">
      <div className="transaction-section-header">
        <h1 className="page-title">Search</h1>
      </div>
      <div className="btn-container">
        <Search />
      </div>
    </section>
  );
}
