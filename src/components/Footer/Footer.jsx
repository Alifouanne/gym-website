import React from "react";
import "./Footer.css";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/Alifouanne" target="_blank" rel="noopener noreferrer"><img src={Github} alt="" /></a>
                    <a href="https://www.instagram.com/3le_fouanne/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/ali-fouanne-56b602222/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="" /></a>
                </div>

                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
};

export default Footer;
