import React from "react";

const Menubar = ({ isMenuOpen }) => {
  return (
    <div className={`menubar ${isMenuOpen ? "active" : ""}`} id="menubar">
      <button className="btn">Login</button>
      <button className="btn">Sign Up</button>
      <p>
        afjabsfbabfuasbfdibad sdabfbabk abfa f fk ask aj kj aj j
        bjilajsdiohasdva aisbasd
      </p>
      <footer>nothing</footer>
    </div>
  );
};

export default Menubar;
