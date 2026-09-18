import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPython,
  SiFastapi,
  SiDjango,
  SiRedis,
  SiCplusplus,
  SiCelery,
  SiPytorch,
  SiHuggingface,
  SiPostgresql,
  SiDuckdb,
  SiDocker,
  SiGrafana,
  SiGit
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import {
  FiLayout,
  FiServer,
  FiCpu,
  FiDatabase,
  FiTerminal,
  FiLayers,
  FiCheckCircle,
  FiZap,
  FiShare2,
  FiSearch,
  FiMic,
  FiGlobe,
  FiTrendingUp
} from 'react-icons/fi';
import SpotlightCard from './react-bits/SpotlightCard';
import BlurFade from './react-bits/BlurFade';
import '../styles/Skills.css';

const skillCards = [
  {
    id: "product-frontend",
    layerTag: "01 // PRODUCT & FRONTEND",
    categoryIcon: <FiLayout />,
    title: "Full-Stack & Product Engineering",
    description: "Bridging complex system logic with pixel-perfect, reactive interfaces. Designing high-retention user experiences with strict typing and fluid micro-interactions.",
    technologies: [
      { name: "React 19", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite / ESNext", icon: <SiVite /> },
      { name: "REST & WebSockets", icon: <FiGlobe /> }
    ],
    capabilityLabel: "Key Capability",
    capability: "Component-driven design, fast client rendering, and seamless user experiences."
  },
  {
    id: "distributed-backends",
    layerTag: "02 // DISTRIBUTED RUNTIMES",
    categoryIcon: <FiServer />,
    title: "Distributed Backends & Microservices",
    description: "Engineering async event loops, low-latency API contracts, and high-concurrency stateful brokers built for resilience under peak load for production systems.",
    technologies: [
      { name: "Python", icon: <SiPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Django Channels", icon: <SiDjango /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Redis Pub/Sub", icon: <SiRedis /> },
      { name: "Celery Queues", icon: <SiCelery /> }
    ],
    capabilityLabel: "Production Spec",
    capability: "1,000+ concurrent WebSockets, sub-100ms FastAPI p99 latency."
  },
  {
    id: "agentic-ai",
    layerTag: "03 // AGENTIC AI & RETRIEVAL",
    categoryIcon: <FiCpu />,
    title: "Agentic AI & Neural Systems (RAG)",
    description: "Orchestrating multi-agent decision graphs, semantic vector retrieval, and automated contradiction validation across long-form data.",
    technologies: [
      { name: "LangGraph", icon: <FiShare2 /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "RoBERTa (NLI)", icon: <SiHuggingface /> },
      { name: "Vector KNN Search", icon: <FiSearch /> },
      { name: "ElevenLabs Voice", icon: <FiMic /> },
      { name: "Autonomous RAG", icon: <FiZap /> }
    ],
    capabilityLabel: "System Rigor",
    capability: "Multi-agent Brain Routers with parallel tool calling & automated verification."
  },
  {
    id: "data-cloud",
    layerTag: "04 // DATA & CLOUD INFRA",
    categoryIcon: <FiDatabase />,
    title: "Data Engines & Cloud Telemetry",
    description: "Designing high-throughput analytical ingestion, cache invalidation, automated container pipelines, and continuous error-rate telemetry.",
    technologies: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "DuckDB", icon: <SiDuckdb /> },
      { name: "Docker Containers", icon: <SiDocker /> },
      { name: "AWS (Lambda, S3)", icon: <FaAws /> },
      { name: "Grafana Telemetry", icon: <SiGrafana /> },
      { name: "Git & CI/CD", icon: <SiGit /> }
    ],
    capabilityLabel: "Data Pipeline",
    capability: "Embedded analytical queries cutting redundant calls by 40% with zero-defect releases."
  }
];

const coreCSFoundations = [
  "Data Structures & Algorithms",
  "System Design",
  "Distributed Systems",
  "Operating Systems",
  "DBMS & Concurrency",
  "Computer Networks"
];

const productPractices = [
  "PRD & Roadmap Strategy",
  "User Flow Architecture",
  "Root Cause Analysis",
  "Zero-Defect CI/CD",
  "Rapid Prototyping",
  "Agile Sprint Cycles"
];

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
            From intuitive, high-performance user interfaces and product engineering to resilient distributed backends, autonomous AI agents, and cloud infrastructure.
          </p>
        </BlurFade>

        {/* 4 Perfectly Balanced Engineering Cards */}
        <div className="skills-cards-grid">
          {skillCards.map((card, index) => (
            <BlurFade key={card.id} delay={index * 0.08} style={{ display: 'flex' }}>
              <SpotlightCard className="skill-matrix-card">
                {/* Header */}
                <div className="card-header-block">
                  <div className="card-meta-row">
                    <span className="card-mono-tag">{card.layerTag}</span>
                    <div className="card-icon-badge">{card.categoryIcon}</div>
                  </div>
                  <h3 className="card-main-title">{card.title}</h3>
                  <p className="card-main-desc">{card.description}</p>
                </div>

                {/* Structured 2-Column Tech Grid (6 items per card) */}
                <div className="card-tech-grid">
                  {card.technologies.map((tech) => (
                    <div key={tech.name} className="tech-grid-pill">
                      <span className="tech-pill-icon">{tech.icon}</span>
                      <span className="tech-pill-name">{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Clean Bottom Capability Callout */}
                <div className="card-capability-strip">
                  <FiCheckCircle size={13} className="capability-icon" />
                  <span>
                    <strong>{card.capabilityLabel}:</strong> {card.capability}
                  </span>
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>

        {/* Bottom Balanced Dual Foundations Panel */}
        <BlurFade delay={0.35}>
          <div className="skills-foundations-panel">
            {/* Core CS Foundations */}
            <div className="foundations-col">
              <div className="foundations-col-header">
                <FiLayers size={14} className="foundations-icon" />
                <span>Core CS Foundations</span>
              </div>
              <div className="foundations-bubble-cloud">
                {coreCSFoundations.map((concept) => (
                  <motion.div
                    key={concept}
                    className="foundation-bubble"
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <span className="bubble-dot" />
                    <span>{concept}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Product & Execution Mindset */}
            <div className="foundations-col">
              <div className="foundations-col-header">
                <FiTrendingUp size={14} className="foundations-icon" />
                <span>Product & Execution Mindset</span>
              </div>
              <div className="foundations-bubble-cloud">
                {productPractices.map((practice) => (
                  <motion.div
                    key={practice}
                    className="foundation-bubble practice-bubble"
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <span className="bubble-dot" />
                    <span>{practice}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Skills;
