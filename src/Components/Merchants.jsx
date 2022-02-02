import React from "react";
import "./Merchants.css";
export default function Merchants({ merchants }) {
  const uniqueMerchants = new Set();

  const filteredMerchants = merchants.filter((entry) => {
    const duplicate = uniqueMerchants.has(entry.name);
    uniqueMerchants.add(entry.name);
    return !duplicate;
  });

  console.log({ filteredMerchants });
  return (
    <div>
      <h2>Merchants</h2>
      <ul className="merch-container">
        {filteredMerchants
          .map((merchant) => {
            return (
              <li key={merchant.id}>
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
