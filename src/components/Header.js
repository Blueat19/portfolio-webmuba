import React, { useState } from 'react';
import logo from "../images/logoblue.png";
import cart_icon from "../assets/cart_icon.png";
import "./Header.css";
import  {Link} from "react-router-dom"

export default function Header(){

  const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img 
        src={logo}
         alt="SW Logo"
         width={100}
          />
        <p>SW</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("About")}>
          <Link style={{ textDecoration: "none" }} to="/about">
            About
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("webd")}>
          <Link style={{ textDecoration: "none" }} to="/webd">
            WebDesign
          </Link>
          {menu === "webd" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Business")}>
          <Link style={{ textDecoration: "none" }} to="/business">
            Business Suite
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Marketing")}>
          <Link style={{ textDecoration: "none" }} to="/marketing">
            Marketing
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Banner Design")}>
          <Link style={{ textDecoration: "none" }} to="/banner">
            Banner Design
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

