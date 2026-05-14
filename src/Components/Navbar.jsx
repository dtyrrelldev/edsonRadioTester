import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">Edson Radio Tester</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/page1">Learn</Link>
        <Link to="/page2">Test</Link>
        <Link to="/page3">About</Link>
      </div>
    </nav>
  );
}