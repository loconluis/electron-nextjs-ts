import React from "react";
import { GoSettings } from "react-icons/go";

const Header: React.FC = () => {
  return (
    <div className="header-menu">
      <div className="header-menu__center">
        <h1>Pomodoro</h1>
      </div>
      <div className="header-menu__rigth">
        <GoSettings className="header-menu__rigth-button" size={30}/>
      </div>
    </div>
  );
};

export default Header;
