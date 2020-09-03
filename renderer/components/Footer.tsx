import React from "react";
import { GoHeart } from "react-icons/go";

export default function Footer() {
  const handleClick = (e) => {
    require("electron").shell.openExternal("https://twitter.com/LoconLuis");
  };
  return (
    <div className="footer">
      <p>
        Created with <GoHeart className="footer-heart" size={15}/> by{" "}
        <span className="footer-link" onClick={handleClick}>
          @LoconLuis
        </span>
      </p>
    </div>
  );
}
