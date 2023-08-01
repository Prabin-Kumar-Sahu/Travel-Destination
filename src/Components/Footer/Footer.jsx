import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { BiSend } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="enter your mail address" />
            <button className="btn flex" type="submit">
              SEND <BiSend className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
