import React from "react";
const Navbar = ({ onMenuClick }) => {
  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={onMenuClick}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
