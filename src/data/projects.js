export const projectsData = [
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
  },
  {
    id: "realtime-event-bus",
    title: "Distributed Real-Time Messaging & Event Bus",
    subtitle: "High-Concurrency WebSocket & Redis Pub/Sub Infrastructure",
    timeline: "Jan 2026",
    featured: false,
    category: "Distributed Systems",
    description: "A resilient distributed messaging backend built to support 1,000+ concurrent active community users with reliable, low-latency WebSocket delivery and async task offloading.",
    highlights: [
      "Designed a real-time group chat system using Django Channels, WebSockets, and Redis Pub/Sub serving 1,000+ concurrent community members.",
      "Engineered asynchronous task queues with Celery and Redis to offload heavy background operations, reducing API response times by 35%.",
      "Instrumented production pipelines with Grafana dashboards for latency and error tracking, enabling rapid fault isolation and zero critical post-deploy defects."
    ],
    technologies: ["Django Channels", "WebSockets", "Redis Pub/Sub", "Celery", "Docker", "Grafana", "Python"],
    metrics: [
      { label: "Concurrency", value: "1,000+ Users" },
      { label: "Response Time", value: "-35%" },
      { label: "Uptime", value: "99.9%" }
    ],
    thumbnail: null,
    videoDemo: null,
    githubUrl: "https://github.com/CuriousAd",
    liveUrl: null,
    accentColor: "#FFFFFF"
  }
];
