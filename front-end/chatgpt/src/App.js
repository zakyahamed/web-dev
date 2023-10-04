import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MenuBar from "./components/Menubar";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Navbar onMenuClick={toggleMenu} />
      <MenuBar isOpen={isMenuOpen} onClose={toggleMenu} />
      <div className={`content ${isMenuOpen ? "blur" : ""}`}>
        {/* Your other components/content goes here */}
        <p>This is the main content of your app.</p>
      </div>
    </div>
  );
};

export default App;
