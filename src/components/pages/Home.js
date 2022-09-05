import * as React from "react";
import Header from "../Header/Header";
import Body from "../Home/Body";

function Home() {
  document.title = "Roots in Suits";
  return (
    <div
      className="body"
      style={{
        backgroundColor: "black",
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

export default Home;
