import React from "react";
import "../Styles/ButtonBar.css";

const ButtonBar = () => {
  return (
    <div className="container">
    <div className="button-bar">
      <div className="item airport">Airport Map</div>
      <div className="item">Ticket Booking</div>
      <div className="item">Hotel Reservation</div>
      <div className="item">Flight Reservation</div>
    </div>
    </div>
  );
};

export default ButtonBar;
