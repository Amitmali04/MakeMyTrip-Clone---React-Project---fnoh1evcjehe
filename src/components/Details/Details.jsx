// import { Button, Form, Input } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import "./details.css";

const Details = () => {
  const location = useLocation();
  const price = parseInt(location.state.data.data[0].price);
  console.log(typeof price);
  const a = 740;
  const sum = price + a;
  return (
    <div className="details">
      <div className="payment">
        <h2>Fare Summery</h2>
        <div className="detail_data">
          <p>Base Fare</p>
          <p>{price}</p>
        </div>
        <hr></hr>
        <div className="detail_data">
          <p>Fee & Surcharge</p>
          <p>740</p>
        </div>
        <hr></hr>
        <div className="detail_data">
          <p>Total Amount</p>
          <p>{sum}</p>
        </div>
        <hr></hr>
      </div>
      <div className="pay_detail">
        <h2>Payment Method</h2>
        <form>
          <div className="payment_row">
            <input name="name" placeholder="Neme on Card" />
          </div>
          <div className="payment_row">
            <input name="cardNumber" placeholder="Card Number" />
          </div>
          <div className="payment_row">
            <input name="expiry" placeholder="Expiry Date" />
          </div>
          <div className="payment_row">
            <input name="cvv" placeholder="CVV" />
          </div>
          <button>Pay</button>
        </form>
      </div>
    </div>
  );
};

export default Details;
