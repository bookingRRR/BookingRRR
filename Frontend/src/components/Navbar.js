import { useState } from "react";
import LogoImg from "./Logo.png";

import "./styles/navbarStyles.css";

function Navbar() {
  const initVal = window.innerWidth > 600 ? true : false;

  const [isMenuOpen, setIsMenuOpen] = useState(initVal);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.addEventListener("resize", () => {
    const newScreenWidth = window.innerWidth;

    if (newScreenWidth > 600) {
      setIsMenuOpen(true);
    }
  });
  function handleLogout(event){
    event.preventDefault();
    //rmeove emaill from cookies not local storage
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
  }
  return (
    <nav>
      <div className="nav-content">
        <div className="logo">
          <a href="#aboutUs-section">
            <img src={LogoImg} alt="Booking" className="logo-img"/>
          </a>
        </div>

        <div className="list-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>

        {isMenuOpen && (
          <ul className="nav-links">
            <li>
              <a href="#aboutUs-section">About</a>
            </li>
            <li>
              <a href="#buybooks-section">Buy Books</a>
            </li>
            <li>
              <a href="#sellbooks-section">Sell Books</a>
            </li>
            <li>
              <a href="#joinus-section">Join Us</a>
            </li>
            <li>
              <a href="#contactus-section">Contact Us</a>
            </li>
            <li>
              <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
