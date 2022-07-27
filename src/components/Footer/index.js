import React from "react";
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';


export default function Footer() {
  return (
    <footer className="footer">
        <div>
          <a href="https://github.com/stephrrcodes">
          <img src={github} alt="github-icon"/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/stephanie-rrodriguez/">
          <img src={linkedin} alt="linkedin-icon"/>
          </a>
        </div>
    </footer>
  );
};
