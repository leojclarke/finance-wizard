import React from "react";

export default function TransactionGenerator() {
  const generateTransaction = () => {
    console.log("GENERATE");
  };

  return (
    <div>
      <button onClick={generateTransaction}>GENERATE</button>
    </div>
  );
}
