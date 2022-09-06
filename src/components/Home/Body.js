import React from "react";

import Video from "../../assets/rootsInVideo.mp4";
import "./Body.css";

function homeBody() {
  return (
    <div>
      <h1 id="skjult">
        Roots in Suits er et festband i stor stil. De spiller danske samt
        internationale hits fra de sidste 4 årtier. <br />
        Roots in Suits blev dannet på baggrund af et målrettet engagement og en
        ubændig trang til at optræde til festlige arrangementer, såsom
        bryllups-, jubilæums-, personale-, by-, og fødselsdagsfester. <br />
        Roots in Suits består af 6 unge fyre fra Ribe i alderen 22-26 år, der
        til sammen danner et dynamisk festband med mange års musikalsk erfaring.{" "}
        <br />
        Med respekt for de gode gamle klassikere, formår de at levere et
        autentisk svar som en hyldest til de originale sangskrivere bag numrene.{" "}
        <br />
        Roots in Suits leverer musikken til DIN fest, og sørger løbende for at
        tilpasse aftenen til gæsternes behov.
      </h1>
      <video autoPlay muted preload="auto" playsInline loop className="video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default homeBody;
