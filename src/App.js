import "./App.css";
import Header from "./Header";
import TransactionGenerator from "./TransactionGenerator";
import TransactionList from "./Transactions";
import transactionData from "./data.json";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TransactionList data={transactionData} />
        <TransactionGenerator />
      </main>
    </div>
  );
}
