import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalData } from '../data/personal';
import '../styles/Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          {personalData.name} <span style={{ color: 'var(--text-tertiary)' }}>&bull;</span> 2026
        </div>

        <div className="footer-copyright">
          Engineered with a minimalist monochrome aesthetic. Inspired by React Bits.
        </div>

        <div className="footer-socials">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-btn"
            aria-label="GitHub"
          >
            <FiGithub size={15} />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-btn"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="footer-icon-btn"
            aria-label="Email"
          >
            <FiMail size={15} />
          </a>
          <button
            onClick={scrollToTop}
            className="footer-icon-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
