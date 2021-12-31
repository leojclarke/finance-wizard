import React from "react";
import payees from "./payees.json";

export default function TransactionGenerator({ data, onTransactionAdd }) {
  console.log("original Transactions: ", data);

  function handleTransactionGenerate(event) {
    event.preventDefault();
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const newTransactions = [
      {
        id: data.length + 1,
        description: "Gehalt",
        amount: Math.floor(Math.random() * 100),
        currency: "EUR",
        date: randomDate(new Date(2021, 0, 1), new Date()),
        category: "Salary",
        account: "Postbank",
        payee: payees[Math.floor(Math.random() * payees.length)],
        reference: "Gehaltsabrechnung Oktober 2021",
        type: "income",
      },
      ...data,
    ];
    console.log("new Transactions: ", newTransactions);
    onTransactionAdd(newTransactions);
  }
  return (
    <div>
      <button
        onClick={(event) => {
          handleTransactionGenerate(event);
        }}
      >
        GENERATE
      </button>
    </div>
  );
}
