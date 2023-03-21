import React from "react";
import "../styles/App.css";
import Header from "./Navbar/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flight from "./Flights/Flight";
import Home from "./Home";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import Hotels from "./Hotels/Hotels";
import Trains from "./Train/Trains";
import PrivateComponant from "./PrivateComponant";
import Details from "./Details/Details";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Flight />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/trains" element={<Trains />}></Route>
        <Route element={<PrivateComponant />}>
          <Route path="/logout" element={<h1>Logout componets</h1>}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
