import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiTerminal } from 'react-icons/fi';
import { personalData } from '../data/personal';
import BlurText from './react-bits/BlurText';
import MagnetButton from './react-bits/MagnetButton';
import adityaPhoto from '../assets/aditya.jpg';
import '../styles/Hero.css';

export const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Bio & Framing */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Headline with BlurText + animated dot accent */}
            <div className="hero-title-row">
              <h1 className="hero-title">
                <BlurText text="About Me" delay={0.06} />
              </h1>
              <div className="dot-line-accent" aria-hidden="true">
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className="dot-square"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Shortened & Elevated Summary */}
            <p className="hero-desc">
              {personalData.bioSummary}
            </p>

            {/* Academic Credentials - Two Distinct Clear Lines */}
            <div className="hero-cred-stack">
              <div className="hero-cred-line">
                <FiTerminal size={14} className="cred-prompt-icon" />
                <span className="cred-text">
                  <strong>BIT Mesra:</strong> Integrated M.Sc. in Mathematics & Computing <span className="cred-cgpa-badge">8.7 CGPA</span>
                </span>
              </div>
              <div className="hero-cred-line">
                <FiTerminal size={14} className="cred-prompt-icon" />
                <span className="cred-text">
                  <strong>IIT Madras:</strong> B.Sc. in Data Science & Applications <span className="cred-cgpa-badge">7.18 CGPA</span>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="hero-actions">
              <MagnetButton variant="primary" href="#projects" onClick={scrollToProjects}>
                <span>Explore Projects</span>
                <FiArrowRight size={16} />
              </MagnetButton>
              <MagnetButton variant="secondary" href="#contact" onClick={scrollToContact}>
                <span>Get In Touch</span>
              </MagnetButton>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <FiGithub size={15} />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <FiLinkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="hero-social-link email-link"
              >
                <FiMail size={15} />
                <span>{personalData.email}</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Clean Uncluttered Portrait Frame */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-portrait-frame">
              <div className="portrait-inner-wrap">
                <img
                  src={adityaPhoto}
                  alt={personalData.name}
                  className="portrait-img"
                  loading="eager"
                />
              </div>

              <div className="portrait-footer-info">
                <div>
                  <div className="portrait-name-tag">{personalData.name}</div>
                  <div className="portrait-role-sub">{personalData.portraitRole}</div>
                </div>
                <div className="portrait-status-available">
                  <span className="portrait-status-dot" aria-hidden="true" />
                  <span>Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
