import "./App.css";
import Header from "./Header";
import Transactions from "./Transactions";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Transactions />
      </main>
    </div>
  );
}
