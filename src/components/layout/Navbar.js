import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link
            to="/"
            className="text-xs font-weight-bold text-light text-uppercase mb-1navbar-brand"
            onClick={() => window.location.reload()}
          >
            Covid-19 Tracker
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
