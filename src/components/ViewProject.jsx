import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Ecommerce Website',
    desc: 'A full e-commerce platform where users can browse products, add items to the cart, checkout securely, and track orders. Admins can manage products, orders, and users with an intuitive dashboard.',
    detailedDesc: 'This project demonstrates full-stack development using ReactJS for the front-end and Java Spring Boot for the back-end. Features include user authentication, payment gateway integration, product management, and responsive design.',
    technologies: ['ReactJS', 'Java Spring Boot', 'MySQL', 'Tailwind CSS', 'Hibernate', 'REST APIs', 'JWT Authentication'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt515wHmmcJyNVpovHjb0eMquvvjsgQX6Zbg&s',
    github: 'https://github.com/parthdivekar987/ecommerce',
  },
  {
    id: 2,
    title: 'User Dashboard-Panel',
    desc: 'A responsive dashboard UI to manage user data and analytics. Provides visual charts, notifications, and customizable widgets.',
    detailedDesc: 'Built with ReactJS and Tailwind CSS, this dashboard fetches data from APIs to display real-time analytics. It includes login authentication, filtering, sorting, and exportable reports.',
    technologies: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'Chart.js', 'Axios'],
    img: 'https://media.gettyimages.com/id/1321901958/vector/hud-elements-mega-set-pack-dashboard-display-virtual-reality-technology-screen-abstract-hud.jpg?s=612x612&w=gi&k=20&c=-J4EjBbncutGG9qjQ2hzKfan4JES818oCd_mlpvPhVg=',
    github: 'https://github.com/parthdivekar987/Projects/tree/main/user-dashboard',
  },
  {
    id: 3,
    title: 'Library Management System',
    desc: 'Manage books, users, and issue records with a full-stack web application.',
    detailedDesc: 'This system allows librarians to manage book inventory, track issued books, and monitor user activity. Built using ReactJS for the front-end, Spring Boot for the back-end, and MySQL for the database. Features include search, filters, and role-based access control.',
    technologies: ['ReactJS', 'Spring Boot', 'MySQL', 'REST APIs', 'Bootstrap', 'Thymeleaf', 'JWT Authentication'],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Kfvj1EwrF7Hb_EOCGOEPcpDT13XoZjYxeg&s',
    github: 'https://github.com/parthdivekar987/Projects/tree/main/LibraryManagementSystem/LibraryManagementSystem',
  },
];

export default function ViewProject() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <p style={{ textAlign: 'center', marginTop: '50px', color: 'white', fontSize: '1.2rem' }}>
        Project not found.
      </p>
    );

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '80px 20px',
        background: '#000',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.4s ease',
      }}
    >
      <h2
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          borderBottom: '2px solid white',
          display: 'inline-block',
          paddingBottom: '8px',
          marginBottom: '50px',
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
        {project.title}
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: '50px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1100px',
        }}
      >
        {/* Project Image */}
        <img
          src={project.img}
          alt={project.title}
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '20px',
            objectFit: 'cover',
            boxShadow: '0 0 30px rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 0 40px rgba(0,255,255,0.5)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';
          }}
        />

        {/* Project Details */}
        <div style={{ maxWidth: '600px', textAlign: 'left' }}>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgb(210,210,210)',
              marginBottom: '20px',
              lineHeight: '1.8',
            }}
          >
            {project.detailedDesc}
          </p>

          <h3 style={{ marginBottom: '15px', fontSize: '1.4rem', borderBottom: '1px solid #555', paddingBottom: '5px' }}>
            Technologies Used:
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '30px',
            }}
          >
            {project.technologies.map((tech, idx) => (
              <li
                key={idx}
                style={{
                  background: '#111',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  border: '1px solid white',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                  e.target.style.background = '#00e5ff';
                  e.target.style.color = 'black';
                  e.target.style.border = '1px solid #00e5ff';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.background = '#111';
                  e.target.style.color = 'white';
                  e.target.style.border = '1px solid white';
                }}
              >
                {tech}
              </li>
            ))}
          </ul>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 30px',
              borderRadius: '50px',
              border: '2px solid white',
              background: 'transparent',
              color: 'white',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              marginBottom: '20px',
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = 'black';
              e.target.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View on GitHub
          </a>

          <div>
            <Link
              to="/"
              style={{
                padding: '12px 30px',
                borderRadius: '50px',
                border: '2px solid white',
                background: 'transparent',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#00e5ff';
                e.target.style.color = 'black';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
