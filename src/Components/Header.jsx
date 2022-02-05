import { Link, NavLink } from "react-router-dom";
import { useScrollHandler } from "../Hooks/customHooks";
import "./Header.css";

export default function Header({ data, currencyFormatter }) {
  const scroll = useScrollHandler();

  const reducer = (a, b) => a + b.amount;
  const balanceCalc = data.reduce(reducer, 0);

  return (
    <header className={scroll ? "App-header" : "App-header box-shadow"}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/man-mage_1f9d9-200d-2642-fe0f.png"
              alt="fw-logo"
              width="50px"
              className="page-logo"
            />
          </Link>
        </div>
        <div className="nav-middle">
          <p className={scroll ? "balance-summary hidden" : "balance-summary"}>
            <span className="balance">{currencyFormatter(balanceCalc)}</span>
            <span className="balance-label">left to budget</span>
          </p>
        </div>
        <nav className="nav-right">
          <ul className="nav-items-container">
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/accounts"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Accounts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analysis"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Analysis
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                My Account
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
