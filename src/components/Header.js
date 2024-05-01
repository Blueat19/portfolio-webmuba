import React, { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach((link) => {
      link.style.display = 'block';
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{ height: '80px' }}>
      <div>
        <span style={{ fontWeight: 'bold',fontSize:"25px", color: 'red' }}>Web</span>
        <span style={{ color: 'black' ,fontSize:"25px"}}>Muba</span>
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
          <li className="nav-item">
            <a className="nav-link" href="/pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
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
    </nav>
  );
}