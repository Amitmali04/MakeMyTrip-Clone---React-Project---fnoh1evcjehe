import React from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import Logo from "../img/makemytripLogo.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const auth = localStorage.getItem("user");
  // console.log(auth);
  const user = JSON.parse(auth);
  // console.log(user.username);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/sign-up");
  };
  return (
    <div className="header">
      <div className="left">
        <Link to={"/"}>
          <img src={Logo} alt="MakeMyTrip" width="120px" />{" "}
        </Link>
      </div>
      <div className="right">
        <ul className="nav-ul">
          <li>
            <Link to="/">Flights</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/trains">Trains</Link>
          </li>
          <li>
            {auth ? (
              <>
                <Link>
                  <FaUserAlt />
                  <span> {user.username}</span>
                </Link>
                <Link to="/sign-up" onClick={logout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link to="/login">
                {" "}
                <FaUserAlt />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
