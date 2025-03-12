import React, { useState } from 'react';

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
    <div className="w-full h-20 bg-white rounded-none shadow flex justify-between items-center font-['Manrope']">
      <div className="logo">
        <img src={logoSrc} alt="Logo" className="w-[154px] h-[50px] object-cover" />
      </div>
      
      <div className="textbox">
        <input 
          type="text" 
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={handleSearchChange}
          className="w-[374px] h-11 pl-11 pr-4 text-base leading-[26px] font-normal bg-[#F3F4F6] rounded-xl border-0 outline-none"
        />
      </div>
      
      <div className="menu">
        <ul className="w-full flex justify-between items-center gap-5">
          {menuItems.map((item, index) => (
            <li key={index} className="list-none">
              <a href={item.url} className="no-underline text-[#171a1f] text-sm font-normal">{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <button 
        className="h-11 px-4 flex items-center justify-center text-base leading-[26px] font-normal text-[#F44B87] bg-[#FEF0F5] rounded-xl gap-1.5 hover:bg-[#FDDCE8] active:bg-[#FBC8DA] disabled:opacity-40"
        onClick={onButtonClick}
      >
        {buttonIcon && <span className="w-5 h-5 fill-[#F44B87]">{buttonIcon}</span>}
        {buttonText}
      </button>
      
      <div className="avt">
        <img src={avatarSrc} alt="Avatar" />
      </div>
    </div>
  );
};

export default NavBar;