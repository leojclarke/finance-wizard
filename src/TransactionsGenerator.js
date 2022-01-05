import React from "react";
import payees from "./payees.json";

export default function TransactionGenerator({ data, onTransactionAdd }) {
  function handleTransactionGenerate(event) {
    event.preventDefault();
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }

    const newTransactions = [
      ...data,
      {
        id: data.length + 1,
        description: "Shopping",
        amount: Math.floor(Math.random() * 80),
        currency: "EUR",
        date: randomDate(new Date(2021, 0, 1), new Date()).toJSON(),
        category: "Groceries",
        account: "Postbank",
        payee: payees[Math.floor(Math.random() * payees.length)],
        reference: "Generated Entry",
        type: "Expense",
      },
    ];
    console.log({ newTransactions });
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
