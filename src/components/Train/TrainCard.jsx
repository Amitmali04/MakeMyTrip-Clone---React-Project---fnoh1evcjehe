import React from "react";
import { useNavigate } from "react-router-dom";

const TrainCard = (data) => {
  console.log(data);

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
    <div className="flex-wrap: nowrap">
      <h1 className="m-2"> Availavle Ticket</h1>

      {data.data.map((Train, id) => {
        console.log(Train);
        return (
          <div className="card" style={{ marginLeft: "100px" }} key={id}>
            <div className="card-body container-fliud">
              <div className="row" style={{ width: "75%", margin: "20px" }}>
                <div className="col-sm col-3">
                  <div className="">
                    <label htmlFor="from">FROM</label>
                    <h2>{Train.from}</h2>
                  </div>
                  <div className="m-1">
                    <label htmlFor="from">DEPAETURE</label>
                    <h3 className="">
                      {Train.departure.departureTime +
                        "|" +
                        Train.departure.departureDate}
                    </h3>
                  </div>
                  <div className="form-group">
                    <label htmlFor="from">PRICE</label>
                    <p className="">{Train.price}</p>
                  </div>
                </div>

                <div className="col-sm col-3">
                  <div className="">
                    <label htmlFor="from">TO</label>
                    <h2 className="">{Train.to}</h2>
                  </div>
                  <div className="m-1">
                    <label htmlFor="from">TRAIN NUMBER</label>
                    <h3 className="">{Train.train_number}</h3>
                  </div>
                  <div className="form-group">
                    <label htmlFor="from">KILOMETERs</label>
                    <p className="">{Train.kilometers}</p>
                  </div>
                </div>
              </div>

              <div className="col-sm col-3 text-right">
                <button className="btn btn-default" onClick={bookTicket}>
                  Book
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainCard;
