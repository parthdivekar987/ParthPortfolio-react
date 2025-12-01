import React from 'react';
import webDevIcon from '../assets/webdev.jpg';
import uiuxIcon from '../assets/uiux.jpg';
import consultingIcon from '../assets/Consulting.jpeg';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Building responsive and modern web applications with clean code.',
      icon: webDevIcon,
      btnText: 'View Service',
    },
    {
      title: 'UI/UX Design',
      desc: 'Designing intuitive and beautiful user interfaces for web and mobile.',
      icon: uiuxIcon,
      btnText: 'View Service',
    },
    {
      title: 'Consulting',
      desc: 'Providing professional advice to optimize your web projects.',
      icon: consultingIcon,
      btnText: 'View Service',
    },
  ];

  return (
    <section
      id="services"
      style={{
        padding: '80px 20px',
        background: 'black',
        color: 'white',
        textAlign: 'center',
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
          transition: 'all 0.3s ease',
          marginTop: '30px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.06)';
          e.target.style.boxShadow = '0 0 25px rgba(255,255,255,0.5)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Services I Offer
      </h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '70px',
          marginTop: '30px',
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
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
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.06)';
              e.currentTarget.style.boxShadow =
                '0 0 18px rgba(255,255,255,0.35)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow =
                '0 6px 20px rgba(255,255,255,0.1)';
            }}
          >
            <img
              src={service.icon}
              alt={service.title}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                marginBottom: '20px',
                objectFit: 'cover',
                boxShadow: '0 0 10px rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease',
              }}
            />

            <h3
              style={{
                fontSize: '1.6rem',
                marginBottom: '12px',
                fontWeight: '600',
              }}
            >
              {service.title}
            </h3>

            <p
              style={{
                fontSize: '1rem',
                color: 'rgb(210,210,210)',
                marginBottom: '25px',
                lineHeight: '1.6',
              }}
            >
              {service.desc}
            </p>

            <button
              style={{
                padding: '10px 22px',
                borderRadius: '50px',
                border: '2px solid white',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)';
                e.target.style.background = 'white';
                e.target.style.color = 'black';
                e.target.style.boxShadow =
                  '0 0 20px rgba(255,255,255,0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.boxShadow = 'none';
              }}
            >
              {service.btnText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
