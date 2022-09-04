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
  const [besked, setBesked] = useState(false);
  const [reCaptcha, setReCaptcha] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
        maxWidth: "800px",
        paddingBottom: "4%",
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
          {document.documentElement.clientWidth < 600 ? (
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
          {document.documentElement.clientWidth < 600 ? (
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
                type="text"
                name="email"
                id="input"
                placeholder="Email..."
                style={{ fontSize: "14px" }}
              ></input>
              <textarea
                onChange={() => setBesked(true)}
                type="text"
                name="besked"
                id="input"
                placeholder="Besked..."
                rows="5"
                style={{ fontSize: "14px" }}
              ></textarea>
              <GoogleReCaptchaProvider reCaptchaKey="6Le3jl4dAAAAAIiiGi3ijJYou2-mxLpNOZvT3NYK">
                <GoogleReCaptcha onVerify={() => setReCaptcha(true)} />
              </GoogleReCaptchaProvider>
              <input
                disabled={!(navn && email && besked && reCaptcha)}
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
                type="text"
                name="email"
                id="input"
                placeholder="Email..."
              ></input>
              <textarea
                onChange={() => setBesked(true)}
                type="text"
                name="besked"
                id="input"
                placeholder="Besked..."
                rows="5"
              ></textarea>
              <GoogleReCaptchaProvider reCaptchaKey="6Le3jl4dAAAAAIiiGi3ijJYou2-mxLpNOZvT3NYK">
                <GoogleReCaptcha onVerify={() => setReCaptcha(true)} />
              </GoogleReCaptchaProvider>
              <input
                disabled={!(navn && email && besked && reCaptcha)}
                type="submit"
                value={success ? "Sendt!" : "Send"}
                className="btn"
                style={{
                  backgroundColor: success && "#66bb6a",
                  fontSize: "18px",
                }}
              />
              {loading ? <div class="loader" /> : ""}
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
