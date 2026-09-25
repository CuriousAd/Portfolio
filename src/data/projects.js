export const projectsData = [
  {
    id: "sponsa",
    title: "Sponsa",
    subtitle: "Real-Time UPI Tipping & Payment Engine for Streamers",
    timeline: "May 2026",
    featured: true,
    category: "Fintech & Systems",
    description: "A high-volume real-time UPI tipping platform for Indian YouTube live streamers, engineered to replace YouTube's 30% Super Chat cut with a 5–10% fee using Cashfree's split-settlement architecture.",
    highlights: [
      "Architected an event-driven payment ingest-process-notify pipeline using FastAPI, Beanie/Motor (MongoDB), and Cashfree EasySplit, splitting 90% directly into creator vaults at capture time with zero RBI PA liability.",
      "Engineered an idempotent, semaphore-bounded payment webhook processor with HMAC-SHA256 signature verification and atomic MongoDB $inc wallet operations preventing double-crediting race conditions.",
      "Implemented an ultra-low-latency OBS alert overlay powered by WebSocket fan-out broadcast and HTML5 audio synthesis for real-time live-stream visual tip notifications.",
      "Built a modular full-stack monorepo with Google OAuth session management, Cashfree Payouts API for instant UPI withdrawals, and rate-limited API gateway."
    ],
    technologies: ["FastAPI", "MongoDB (Beanie)", "Cashfree EasySplit", "WebSockets", "React", "Docker", "Python", "HMAC-SHA256", "UPI"],
    metrics: [
      { label: "Creator Cut", value: "90%+" },
      { label: "Webhook Ingest", value: "<50ms" },
      { label: "Payment Rail", value: "Cashfree UPI" }
    ],
    thumbnail: null,
    videoDemo: null,
    githubUrl: "https://github.com/CuriousAd/Sponsa",
    liveUrl: null,
    accentColor: "#FFFFFF"
  },
  {
    id: "the-adventure",
    title: "The Adventure",
    subtitle: "AI-Powered Choose-Your-Own-Adventure Story Engine",
    timeline: "March 2026",
    featured: true,
    category: "AI & Full-Stack",
    description: "A full-stack web application powered by Google Gemini 3.1 Flash-Lite that dynamically generates and plays deeply nested, branching 'choose-your-own-adventure' decision trees with 3–4 levels of depth, multiple endings, and asynchronous job queuing.",
    highlights: [
      "Engineered a decoupled monorepo architecture with FastAPI and React 19 (Vite 7, React Router 7, Axios), featuring a durable AWS SQS queue + worker Lambda (SAM) background execution model that prevents HTTP request timeouts during deep tree synthesis.",
      "Modeled branching narrative trees using flat SQLAlchemy StoryNode records linked via structured JSON traversal options, ensuring high database efficiency and fast client-side traversal.",
      "Leveraged Google's Gemini 3.1 Flash-Lite with medium reasoning and strict Pydantic response validation, generating branching narratives with 2-3 options per node leading to varied winning and losing endings.",
      "Built a modern React SPA with session-based identity, automated job status polling (pending, processing, completed, failed), and interactive story game playthroughs with instant restart."
    ],
    technologies: ["React 19", "FastAPI", "Gemini 3.1 Flash-Lite", "AWS Lambda + SQS", "SQLAlchemy", "Python 3.11", "Vite 7", "Pydantic"],
    metrics: [
      { label: "AI Engine", value: "Gemini 3.1 Flash-Lite" },
      { label: "Tree Depth", value: "3-4 Levels Deep" },
      { label: "Queue Pipeline", value: "AWS SQS + Lambda" }
    ],
    thumbnail: null,
    videoDemo: null,
    githubUrl: "https://github.com/CuriousAd/The-Adventure",
    liveUrl: null,
    accentColor: "#FFFFFF"
  },
  {
    id: "data-wire",
    title: "Data-Wire",
    subtitle: "Full-Stack AI Data Analytics Platform",
    timeline: "April 2026",
    featured: true,
    category: "AI & Full-Stack",
    description: "An event-driven enterprise analytics engine powered by LangGraph multi-agent orchestration, streaming live tool execution loops directly into a high-performance React UI.",
    highlights: [
      "Implemented a LangGraph-orchestrated multi-agent pipeline with a Brain Router that classifies incoming queries and fans out to 3 parallel AI agent nodes executing live tool-calling loops.",
      "Built a scalable FastAPI backend with a modular ingestion pipeline (DuckDB) and an Upstash Redis caching layer, cutting redundant LLM and SQL calls by ~40%.",
      "Engineered an event-driven React UX where users see results streamed dynamically, reducing perceived analysis time from hours to 10-15 seconds with zero polling overhead."
    ],
    technologies: ["LangGraph", "FastAPI", "React", "DuckDB", "Upstash Redis", "Python", "WebSockets"],
    metrics: [
      { label: "Query Routing", value: "3 Parallel Nodes" },
      { label: "Redundant Calls", value: "-40%" },
      { label: "Analysis Speed", value: "10-15 sec" }
    ],
    thumbnail: null,
    videoDemo: null,
    githubUrl: "https://github.com/CuriousAd/data-wire",
    liveUrl: "https://data-wire-gray.vercel.app/",
    accentColor: "#FFFFFF"
  },
  {
    id: "trekking-management",
    title: "Trekking Management App",
    subtitle: "Role-Based Expedition & Booking Management Platform",
    timeline: "2025",
    featured: true,
    category: "Full-Stack & Systems",
    description: "A role-based web application built with Flask and SQLite to coordinate multi-tier trekking expeditions, slot capacities, staff assignments, and automated booking lifecycles.",
    highlights: [
      "Implemented a 3-tier role-based access control (RBAC) architecture (Admin, Trek Staff, and Trekker) with session-based authentication, approval gates, and account status guards.",
      "Engineered transactional booking mechanics featuring overbooking prevention, real-time slot restoration upon cancellation, and timestamped lifecycle audit tracking (started, completed, cancelled).",
      "Designed a modular RESTful JSON API layer conforming to OpenAPI standards for programmatic trek listings, user management, and secure booking operations.",
      "Built an administrative telemetry dashboard providing real-time queries across participant manifests, assigned staff operations, and multi-filter expedition searches."
    ],
    technologies: ["Python", "Flask", "SQLite", "REST API", "RBAC", "OpenAPI", "Session Auth", "HTML5/CSS3"],
    metrics: [
      { label: "User Roles", value: "3 RBAC Tiers" },
      { label: "Booking Safety", value: "Zero-Overbooking" },
      { label: "API Standard", value: "OpenAPI Spec" }
    ],
    thumbnail: null,
    videoDemo: null,
    githubUrl: "https://github.com/CuriousAd/trekking-management-app",
    liveUrl: null,
    accentColor: "#FFFFFF"
  },
  {
    id: "narrative-consistency",
    title: "Narrative Consistency Verification",
    subtitle: "Real-Time RAG & Contradiction Detection Engine",
    timeline: "Jan 2026",
    featured: true,
    category: "NLP & Retrieval",
    description: "An automated formal validation engine designed to identify logical contradictions across long-form texts (like full books) by actively verifying extracted claims against source material.",
    highlights: [
      "Orchestrated an automated validation engine designed to identify logical contradictions across long-form texts by actively verifying extracted claims against source material.",
      "Constructed a RAG pipeline and a real-time semantic retrieval engine to execute high-throughput KNN searches across 100k+ tokens in under 4 seconds.",
      "Optimized a RoBERTa-large Natural Language Inference (NLI) classifier in PyTorch using FP16 mixed-precision, systematically tuning contradiction thresholds to maximize F1-score accuracy."
    ],
    technologies: ["PyTorch", "RoBERTa-large", "RAG Pipeline", "KNN Search", "Vector Embeddings", "Python", "FP16 Mixed Precision"],
    metrics: [
      { label: "Token Search", value: "100k+ in <4s" },
      { label: "Classifier", value: "RoBERTa FP16" },
      { label: "Accuracy", value: "Maximized F1" }
    ],
    thumbnail: null,
    videoDemo: null,
    githubUrl: "https://github.com/CuriousAd/Narrative-Consistency",
    liveUrl: null,
    accentColor: "#FFFFFF"
  }
];

export default projectsData;
