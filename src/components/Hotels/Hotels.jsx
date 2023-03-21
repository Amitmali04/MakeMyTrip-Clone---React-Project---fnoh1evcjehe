import React, { useState } from "react";
import axios from "axios";
import "./Hotels.css";

const Hotels = () => {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState("");
  const [data, setData] = useState([]);

  console.log(data);

  // capitalizeFirst
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const submitHandler = async () => {
    console.log(city, checkOut, checkIn, guests);
    const response = await axios.get(
      // `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels?city=&checkin=&checkout=&guests=$`
      `https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels?city=${city}&check_in=${checkIn}&check_out=${checkOut}&guests=${guests}`
    );
    const data = response.data;
    setData(data);
  };

  return (
    <div className="container mt-4">
      <form className="continer">
        {/* <TripTypes /> */}
        <div className="container">
          <div className="row">
            <div className="col-sm col-3">
              <div className="form-group">
                <label htmlFor="from">CITY OR LOCATION</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CITY OR LOCATION"
                  onChange={(e) => {
                    setCity(capitalizeFirst(e.target.value));
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">CHECK-IN</label>
                <input
                  type="date"
                  className="form-control"
                  value={checkIn}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    // console.log(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">CHECK-OUT</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={checkOut}
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                    // console.log(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="guest">GUESTS</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="GUESTS"
                  onChange={(e) => {
                    setGuests(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-sm col text-center">
              <button
                type="button"
                className="btn btn-default"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* {data.length === 0 ? "" : <TrainCard data={data} />} */}
    </div>
  );
};

export default Hotels;
