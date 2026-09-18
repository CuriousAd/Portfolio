import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCopy, FiCheck, FiMessageSquare, FiClock, FiMapPin } from 'react-icons/fi';
import { personalData } from '../data/personal';
import SpotlightCard from './react-bits/SpotlightCard';
import BlurFade from './react-bits/BlurFade';
import MagnetButton from './react-bits/MagnetButton';
import '../styles/Contact.css';

export const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Aditya,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-section-container">
        {/* Section Header */}
        <BlurFade className="section-header">
          <span className="section-tag">
            <FiMessageSquare size={12} /> Contact & Inquiries
          </span>
          <h2 className="section-title">
            Let's Discuss <span className="gradient-text">Engineering & Scale</span>
          </h2>
          <p className="section-subtitle">
            Currently available for Software Development Engineer and Backend Systems roles.
          </p>
        </BlurFade>

        {/* 2-Column Side-by-Side Layout */}
        <div className="contact-columns-grid">
          {/* Left: Engineering Reach & Channels */}
          <BlurFade delay={0.1}>
            <SpotlightCard className="contact-info-card">
              <div>
                <div className="contact-status-chip">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
                  <span>Actively Interviewing &bull; Open to Roles</span>
                </div>

                <h3 className="contact-info-title" style={{ marginBottom: '1.5rem' }}>
                  The Creds
                </h3>

                <div className="contact-channels-list">
                  {/* Email */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-label">
                      <div className="channel-icon">
                        <FiMail />
                      </div>
                      <div>
                        <div className="channel-type">Email</div>
                        <a href={`mailto:${personalData.email}`} className="channel-val">
                          {personalData.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="channel-copy-btn"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}
                    </button>
                  </div>

                  {/* Phone */}
                  <a href={`tel:${personalData.phone}`} className="contact-channel-item">
                    <div className="channel-icon-label">
                      <div className="channel-icon">
                        <FiPhone />
                      </div>
                      <div>
                        <div className="channel-type">Phone & WhatsApp</div>
                        <div className="channel-val">{personalData.phone}</div>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                      Call &bull; Msg
                    </span>
                  </a>

                  {/* Timezone & Location */}
                  <div className="contact-channel-item" style={{ cursor: 'default' }}>
                    <div className="channel-icon-label">
                      <div className="channel-icon">
                        <FiMapPin />
                      </div>
                      <div>
                        <div className="channel-type">Location & Availability</div>
                        <div className="channel-val" style={{ fontSize: '0.86rem' }}>
                          India &bull; IST (UTC+5:30) &bull; Remote & Relocation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="contact-links-row">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-pill"
                >
                  <FiGithub size={14} /> GitHub Repositories
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-pill"
                >
                  <FiLinkedin size={14} /> LinkedIn Profile
                </a>
              </div>
            </SpotlightCard>
          </BlurFade>

          {/* Right: Message Dispatch Console */}
          <BlurFade delay={0.18}>
            <SpotlightCard className="contact-form-card">
              <span className="form-terminal-tag">// DISPATCH_CONSOLE</span>
              <h3 className="form-header-title" style={{ marginBottom: '1.5rem' }}>Send a Direct Note</h3>

              <form onSubmit={handleFormSubmit} className="contact-dispatch-form">
                <div className="form-row">
                  <div className="form-field-group">
                    <label className="field-label" htmlFor="sender-name">Name</label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="field-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="field-label" htmlFor="sender-email">Email</label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="field-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-field-group">
                  <label className="field-label" htmlFor="sender-message">Message</label>
                  <textarea
                    id="sender-message"
                    required
                    placeholder="Hi Aditya, we're building high-concurrency systems and would love to chat about..."
                    className="field-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <MagnetButton
                  variant="primary"
                  type="submit"
                  style={{ width: '100%', marginTop: '0.4rem' }}
                >
                  <FiSend size={15} />
                  <span>{submitted ? 'Opening Email Client...' : 'Dispatch Message via Email'}</span>
                </MagnetButton>
              </form>
            </SpotlightCard>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Contact;
