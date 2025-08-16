import React from "react";
import "./Agent.css";

const Agent = () => {
  return (
    <>
      {/* Agent Section with Black Background */}
      <section id="meetMarci" className="agent-section">
        <div className="agent-container">
          {/* Left Text */}
          <div className="agent-text">
            <p className="agent-subtitle">THE RIDGE REALTY GROUP</p>
            <h2 className="agent-title">MEET MARCI METZGER</h2>
            <p className="agent-description">REALTOR FOR NEARLY 3 DECADES!</p>
            <p className="agent-description">206-919-6886</p>
            <div className="agent-buttons">
              <button className="btn-light">Learn More</button>
              <button className="btn-dark">Contact</button>
            </div>
          </div>

          {/* Right Image */}
          <div className="agent-image">
            <img
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg=true"
              alt="Agent"
            />
          </div>
        </div>
      </section>

      {/* Endorser Row Separate Section */}
      <section className="endorser-scroll">
        <div className="endorser-track">
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=w:100,h:100,cg=true,m/cr=w:100,h:100/qt=q:27"
            alt="Endorser 1"
          />
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:100,h:100,cg=true/qt=q:27"
            alt="Endorser 2"
          />
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:112,h:100,cg=true/qt=q:27"
            alt="Endorser 3"
          />
          <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=w:100,h:100,cg=true,m/cr=w:100,h:100/qt=q:27"
            alt="Endorser 4"
          />
        </div>
      </section>
    </>
  );
};

export default Agent;
