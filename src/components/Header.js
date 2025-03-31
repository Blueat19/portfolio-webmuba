import React, { useEffect } from 'react';
import logo from "../images/logoblue.png"
import {FaCartArrowDown} from "react-icons/fa"

export default function Header() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach((link) => {
      link.style.display = 'block';
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light  " style={{ height: '80px', textAlign:"center" }}>
      <div>
      <img
            height={"40"}
            width={"40"}
            src={logo}
            alt="Website favicon"
            onClick={() => {
            window.location.href = "https://webmuba.netify.app/";
             }}
            className="inline cursor-pointer"
          />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-i4tem">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/webd">Web Design</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/business">Business Suite</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/marketing">Marketing_and_Advertising </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/bannerd">Banner_Design</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/platforms"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Platforms
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="https://api.whatsapp.com/send?phone=+263712241838&text=Hello%2C%20I%20would%20like%20some%20Assistance">WhatsApp</a>
            </div>
          </li>
        </ul>
      </div>
      <FaCartArrowDown
              style={{alignSelf: "center", width: "30px", height: "30px", color: "black"}}
             />
    </nav>
  );
}