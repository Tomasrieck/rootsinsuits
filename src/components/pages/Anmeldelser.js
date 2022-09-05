import * as React from "react";

import Header from "../Header/Header";
import Body from "../Anmeldelser/Body";

import backgroundImage from "../../assets/background3.jpg";

function Anmeldelser() {
  document.title = "Roots in Suits - Anmeldelser";
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

export default Anmeldelser;
