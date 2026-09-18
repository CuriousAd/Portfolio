export const experienceData = [
  {
    id: "playto",
    company: "Playto",
    role: "Software Developer Intern",
    period: "Jan 2026 – June 2026",
    location: "Remote",
    badge: "Recent",
    summary: "Led autonomous AI agent outreach pipelines and built high-concurrency real-time WebSocket systems.",
    highlights: [
      "Took end-to-end ownership of an AI cold-calling agent (AWS, n8n, ElevenLabs, Telnyx); diagnosed pipeline failures to cut manual outreach by 40% and lift lead conversion by 30%.",
      "Engineered a React-driven digital product checkout pipeline with multi-currency pricing; offloaded payment and notification workflows to a Celery/Redis async task queue, cutting average API response time by 35%.",
      "Designed a real-time group chat system using Django Channels, WebSockets, and Redis Pub/Sub — serving 1,000+ concurrent community members with reliable, low-latency message delivery.",
      "Instrumented production APIs with Grafana dashboards tracking error rates and latency, enabling rapid fault isolation and zero critical post-deploy defects."
    ],
    technologies: ["FastAPI", "Django Channels", "WebSockets", "Redis Pub/Sub", "Celery", "AWS", "n8n", "ElevenLabs", "Telnyx", "Grafana", "React"],
    impactMetrics: [
      { label: "Manual Outreach", value: "-40%" },
      { label: "Lead Conversion", value: "+30%" },
      { label: "Concurrent Chat Users", value: "1,000+" },
      { label: "API Response Time", value: "-35%" }
    ],
    links: {
      companyUrl: "https://playto.in", // Can be customized
      certificateUrl: "#"
    }
  },
  {
    id: "emplo-ai",
    company: "Emplo AI",
    role: "Backend Developer",
    period: "Feb 2025 – Dec 2025",
    location: "Remote",
    badge: "Impact",
    summary: "Architected sub-100ms backend services for AI interview simulations and optimized CI/CD workflows.",
    highlights: [
      "Architected FastAPI backend services and a dynamic React frontend, achieving sub-100ms latency for AI interviews and parsing 1,000+ resumes per minute at 99.9% uptime.",
      "Overhauled CI/CD pipelines and PRD workflows, cutting deployment cycle time by 60% and reducing production incidents by 45% across a 5-person engineering team.",
      "Directed a live pilot covering 2,000+ candidates and 300+ AI interviews, delivering a 70% reduction in hiring costs and a 30% drop in recruitment overhead."
    ],
    technologies: ["FastAPI", "Python", "React", "Docker", "CI/CD", "PostgreSQL", "System Design", "PRD Planning"],
    impactMetrics: [
      { label: "Service Latency", value: "<100ms" },
      { label: "Resume Parsing", value: "1k+/min" },
      { label: "Hiring Costs", value: "-70%" },
      { label: "Cycle Time", value: "-60%" }
    ],
    links: {
      companyUrl: "#"
    }
  }
];
