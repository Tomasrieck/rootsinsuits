import * as React from "react";
import Header from "../Header/Header";
import Body from "../Priser/Body";
import backgroundImage from "../../assets/background4.jpg";

function Priser() {
  document.title = "Roots in Suits - Priser";
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
        paddingBottom: "5%",
        alignContent: "flex-start",
      }}
    >
      <Header />
      <Body />
    </div>
  );
}

export default Priser;
