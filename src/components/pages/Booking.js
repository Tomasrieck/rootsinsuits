import React from "react";

import Header from "../Header/Header";
import Body from "../Booking/Body";

import backgroundImage from "../../assets/background1.jpg";

function Booking() {
  document.title = "Roots in Suits - Booking";

  return (
    <div
      className="body"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "flex-start",
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default Booking;
