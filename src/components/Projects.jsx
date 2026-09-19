import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayers, FiPlay, FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { projectsData } from '../data/projects';
import SpotlightCard from './react-bits/SpotlightCard';
import BlurFade from './react-bits/BlurFade';
import ProjectModal from './ProjectModal';
import '../styles/Projects.css';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = ['All', ...new Set(projectsData.map((p) => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <BlurFade className="section-header">
          <span className="section-tag">
            <FiLayers size={12} /> Systems & Architecture
          </span>
          <h2 className="section-title">
            Featured Projects & <span className="gradient-text">Platforms</span>
          </h2>
          <p className="section-subtitle">
            Engineered for high throughput, minimal latency, and zero-defect execution. Click any project to inspect full architecture details and demo walkthroughs.
          </p>
        </BlurFade>

        {/* Filter Pills */}
        <BlurFade delay={0.1} className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </BlurFade>

        {/* Projects Grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = Boolean(expandedProjects[project.id]);
              // Extract first sentence cleanly without splitting on decimals (e.g. Gemini 3.1)
              const firstSentenceMatch = project.description.match(/^.+?[.!?](?=\s|$)/);
              const firstLine = firstSentenceMatch ? firstSentenceMatch[0] : project.description;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <SpotlightCard className="project-card">
                    {/* Thumbnail / Video Demo Media Stage (Always visible) */}
                    <div
                      className="project-media-stage"
                      onClick={() => setSelectedProject(project)}
                      title={`View ${project.title} architecture walkthrough`}
                    >
                      {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.title} className="project-thumbnail-img" />
                      ) : (
                        <div className="media-placeholder-content">
                          <div className="media-play-btn">
                            <FiPlay style={{ marginLeft: '2px' }} />
                          </div>
                          <div className="media-placeholder-label">
                            Architecture & Walkthrough
                          </div>
                          <span className="media-placeholder-hint">
                            Click to inspect technical details
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div className="project-card-body">
                      <div className="project-meta-row">
                        <span className="project-category-tag">{project.category}</span>
                        <span className="project-timeline">{project.timeline}</span>
                      </div>

                      <h3 className="project-title">{project.title}</h3>

                      {/* First line of summary only */}
                      <p className="project-summary-oneline">{firstLine}</p>

                      {/* Primary Action Row (Always visible: GitHub, Live, and Read More toggle) */}
                      <div className="project-actions-row">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn project-btn-secondary"
                          >
                            <FiGithub size={13} /> Code
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn project-btn-secondary"
                          >
                            <FiExternalLink size={13} /> Live Demo
                          </a>
                        )}

                        <button
                          className="project-btn project-btn-primary"
                          onClick={() => toggleExpand(project.id)}
                          style={{ marginLeft: 'auto' }}
                        >
                          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                          {isExpanded ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                        </button>
                      </div>

                      {/* Expanded Section: Unfolds on 'Read More' click */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="project-expanded-area"
                          >
                            <h4 className="project-subtitle">{project.subtitle}</h4>
                            <p className="project-desc">{project.description}</p>

                            {/* Metrics Bar */}
                            {project.metrics && (
                              <div className="project-metrics-grid">
                                {project.metrics.map((m, mIdx) => (
                                  <div key={mIdx} className="project-metric-box">
                                    <div className="metric-val">{m.value}</div>
                                    <div className="metric-lbl">{m.label}</div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Bullet Highlights */}
                            <ul className="project-bullets">
                              {project.highlights.map((point, pIdx) => (
                                <li key={pIdx} className="project-bullet-li">
                                  <span className="project-bullet-bullet">&bull;</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>

                            {/* Tech Tags */}
                            <div className="project-tech-tags">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="project-tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Walkthrough Button inside expanded area */}
                            <button
                              className="project-btn project-btn-secondary"
                              onClick={() => setSelectedProject(project)}
                              style={{ width: 'fit-content', marginTop: '0.25rem' }}
                            >
                              <FiPlay size={13} /> Open Full Walkthrough Modal
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
