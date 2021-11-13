import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container mt-5">
      Developed by: <strong>Adem Koca</strong>
      <span>
        <a href="https://github.com/ademkoca" target="_blank">
          <i className="fab fa-github" target="_blank"></i>
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/ademkoca/" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </span>
      <span>
        <a href="https://www.instagram.com/ademkoca/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </span>
      <span>
        <a href="https://twitter.com/rahatlook" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
