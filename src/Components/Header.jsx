import { Link } from "react-router-dom";
import { useScrollHandler } from "../Hooks/customHooks";
import "./Header.css";

export default function Header({ data, currencyFormatter }) {
  console.log({ data });
  const scroll = useScrollHandler();

  const reducer = (a, b) => Number(a) + Number(b.amount);
  const balanceCalc = data.reduce(reducer, 0);

  return (
    <header className={scroll ? "App-header" : "App-header box-shadow"}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/man-mage_1f9d9-200d-2642-fe0f.png"
              alt="fw-logo"
              width="50px"
            />
          </Link>
        </div>
        <div className="nav-middle">
          <p className={scroll ? "balance-summary hidden" : "balance-summary"}>
            <span className="balance">{currencyFormatter(balanceCalc)}</span>
            <span className="balance-label">current balance</span>
          </p>
        </div>
        <nav className="nav-right">
          <ul className="nav-items-container">
            <li className="nav-item">
              <Link to="/">Overview</Link>
            </li>
            <li className="nav-item">
              <Link to="/accounts">Accounts</Link>
            </li>
            <li className="nav-item">Analysis</li>
            <li className="nav-item">My Account</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
