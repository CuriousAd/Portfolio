import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  forceSimulation,
  forceCollide,
  forceX,
  forceY,
  forceManyBody,
  forceCenter
} from 'd3-force';
import { motion, AnimatePresence } from 'framer-motion';
import { FiRotateCcw, FiMousePointer } from 'react-icons/fi';
import { SKILL_CATEGORIES, SKILL_BUBBLES } from '../data/skills';
import '../styles/SkillBubbleCloud.css';

const VIEW_WIDTH = 1020;
const VIEW_HEIGHT = 600;

export const SkillBubbleCloud = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false });
  const [containerWidth, setContainerWidth] = useState(1020);
  const [nodes, setNodes] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const simulationRef = useRef(null);
  const draggedNodeRef = useRef(null);
  const activeCategoryRef = useRef(activeCategory);

  // Sync activeCategoryRef in effect
  useEffect(() => {
    activeCategoryRef.current = activeCategory;
  }, [activeCategory]);

  // Track container width via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Category map for quick lookup
  const categoryMap = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => {
      acc[cat.id] = cat;
      return acc;
    }, {});
  }, []);

  // Centroids for each category cluster in open canvas space
  const getClusterCentroid = useCallback((category, currentFilter) => {
    const w = VIEW_WIDTH;
    const h = VIEW_HEIGHT;

    // When filtering, matching category nodes move slightly toward focal center
    if (currentFilter !== 'all' && category === currentFilter) {
      return { x: w * 0.50, y: h * 0.48 };
    }

    // Default balanced cluster positions (tightly packed around center)
    switch (category) {
      case 'frontend':
        return { x: w * 0.35, y: h * 0.34 };
      case 'backend':
        return { x: w * 0.65, y: h * 0.34 };
      case 'ai':
        return { x: w * 0.35, y: h * 0.66 };
      case 'cloud':
        return { x: w * 0.65, y: h * 0.66 };
      case 'foundations':
      default:
        return { x: w * 0.50, y: h * 0.50 };
    }
  }, []);

  // Initialize node data with increased radii and initial positions
  useEffect(() => {
    const initializedNodes = SKILL_BUBBLES.map((skill) => {
      // Base radius scaled up (~25% larger for high prominence and readability)
      const radius = Math.round(skill.weight * 44);
      const centroid = getClusterCentroid(skill.category, 'all');

      // Subtle jitter around centroid
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 35;

      return {
        ...skill,
        radius,
        x: centroid.x + Math.cos(angle) * dist,
        y: centroid.y + Math.sin(angle) * dist,
        vx: 0,
        vy: 0
      };
    });

    // Create d3 force simulation
    const sim = forceSimulation(initializedNodes)
      .force('charge', forceManyBody().strength((d) => -d.radius * 0.95))
      .force(
        'collide',
        forceCollide()
          .radius((d) => d.radius + 3.5)
          .strength(0.92)
          .iterations(3)
      )
      .force(
        'x',
        forceX((d) => getClusterCentroid(d.category, activeCategoryRef.current).x).strength(
          (d) => (activeCategoryRef.current !== 'all' && d.category === activeCategoryRef.current ? 0.3 : 0.14)
        )
      )
      .force(
        'y',
        forceY((d) => getClusterCentroid(d.category, activeCategoryRef.current).y).strength(
          (d) => (activeCategoryRef.current !== 'all' && d.category === activeCategoryRef.current ? 0.3 : 0.14)
        )
      )
      .force('center', forceCenter(VIEW_WIDTH / 2, VIEW_HEIGHT / 2).strength(0.035))
      .alphaDecay(0.024);

    let rafId = null;
    sim.on('tick', () => {
      // Keep all bubbles strictly inside viewport bounds
      const simNodes = sim.nodes();
      for (const n of simNodes) {
        if (!n.fx) {
          n.x = Math.max(n.radius + 15, Math.min(VIEW_WIDTH - n.radius - 15, n.x));
          n.y = Math.max(n.radius + 15, Math.min(VIEW_HEIGHT - n.radius - 15, n.y));
        }
      }

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setNodes([...simNodes]);
          rafId = null;
        });
      }
    });

    simulationRef.current = sim;

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      sim.stop();
    };
  }, [getClusterCentroid]);

  // Update target forces when active category filter changes
  useEffect(() => {
    if (!simulationRef.current) return;
    const sim = simulationRef.current;

    sim.force(
      'x',
      forceX((d) => getClusterCentroid(d.category, activeCategory).x).strength((d) => {
        if (activeCategory === 'all') return 0.14;
        return d.category === activeCategory ? 0.3 : 0.08;
      })
    );

    sim.force(
      'y',
      forceY((d) => getClusterCentroid(d.category, activeCategory).y).strength((d) => {
        if (activeCategory === 'all') return 0.14;
        return d.category === activeCategory ? 0.3 : 0.08;
      })
    );

    // Re-heat simulation smoothly
    sim.alpha(0.35).restart();
  }, [activeCategory, getClusterCentroid]);

  // Convert client pointer coordinates to SVG coordinate space
  const getSvgCoordinates = useCallback((e) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const svg = svgRef.current;
    const point = svg.createSVGPoint();
    point.x = e.clientX;
    point.y = e.clientY;
    const screenCTM = svg.getScreenCTM();
    if (!screenCTM) return { x: 0, y: 0 };
    const svgPoint = point.matrixTransform(screenCTM.inverse());
    return {
      x: Math.max(35, Math.min(VIEW_WIDTH - 35, svgPoint.x)),
      y: Math.max(35, Math.min(VIEW_HEIGHT - 35, svgPoint.y))
    };
  }, []);

  // Pointer drag event handlers
  const handlePointerDown = useCallback((e, node) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.target && e.target.setPointerCapture) {
      e.target.setPointerCapture(e.pointerId);
    }

    draggedNodeRef.current = node;
    setIsDragging(true);

    const coords = getSvgCoordinates(e);
    node.fx = coords.x;
    node.fy = coords.y;

    if (simulationRef.current) {
      simulationRef.current.alphaTarget(0.3).restart();
    }
  }, [getSvgCoordinates]);

  const handlePointerMove = useCallback((e) => {
    if (containerRef.current && hoveredSkill && !isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        visible: true
      });
    }

    if (!draggedNodeRef.current) return;
    const coords = getSvgCoordinates(e);
    draggedNodeRef.current.fx = coords.x;
    draggedNodeRef.current.fy = coords.y;
  }, [getSvgCoordinates, hoveredSkill, isDragging]);

  const handlePointerUp = useCallback(() => {
    if (draggedNodeRef.current) {
      draggedNodeRef.current.fx = null;
      draggedNodeRef.current.fy = null;
      draggedNodeRef.current = null;
      setIsDragging(false);

      if (simulationRef.current) {
        simulationRef.current.alphaTarget(0);
      }
    }
  }, []);

  // Reheat / regroup simulation
  const handleReheat = useCallback(() => {
    if (!simulationRef.current) return;
    const sim = simulationRef.current;
    sim.nodes().forEach((n) => {
      n.vx += (Math.random() - 0.5) * 6;
      n.vy += (Math.random() - 0.5) * 6;
    });
    sim.alpha(0.5).restart();
  }, []);

  // Skill counts per category
  const skillCounts = useMemo(() => {
    const counts = { all: SKILL_BUBBLES.length };
    SKILL_BUBBLES.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="bubble-open-canvas" ref={containerRef}>
      {/* Top Filter Pills (Floating in the Open, Pure Monochrome) */}
      <div className="bubble-filter-bar">
        {SKILL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = skillCounts[cat.id] || 0;
          return (
            <button
              key={cat.id}
              className={`bubble-filter-pill ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="filter-pill-dot" />
              <span className="filter-pill-label">{cat.shortLabel}</span>
              <span className="filter-pill-count">{count}</span>
            </button>
          );
        })}

        <button
          className="bubble-reset-btn"
          onClick={handleReheat}
          title="Regroup bubbles"
          aria-label="Regroup bubbles"
        >
          <FiRotateCcw size={12} />
          <span>Regroup</span>
        </button>
      </div>

      {/* Open SVG Canvas (No Card Boundary) */}
      <div
        className="bubble-svg-wrapper"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          handlePointerUp();
          setHoveredSkill(null);
          setTooltipPos((prev) => ({ ...prev, visible: false }));
        }}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
          className="bubble-svg-canvas"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* SVG Definitions with Reduced, Subtle White Edge Glow */}
          <defs>
            {/* Dark Translucent Glass Fill */}
            <radialGradient
              id="bubble-dark-glass"
              cx="35%"
              cy="35%"
              r="65%"
              fx="30%"
              fy="30%"
            >
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.06" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#08080A" stopOpacity="0.7" />
            </radialGradient>

            {/* Hover State Fill */}
            <radialGradient
              id="bubble-dark-glass-hover"
              cx="30%"
              cy="30%"
              r="70%"
            >
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.14" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#08080A" stopOpacity="0.85" />
            </radialGradient>

            {/* Subtle Specular Highlight Arc */}
            <radialGradient
              id="bubble-specular-arc"
              cx="30%"
              cy="30%"
              r="70%"
            >
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Subtle Restrained White Edge Glow */}
            <filter id="white-edge-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="1.5"
                floodColor="#FFFFFF"
                floodOpacity="0.22"
              />
            </filter>

            {/* Hover Gentle White Edge Glow */}
            <filter id="white-edge-glow-hover" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="3.5"
                floodColor="#FFFFFF"
                floodOpacity="0.45"
              />
            </filter>
          </defs>

          {/* Render All Bubble Nodes */}
          {nodes.map((node) => {
            const isHovered = hoveredSkill?.id === node.id;
            const isCategoryActive =
              activeCategory === 'all' || activeCategory === node.category;

            // Opacity handling: spotlight active category, dim others
            let bubbleOpacity = 1;
            if (activeCategory !== 'all' && !isCategoryActive) {
              bubbleOpacity = 0.12;
            } else if (hoveredSkill && !isHovered) {
              bubbleOpacity = hoveredSkill.category === node.category ? 0.95 : 0.55;
            }

            // Refined hairline stroke styling with reduced white glow
            const strokeColor = "#FFFFFF";
            let strokeOpacity = 0.22;
            let strokeWidth = 1.15;

            if (isHovered) {
              strokeOpacity = 0.75;
              strokeWidth = 1.8;
            } else if (activeCategory !== 'all' && isCategoryActive) {
              strokeOpacity = 0.55;
              strokeWidth = 1.4;
            } else if (!isCategoryActive) {
              strokeOpacity = 0.08;
            }

            const currentRadius = isHovered ? node.radius * 1.06 : node.radius;

            return (
              <g
                key={node.id}
                className={`bubble-node ${isHovered ? 'hovered' : ''} ${!isCategoryActive ? 'dimmed' : ''}`}
                transform={`translate(${node.x || 0}, ${node.y || 0})`}
                opacity={bubbleOpacity}
                onPointerDown={(e) => handlePointerDown(e, node)}
                onMouseEnter={(e) => {
                  setHoveredSkill(node);
                  if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    setTooltipPos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                      visible: true
                    });
                  }
                }}
                onMouseLeave={() => {
                  setHoveredSkill(null);
                  setTooltipPos((prev) => ({ ...prev, visible: false }));
                }}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                {/* Outer Glassmorphic Circle with Reduced White Edge Glow */}
                <circle
                  r={currentRadius}
                  fill={isHovered ? 'url(#bubble-dark-glass-hover)' : 'url(#bubble-dark-glass)'}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  strokeOpacity={strokeOpacity}
                  filter={isHovered ? 'url(#white-edge-glow-hover)' : 'url(#white-edge-glow)'}
                  className="bubble-circle"
                />

                {/* Specular Inner Light Reflection */}
                <circle
                  cx={-currentRadius * 0.25}
                  cy={-currentRadius * 0.28}
                  r={currentRadius * 0.42}
                  fill="url(#bubble-specular-arc)"
                  opacity={isHovered ? 0.2 : 0.08}
                  pointerEvents="none"
                />

                {/* Skill Name in Crisp Pure White */}
                <text
                  className="bubble-label"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  pointerEvents="none"
                >
                  {node.lines && node.lines.length > 1 ? (
                    node.lines.map((line, idx) => {
                      const offset =
                        idx === 0
                          ? node.weight > 0.95
                            ? '-0.45em'
                            : '-0.35em'
                          : node.weight > 0.95
                          ? '0.85em'
                          : '0.8em';
                      return (
                        <tspan
                          key={idx}
                          x="0"
                          dy={offset}
                          fontSize={
                            node.weight > 1.05
                              ? '14px'
                              : node.weight > 0.9
                              ? '12.5px'
                              : '11.5px'
                          }
                          fontWeight="600"
                        >
                          {line}
                        </tspan>
                      );
                    })
                  ) : (
                    <tspan
                      x="0"
                      dy="0.35em"
                      fontSize={
                        node.weight > 1.05
                          ? '14.5px'
                          : node.weight > 0.9
                          ? '13px'
                          : '12px'
                      }
                      fontWeight="600"
                    >
                      {node.name}
                    </tspan>
                  )}
                </text>

                {/* Level Tag in Subtle Crisp White */}
                {node.weight >= 1.0 && !isHovered && (
                  <text
                    className="bubble-tier-tag"
                    x="0"
                    dy={node.lines && node.lines.length > 1 ? '2.15em' : '1.75em'}
                    textAnchor="middle"
                    fill="#D4D4D8"
                    opacity="0.6"
                    fontSize="9px"
                    fontFamily="var(--font-mono)"
                    letterSpacing="0.08em"
                    pointerEvents="none"
                  >
                    {node.level.toUpperCase()}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Pure Monochrome Tooltip */}
        <AnimatePresence>
          {hoveredSkill && tooltipPos.visible && (
            <motion.div
              className="bubble-tooltip"
              initial={{ opacity: 0, scale: 0.94, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 6 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              style={{
                left: `${Math.min(Math.max(tooltipPos.x, 140), containerWidth - 160)}px`,
                top: `${Math.max(tooltipPos.y - 12, 20)}px`
              }}
            >
              <div className="tooltip-header">
                <span className="tooltip-category-badge">
                  <span className="tooltip-dot" />
                  {categoryMap[hoveredSkill.category]?.shortLabel}
                </span>
                <span className="tooltip-level-pill">{hoveredSkill.level}</span>
              </div>

              <h4 className="tooltip-title">{hoveredSkill.name}</h4>
              <p className="tooltip-desc">{hoveredSkill.description}</p>

              <div className="tooltip-hint">
                <FiMousePointer size={10} />
                <span>Drag to test physics • Click pill to filter</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Minimal Hint */}
      <div className="bubble-bottom-bar">
        <div className="bubble-clusters-hint">
          <span>Clusters: Frontend • Distributed Backend • Agentic AI • Cloud Infra • Core CS</span>
        </div>
        <div className="bubble-interaction-hint">
          <span>Interactive Physics • Drag & Explore</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBubbleCloud;
