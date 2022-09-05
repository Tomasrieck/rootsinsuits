import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./Body.css";

import { Link } from "react-router-dom";

import Jeppe from "../../assets/Jeppe.jpg";
import Frede from "../../assets/Frede.jpg";
import Mangus from "../../assets/Mangus.jpg";
import Guffe from "../../assets/Guffe.jpg";
import Haas from "../../assets/Haas.jpg";
import Tomas from "../../assets/Tomas.jpg";

import Kim from "../../assets/kimLarsen.jpeg";
import Robbie from "../../assets/robbie.jpeg";
import ShuBiDua from "../../assets/shuBiDua.jpeg";
import TV2 from "../../assets/tv2.jpeg";
import Helmig from "../../assets/helmig.jpg";
import Danseorkestret from "../../assets/danseorkestret.jpeg";

function OmOsBody() {
  function ShowAndHide() {
    var x = document.getElementById("cut-text");
    var y = document.getElementById("dots");
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
      x.style.whiteSpace = "normal";
      y.style.visibility = "hidden";
    } else {
      x.style.visibility = "hidden";
      x.style.whiteSpace = "nowrap";
    }
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        maxWidth: "1200px",
        width: "90%",
        paddingBottom: 20,
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        marginTop: 7,
        justifyContent: "center",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        flexDirection: "row",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className="section"
    >
      {document.documentElement.clientWidth < 720 ? (
        <div className="promo">
          <h1 style={{ fontSize: "18px" }}>
            SE VORES PROMOVIDEO{" "}
            <a
              href="https://www.youtube.com/watch?v=CVZs_EH-D_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              HER
            </a>
          </h1>
        </div>
      ) : (
        <div className="promo">
          <h1 style={{ fontSize: "30px" }}>
            SE VORES PROMOVIDEO{" "}
            <a
              href="https://www.youtube.com/watch?v=CVZs_EH-D_4"
              target="_blank"
              rel="noopener noreferrer"
            >
              HER
            </a>
          </h1>
        </div>
      )}
      {document.documentElement.clientWidth < 720 ? (
        <div className="textfield">
          <p style={{ fontSize: "16px" }}>
            Roots in Suits har et stort og varieret repertoire.
            <p
              onClick={ShowAndHide}
              id="dots"
              style={{ fontSize: "15px", color: "rgb(117,117,117)" }}
            >
              Læs mere...
            </p>
            <span id="cut-text">
              Vi har stort fokus på at "ramme" vores publikum hver gang. Derfor
              tilpasser vi løbende vores repertoire og imødekommer også gerne
              ønsker fra publikum. Af samme grund har vi ikke en fast sætliste,
              men vi spiller, blandt mange, mange andre, numre af disse
              kunstnere:
            </span>
          </p>
        </div>
      ) : (
        <div className="textfield">
          <p style={{ fontSize: "25px" }}>
            Roots in Suits har et stort og varieret repertoire. <br />
            Vi har stort fokus på at "ramme" vores publikum hver gang. Derfor
            tilpasser vi løbende vores repertoire og imødekommer også gerne
            ønsker fra publikum. Af samme grund har vi ikke en fast sætliste,
            men vi spiller, blandt mange, mange andre, numre af disse kunstnere:
          </p>
        </div>
      )}
      {document.documentElement.clientWidth < 720 ? (
        <ImageList
          sx={{ width: "90%", height: "80vh" }}
          cols={2}
          rowHeight={1}
          gap={7}
          className="gallery"
        >
          {repData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <ImageList
          sx={{ width: "90%", height: "100vh" }}
          cols={3}
          rowHeight={1}
          gap={17}
          className="gallery"
        >
          {repData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {document.documentElement.clientWidth < 720 ? (
        <div className="textfield" id="top-border">
          <p style={{ fontSize: "15px" }}>
            Med Roots in Suits på scenen, er du sikret en festlig aften med
            musikken i top!
            <p
              onClick={ShowAndHide}
              id="dots"
              style={{ fontSize: "15px", color: "rgb(117,117,117)" }}
            >
              Læs mere...
            </p>
            <span id="cut-text">
              Roots in Suits blev dannet på baggrund af et målrettet engagement
              og en ubændig trang til at optræde til festlige arrangementer,
              såsom bryllups-, jubilæums-, personale-, by-, og
              fødselsdagsfester. Roots in Suits består af 6 unge fyre fra Ribe i
              alderen 22-26 år, der til sammen danner et dynamisk festband med
              mange års musikalsk erfaring. Med respekt for de gode gamle
              klassikere, formår de at levere et autentisk svar som en hyldest
              til de originale sangskrivere bag numrene. Roots in Suits leverer
              musikken til DIN fest, og sørger løbende for at tilpasse aftenen
              til gæsternes behov. Kontakt os {""}
              <Link
                style={{ textDecoration: "none" }}
                to={"/rootsinsuits/booking"}
              >
                her
              </Link>
              {""} for at få et uforpligtende tilbud.
            </span>
          </p>
        </div>
      ) : (
        <div className="textfield" id="top-border">
          <p>
            Med Roots in Suits på scenen, er du sikret en festlig aften med
            musikken i top! <br />
            Roots in Suits blev dannet på baggrund af et målrettet engagement og
            en ubændig trang til at optræde til festlige arrangementer, såsom
            bryllups-, jubilæums-, personale-, by-, og fødselsdagsfester. <br />
            Roots in Suits består af 6 unge fyre fra Ribe i alderen 22-26 år,
            der til sammen danner et dynamisk festband med mange års musikalsk
            erfaring. Med respekt for de gode gamle klassikere, formår de at
            levere et autentisk svar som en hyldest til de originale
            sangskrivere bag numrene.
            <br />
            Roots in Suits leverer musikken til DIN fest, og sørger løbende for
            at tilpasse aftenen til gæsternes behov. Kontakt os {""}
            <Link
              style={{ textDecoration: "none" }}
              to={"/rootsinsuits/booking"}
            >
              her
            </Link>
            {""} for at få et uforpligtende tilbud.
          </p>
        </div>
      )}
      {document.documentElement.clientWidth < 720 ? (
        <ImageList
          sx={{ width: "90%", height: "200vw" }}
          cols={2}
          rowHeight={"100%"}
          gap={7}
          className="gallery"
        >
          {osData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                style={{ fontFamily: "TimesNewRoman", fontSize: 6 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <ImageList
          sx={{ width: "90%", height: "80vw" }}
          cols={3}
          rowHeight={"100%"}
          gap={17}
          className="gallery"
        >
          {osData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                style={{ fontFamily: "TimesNewRoman", fontSize: 14 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </div>
  );
}

const osData = [
  {
    img: Jeppe,
    title: "Jeppe Schimdt Hansen",
    author: (
      <a
        href="https://www.instagram.com/jeppe_schmidt/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        @jeppe_schmidt
      </a>
    ),
  },
  {
    img: Frede,
    title: "Frederik Wind",
    author: (
      <a
        href="https://www.instagram.com/frederik_wind/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        @frederik_wind
      </a>
    ),
  },
  {
    img: Mangus,
    title: "Magnus Mulbjerg Bendtsen",
    author: (
      <a
        href="https://www.instagram.com/magnus.mulbjerg/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        @magnus.mulbjerg
      </a>
    ),
  },
  {
    img: Guffe,
    title: "Gustav Thomsen Purreskov",
    author: (
      <a
        href="https://www.instagram.com/g_purreskov/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        @g_purreskov
      </a>
    ),
  },
  {
    img: Haas,
    title: "Jesper Haas Jensen",
    author: (
      <a
        href="https://www.instagram.com/jesperhaas/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        @jesperhaas
      </a>
    ),
  },
  {
    img: Tomas,
    title: "Tomas O. Rosenvind Rieck",
    author: (
      <a
        href="https://www.instagram.com/riecktomas/"
        className="link"
        target="_blank"
        rel="noopener noreferrer"
      >
        @riecktomas
      </a>
    ),
  },
];

const repData = [
  {
    img: Kim,
    title: "Kim Larsen",
  },
  {
    img: Robbie,
    title: "Robbie Williams",
  },
  {
    img: Helmig,
    title: "Thomas Helmig",
  },
  {
    img: TV2,
    title: "TV2",
  },
  {
    img: Danseorkestret,
    title: "Danseorkestret",
  },
  {
    img: ShuBiDua,
    title: "ShuBiDua",
  },
];

export default OmOsBody;
