export const SKILL_CATEGORIES = [
  {
    id: "all",
    label: "All Technologies",
    shortLabel: "All",
    color: "#FFFFFF",
    tag: "00 // FULL ARSENAL",
    domainTitle: "Full-Spectrum Technical Arsenal",
    domainDesc: "Interactive physics cloud mapping 34 core competencies across distributed systems, agentic AI, full-stack architecture, and cloud telemetry."
  },
  {
    id: "frontend",
    label: "Product & Frontend",
    shortLabel: "Frontend",
    color: "#FFFFFF",
    tag: "01 // PRODUCT & FRONTEND",
    domainTitle: "Full-Stack & Product Engineering",
    domainDesc: "Bridging complex system logic with pixel-perfect, reactive interfaces. Designing high-retention user experiences with strict typing and fluid micro-interactions."
  },
  {
    id: "backend",
    label: "Distributed Backends",
    shortLabel: "Backend",
    color: "#FFFFFF",
    tag: "02 // DISTRIBUTED RUNTIMES",
    domainTitle: "Distributed Backends & Microservices",
    domainDesc: "Engineering async event loops, low-latency API contracts, and high-concurrency stateful brokers built for resilience under peak load."
  },
  {
    id: "ai",
    label: "Agentic AI & RAG",
    shortLabel: "AI & RAG",
    color: "#FFFFFF",
    tag: "03 // AGENTIC AI & RETRIEVAL",
    domainTitle: "Agentic AI & Neural Systems (RAG)",
    domainDesc: "Orchestrating multi-agent decision graphs, semantic vector retrieval, and automated contradiction validation across long-form data."
  },
  {
    id: "cloud",
    label: "Cloud & Data Infra",
    shortLabel: "Cloud & Data",
    color: "#FFFFFF",
    tag: "04 // DATA & CLOUD INFRA",
    domainTitle: "Data Engines & Cloud Telemetry",
    domainDesc: "Designing high-throughput analytical ingestion, cache invalidation, automated container pipelines, and continuous error-rate telemetry."
  },
  {
    id: "foundations",
    label: "Core CS & Mindset",
    shortLabel: "Foundations",
    color: "#FFFFFF",
    tag: "05 // CORE ARCHITECTURE",
    domainTitle: "Core CS Foundations & Product Mindset",
    domainDesc: "Architectural first principles, algorithmic rigor, high-availability system topologies, and zero-defect product execution."
  }
];

