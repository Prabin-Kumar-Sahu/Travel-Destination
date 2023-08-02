import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { BiSend } from "react-icons/bi";
import { SiYourtraveldottv } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";


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
        <div className="footerCard flex ">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className="logo flex">
                <SiYourtraveldottv className="icon" />
                Destinations.com
              </a>
            </div>
            <div className="footerParagraph">
              Destinations.com is your ultimate travel companion, offering a
              wide range of affordable packages for solo adventurers, couples,
              and families. Discover your dream destination and find flexible
              pricing tailored to your family's needs. Start your unforgettable
              journey with us!
            </div>
            <div className="footerSocials">
              <FaTwitter className="icon " id="i1" />
              <FaYoutube className="icon "  id="i2"/>
              <FaInstagram className="icon" id="i3"
              />
              <SiTripadvisor className="icon" id="i4"/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* group one */}
            <div className="linksGroup">
              <span className="groupTitle">OUR AGENCY</span>
              

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Insurence
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Tourism
              </li>

              <li className="footerList flex">
                <AiOutlineRight className="icon" />
                Payment
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
