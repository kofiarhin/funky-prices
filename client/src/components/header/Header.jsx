import "./header.styles.scss";

const Header = ({ status }) => {
  return (
    <header className="header-root">
      <div className="header-container">
        <div className="header-brand">
          <span className="brand-dot"></span>
          <h1 className="brand-logo">tripmerge</h1>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li>
              <a href="/" className="nav-link">
                Flights
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Hotels
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Holidays
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-meta">
          <div className={`api-status status-${status}`}>
            {status === "online" ? "System Live" : "Connecting..."}
          </div>
          <button className="btn-primary">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
