import React from 'react';
import { FiBriefcase, FiCalendar, FiCheck } from 'react-icons/fi';
import { experienceData } from '../data/experience';
import SpotlightCard from './react-bits/SpotlightCard';
import BlurFade from './react-bits/BlurFade';
import '../styles/Experience.css';

export const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <BlurFade className="section-header">
          <span className="section-tag">
            <FiBriefcase size={12} /> Work History
          </span>
          <h2 className="section-title">
            Production Engineering & <span className="gradient-text">Impact</span>
          </h2>
          <p className="section-subtitle">
            Track record of shipping mission-critical backend microservices, real-time WebSocket messaging, and automated AI agents.
          </p>
        </BlurFade>

        {/* Timeline */}
        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              {/* Node */}
              <div className="timeline-node" />

              <BlurFade delay={index * 0.15}>
                <SpotlightCard className="exp-card">
                  {/* Header */}
                  <div className="exp-header">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
                        <h3 className="exp-company">{exp.company}</h3>
                        {exp.badge && (
                          <span
                            style={{
                              fontSize: '0.72rem',
                              padding: '0.2rem 0.55rem',
                              borderRadius: 'var(--radius-full)',
                              backgroundColor: 'rgba(255, 255, 255, 0.06)',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                              color: '#EDEDED',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <div className="exp-role">{exp.role}</div>
                    </div>

                    <div className="exp-period-badge">
                      <FiCalendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="exp-summary">{exp.summary}</p>

                  {/* Impact Metric Chips */}
                  {exp.impactMetrics && exp.impactMetrics.length > 0 && (
                    <div className="exp-metrics-row">
                      {exp.impactMetrics.map((metric, mIdx) => (
                        <div key={mIdx} className="exp-metric-pill">
                          <div className="exp-metric-value">{metric.value}</div>
                          <div className="exp-metric-label">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="exp-bullets">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="exp-bullet-item">
                        <FiCheck size={16} className="exp-bullet-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="exp-tech-list">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="exp-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
