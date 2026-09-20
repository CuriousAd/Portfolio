import React from 'react';
import { FiBriefcase, FiCalendar, FiCheck, FiExternalLink } from 'react-icons/fi';
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
            Work Experience
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                        <h3 className="exp-company">{exp.company}</h3>
                        {exp.badge && (
                          <span className="exp-badge">
                            {exp.badge}
                          </span>
                        )}
                        {exp.links?.demoUrl && (
                          <a
                            href={exp.links.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp-demo-badge"
                            title={`Watch ${exp.company} live demo`}
                          >
                            <FiExternalLink size={11} />
                            <span>Live Demo</span>
                          </a>
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

                  {/* Technologies & Actions */}
                  <div className="exp-footer">
                    <div className="exp-tech-list">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="exp-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.links?.demoUrl && (
                      <div className="exp-actions">
                        <a
                          href={exp.links.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-demo-btn-primary"
                        >
                          <FiExternalLink size={13} />
                          <span>Live Demo Walkthrough</span>
                        </a>
                      </div>
                    )}
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
