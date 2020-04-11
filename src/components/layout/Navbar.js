import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Covid-19 Tracker</Link>
     

        
      </nav>
    </div>
  );
}

export default Navbar;
