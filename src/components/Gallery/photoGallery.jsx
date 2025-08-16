import React, { useState } from "react";
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
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:1023,h:681",
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

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 2 < featuredProperties.length) {
      setStartIndex(startIndex + 2);
    }
  };

  const handlePrev = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex(startIndex - 2);
    }
  };

  return (
    <div className="home">
      {/* --- Photo Gallery --- */}
      <section id="photoGallery" className="property-gallery">
        <h2 className="gallery-title">Featured Properties</h2>
        <div className="gallery-wrapper">
          {featuredProperties
            .slice(startIndex, startIndex + 2)
            .map((property, index) => (
              <div key={index} className="property-card">
                <div className="property-img">
                  <img src={property.image} alt={`Gallery ${index + 1}`} />
                </div>
              </div>
            ))}
        </div>

        <div className="gallery-controls">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            ◀
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + 2 >= featuredProperties.length}
          >
            ▶
          </button>
        </div>
      </section>
    </div>
  );
}
