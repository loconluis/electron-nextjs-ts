import React from 'react'

export default function Footer() {

  const handleClick = (e) => {
    require("electron").shell.openExternal("https://twitter.com/LoconLuis")
  }
  return (
    <div className="footer">
      <p>Created with Love by <span className="footer-link" onClick={handleClick} >@LoconLuis</span></p>
    </div>  
  )
}
