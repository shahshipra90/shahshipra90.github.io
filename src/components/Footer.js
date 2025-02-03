import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              {/* <p>954 McEwan Ave</p> */}
              {/* <p>N9B 2G2</p> */}
              <p>Ontario</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
                <a href="tel:+15199911752" style={{ color: "#fff", textDecoration: "none" }}>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1 (519)-991-1752
                </a>
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}<a href="mailto:shahshipra278@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              shahshipra278@gmail.com
                </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
             <a
              href="www.linkedin.com/in/shiprashah90"
              target="_blank"
              rel="noopener noreferrer"
            >
                <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
              </a>
          <a
          href="https://github.com/shahshipra90"
          target="_blank"
          rel="noopener noreferrer"
        > 
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
