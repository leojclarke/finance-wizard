import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="nav-container">
        <div className="nav-left">
          <img
            src="https://logo.clearbit.com/n26.com"
            alt="fw-logo"
            width="70px"
          />
        </div>
        <div className="nav-middle">
          <ul className="nav-items-container">
            <li className="nav-item">Overview</li>
            <li className="nav-item">Accounts</li>
            <li className="nav-item">Analysis</li>
          </ul>
        </div>
        <div className="nav-right">My Account</div>
      </nav>
    </header>
  );
}
