import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">Recipe Explorer</div>
      <div className="navbar__links">
        <a href="#recipes" className="navbar__link">Recipes</a>
        {/* Future nav items can be added here */}
      </div>
    </nav>
  );
}

export default Navbar;
