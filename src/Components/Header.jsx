import { useScrollHandler } from "../Hooks/customHooks";
import "./Header.css";

export default function Header() {
  const scroll = useScrollHandler();

  return (
    <header className={scroll ? "App-header" : "App-header box-shadow"}>
      <div className="nav-container">
        <div className="nav-left">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/man-mage_1f9d9-200d-2642-fe0f.png"
            alt="fw-logo"
            width="70px"
          />
        </div>
        <div className="nav-middle">
          <p className="balance-summary">
            <span className="amount">€22.22</span>
            <span className="description">current balance</span>
          </p>
        </div>
        <nav className="nav-right">
          <ul className="nav-items-container">
            <li className="nav-item">Overview</li>
            <li className="nav-item">Accounts</li>
            <li className="nav-item">Analysis</li>
            <li className="nav-item">My Account</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
