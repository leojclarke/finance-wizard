import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <div className="nav-container">
        <div className="nav-left">
          <img
            src="https://logo.clearbit.com/nike.com"
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
