import React from "react";

const PropertyMapInfo = () => {
  return (
    <div className="property-map-info">
      <h2 className="map-header">Location</h2>
      
      <div className="map-address">
        <span className="material-symbols-outlined location-icon">location_on</span>
        <div className="address-details">
          <p className="address-text">ECR, Chennai, Tamil Nadu, India</p>
          <p className="address-subtext">Near the beach, 5 km from city center</p>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Property Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.06892495!3d13.0475162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="nearby-places">
        <h3 className="nearby-header">Nearby Places</h3>
        <div className="nearby-list">
          <div className="nearby-item">
            <span className="material-symbols-outlined">restaurant</span>
            <div>
              <p className="nearby-name">Restaurants</p>
              <p className="nearby-distance">0.5 km away</p>
            </div>
          </div>
          
          <div className="nearby-item">
            <span className="material-symbols-outlined">local_grocery_store</span>
            <div>
              <p className="nearby-name">Supermarket</p>
              <p className="nearby-distance">1 km away</p>
            </div>
          </div>
          
          <div className="nearby-item">
            <span className="material-symbols-outlined">local_hospital</span>
            <div>
              <p className="nearby-name">Hospital</p>
              <p className="nearby-distance">2 km away</p>
            </div>
          </div>
          
          <div className="nearby-item">
            <span className="material-symbols-outlined">beach_access</span>
            <div>
              <p className="nearby-name">Beach</p>
              <p className="nearby-distance">0.3 km away</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMapInfo;