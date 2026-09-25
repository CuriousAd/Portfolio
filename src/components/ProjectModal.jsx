import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(10px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#0E0F14',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.25rem 1.75rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category} &bull; {project.timeline}
                </span>
                <h3 style={{ fontSize: '1.35rem', marginTop: '0.2rem', color: '#FFFFFF' }}>{project.title}</h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Video Stage (Only rendered if videoDemo URL exists) */}
            {project.videoDemo && (
              <div style={{ padding: '1.25rem 1.75rem 0.5rem' }}>
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#050507',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <iframe
                    src={project.videoDemo}
                    title={`${project.title} Demo`}
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Content & Details */}
            <div style={{ padding: '1.5rem 1.75rem 1.75rem' }}>
              {project.subtitle && (
                <div style={{ color: 'var(--text-primary)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.65rem' }}>
                  {project.subtitle}
                </div>
              )}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {project.description}
              </p>

              {/* Metrics Bar */}
              {project.metrics && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem', marginBottom: '1.35rem' }}>
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-sm)', padding: '0.65rem 0.5rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#FFFFFF' }}>{m.value}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '0.2rem' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div style={{ marginBottom: '1.35rem' }}>
                <h5 style={{ fontSize: '0.88rem', fontWeight: 600, color: '#EDEDED', marginBottom: '0.65rem' }}>
                  Architecture & Implementation
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {project.highlights?.map((hl, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <FiCheck size={16} style={{ color: '#FFFFFF', flexShrink: 0, marginTop: '3px' }} />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                {project.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.22rem 0.6rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: '#EDEDED',
                    }}
                  >
                    <FiGithub size={15} /> Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.6rem 1.15rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#08080A',
                    }}
                  >
                    <FiExternalLink size={15} /> Open Platform
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
