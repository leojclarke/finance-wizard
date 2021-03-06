import React from "react";
import merchants from "../Assets/JSON/merchants.json";
import Button from "./Button";

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
        amount: Math.floor(Math.random() * 80) * -1,
        currency: "EUR",
        date: randomDate(new Date(2019, 0, 1), new Date()).toJSON(),
        category: "Groceries",
        account: "Postbank",
        merchant: merchants[Math.floor(Math.random() * merchants.length)],
        reference: "Generated Entry",
        type: "Expense",
      },
    ];
    onTransactionAdd(newTransactions);
  }
  return (
    <Button
      onClick={(event) => {
        handleTransactionGenerate(event);
      }}
      text={"Generate"}
    />
  );
}
