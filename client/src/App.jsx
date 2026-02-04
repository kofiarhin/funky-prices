import { Component } from "react";
import Header from "./components/header/Header";
import "./app.styles.scss";

class App extends Component {
  state = {
    status: "checking",
  };

  componentDidMount() {
    this.getHealth();
  }

  getHealth = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const res = await fetch(url);
      this.setState({ status: res.ok ? "online" : "offline" });
    } catch {
      this.setState({ status: "offline" });
    }
  };

  render() {
    return (
      <div id="app" className="aggregator-root">
        <Header status={this.state.status} />

        <main className="main-content">
          <section className="hero-section">
            <h2 className="hero-title">
              Experience the world <br /> exactly as you planned.
            </h2>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Where would you like to go?"
              />
              <button className="search-btn">Search</button>
            </div>
          </section>

          <section className="grid-section">
            <div className="card">
              <span className="card-badge">Flight</span>
              <h3 className="card-title">London → Paris</h3>
              <p className="card-subtitle">Direct • 1h 15m</p>
              <p className="card-price">From $89</p>
            </div>

            <div className="card">
              <span className="card-badge">Hotel</span>
              <h3 className="card-title">The Grand Vista</h3>
              <p className="card-subtitle">5 Stars • Santorini</p>
              <p className="card-price">$240 / night</p>
            </div>

            <div className="card">
              <span className="card-badge">Holiday</span>
              <h3 className="card-title">Maldives Escape</h3>
              <p className="card-subtitle">All-Inclusive • 5 Days</p>
              <p className="card-price">$1,450</p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
