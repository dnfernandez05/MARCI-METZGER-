import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Navbar */}
      <header className="top-navbar">
        {/* Left Logos */}
        <div className="navbar-left">
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
            alt="Marci Metzger"
            className="logo-left"
          />
          <div className="divider"></div>
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:27"
            alt="Ridge"
            className="logo-right"
          />
        </div>

        {/* Center Links */}
        <nav className="navbar-center">
          <a href="#photoGallery">Photo Gallery</a>
          <a href="#getitSold">Get It Sold</a>
          <a href="#meetMarci">Meet Marci Metzger</a>
          <a href="#ourServices">Our Services</a>
          <a href="#Contact">Contact</a>
        </nav>

        {/* Right Menu Button */}
        <div className="navbar-right">
          <span className="menu-text">MENU</span>
          <button className="menu-btn" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={toggleSidebar}>
          ×
        </span>
        <nav className="nav-links">
          <a href="#">HOME</a>
          <a href="#">LISTINGS</a>
          <a href="#">LET'S MOVE</a>
          <a href="#">ABOUT US</a>
        </nav>
      </aside>
    </>
  );
}
