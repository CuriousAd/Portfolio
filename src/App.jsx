import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';
import Footer from './components/Footer';
import './App.css';

export function App() {
  return (
    <div className="app-root fade-in">
      <div className="bg-grid-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <div className="pre-footer-counter-bar">
        <VisitorCounter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
