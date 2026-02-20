import React from "react";

const PropertyAmenities = () => {
  const amenities = [
    { icon: "wifi", name: "Free WiFi" },
    { icon: "pool", name: "Swimming Pool" },
    { icon: "local_parking", name: "Free Parking" },
    { icon: "ac_unit", name: "Air Conditioning" },
    { icon: "kitchen", name: "Kitchen" },
    { icon: "tv", name: "Television" },
    { icon: "fitness_center", name: "Gym" },
    { icon: "pets", name: "Pet Friendly" },
    { icon: "hot_tub", name: "Hot Tub" },
    { icon: "balcony", name: "Balcony" },
    { icon: "restaurant", name: "Restaurant" },
    { icon: "room_service", name: "Room Service" }
  ];

  return (
    <div className="property-amenities">
      <h2 className="amenities-header">Amenities</h2>
      <div className="amenities-grid">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-item">
            <span className="material-symbols-outlined amenity-icon">
              {amenity.icon}
            </span>
            <span className="amenity-name">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAmenities;