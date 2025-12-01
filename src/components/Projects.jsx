import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Ecommerce Website',
    desc: 'Technologies used: ReactJS, Java Spring Boot, MySQL, Tailwind CSS, Hibernate',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt515wHmmcJyNVpovHjb0eMquvvjsgQX6Zbg&s',
  },
  {
    id: 2,
    title: 'User Dashboard-Panel',
    desc: 'Technologies used: ReactJS, Tailwind CSS, JavaScript, HTML, CSS',
    img: 'https://media.gettyimages.com/id/1321901958/vector/hud-elements-mega-set-pack-dashboard-display-virtual-reality-technology-screen-abstract-hud.jpg?s=612x612&w=gi&k=20&c=-J4EjBbncutGG9qjQ2hzKfan4JES818oCd_mlpvPhVg=',
  },
  {
    id: 3,
    title: 'Library Management System',
    desc: 'Technologies used: ReactJS, Spring Boot, MySQL, REST APIs, Bootstrap, Thymeleaf',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Kfvj1EwrF7Hb_EOCGOEPcpDT13XoZjYxeg&s',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '50px 20px',
        background: '#000',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          marginBottom: '40px',
          fontWeight: 'bold',
          borderBottom: '2px solid white',
          display: 'inline-block',
          paddingBottom: '6px',
          marginTop: '30px',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.color = '#00e5ff';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.color = 'white';
        }}
      >
        My Projects
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '50px',
          marginTop: '30px',
        }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              background: '#111',
              borderRadius: '15px',
              width: '280px',
              padding: '25px',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.1)';
            }}
          >
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                marginBottom: '20px',
                objectFit: 'cover',
                boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.boxShadow = '0 0 20px rgba(0,229,255,0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 10px rgba(255,255,255,0.3)';
              }}
            />

            <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', fontWeight: '600' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '1rem', color: 'rgb(210,210,210)', marginBottom: '25px', lineHeight: '1.6' }}>
              {project.desc.length > 60 ? project.desc.slice(0, 60) + '...' : project.desc}
            </p>

            <Link
              to={`/project/${project.id}`}
              style={{
                padding: '10px 22px',
                borderRadius: '50px',
                border: '2px solid white',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.background = 'white';
                e.target.style.color = 'black';
                e.target.style.boxShadow = '0 0 15px rgba(0,229,255,0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.boxShadow = 'none';
              }}
            >
              View Project
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
