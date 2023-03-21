import React, { useEffect, useState } from "react";
import { Form, DatePicker, Input } from "antd";
import axios from "axios";

import "./Flight.css";
import TripTypes from "../TripTypes";
import FlightsCard from "./FlightsCard";

const Flight = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState(null);
  const [returnD, setReturnD] = useState(null);
  const [data, setData] = useState([]);

  // capitalizeFirst
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  console.log(data, "lll");

  const hendleSearch = async () => {
    console.log("From", from, "To", to, "Depa", departure, "Ret", returnD);
    const response = await axios.get(
      `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights?from=${from}&to=${to}`

      // `https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights?from=${from}&to=${to}&departure=${departure}&return=${returnD}`
    );

    const data = response.data;
    setData(data);
  };

  return (
    <div className="container-well">
      <Form>
        <div className="contaier">
          <TripTypes />
        </div>
        <div className="flight_search">
          <div className="search">
            <label htmlFor="from">FROM</label>
            <Form.Item rules={[{ required: true }]}>
              <Input
                onChange={(e) => setFrom(capitalizeFirst(e.target.value))}
              />
            </Form.Item>
          </div>
          <div className="search">
            <label htmlFor="to">TO</label>
            <Form.Item rules={[{ required: true }]}>
              <Input onChange={(e) => setTo(capitalizeFirst(e.target.value))} />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="departure">DEPARTURE</label>
            <Form.Item>
              <DatePicker
                id="date"
                onChange={(date, dateString) => {
                  console.log(dateString);
                  setDeparture(dateString);
                }}
              />
            </Form.Item>
          </div>
          <div>
            <label htmlFor="return">RETURN</label>
            <Form.Item>
              <DatePicker
                id="date"
                onChange={(date, dateString) => {
                  console.log(dateString);
                  setReturnD(dateString);
                }}
              />
            </Form.Item>
          </div>
        </div>

        <div className="button">
          <button onClick={hendleSearch}>Search</button>
        </div>
      </Form>
      {data.length === 0 ? "" : <FlightsCard data={data} />}
    </div>
  );
};

export default Flight;
