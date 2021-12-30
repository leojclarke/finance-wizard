import React from "react";

export default function TransactionGenerator({ data, onTransactionAdd }) {
  console.log("original Transactions: ", data);

  function handleTransactionGenerate(event) {
    event.preventDefault();
    const newTransactions = [
      {
        id: 4,
        description: "Gehalt",
        amount: 50.0,
        currency: "EUR",
        date: "2014-01-01T23:28:56.782Z",
        category: "Salary",
        account: "Postbank",
        payee: {
          shortname: "Apple",
          longname: "Apple Computer Industries",
          imgsrc: "https://logo.clearbit.com/apple.com",
        },
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
