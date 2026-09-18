import React from 'react';
import { FiTerminal } from 'react-icons/fi';
import BlurFade from './react-bits/BlurFade';
import SkillBubbleCloud from './SkillBubbleCloud';
import '../styles/Skills.css';

export const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <BlurFade className="section-header">
          <span className="section-tag">
            <FiTerminal size={12} /> Technical Arsenal & Product Stack
          </span>
          <h2 className="section-title">
            Engineering Stack & <span className="gradient-text">Product Tooling</span>
          </h2>
          <p className="section-subtitle">
            Physics-driven interactive bubble clusters mapping 34 core technologies across full-stack engineering, distributed backends, agentic AI, and cloud telemetry.
          </p>
        </BlurFade>

        {/* Physics-Based Skill Bubble Cloud */}
        <BlurFade delay={0.15}>
          <SkillBubbleCloud />
        </BlurFade>
      </div>
    </section>
  );
};

export default Skills;
