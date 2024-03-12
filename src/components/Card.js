import React, { useState } from "react";
import { toast } from "react-toastify";

const  Card = ({ id, name, info, image, price }) => {
  const [readmore, setReadmore] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  const bookingHandler = (id) => {
    setIsBooked(true); 
    toast.success(`Booking Confirmed for ${name}`);
  };

  return (
    <div className="card">
      <img src={image} className="image" alt="error"></img>

      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name} </h4>
      </div>

      <div className="description">
        {description}
        <span className="read-more" onClick={readmoreHandler}>
          {readmore ? `show less` : `read more`}
        </span>
      </div>
      
      {/* Conditional rendering for the button */}
      {isBooked ? (
        <button className="btn-disabled" disabled>
          Booked
        </button>
      ) : (
        <button className="btn-red" onClick={() => bookingHandler(id)}>
          Book Now
        </button>
      )}
    </div>
  );
}

export default Card;
