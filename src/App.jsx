// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ViewProject from './components/ViewProject'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App"> {/* ← This div fixes blank page on Vercel */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="services"><Services /></section>
              <section id="skills"><Skills /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />
        <Route path="/project/:id" element={<ViewProject />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App