import React from "react";
import "../App.css";
import profileImg from "../assets/me.jpg";   // ← your image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={profileImg} alt="me" className="nav-profile-pic" />
          Parth's_Portfolio
        </div>

        <ul className="nav-menu">

  <li>
    <a
      href="#home"
      style={{ color: "#ff4d4d", transition: "transform 0.3s ease, color 0.3s ease" }}
      className="nav-link"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      style={{ color: "#00e6e6", transition: "transform 0.3s ease, color 0.3s ease" }}
      className="nav-link"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#services"
      style={{ color: "#ffcc00", transition: "transform 0.3s ease, color 0.3s ease" }}
      className="nav-link"
    >
      Services
    </a>
  </li>

  <li>
    <a
      href="#skills"
      style={{ color: "#66ff66", transition: "transform 0.3s ease, color 0.3s ease" }}
      className="nav-link"
    >
      Skills
    </a>
  </li>

  <li>
    <a
      href="#projects"
      style={{ color: "#3399ff", transition: "transform 0.3s ease, color 0.3s ease" }}
      className="nav-link"
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="#contact"
      style={{ color: "#ff66cc", transition: "transform 0.3s ease, color 0.3s ease" }}
      className="nav-link"
    >
      Contact
    </a>
  </li>

</ul>

      </div>
    </nav>
  );
}

export default Navbar;
