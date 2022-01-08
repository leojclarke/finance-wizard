import React from "react";

export default function TransactionsExpander({ onTransactionsExpand }) {
  let sliceAmount = 5;
  return (
    <div>
      <button onClick={() => onTransactionsExpand(sliceAmount++)}>SLICE</button>
    </div>
  );
}
