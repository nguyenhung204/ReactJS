import React, { useState } from 'react';
import './NavBar.css';

const NavBar = ({
  logoSrc = "../",
  searchPlaceholder = "Search...",
  menuItems = [
    { text: "What to cook", url: "#"},
    { text: "Recipes", url: "#" },
    { text: "Ingredients", url: "#" },
    { text: "Occasions", url: "#" },
    { text: "About Us", url: "#" },
  ],
  buttonText = "Your Recipe Box",
  buttonIcon = null,
  avatarSrc = "../assets/images/avt.png",
  onButtonClick = () => {},
  onSearch = () => {},
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
      </div>
      
      <div className="textbox">
        <input 
          type="text" 
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      
      <div className="menu">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        className="button" 
        onClick={onButtonClick}
      >
        {buttonIcon && <span className="icon">{buttonIcon}</span>}
        {buttonText}
      </button>
      
      <div className="avt">
        <img src={avatarSrc} alt="Avatar" />
      </div>
    </div>
  );
};

export default NavBar;