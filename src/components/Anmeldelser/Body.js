import React from "react";
import "./Body.css";

function AnmeldelserBody() {
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
        overflow: "auto",
        marginTop: 7,
        marginBottom: 27,
        justifyContent: "center",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className="section"
    >
      {document.documentElement.clientWidth < 720 ? (
        <div className="textfield">
          <p style={{ fontSize: "22px" }}>Dette synes vores publikum om os:</p>
        </div>
      ) : (
        <div className="textfield">
          <p style={{ fontSize: "30px" }}>Dette synes vores publikum om os:</p>
        </div>
      )}
      {document.documentElement.clientWidth < 720 ? (
        <div
          style={{
            width: "90%",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
            alignItems: "center",
            marginBottom: 37,
            marginTop: 10,
          }}
        >
          <div className="grid-item">
            <h2 style={{ fontSize: "15px" }}>
              Jeg siger det bare drenge, I er simpelthen de bedste{" "}
              <span role="img" aria-label="emoji">
                👍
              </span>{" "}
              Tusind tak fordi I var med til, at gøre festen til en fantastisk
              aften! Dansegulvet var fyldt{" "}
              <span role="img" aria-label="emoji">
                💃🏼💃🏼💃🏼
              </span>{" "}
              Allerstørste ros herfra - og fra gæsterne{" "}
              <span role="img" aria-label="emoji">
                👌😊
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "15px" }}>
              Fantastisk band!!!! I alt den tid Roots in Suits spillede var
              dansegulvet fyldt. Vores gæster var vilde med musikken og det var
              vi også. Tusind tak !
              <span role="img" aria-label="emoji">
                😃💃🕺
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "15px" }}>
              De her fyre forstår at holde en fest. Kan kun anbefale dem. Mvh
              Lynddahl Ribe
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "15px" }}>
              Fantastisk band, der virkelig kan sætte gang i dansegulvet til en
              fest{" "}
              <span role="img" aria-label="emoji">
                👍
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "15px" }}>
              I lørdags blev min søn gift. En overraskelse til brudeparret var,
              at Roots in Suits skulle spille. Jeg har aldrig givet en bedre
              gave! Bandet spillede og sang fantastisk og dansegulvet var fyldt
              af glade mennesker under hele festen, unge såvel som gamle. Af
              hjertet tak!
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "15px" }}>
              Roots in Suits skabte den helt perfekte stemning til vores bryllup
              i lørdags. Skøn baggrundsmusik under middagen og perfekt
              dansemusik senere på aftenen{" "}
              <span role="img" aria-label="emoji">
                🥳👏
              </span>{" "}
              I strækker jer langt for at få det hele til at spille - tak for
              det!{" "}
              <span role="img" aria-label="emoji">
                😍
              </span>
            </h2>
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "90%",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            alignItems: "center",
            marginBottom: 37,
          }}
        >
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              Jeg siger det bare drenge, I er simpelthen de bedste{" "}
              <span role="img" aria-label="emoji">
                👍
              </span>{" "}
              Tusind tak fordi I var med til, at gøre festen til en fantastisk
              aften! Dansegulvet var fyldt{" "}
              <span role="img" aria-label="emoji">
                💃🏼💃🏼💃🏼
              </span>{" "}
              Allerstørste ros herfra - og fra gæsterne{" "}
              <span role="img" aria-label="emoji">
                👌😊
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              Fantastisk band!!!! I alt den tid Roots in Suits spillede var
              dansegulvet fyldt. Vores gæster var vilde med musikken og det var
              vi også. Tusind tak !
              <span role="img" aria-label="emoji">
                😃💃🕺
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              De her fyre forstår at holde en fest. Kan kun anbefale dem. Mvh
              Lynddahl Ribe
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              Fantastisk band, der virkelig kan sætte gang i dansegulvet til en
              fest{" "}
              <span role="img" aria-label="emoji">
                👍
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              I lørdags blev min søn gift. En overraskelse til brudeparret var,
              at Roots in Suits skulle spille. Jeg har aldrig givet en bedre
              gave! Bandet spillede og sang fantastisk og dansegulvet var fyldt
              af glade mennesker under hele festen, unge såvel som gamle. Af
              hjertet tak!
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              Roots in Suits skabte den helt perfekte stemning til vores bryllup
              i lørdags. Skøn baggrundsmusik under middagen og perfekt
              dansemusik senere på aftenen{" "}
              <span role="img" aria-label="emoji">
                🥳👏
              </span>{" "}
              I strækker jer langt for at få det hele til at spille - tak for
              det!{" "}
              <span role="img" aria-label="emoji">
                😍
              </span>
            </h2>
          </div>
          <div className="grid-item">
            <h2 style={{ fontSize: "18px" }}>
              Vi havde den store fornøjelse, at have dette fantastiske band til
              at spille til vores fest, og hold nu op, de var helt fantastiske.{" "}
              <span role="img" aria-label="emoji">
                😃{" "}
              </span>
              Fed musik, dansegulvet var fyldt hele tiden.{" "}
              <span role="img" aria-label="emoji">
                💃🕺
              </span>{" "}
              Og under spisning havde vi deres fantastiske pianist til at
              spille.
              <span role="img" aria-label="emoji">
                👏👏{" "}
              </span>
              Vi takker mange tusind gange for,at i var med til at gøre vores
              fest fantastisk
              <span role="img" aria-label="emoji">
                ❤️
              </span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnmeldelserBody;
