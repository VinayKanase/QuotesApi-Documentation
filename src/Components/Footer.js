import React from "react";
import "../css/Footer.css";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedIn.png";
import Gmail from "../assets/gmail.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__copyrightes">
        <a href="https://github.com/VinayKanase">&copy; Vinay S Kanse</a>
      </div>
      <ul className="footer__socialLinks">
        <li>
          <a href="https://github.com/VinayKanase">
            <img src={Github} alt="Github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vinay-sitaram-kanase-438664215">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="mailto:kanasevinay9451@gmail.com">
            <img src={Gmail} alt="Gmail" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
