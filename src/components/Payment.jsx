import React from "react";
import "../styles/Payment.css";
import { useState } from "react";

const Payment = (props) => {
  const [price, setPrice] = useState(149);

  return (
    <div className="payment_container">
      <div className="form">
        <div className="form-menu">
          <div className="signup">
            <h1 className="btn-1">1</h1>
            <p>Sign Up</p>
          </div>
          <div className="subscribe">
            <h1 className="btn-2">2</h1>
            <p>Subscribe</p>
          </div>
        </div>
        <div className="form-header">
          <h3>Select your subscription plan</h3>
        </div>
        <div className="input-container">
          <div className="box" id="box1">
            <div className="expired-offer">
              <p>Offer expired</p>
            </div>
            <div className="box-left">
              <div className="radio-btn" id="radio-btn1">
                <i
                  class="fa-regular fa-circle-dot"
                  style={{ color: "#74777b" }}
                ></i>
              </div>
              <div className="box-text">
                <p>12 months Subscription</p>
              </div>
            </div>
            <div className="box-price">
              <div className="total-price">
                <p style={{ fontSize: "13px" }}>Total </p>
                <p style={{ fontSize: "16px" }}> ₹99</p>
              </div>
              <div className="per-month">
                <p style={{ fontSize: "14px" }}>₹8</p>
                <p style={{ fontSize: "12px" }}>/mo</p>
              </div>
            </div>
          </div>
          <label className="box" id="box2">
            <div className="recommended">
              <p>Recommended</p>
            </div>
            <div className="box-left">
              <div className="radio-btn">
                <input
                  className="rdo-btn"
                  type="radio"
                  name="plan"
                  value="179"
                  id="yearly"
                  onClick={() => setPrice(179)}
                  defaultChecked
                />
              </div>
              <div className="box-text">
                <p>12 months Subscription</p>
              </div>
            </div>
            <div className="box-price">
              <div className="total-price">
                <p style={{ fontSize: "13px" }}>Total</p>
                <p style={{ fontSize: "16px" }}>₹179</p>
              </div>
              <div className="per-month">
                <p style={{ fontSize: "14px" }}>₹15</p>
                <p style={{ fontSize: "12px" }}>/mo</p>
              </div>
            </div>
          </label>
          <label className="box">
            <div className="box-left">
              <div className="radio-btn">
                <input
                  className="rdo-btn"
                  type="radio"
                  name="plan"
                  value="149"
                  id="halfYearly"
                  onClick={() => setPrice(149)}
                />
              </div>
              <div className="box-text">
                <p>6 months Subscription</p>
              </div>
            </div>
            <div className="box-price">
              <div className="total-price">
                <p style={{ fontSize: "13px" }}>Total</p>
                <p style={{ fontSize: "16px" }}>₹149</p>
              </div>
              <div className="per-month">
                <p style={{ fontSize: "14px" }}>₹25</p>
                <p style={{ fontSize: "12px" }}>/mo</p>
              </div>
            </div>
          </label>
          <label className="box">
            <div className="box-left">
              <div className="radio-btn">
                <input
                  className="rdo-btn"
                  type="radio"
                  name="plan"
                  value="99"
                  id="quaterly"
                  onClick={() => setPrice(99)}
                />
              </div>
              <div className="box-text">
                <p>3 months Subscription</p>
              </div>
            </div>
            <div className="box-price">
              <div className="total-price">
                <p style={{ fontSize: "13px" }}>Total</p>
                <p style={{ fontSize: "16px" }}>₹99</p>
              </div>
              <div className="per-month">
                <p style={{ fontSize: "14px" }}>₹33</p>
                <p style={{ fontSize: "12px" }}>/mo</p>
              </div>
            </div>
          </label>
        </div>
        <hr style={{ border: "2px solid #3c48524c", marginBottom: "0" }} />
        <div className="summary-container">
          <div className="fee">
            <p>Subscription fee</p>
            <p>₹18,500</p>
          </div>
          <div className="limited">
            <div className="top">
              <p
                style={{
                  marginBottom: "0",
                  color: "#DE4313",
                  fontWeight: "700",
                }}
              >
                Limited time offer
              </p>
              <p style={{ marginBottom: "0" }}>-₹18,401</p>
            </div>
            <div className="down">
              <p
                style={{
                  color: "#DE4313",
                  textAlign: "left",
                  padding: "7px 12px",
                  fontSize: "14px",
                  marginBottom: "0",
                }}
              >
                <img
                  src={require("../assets/icons/oclock.png")}
                  alt="clock"
                  style={{ height: "17px", width: "17px", marginRight: "8px" }}
                />
                Offer valid till 25th March 2023
              </p>
            </div>
          </div>
          <div className="total">
            <p>Total (incl. of 18% GST)</p>
            <p id="totalPrice" style={{ fontSize: "20px" }}>
              ₹{price}
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button
            type="button"
            class="btn btn-secondary"
            style={{
              color: "#f77171",
              fontWeight: "600",
              border: "2px solid #f77171",
              backgroundColor: "white",
            }}
          >
            CANCEL
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={{ backgroundColor: "#47ba68" }}
          >
            PROCEED TO PAY
          </button>
        </div>
        <div className="razorpayIcon">
          <img
            src={require("../assets/icons/Frame 12537.png")}
            alt="raxorpay"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
