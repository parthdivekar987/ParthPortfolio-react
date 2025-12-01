import { useEffect } from "react";
import Typed from "typed.js";

export default function Hero() {
  useEffect(() => {
    const typed = new Typed(".text", {
      strings: [
        "Java Developer",
        "Full-Stack Developer",
        "React.js Developer",
        "Backend Engineer"
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 900,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-wrapper">
        <div className="hero-content">

          <h2>Hello! It's Me</h2>

          <h1 className="hero-name">Parth Divekar</h1>

          <p className="dynamic-text">
            I'm a <span className="text"></span>
          </p>

          <p className="desc">
            Passionate Java Full-Stack Developer skilled in Spring Boot,
            React.js, MySQL, REST APIs.
            <br />
            I love building fast, scalable, and beautiful web applications.
          </p>

          <div className="social-icons">
            <a
              href="https://github.com/parthdivekar987/Projects"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/parth-divekar-5872a4252"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="mailto:your.email@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <div className="buttons">
            <a
              href="/Parth_Divekar_8600704387.pdf"
              download
              className="btn-cv"
            >
              Download CV
            </a>

            <a href="#about" className="btn-more">
              More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
