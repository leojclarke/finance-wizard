import React from "react";
import "./Merchants.css";
export default function Merchants({
  data,
  merchants,
  handleInputEntry,
  handleTransactionsFilter,
}) {
  const uniqueMerchants = new Set();

  const filteredMerchants = merchants.filter((entry) => {
    const duplicate = uniqueMerchants.has(entry.name);
    uniqueMerchants.add(entry.name);
    return !duplicate;
  });

  const handleMerchantFilter = (merchant) => {
    handleInputEntry(merchant.name);
    const searchResults = data.filter((entry) => {
      return Object.values(entry.payee)
        .join("")
        .toLowerCase()
        .includes(merchant.name.toLowerCase());
    });

    console.log("merchant search: ", searchResults);

    return handleTransactionsFilter(searchResults);
  };

  return (
    <div>
      <h2>Merchants</h2>

      <ul className="merch-container">
        {filteredMerchants
          .map((merchant) => {
            return (
              <li
                key={merchant.id}
                onClick={() => handleMerchantFilter(merchant)}
              >
                <img src={merchant.url} alt={merchant.name} />
                <p>{merchant.name}</p>
              </li>
            );
          })
          .slice(0, 4)}
      </ul>
    </div>
  );
}
