import React from "react";
import "./Selection.css";

export default function Selection() {
  return (
    <div className="selection-container">
      <div className="selection-header">
        <h2 className="selection-title">Find Your Dream Home</h2>
        <h3 className="selection-subtitle">Search Listings</h3>
      </div>

      <form className="selection-form">
        {/* Location */}
        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="Enter location" />
        </div>

        {/* Type */}
        <div className="form-group">
          <label>Type</label>
          <select>
            <option value="">Select type</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="form-group">
          <label>Sort By</label>
          <select>
            <option value="">Select</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="newest">Newest Listings</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div className="form-group half-width">
          <label>Bedrooms</label>
          <select>
            <option value="">Any Number</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>

        {/* Baths */}
        <div className="form-group half-width">
          <label>Baths</label>
          <select>
            <option value="">Any Number</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>

        {/* Min Price */}
        <div className="form-group half-width">
          <label>Min Price</label>
          <input type="number" placeholder="Min Price" />
        </div>

        {/* Max Price */}
        <div className="form-group half-width">
          <label>Max Price</label>
          <input type="number" placeholder="Max Price" />
        </div>

        {/* Search Button */}
        <div className="form-group full-width">
          <button type="submit" className="search-btn">
            Search Now
          </button>
        </div>
      </form>
    </div>
  );
}
