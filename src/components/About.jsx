import React from 'react';
import { FiBookOpen } from 'react-icons/fi';
import { personalData } from '../data/personal';
import SpotlightCard from './react-bits/SpotlightCard';
import BlurFade from './react-bits/BlurFade';
import '../styles/About.css';

const benchmarks = [
  {
    value: "<100ms",
    tag: "P99 SLA",
    title: "AI Interview Latency",
    detail: "FastAPI asynchronous runtime & streaming endpoints built for Emplo AI."
  },
  {
    value: "1,000+",
    tag: "CONCURRENCY",
    title: "Live WebSocket Users",
    detail: "Django Channels + Redis Pub/Sub cluster deployed in production at Playto."
  },
  {
    value: "-40%",
    tag: "EFFICIENCY",
    title: "Manual Outreach Cut",
    detail: "Autonomous ElevenLabs & Telnyx cold-calling AI pipelines lifting lead conversion 30%."
  },
  {
    value: "99.9%",
    tag: "UPTIME",
    title: "Production Reliability",
    detail: "Resume parsing microservices handling 1,000+ documents/min with zero defect incidents."
  }
];

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <BlurFade className="section-header">
          <span className="section-tag">
            <FiBookOpen size={12} /> Background & Architecture
          </span>
          <h2 className="section-title">
            Mathematical Foundations & <span className="gradient-text">Systems Rigor</span>
          </h2>
          <p className="section-subtitle">
            Grounded in rigorous algorithmic and statistical theory, translated directly into high-throughput production backends and client-focused systems.
          </p>
        </BlurFade>

        {/* Bento Grid: Resilient Card on Left (Full) + 2 Stacked Degree Cards on Right */}
        <div className="about-bento-container">
          <div className="about-resilient-split">
            {/* Left: Full Height Resilient Card */}
            <BlurFade delay={0.1} className="about-left-col">
              <SpotlightCard className="about-thesis-card">
                <div>
                  <span className="thesis-terminal-tag">// ARCHITECTURAL THESIS</span>
                  <h3 className="thesis-title">
                    Engineering Resilient Backends with Client Obsession
                  </h3>
                  <p className="thesis-p">
                    I believe great backend engineering is measured by <strong>client trust, p99 responsiveness, and bottom-line stability</strong>. Whether tuning database pools or designing multi-agent tool loops, every millisecond shaved eliminates user friction.
                  </p>
                  <p className="thesis-p">
                    Combining computational mathematics at <strong>BIT Mesra</strong> with practical data science at <strong>IIT Madras</strong>, I design software where theoretical correctness meets battle-tested distributed scale.
                  </p>
                </div>
              </SpotlightCard>
            </BlurFade>

            {/* Right: Two Degree Cards, one below the other */}
            <div className="about-degrees-column">
              {personalData.education.map((edu, idx) => (
                <BlurFade key={idx} delay={0.15 + idx * 0.08} className="degree-fade-item">
                  <SpotlightCard className="academic-card">
                    <div>
                      <span className="thesis-terminal-tag">// DEGREE 0{idx + 1}</span>
                      <div className="academic-header">
                        <h4 className="academic-institution">{edu.institution}</h4>
                        <span className="academic-cgpa-badge">CGPA: {edu.cgpa}</span>
                      </div>
                      <div className="academic-degree">{edu.degree}</div>
                      <div className="academic-timeline">{edu.timeline}</div>
                    </div>
                    <p className="academic-focus">{edu.highlight}</p>
                  </SpotlightCard>
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Bottom Row: Verified Production Benchmarks */}
          <BlurFade delay={0.25}>
            <div className="benchmarks-strip">
              {benchmarks.map((item, idx) => (
                <div key={idx} className="benchmark-card">
                  <div>
                    <div className="benchmark-val-row">
                      <div className="benchmark-num">{item.value}</div>
                      <span className="benchmark-context-tag">{item.tag}</span>
                    </div>
                    <div className="benchmark-title">{item.title}</div>
                  </div>
                  <p className="benchmark-detail">{item.detail}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default About;
