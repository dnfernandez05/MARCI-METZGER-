import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Selection from "../Selection/Selection";
import "./Home.css";

export default function Home() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-container">
        <div className="hero-overlay">
          <h2 className="hero-title">MARCI METZGER - THE RIDGE REALTY GROUP</h2>
          <h1 className="hero-title1">PAHRUMP REALTOR</h1>

          {/* Search Button inside hero */}
          <div
            className="search-icon-wrapper"
            onClick={() => setShowSearch(true)}
          >
            <FaSearch className="search-icon" />
          </div>
        </div>
      </section>

      {/* Search Modal */}
      {showSearch && (
        <div className="search-modal-overlay">
          <div className="search-modal-content">
            <button className="close-btn" onClick={() => setShowSearch(false)}>
              ✖
            </button>
            <Selection />
          </div>
        </div>
      )}

      {/* Get It Sold Section */}
      <section id="getitSold" className="get-it-sold-section">
        <h2 className="section-title">Get It Sold</h2>
        <div className="get-it-sold-container">
          <div className="sold-box">
            <img
              src="https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg=true"
              alt="Top Residential Sales"
            />
            <h3 className="sold-title">Top Residential Sales Last 5 Years</h3>
            <p className="sold-description">
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales!
              <br />
              <br />
              Our team works hard every day to grow and learn, so that we may
              continue to excel in our market. Our clients deserve our best,
              &amp; we want to make sure our best is better every year.
            </p>
          </div>

          <div className="sold-box">
            <img
              src="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg=true,m/cr=w:600,h:300"
              alt="Don't Just List it..."
            />
            <h3 className="sold-title">Don't Just List it...</h3>
            <p className="sold-description">
              Get it SOLD! We exhaust every avenue to ensure our listings are at
              the fingertips of every possible buyer, getting you top dollar for
              your home.
            </p>
          </div>

          <div className="sold-box">
            <img
              src="https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg=true,m"
              alt="Guide to Buyers"
            />
            <h3 className="sold-title">Guide to Buyers</h3>
            <p className="sold-description">
              Nobody knows the market like we do. Enjoy having a pro at your
              service. Market analysis, upgrades lists, contractors on speed
              dial, &amp; more!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
