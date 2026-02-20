import React from "react";
import { useParams } from "react-router-dom";
import PropertyImg from "./PropertyImg";
import PropertyAmenities from "./PropertyAmenities";
import PropertyMapInfo from "./PropertyMapInfo";
import "../../css/PropertyListing.css";
import PaymentForm from "./PaymentForm";

const PropertyListing = () => {
  const { id } = useParams();

  return (
    <div className='property-container'>
      <p className='property-header'> Beautiful Villa in Goa</p>
      <h6 className='property-location'>
        <span className='material-symbols-outlined'>House</span>
        <span className='location'> &cr, chennai, tamilnadu</span>
      </h6>
      <PropertyImg />
      <div className='middle-container row'>
        <div className='det-and-amenities col-md-8 col-sm-12 col-12'>
          <h2 className='property-description-header'> Description</h2>
          <p className='property-description'> 
            This is a simple description of a luxury villa located near the beach. Perfect for families and groups
            <br/> Max number of guests: 6
          </p>
          <hr/>
          <PropertyAmenities />
          <hr/>
          <div className="property-payment-col-md-4 col-sm-12 col-12">
            <PaymentForm/>

          </div>
          <PropertyMapInfo />
        </div>
        
       
      </div>
    </div>
  );
};

export default PropertyListing;