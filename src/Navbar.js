import React, { useState } from "react";
import "./Navbar.css";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {title} <span className="caret">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const NavBar = () => {
  const productItems = ["Wikis", "Projects", "Docs", "Notion AI"];
  const solutionItems = ["Template Gallery", "Customer Stories", "Connections"];
  const [activeButton, setActiveButton] = useState(null);

  // Handler to set a button as active
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Notion</div>
      <div className="navbar-links">
        <DropdownMenu title="Product" items={productItems} />
        <DropdownMenu title="Solutions" items={solutionItems} />
      </div>
      <button
          className={`navbar-button demo ${activeButton === 'demo' ? 'active' : ''}`}
          onClick={() => handleButtonClick('demo')}
        >
          Request a demo
        </button>
        <button
          className={`navbar-button login ${activeButton === 'login' ? 'active' : ''}`}
          onClick={() => handleButtonClick('login')}
        >
          Log in
        </button>
      <button className="navbar-button get-free">Get Notion free</button>
    </nav>
  );
};

export default NavBar;
