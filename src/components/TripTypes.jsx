import React from "react";

const TripTypes = () => {
  return (
    <div className="container">
      <label htmlFor="from">Trip Types: </label>
      <select className="form-select">
        <option value="1">Oneway</option>
        <option value="2">Twoway</option>
      </select>
    </div>
  );
};

export default TripTypes;
