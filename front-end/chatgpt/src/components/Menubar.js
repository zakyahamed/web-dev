import React from "react";

const MenuBar = ({ isOpen, onClose }) => {
  return (
    <div className={`menu-bar ${isOpen ? "open" : ""}`}>
      <div className="menu-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default MenuBar;
