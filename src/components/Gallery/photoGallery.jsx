import React, { useState, useEffect } from "react";
import "./photoGallery.css";

export default function PhotoGallery() {
  const featuredProperties = [
    {
      image:
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:1023,h:681",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:1023,h:682",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/rs=w:1023,h:681",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:1023,h:682",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:1023,h:681",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:1023,h:681",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredProperties.length) % featuredProperties.length
    );
  };

  const handleNext = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex + 1) % featuredProperties.length
    );
  };

  // 🔹 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="home">
      {/* --- Photo Gallery --- */}
      <section id="photoGallery" className="property-gallery">
        <h2 className="gallery-title">Photo Gallery</h2>

        {/* Main Photo with Arrows */}
        <div className="main-photo">
          <button className="nav-btn left" onClick={handlePrev}>
            ◀
          </button>
          <img
            src={featuredProperties[selectedIndex].image}
            alt={`Property ${selectedIndex + 1}`}
          />
          <button className="nav-btn right" onClick={handleNext}>
            ▶
          </button>
        </div>

        {/* Thumbnail Row */}
        <div className="thumbnail-row">
          {featuredProperties.map((property, index) => (
            <div
              key={index}
              className={`thumbnail ${index === selectedIndex ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={property.image} alt={`Thumb ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
