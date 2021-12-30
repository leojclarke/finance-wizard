import "./App.css";
import { getLocal, setLocal } from "./utils/services";
import Header from "./Header";
import TransactionGenerator from "./TransactionGenerator";
import TransactionList from "./Transactions";
import transactionData from "./data.json";

export default function App() {
  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-UK", options);
  };

  const getFormattedAmount = (amount) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <TransactionList
          data={transactionData}
          dateFormatter={getFormattedDate}
          currencyFormatter={getFormattedAmount}
        />
        <TransactionGenerator />
      </main>
    </div>
  );
}
