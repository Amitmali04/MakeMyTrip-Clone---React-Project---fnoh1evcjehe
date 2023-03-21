import React, { useState } from "react";
import axios from "axios";
import TrainCard from "./TrainCard";
import TripTypes from "../TripTypes";

const Trains = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelDate, setTravelDate] = useState(null);
  // const [returnD, setReturnD] = useState(null);
  const [data, setData] = useState([]);

  // capitalizeFirst
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  console.log(data);

  const hendleSearch = async () => {
    console.log("From", from, "To", to, "Depa", travelDate);
    const response = await axios.get(
      `https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains?from=${from}&to=${to}`
      // &departure=${travelDate}
      // `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights?from=${from}&to=${to}&departure=${departure}&return=${returnD}`
    );

    const data = response.data;
    setData(data);
  };

  return (
    <div className="container mt-4">
      <form className="continer">
        <TripTypes />
        <div className="container">
          <div className="row">
            <div className="col-sm col-3">
              <div className="form-group">
                <label htmlFor="from">FROM</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Delhi"
                  onChange={(e) => {
                    setFrom(capitalizeFirst(e.target.value));
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="to">TO</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mumbai"
                  onChange={(e) => {
                    setTo(capitalizeFirst(e.target.value));
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date">TRAVEL DATE</label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  onChange={(e) => {
                    setTravelDate(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">CLASS</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="All"
                />
              </div>
            </div>
            <div className="col-sm col text-center">
              <button
                type="button"
                className="btn btn-default"
                onClick={hendleSearch}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {data.length === 0 ? "" : <TrainCard data={data} />}
    </div>
  );
};

export default Trains;
