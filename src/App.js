import "./App.css";
import Header from "./Header";
import TransactionGenerator from "./TransactionGenerator";
import Transactions from "./Transactions";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Transactions />
        <TransactionGenerator />
      </main>
    </div>
  );
}
