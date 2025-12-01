import React from 'react';
import myPic from '../assets/me.jpg'; // update path if needed

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        backgroundColor: "black",
        padding: "80px 20px",
        color: "white",
      }}
    >
      <div
        className="about-container"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
          fontColor: "Blue ",
        }}
      >
        <div
          className="about-image"
          style={{
            flex: "1",
            textAlign: "center",
          }}
        >
          <img
            src={myPic}
            alt="Parth Divekar"
            style={{
              width: "260px",
              height: "260px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "4px solid white",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.06)";
              e.target.style.boxShadow = "0 0 25px rgba(255,255,255,0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        <div className="about-text" style={{ flex: "2" }}>
         <h2
  style={{
    fontSize: "36px",
    marginBottom: "20px",
    fontWeight: "bold",
    borderBottom: "2px solid white",
    display: "inline-block",
    paddingBottom: "6px",
    color: "lightblue ",
    transition: "all 0.3s ease",   // smooth animation
  }}
  onMouseOver={(e) => {
    e.target.style.transform = "scale(1.06)";
    e.target.style.boxShadow = "0 0 25px rgba(255,255,255,0.5)";
  }}
  onMouseOut={(e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "none";
  }}
>
  About Me
</h2>


          <p
            style={{
              lineHeight: "1.7",
              fontSize: "18px",
              transition: "color 0.3s ease",
              color: "#ccccccff",
            }}
          >
            Hi, I’m <strong>Parth Divekar</strong>, a dedicated and detail-oriented
            Java Full-Stack Developer with a strong passion for building clean,
            scalable, and efficient applications. I specialize in
            <strong> Spring Boot, React.js, REST APIs, and MySQL</strong>, and I love
            turning ideas into reliable, user-friendly digital experiences.
            <br /><br />
            My approach combines strong problem-solving skills with a continuous
            learning mindset. I enjoy working on challenging real-world projects,
            optimizing performance, and creating intuitive interfaces that improve
            user experience.
            <br /><br />
            I aim to contribute to impactful products and work with teams where
            innovation, clean architecture, and high-quality engineering truly
            matter.
          </p>

        </div>
      </div>
    </section>
  );
}
