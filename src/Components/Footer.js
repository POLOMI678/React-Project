import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <br></br>
        <div className="social-icons mt-3">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          
        </div>
        <p className="mt-4">&copy;Training application.</p>
      </div>
    </footer>
  );
}

export default Footer;