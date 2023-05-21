import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="header">
            <p>
              Access curated courses worth ₹
              <span
                className="coursePrice"
                style={{ textDecorationColor: "#ff0000", fontWeight: "600" }}
              >
                18,500
              </span>{" "}
              at just
              <span className="offrPrice" style={{ fontWeight: "600" }}>
                {" "}
                ₹ 99
              </span>{" "}
              per year!
            </p>
          </div>
          <div className="descripteion">
            <div className="pointer">
              <div className="pointer-icon">
                <img
                  className="ptr-icon"
                  src={require("../assets/icons/book.png")}
                  alt="book"
                />
              </div>
              <div className="pointer-text">
                <span className="blueText">100+ </span>
                Job relevent courses
              </div>
            </div>
            <div className="pointer">
              <div className="pointer-icon">
                <img
                  className="ptr-icon"
                  src={require("../assets/icons/clock.png")}
                  alt="book"
                />
              </div>
              <div className="pointer-text">
                <span className="blueText">20,000+ </span>
                Hours of content
              </div>
            </div>
            <div className="pointer">
              <div className="pointer-icon">
                <img
                  className="ptr-icon"
                  src={require("../assets/icons/live.png")}
                  alt="book"
                />
              </div>
              <div className="pointer-text">
                <span className="blueText">Exclusive </span>
                webinar access
              </div>
            </div>
            <div className="pointer">
              <div className="pointer-icon">
                <img
                  className="ptr-icon"
                  src={require("../assets/icons/hat.png")}
                  alt="book"
                />
              </div>
              <div className="pointer-text">
                Scholarship worth
                <span className="blueText"> ₹94,500</span>
              </div>
            </div>
            <div className="pointer">
              <div className="pointer-icon">
                <img
                  className="ptr-icon"
                  src={require("../assets/icons/ads.png")}
                  alt="book"
                />
              </div>
              <div className="pointer-text">
                <span className="blueText">Ad Free </span>
                learning experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
