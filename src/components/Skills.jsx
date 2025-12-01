import React from 'react';

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "MySQL",
    "REST APIs",
    "Git / GitHub"
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        background: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
          fontWeight: "bold",
          borderBottom: "2px solid white",
          display: "inline-block",
          paddingBottom: "6px",
          transition: "all 0.3s ease",
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
        My Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "28px",
          marginTop: "40px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              padding: "20px 30px",
              borderRadius: "12px",
              minWidth: "160px",
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "white",
              boxShadow: "0 6px 20px rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(255,255,255,0.35)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(255,255,255,0.1)";
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
