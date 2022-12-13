import React, { useState, useRef } from "react";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";

import "./Body.css";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const BookingBody = () => {
  const [navn, setNavn] = useState(false);
  const [email, setEmail] = useState(false);
  const [dato, setDato] = useState(false);
  const [reCaptcha, setReCaptcha] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const date = new Date();

  const form = useRef();

  const sendEmail = (e) => {
    setLoading(() => true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_uy7176o",
        "template_i4xgvem",
        form.current,
        "HizkuAVjqeUNoAjwX"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setLoading(() => false);
        setSuccess(() => true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: "10px",
        position: "relative",
        width: "90%",
        maxWidth: "650px",
        marginTop: 7,
        marginBottom: 27,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
      className="section"
    >
      <div className="form-group">
        <Box
          sx={{
            mt: "4%",
          }}
        >
          {document.documentElement.clientWidth < 720 ? (
            <div className="header">
              <h1 style={{ fontSize: "18px" }}>
                Få et uforpligtende tilbud her:
              </h1>
            </div>
          ) : (
            <div className="header">
              <h1 style={{ fontSize: "30px" }}>
                Få et uforpligtende tilbud her:
              </h1>
            </div>
          )}
          {document.documentElement.clientWidth < 720 ? (
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              <input
                onChange={() => setNavn(true)}
                type="text"
                name="navn"
                id="input"
                placeholder="Fulde navn..."
                style={{ fontSize: "14px" }}
              ></input>
              <input
                onChange={() => setEmail(true)}
                type="email"
                name="email"
                id="input"
                placeholder="Email..."
                style={{ fontSize: "14px" }}
              ></input>
              <div className="dateField">
                <h3
                  style={{
                    width: "5%",
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: "0% 2%",
                    fontFamily: "TimesNewRoman",
                    fontSize: "12px",
                  }}
                >
                  Dato:
                </h3>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <input
                    onChange={() => setDato(true)}
                    type="number"
                    name="date"
                    id="date"
                    placeholder={date.getDate()}
                    style={{ fontSize: "12px" }}
                    maxLength="2"
                  ></input>
                  <h7
                    style={{
                      width: "0%",
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: "0% 0%",
                      fontFamily: "TimesNewRoman",
                      fontSize: "12px",
                    }}
                  >
                    /
                  </h7>
                  <input
                    onChange={() => setDato(true)}
                    type="number"
                    name="month"
                    id="date"
                    placeholder={date.getMonth() + 1}
                    style={{ fontSize: "12px" }}
                    maxLength="2"
                  ></input>
                  <h7
                    style={{
                      width: "0%",
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: "0% 0%",
                      fontFamily: "TimesNewRoman",
                      fontSize: "12px",
                    }}
                  >
                    /
                  </h7>
                  <input
                    onChange={() => setDato(true)}
                    type="number"
                    name="year"
                    id="date"
                    placeholder={date.getFullYear()}
                    style={{ fontSize: "12px" }}
                    maxLength="4"
                  ></input>
                </div>
              </div>
              <textarea
                type="text"
                name="besked"
                id="input"
                placeholder="Send os en besked samt lokation for arrangement..."
                rows="5"
                style={{ fontSize: "14px" }}
              ></textarea>
              <GoogleReCaptchaProvider reCaptchaKey="6Le3jl4dAAAAAIiiGi3ijJYou2-mxLpNOZvT3NYK">
                <GoogleReCaptcha onVerify={() => setReCaptcha(true)} />
              </GoogleReCaptchaProvider>
              <input
                disabled={!(navn && email && reCaptcha)}
                type="submit"
                value={success ? "Sendt!" : "Send"}
                className="btn"
                style={{
                  backgroundColor: success && "#66bb6a",
                  fontSize: "14px",
                }}
              />
              {loading ? <div class="loader" /> : ""}
            </form>
          ) : (
            <form
              ref={form}
              onSubmit={sendEmail}
              id="contact-form"
              style={{ fontSize: "12px" }}
            >
              <input
                onChange={() => setNavn(true)}
                type="text"
                name="navn"
                id="input"
                placeholder="Fulde navn..."
              ></input>
              <input
                onChange={() => setEmail(true)}
                type="email"
                name="email"
                id="input"
                placeholder="Email..."
              ></input>
              <div className="dateField">
                <h3
                  style={{
                    width: "5%",
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: "0% 2%",
                    fontFamily: "TimesNewRoman",
                    fontSize: "17px",
                  }}
                >
                  Dato:
                </h3>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <input
                    onChange={() => setDato(true)}
                    type="number"
                    name="date"
                    id="date"
                    placeholder={date.getDate()}
                  ></input>
                  <h7
                    style={{
                      width: "0%",
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: "0% 0%",
                      fontFamily: "TimesNewRoman",
                      fontSize: "17px",
                    }}
                  >
                    /
                  </h7>
                  <input
                    onChange={() => setDato(true)}
                    type="number"
                    name="month"
                    id="date"
                    placeholder={date.getMonth() + 1}
                  ></input>
                  <h7
                    style={{
                      width: "0%",
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: "0% 0%",
                      fontFamily: "TimesNewRoman",
                      fontSize: "17px",
                    }}
                  >
                    /
                  </h7>
                  <input
                    onChange={() => setDato(true)}
                    type="number"
                    name="year"
                    id="date"
                    placeholder={date.getFullYear()}
                  ></input>
                </div>
              </div>
              <textarea
                type="text"
                name="besked"
                id="input"
                placeholder="Send os en besked samt lokation for arrangement..."
                rows="5"
              ></textarea>
              <GoogleReCaptchaProvider reCaptchaKey="6Le3jl4dAAAAAIiiGi3ijJYou2-mxLpNOZvT3NYK">
                <GoogleReCaptcha onVerify={() => setReCaptcha(true)} />
              </GoogleReCaptchaProvider>
              {loading ? (
                <div class="loader" />
              ) : (
                <input
                  disabled={!(navn && email && dato && reCaptcha)}
                  type="submit"
                  value={success ? "Sendt!" : "Send"}
                  className="btn"
                  style={{
                    backgroundColor: success && "#66bb6a",
                    fontSize: "16px",
                  }}
                />
              )}
            </form>
          )}
        </Box>
      </div>
      <div className="SoMe">
        <a
          href="https://www.facebook.com/RootsinSuits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebook}
            alt="fb"
            id="SoMeIcon"
            style={{ backgroundColor: "white" }}
          />
        </a>
        <a
          href="https://www.instagram.com/rootsinsuits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="ig" id="SoMeIcon" />
        </a>
      </div>
    </div>
  );
};

export default BookingBody;
