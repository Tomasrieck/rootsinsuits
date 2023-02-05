import React from "react";
import "./Body.css";

function PriserBody() {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        maxWidth: "1017px",
        width: "90%",
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        marginTop: 7,
        justifyContent: "space-evenly",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        flexDirection: "row",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className="section"
    >
      {document.documentElement.clientWidth < 720 ? (
        <div className="textfield">
          <p style={{ fontSize: "17px" }}>Priser</p>
        </div>
      ) : (
        <>
          <div className="content" style={{ backgroundColor: "silver" }}>
            <div className="headerText">
              <p style={{ fontSize: "25px", fontWeight: "600" }}>
                Den sædvanlige fest:
              </p>
            </div>
            <div className="itemText">
              <p style={{ fontSize: "22px", fontWeight: "400" }}>
                3 x 45 min. musik m. fuld band: 18.000 DKK
              </p>
              <p style={{ fontSize: "22px", fontWeight: "400" }}>
                3 x 45 min. musik m. fuld band + afdæmpet dinnermusik m.
                pianist: 20.000 DKK
              </p>
              <p style={{ fontSize: "22px", fontWeight: "400" }}>
                3 x 45 min. musik m. fuld band + duo: 20.000 DKK
              </p>
            </div>
          </div>
          <div className="content" style={{ backgroundColor: "gold" }}>
            <div className="headerText">
              <p style={{ fontSize: "25px", fontWeight: "600" }}>
                Den store Fest (+150 ps.):
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PriserBody;