export const SKILL_BUBBLES = [
  // ── Frontend & Product (7) ──
  {
    id: "react",
    name: "React",
    lines: ["React"],
    category: "frontend",
    level: "",
    weight: 1.15,
    description: "Component-driven design, concurrent rendering, virtual DOM optimizations, and reactive state management."
  },
  {
    id: "typescript",
    name: "TypeScript",
    lines: ["Type-", "Script"],
    category: "frontend",
    level: "Advanced",
    weight: 1.0,
    description: "Strict typing, complex generics, interface contracts, and end-to-end type safety."
  },
  {
    id: "nextjs",
    name: "Next.js",
    lines: ["Next.js"],
    category: "frontend",
    level: "Production",
    weight: 0.95,
    description: "Server-side rendering (SSR), App Router, dynamic server components, and SEO-optimized web applications."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    lines: ["Tailwind", "CSS"],
    category: "frontend",
    level: "Production",
    weight: 0.85,
    description: "Utility-first modern styling, design token systems, fluid glassmorphism, and responsive UI."
  },
  {
    id: "vite",
    name: "Vite / ESNext",
    lines: ["Vite", "ESNext"],
    category: "frontend",
    level: "Production",
    weight: 0.8,
    description: "Instant hot module replacement (HMR), lightning-fast Rollup builds, and modern ESM bundling."
  },
  {
    id: "websockets-rest",
    name: "REST & WebSockets",
    lines: ["REST &", "WebSockets"],
    category: "frontend",
    level: "Production",
    weight: 0.9,
    description: "Real-time bidirectional event streaming, sub-50ms ping rates, and standardized RESTful contracts."
  },
  {
    id: "javascript",
    name: "JavaScript",
    lines: ["Java-", "Script"],
    category: "frontend",
    level: "Advanced",
    weight: 0.9,
    description: "Modern ESNext asynchronous programming, event loop mechanics, microtasks, and DOM performance."
  },

  // ── Distributed Backends (6) ──
  {
    id: "python",
    name: "Python",
    lines: ["Python"],
    category: "backend",
    level: "Expert",
    weight: 1.2,
    description: "AsyncIO concurrency, robust typing, metaprogramming, and high-performance microservices."
  },
  {
    id: "fastapi",
    name: "FastAPI",
    lines: ["FastAPI"],
    category: "backend",
    level: "Production",
    weight: 1.05,
    description: "Pydantic data validation, sub-100ms p99 response times, and automated OpenAPI documentation."
  },
  {
    id: "django-channels",
    name: "Django Channels",
    lines: ["Django", "Channels"],
    category: "backend",
    level: "Production",
    weight: 0.95,
    description: "Async WebSocket consumer layers, background worker synchronization, and stateful socket handling."
  },
  {
    id: "cpp",
    name: "C++",
    lines: ["C++"],
    category: "backend",
    level: "Advanced",
    weight: 0.85,
    description: "Deterministic memory management, STL containers, pointers, and low-latency algorithmic compute."
  },
  {
    id: "redis",
    name: "Redis Pub/Sub",
    lines: ["Redis", "Pub/Sub"],
    category: "backend",
    level: "Production",
    weight: 0.95,
    description: "Sub-millisecond in-memory caching, distributed atomic locks, session state, and message broker channels."
  },
  {
    id: "celery",
    name: "Celery Queues",
    lines: ["Celery", "Queues"],
    category: "backend",
    level: "Production",
    weight: 0.85,
    description: "Distributed asynchronous task scheduling, queue retry backoffs, and background worker pooling."
  },

  // ── Agentic AI & RAG (6) ──
  {
    id: "langgraph",
    name: "LangGraph",
    lines: ["Lang-", "Graph"],
    category: "ai",
    level: "Production",
    weight: 1.1,
    description: "Cyclic stateful agent graphs, supervisor routing patterns, human-in-the-loop validation, and memory persistence."
  },
  {
    id: "pytorch",
    name: "PyTorch",
    lines: ["PyTorch"],
    category: "ai",
    level: "Advanced",
    weight: 0.95,
    description: "Tensor operations, neural architecture tuning, gradient descent tracking, and inference optimization."
  },
  {
    id: "autonomous-rag",
    name: "Autonomous RAG",
    lines: ["Autonomous", "RAG"],
    category: "ai",
    level: "Production",
    weight: 1.05,
    description: "Self-correcting semantic retrieval, automated contradiction checking, and hallucinations suppression."
  },
  {
    id: "vector-knn",
    name: "Vector KNN Search",
    lines: ["Vector", "KNN"],
    category: "ai",
    level: "Production",
    weight: 0.85,
    description: "High-dimensional embedding indexing, cosine similarity ranking, and sub-second semantic retrieval."
  },
  {
    id: "roberta",
    name: "RoBERTa (NLI)",
    lines: ["RoBERTa", "NLI"],
    category: "ai",
    level: "Advanced",
    weight: 0.85,
    description: "Natural language inference transformer models for zero-shot text classification and logic entailment."
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs Voice",
    lines: ["ElevenLabs", "Voice"],
    category: "ai",
    level: "Production",
    weight: 0.8,
    description: "Low-latency streaming speech synthesis, voice agent dialogue engines, and audio buffer piping."
  },

  // ── Cloud & Data Infra (7) ──
  {
    id: "postgresql",
    name: "PostgreSQL",
    lines: ["Postgre-", "SQL"],
    category: "cloud",
    level: "Production",
    weight: 1.05,
    description: "ACID transactions, B-Tree and GIN indexing, CTEs, window functions, and connection pool tuning."
  },
  {
    id: "duckdb",
    name: "DuckDB",
    lines: ["DuckDB"],
    category: "cloud",
    level: "Advanced",
    weight: 0.9,
    description: "Columnar vectorized analytical processing (OLAP), embedded zero-network SQL queries for big data."
  },
  {
    id: "docker",
    name: "Docker",
    lines: ["Docker"],
    category: "cloud",
    level: "Production",
    weight: 1.0,
    description: "Multi-stage builds, lightweight Alpine containers, microservice compose networks, and production hardening."
  },
  {
    id: "aws",
    name: "AWS Cloud",
    lines: ["AWS", "Cloud"],
    category: "cloud",
    level: "Production",
    weight: 0.95,
    description: "Lambda serverless architectures, S3 bucket life cycles, IAM policies, and cloud cost optimization."
  },
  {
    id: "grafana",
    name: "Grafana Telemetry",
    lines: ["Grafana", "Telemetry"],
    category: "cloud",
    level: "Production",
    weight: 0.85,
    description: "Real-time Prometheus metrics, error-budget dashboards, alert routing, and observability health checks."
  },
  {
    id: "git-cicd",
    name: "Git & CI/CD",
    lines: ["Git &", "CI/CD"],
    category: "cloud",
    level: "Expert",
    weight: 0.9,
    description: "Automated lint/test workflows, GitHub Actions, semantic versioning, and zero-defect deployments."
  },
  {
    id: "sql",
    name: "Advanced SQL",
    lines: ["Advanced", "SQL"],
    category: "cloud",
    level: "Advanced",
    weight: 0.85,
    description: "Query execution plan analysis, index tuning, recursive queries, and schema migrations."
  },

  // ── Core CS Foundations & Mindset (8) ──
  {
    id: "system-design",
    name: "System Design",
    lines: ["System", "Design"],
    category: "foundations",
    level: "Core",
    weight: 0.9,
    description: "High-level architecture, scalability bottlenecks, caching strategies, rate limiting, and sharding."
  },
  {
    id: "dsa",
    name: "DSA & Algorithms",
    lines: ["DSA &", "Algorithms"],
    category: "foundations",
    level: "Core",
    weight: 0.9,
    description: "Graph algorithms, dynamic programming, tree traversals, and amortized asymptotic complexity analysis."
  },
  {
    id: "distributed-systems",
    name: "Distributed Systems",
    lines: ["Distributed", "Systems"],
    category: "foundations",
    level: "Core",
    weight: 0.85,
    description: "CAP theorem tradeoffs, consensus algorithms, partition tolerance, and eventual consistency models."
  },
  {
    id: "operating-systems",
    name: "Operating Systems",
    lines: ["Operating", "Systems"],
    category: "foundations",
    level: "Core",
    weight: 0.8,
    description: "Thread scheduling, memory paging, deadlocks, synchronization primitives, and IPC."
  },
  {
    id: "dbms",
    name: "DBMS & Concurrency",
    lines: ["DBMS &", "Concurrency"],
    category: "foundations",
    level: "Core",
    weight: 0.8,
    description: "Isolation levels, two-phase locking, write-ahead logging (WAL), and query planners."
  },
  {
    id: "networks",
    name: "Computer Networks",
    lines: ["Computer", "Networks"],
    category: "foundations",
    level: "Core",
    weight: 0.8,
    description: "TCP handshake, UDP, TLS 1.3 encryption, DNS routing, and HTTP/2 multiplexing."
  },
  {
    id: "prd-strategy",
    name: "PRD & Strategy",
    lines: ["PRD &", "Strategy"],
    category: "foundations",
    level: "Applied",
    weight: 0.75,
    description: "Translating ambiguous user problems into structured technical requirements and measurable KPIs."
  },
  {
    id: "agile-sprints",
    name: "Agile Sprint Cycles",
    lines: ["Agile", "Sprints"],
    category: "foundations",
    level: "Applied",
    weight: 0.75,
    description: "Rapid iteration cycles, sprint planning, post-mortems, and cross-functional team delivery."
  }
];
