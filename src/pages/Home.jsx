import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <span className="logo-icon">🇮🇳</span>
          Incredible India Explorer
        </div>

        <div className="nav-links">
          <span onClick={() => navigate("/")}>
            Home
          </span>

          <span onClick={() => navigate("/monuments")}>
            Monuments
          </span>

          <span onClick={() => navigate("/forum")}>
            Forum
          </span>

          <span onClick={() => navigate("/dashboard")}>
            Dashboard
          </span>

          <button
            onClick={() => navigate("/login")}
            className="login-btn"
          >
            Login
          </button>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            A Land of <span>Infinite Discovery</span>
          </h1>

          <p>
            From ancient architectural marvels to serene nature escapes and vibrant city life.
            Experience India in all its glory.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/monuments")}
            >
              Explore Destinations
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/forum")}
            >
              Join Community
            </button>
          </div>
        </div>
      </section>


      {/* ================= REGION SECTION ================= */}
      <section className="region-section">
        <h2>Explore by Region</h2>

        <div className="region-grid">

          <div
            className="region-card north"
            onClick={() => navigate("/region/North")}
          >
            <div className="overlay"></div>
            <h3>Northern Wonders</h3>
          </div>

          <div
            className="region-card south"
            onClick={() => navigate("/region/South")}
          >
            <div className="overlay"></div>
            <h3>Southern Serenity</h3>
          </div>

          <div
            className="region-card west"
            onClick={() => navigate("/region/West")}
          >
            <div className="overlay"></div>
            <h3>Western Heritage</h3>
          </div>

          <div
            className="region-card east"
            onClick={() => navigate("/region/East")}
          >
            <div className="overlay"></div>
            <h3>Eastern Mystique</h3>
          </div>

        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">
        © 2026 Incredible India Explorer. Celebrating India's rich cultural heritage.
      </footer>

    </div>
  );
}

export default Home;