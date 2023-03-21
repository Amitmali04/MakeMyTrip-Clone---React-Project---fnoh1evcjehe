import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FlightsCard.css";

const FlightsCard = (data) => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const bookTicket = () => {
    auth
      ? navigate("/details", { state: { data } })
      : navigate("/sign-up", {
          state: { data: data },
        });
  };

  return (
    <>
      <div className="main">
        <h2>Available Tickets</h2>

        {data.data.map((ele, id) => {
          console.log(ele);
          return (
            <div className="card" key={id}>
              <div className="col-3">
                <p>
                  From
                  <br />
                  <h3>{ele.from}</h3>
                </p>
                <p>
                  Departure
                  <br />
                  <h3>
                    {ele.departure.departureDate +
                      "|" +
                      ele.departure.departureTime}
                  </h3>
                </p>

                <p>
                  Price
                  <br />
                  <h3>{ele.price}</h3>
                </p>
              </div>

              <div className="col-3">
                <p>
                  To
                  <br />
                  <h3>{ele.to}</h3>
                </p>
                <p>
                  Return
                  <br />
                  <h3>{ele.return.returnDate + "|" + ele.return.returnTime}</h3>
                </p>
                <p>
                  Via
                  <br />
                  <h3>{ele.via}</h3>
                </p>
              </div>

              <div className="col-3">
                <p>
                  AirlineName
                  <br />
                  <h3>{ele.airlineName}</h3>
                </p>

                <p>
                  Duration
                  <br />
                  <h3>{ele.duration}</h3>
                </p>
              </div>
              <div className="col-3">
                <button onClick={bookTicket}>Book</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlightsCard;
