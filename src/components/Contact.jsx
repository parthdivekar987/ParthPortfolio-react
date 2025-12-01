import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '80px 20px',
        background: '#000',
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
          marginTop: '30px',
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
        Give Me Feedback
      </h2>

      <form
        action="https://formspree.io/f/xvgekjbl"
        method="POST"
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          maxWidth: '550px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: '8px',
            border: '1px solid #555',
            background: '#111',
            color: 'white',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.border = '1px solid white')}
          onBlur={(e) => (e.target.style.border = '1px solid #555')}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: '8px',
            border: '1px solid #555',
            background: '#111',
            color: 'white',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.border = '1px solid white')}
          onBlur={(e) => (e.target.style.border = '1px solid #555')}
        />

        {/* Question 1: What are you looking for? */}
        <select
          name="looking_for"
          required
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: '8px',
            border: '1px solid #555',
            background: '#111',
            color: 'white',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onFocus={(e) => (e.target.style.border = '1px solid white')}
          onBlur={(e) => (e.target.style.border = '1px solid #555')}
        >
          <option value="">What are you looking for?</option>
          <option value="portfolio">Viewing Portfolio</option>
          <option value="collaboration">Collaboration</option>
          <option value="job_opportunity">Job / Hire Request</option>
          <option value="learning_resources">Learning Resources</option>
          <option value="just_exploring">Just Exploring</option>
        </select>

        {/* Question 2: Do you need any service? */}
        <select
          name="service_need"
          required
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: '8px',
            border: '1px solid #555',
            background: '#111',
            color: 'white',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onFocus={(e) => (e.target.style.border = '1px solid white')}
          onBlur={(e) => (e.target.style.border = '1px solid #555')}
        >
          <option value="">Do you need any service?</option>
          <option value="web_dev">Web Development</option>
          <option value="ui_ux">UI/UX Design</option>
          <option value="consulting">Consulting</option>
          <option value="bug_fixing">Bug Fixing</option>
          <option value="no_service_needed">No, just giving feedback</option>
        </select>

        {/* Feedback Textarea */}
        <textarea
          name="message"
          placeholder="Your Message / Feedback"
          rows="6"
          required
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: '8px',
            border: '1px solid #555',
            background: '#111',
            color: 'white',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            resize: 'none',
          }}
          onFocus={(e) => (e.target.style.border = '1px solid white')}
          onBlur={(e) => (e.target.style.border = '1px solid #555')}
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: '12px 30px',
            borderRadius: '50px',
            border: '2px solid white',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.background = 'white';
            e.target.style.color = 'black';
            e.target.style.boxShadow = '0 0 20px rgba(255,255,255,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.background = 'transparent';
            e.target.style.color = 'white';
            e.target.style.boxShadow = 'none';
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
