import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="text-xs font-weight-bold text-light text-uppercase mb-1navbar-brand">Covid-19 Tracker</Link>
     

        
      </nav>
    </div>
  );
}

export default Navbar;
