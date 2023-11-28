import React from "react";
import "./styles.scss";
import Whatsapp from "../../assets/images/whatsapp.png";
import Github from "../../assets/images/code.png";
import Mail from "../../assets/images/mail.png";
import LinkedIn from "../../assets/images/linkedin.png";
import Twitter from "../../assets/images/twitter.png";
const Footer = () => {
  return (
    <>
      <div className="footerparentdiv">
        <div className="container footerdiv">
          <div>
            <h2 className="text-light">Feel free to connect with me.</h2>
          </div>

          <div>
            <img src={Whatsapp} alt="" className="socialicon" />
            <img src={Github} alt="" className="socialicon" />
            <img src={Mail} alt="" className="socialicon" />
            <img src={LinkedIn} alt="" className="socialicon" />
            <img src={Twitter} alt="" className="socialicon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
