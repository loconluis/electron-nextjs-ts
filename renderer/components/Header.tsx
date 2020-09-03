import React from "react";
import Link from "next/link";
import { GoSettings } from "react-icons/go";
import { RiHome2Fill } from "react-icons/ri";

interface HeaderProps {
  title?: string;
  showHome?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showHome }: HeaderProps) => {
  return (
    <div className="header-menu">
      <div className="header-menu__center">
        <h1>{`${title || "Pomodoro"}`}</h1>
      </div>
      {showHome ? (
        <Link href="/">
          <div className="header-menu__rigth">
            <RiHome2Fill className="header-menu__rigth-button" size={30} />
          </div>
        </Link>
      ) : (
        <Link href="/settings">
          <div className="header-menu__rigth">
            <GoSettings className="header-menu__rigth-button" size={30} />
          </div>
        </Link>
      )}
    </div>
  );
};

Header.defaultProps = {
  showHome: false,
  title: "",
};

export default Header;
