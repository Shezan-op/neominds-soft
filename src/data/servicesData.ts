export interface ServiceCapability {
  title: string;
  description: string;
  tags: string[];
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceDeliverable {
  title: string;
  category: string;
  description: string;
  format: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Core Engineering' | 'AI & Intelligence' | 'Cloud & Operations';
  heroBadge: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroDescription: string;
  metrics: { value: string; label: string }[];
  capabilities: ServiceCapability[];
  processSteps: ServiceProcessStep[];
  deliverables: ServiceDeliverable[];
  techStack: { category: string; items: string[] }[];
  caseStudyQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
    metric: string;
  };
  faqs: ServiceFaq[];
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  'software-development': {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    tagline: 'Full-Cycle Custom Software Engineering',
    category: 'Core Engineering',
    heroBadge: 'Enterprise Software Engineering',
    heroHeadline: 'Custom Enterprise',
    heroHeadlineHighlight: 'Software Development',
    heroDescription:
      'We engineer resilient, high-throughput enterprise software architectures tailored to your core business processes. From mission-critical transactional backends to distributed cloud microservices, we build scalable software designed to perform under extreme load.',
    metrics: [
      { value: '99.99%', label: 'System Uptime SLA' },
      { value: '40%', label: 'Faster Time-to-Market' },
      { value: '1,000+', label: 'Delivered Systems' },
      { value: '100%', label: 'IP Transfer & Ownership' },
    ],
    capabilities: [
      {
        title: 'Custom Backend & Microservices Architecture',
        description:
          'Decoupled, event-driven microservices engineered with Go, Node.js, Python, and Java. We build high-throughput APIs, gRPC services, and Kafka messaging streams that scale effortlessly.',
        tags: ['Go / Node.js / Java', 'Kafka / RabbitMQ', 'gRPC & REST', 'Docker & K8s'],
      },
      {
        title: 'Legacy Modernization & Monolith Migration',
        description:
          'Systematic monolithic strangler migrations into modern cloud architectures without downtime. We audit technical debt, extract modular domains, and upgrade legacy databases.',
        tags: ['Strangler Pattern', 'Zero-Downtime Cutover', 'Database Refactoring', 'API Facades'],
      },
      {
        title: 'Enterprise ERP & Core Workflow Engines',
        description:
          'Tailor-made internal business tooling, multi-tenant SaaS backends, automated approval workflows, and deep integrations with SAP, Salesforce, and custom SQL/NoSQL databases.',
        tags: ['Multi-Tenant SaaS', 'BPMN Engines', 'Enterprise Integrations', 'Role-Based Access'],
      },
      {
        title: 'High-Performance API Design & Gateways',
        description:
          'Sub-millisecond rate-limited API gateways with OAuth2/OIDC authentication, automated OpenAPI documentation, caching layers, and real-time observability telemetry.',
        tags: ['Kong / Envoy', 'OpenAPI 3.0 Specs', 'Redis Caching', 'Rate Limiting'],
      },
      {
        title: 'Mission-Critical Database Engineering',
        description:
          'High-availability relational and distributed databases, read-replica clusters, sharding architectures, vector databases, and automated schema migration pipelines.',
        tags: ['PostgreSQL & TimescaleDB', 'MongoDB & Cassandra', 'Pinecone & pgvector', 'Flyway Migrations'],
      },
      {
        title: 'Security-Hardened SDLC & QA Automation',
        description:
          'Automated regression suites, integration testing, vulnerability scans, static code analysis, and ISO/IEC 27001 compliant secure development lifecycles.',
        tags: ['Jest / PyTest / Cypress', 'SAST & DAST Scans', 'ISO 27001 SDLC', 'CI/CD Pipelines'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Discovery & Architecture Scoping',
        description: 'Deep architectural workshops, domain-driven design modeling, data flow diagrams, and non-functional requirements definition.',
        deliverables: ['System Architecture Document (SAD)', 'Domain Entity Models', 'Technical Risk Matrix'],
      },
      {
        step: '02',
        title: 'Core Engine & API Prototyping',
        description: 'Iterative sprint development of core business logic, schema migrations, and REST/gRPC endpoints with automated unit test coverage.',
        deliverables: ['Working API Sandbox', 'Database Schema DDL', 'Automated Test Suites'],
      },
      {
        step: '03',
        title: 'Integration & Performance Hardening',
        description: 'Connecting third-party systems, stress-testing under simulated concurrency, and optimizing memory allocation and database query plans.',
        deliverables: ['Load Testing Benchmarks', 'Integration Test Reports', 'Security Penetration Audit'],
      },
      {
        step: '04',
        title: 'Production Deployment & SLA Handover',
        description: 'Zero-downtime blue/green deployment to cloud infrastructure with Prometheus/Grafana monitoring, runbooks, and 24/7 hypercare support.',
        deliverables: ['Production Release Pipeline', 'Infrastructure Runbooks', 'SLA Support Governance'],
      },
    ],
    deliverables: [
      { title: 'Full Source Code & Git Repositories', category: 'Codebase', description: 'Clean, documented, TypeScript/Python/Go source code with 100% intellectual property ownership.', format: 'GitHub / GitLab / Bitbucket' },
      { title: 'System Architecture Blueprint', category: 'Architecture', description: 'Cloud topology, network boundary diagrams, data dictionaries, and sequence workflows.', format: 'PDF & Interactive Diagrams' },
      { title: 'CI/CD Automated Deployment Pipeline', category: 'DevOps', description: 'GitHub Actions / GitLab CI workflows for automated linting, testing, and multi-stage deployments.', format: 'YAML Scripts & Dockerfiles' },
      { title: 'Comprehensive API Documentation', category: 'Docs', description: 'Interactive Swagger/OpenAPI specifications with sample requests, responses, and webhook payloads.', format: 'OpenAPI 3.1 & Postman Collection' },
    ],
    techStack: [
      { category: 'Languages', items: ['TypeScript', 'Python', 'Go', 'Java', 'C# / .NET', 'Rust'] },
      { category: 'Frameworks', items: ['Node.js / NestJS', 'FastAPI / Django', 'Spring Boot', 'Next.js', 'ASP.NET Core'] },
      { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'pgvector'] },
      { category: 'Cloud & Infrastructure', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Kubernetes', 'Docker', 'Terraform'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds engineered our distributed data processing platform from the ground up, reducing batch latency from 4 hours to 12 minutes while maintaining 99.99% uptime across 12M daily transactions.',
      author: 'Thomas Golden',
      role: 'VP of Engineering',
      company: 'TruBridge',
      metric: '95% Latency Reduction',
    },
    faqs: [
      { question: 'Do we own 100% of the software source code and IP?', answer: 'Yes, absolutely. All code, architecture specifications, database schemas, and intellectual property developed during the engagement belong entirely to your company from day one.' },
      { question: 'How do you ensure zero downtime during legacy system modernization?', answer: 'We employ the Martin Fowler Strangler Fig pattern, routing traffic incrementally through modern microservices while keeping legacy databases synchronized with bi-directional event queues until full cutover is certified.' },
      { question: 'What engagement models do you offer for software development?', answer: 'We provide Dedicated Engineering Squads (cross-functional teams managed end-to-end), Staff Augmentation (senior engineers integrated into your team), and Fixed-Price Project Delivery for defined scopes.' },
      { question: 'How do you handle software maintenance after launch?', answer: 'We offer SLA-backed technical maintenance packages covering 24/7 incident monitoring, security patch management, framework upgrades, and feature enhancements.' },
    ],
  },

  'ai-development': {
    id: 'ai-development',
    slug: 'ai-development',
    title: 'AI Development',
    tagline: 'Custom Artificial Intelligence & Machine Learning Systems',
    category: 'AI & Intelligence',
    heroBadge: 'Applied AI & Cognitive Systems',
    heroHeadline: 'Custom Artificial',
    heroHeadlineHighlight: 'Intelligence & ML',
    heroDescription:
      'Turn proprietary enterprise data into competitive intelligence. We design, train, fine-tune, and deploy custom machine learning models, Retrieval-Augmented Generation (RAG) pipelines, computer vision systems, and predictive algorithms.',
    metrics: [
      { value: '3.8x', label: 'ROI in Operational Efficiency' },
      { value: '< 200ms', label: 'Inference Latency' },
      { value: '99.2%', label: 'Model Accuracy Score' },
      { value: '100%', label: 'Private & Air-Gapped Compliant' },
    ],
    capabilities: [
      {
        title: 'Enterprise RAG & Knowledge Retrieval Systems',
        description:
          'Grounding large language models in your proprietary internal documents, knowledge bases, and live databases with high-accuracy vector embeddings and semantic search.',
        tags: ['pgvector / Pinecone', 'LangChain & LlamaIndex', 'Hybrid Keyword/Vector', 'Source Citations'],
      },
      {
        title: 'Custom Model Fine-Tuning & Quantization',
        description:
          'Adapting open-weights models (Llama 3, Mistral, DeepSeek) to your domain vocabulary and compliance rules with LoRA/QLoRA for cost-effective private deployment.',
        tags: ['LoRA / QLoRA', 'vLLM & Ollama', 'Model Quantization', 'Private Inference'],
      },
      {
        title: 'Predictive Analytics & Forecasters',
        description:
          'Time-series forecasting, churn prediction, anomaly detection in financial transactions, and demand optimization using XGBoost, Prophet, and PyTorch deep neural networks.',
        tags: ['Time-Series Models', 'XGBoost / LightGBM', 'Fraud Anomaly Detection', 'Demand Forecasting'],
      },
      {
        title: 'Computer Vision & OCR Document Parsing',
        description:
          'High-speed visual defect inspection, biometric identity verification, and multi-lingual layout-aware OCR for invoices, clinical forms, and legal contracts.',
        tags: ['YOLOv10 / OpenCV', 'LayoutLM Document OCR', 'Defect Inspection', 'Visual Embeddings'],
      },
      {
        title: 'LLMOps & Continuous Model Evaluation',
        description:
          'Automated evaluation harnesses (Ragas, TruLens) measuring hallucination rates, context relevance, prompt drift, token costs, and safety guardrails.',
        tags: ['Ragas / TruLens', 'Prompt Engineering', 'LangSmith Telemetry', 'Cost Optimization'],
      },
      {
        title: 'Multi-Modal Voice & Vision AI Systems',
        description:
          'Real-time speech-to-text, audio sentiment analysis, synthetic voice generation, and multi-modal image-understanding systems embedded into web and mobile clients.',
        tags: ['Whisper STT', 'ElevenLabs TTS', 'Multi-Modal Vision', 'WebRTC Audio Streams'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Audit & Feasibility Benchmark',
        description: 'Evaluating training datasets, synthetic data generation pipelines, baseline model selection, and accuracy success criteria.',
        deliverables: ['Data Readiness Audit', 'Model Benchmark Report', 'Ethical AI Compliance Spec'],
      },
      {
        step: '02',
        title: 'Embedding Pipeline & Model Training',
        description: 'Chunking data, generating dense vector embeddings, training fine-tuned weights, and configuring semantic cache layers.',
        deliverables: ['Vector Database Schema', 'Fine-Tuned Model Weights', 'Evaluation Scorecard'],
      },
      {
        step: '03',
        title: 'Guardrails, Safety & API Integration',
        description: 'Implementing NeMo guardrails, PII redaction filters, hallucination evaluators, and low-latency REST/WebSocket inference APIs.',
        deliverables: ['Inference Server Endpoints', 'Guardrail Safety Config', 'Hallucination Metrics'],
      },
      {
        step: '04',
        title: 'Production LLMOps & Cost Optimization',
        description: 'Deploying to private GPU clusters or serverless AI runtimes with dynamic token caching and automated retraining triggers.',
        deliverables: ['Production Cluster Setup', 'Token Cost Dashboard', 'Continuous Evaluation Loop'],
      },
    ],
    deliverables: [
      { title: 'Trained & Fine-Tuned Model Artifacts', category: 'Model Weights', description: 'Optimized GGUF/Safetensors model checkpoints ready for private on-premise or cloud hosting.', format: 'Safetensors / GGUF / ONNX' },
      { title: 'Vector Index & RAG Ingestion Pipeline', category: 'Data Pipeline', description: 'Automated data chunking, metadata tagging, and vector database synchronization scripts.', format: 'Python / LangChain' },
      { title: 'Production Inference API & SDK', category: 'API Service', description: 'High-throughput streaming API endpoints with rate limiting, telemetry, and client SDKs.', format: 'FastAPI / WebSocket' },
      { title: 'Model Performance & Evaluation Matrix', category: 'Evaluation', description: 'Comprehensive benchmark reports detailing accuracy, hallucination rates, and latency under load.', format: 'Interactive HTML & Markdown' },
    ],
    techStack: [
      { category: 'AI Models', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3.3', 'Mistral Large', 'DeepSeek V3', 'Whisper'] },
      { category: 'AI Frameworks', items: ['PyTorch', 'LangChain', 'LlamaIndex', 'vLLM', 'HuggingFace', 'Ollama'] },
      { category: 'Vector Databases', items: ['pgvector', 'Pinecone', 'Qdrant', 'Milvus', 'ChromaDB', 'Weaviate'] },
      { category: 'AI Infrastructure', items: ['NVIDIA TensorRT', 'AWS Bedrock', 'Azure OpenAI', 'RunPod / Lambda', 'Modal'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our proprietary clinical document analysis RAG system. It processes 50-page patient medical records in under 3 seconds with zero hallucinations, saving our physicians over 2 hours daily.',
      author: 'Dr. Sarah Lin',
      role: 'Chief Medical Information Officer',
      company: 'HealthVantage Systems',
      metric: '2+ Hours Saved / Physician',
    },
    faqs: [
      { question: 'Will our proprietary data be used to train public models?', answer: 'Never. We build enterprise AI systems that run in your dedicated private cloud or on-premise environment. We enforce zero-data-retention agreements and air-gapped deployments.' },
      { question: 'How do you prevent hallucinations in generative AI systems?', answer: 'We implement multi-layered verification: semantic search grounding with strict similarity thresholds, Ragas automated citation checkers, structured JSON schema outputs, and fallback guardrails.' },
      { question: 'What GPU infrastructure is required to run custom AI models?', answer: 'Depending on model size, we optimize architectures using 4-bit/8-bit quantization (QLoRA) allowing 70B parameter models to run on affordable enterprise GPUs or serverless inference runtimes like vLLM.' },
      { question: 'Can you integrate AI into our existing web or mobile app?', answer: 'Yes. We provide clean REST, GraphQL, and streaming WebSocket APIs that integrate smoothly with React, iOS, Android, and backend microservices.' },
    ],
  },

  'mobile-app-development': {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'High-Performance iOS & Android Mobile Experiences',
    category: 'Core Engineering',
    heroBadge: 'Native & Cross-Platform Mobile',
    heroHeadline: 'Intuitive & Scalable',
    heroHeadlineHighlight: 'Mobile App Development',
    heroDescription:
      'Create polished, top-rated mobile apps that users love. We build native iOS (Swift/SwiftUI), native Android (Kotlin/Jetpack Compose), and cross-platform (Flutter/React Native) mobile experiences with offline-first synchronization and 60fps animations.',
    metrics: [
      { value: '4.9 ★', label: 'Average App Store Rating' },
      { value: '60 FPS', label: 'Buttery Smooth Animations' },
      { value: '10M+', label: 'Combined Active Users' },
      { value: '100%', label: 'Offline-First Ready' },
    ],
    capabilities: [
      {
        title: 'Native iOS Development (Swift & SwiftUI)',
        description:
          'Tailored to Apple’s Human Interface Guidelines. We leverage WidgetKit, Metal, CoreML on-device machine learning, Apple Pay, and biometric authentication.',
        tags: ['Swift 6', 'SwiftUI', 'WidgetKit', 'CoreML & Metal'],
      },
      {
        title: 'Native Android Development (Kotlin & Jetpack Compose)',
        description:
          'Modern declarative Android apps following Material You design principles, Background WorkManager synchronization, CameraX, and Google Play Billing.',
        tags: ['Kotlin', 'Jetpack Compose', 'Coroutines / Flow', 'Google Play In-App'],
      },
      {
        title: 'Cross-Platform Mobile (React Native & Flutter)',
        description:
          'Single-codebase mobile applications sharing 90%+ of business logic while delivering 100% native performance and identical pixel precision on iOS and Android.',
        tags: ['React Native Expo', 'Flutter / Dart', 'Shared State Engines', 'Fast Over-The-Air Updates'],
      },
      {
        title: 'Offline-First Data Sync & Local Databases',
        description:
          'Seamless background replication using SQLite, WatermelonDB, and CRDT conflict resolution so apps function reliably in zero-connectivity environments.',
        tags: ['SQLite / Room', 'WatermelonDB', 'CRDT Sync', 'Background Tasks'],
      },
      {
        title: 'FinTech & HIPAA-Compliant Mobile Security',
        description:
          'Encrypted local keystores, biometric FaceID/TouchID gates, certificate pinning, jailbreak/root detection, and dynamic token encryption.',
        tags: ['Keychain / KeyStore', 'Biometric Auth', 'SSL Pinning', 'PCI-DSS Compliance'],
      },
      {
        title: 'App Store Submission & Live Telemetry',
        description:
          'Complete lifecycle management including Apple App Store and Google Play submissions, compliance approvals, crash reporting, and PostHog analytics.',
        tags: ['Fastlane CI/CD', 'App Store Optimization', 'Sentry Crashlytics', 'PostHog Telemetry'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'UX Flow & Interactive Mobile Prototype',
        description: 'Creating mobile-first gesture wireframes, Apple HIG / Material component libraries, and clickable Figma prototypes for usability tests.',
        deliverables: ['Clickable Figma Prototype', 'Mobile Design System', 'Information Architecture'],
      },
      {
        step: '02',
        title: 'Core Engine & Offline Architecture',
        description: 'Setting up local SQLite databases, reactive state management, background sync tasks, and authentication flows.',
        deliverables: ['Core Mobile Scaffolding', 'Local SQLite Schema', 'Authentication Modules'],
      },
      {
        step: '03',
        title: 'API Integration & Hardware Sensors',
        description: 'Connecting camera, Bluetooth LE, push notifications, payment wallets, and streaming WebSocket endpoints.',
        deliverables: ['Sensor Integration Modules', 'Push Notification Service', 'Payment Gateway Integration'],
      },
      {
        step: '04',
        title: 'App Store Submission & Over-the-Air Setup',
        description: 'Submitting to Apple App Store & Google Play, configuring Fastlane automated deployments and Sentry crash diagnostics.',
        deliverables: ['Published App Store Builds', 'Fastlane Automation Scripts', 'Crash Reporting Telemetry'],
      },
    ],
    deliverables: [
      { title: 'Production App Store & Play Store Binaries', category: 'Build Artifacts', description: 'Signed IPA and AAB binaries compliant with all 2026 Apple and Google store guidelines.', format: 'IPA / AAB / APK' },
      { title: 'Full Native / Cross-Platform Source Code', category: 'Codebase', description: 'Clean Swift/Kotlin/React Native source code with automated unit and UI test suites.', format: 'Git Repository' },
      { title: 'Fastlane CI/CD Automated Pipelines', category: 'DevOps', description: 'Automated screenshot generation, test flight distribution, and production deployment scripts.', format: 'Fastfile & GitHub Actions' },
      { title: 'Mobile Analytics & Crash Telemetry Setup', category: 'Monitoring', description: 'Pre-configured Sentry, Firebase, and telemetry dashboards for tracking real-world user metrics.', format: 'Live Dashboards' },
    ],
    techStack: [
      { category: 'iOS', items: ['Swift 6', 'SwiftUI', 'Combine', 'CoreData', 'WidgetKit'] },
      { category: 'Android', items: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Room', 'Hilt'] },
      { category: 'Cross-Platform', items: ['React Native', 'Expo', 'Flutter', 'Dart', 'Capacitor'] },
      { category: 'Tooling & CI/CD', items: ['Fastlane', 'Xcode Cloud', 'Firebase Test Lab', 'Sentry'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds delivered our telemedicine iOS and Android app in just 14 weeks. We achieved a 4.9-star rating on the App Store with over 200,000 consults completed in year one.',
      author: 'Marcus Vance',
      role: 'VP of Product',
      company: 'Plato Medical',
      metric: '4.9 ★ Rating & 200k Consults',
    },
    faqs: [
      { question: 'Should we choose Native (Swift/Kotlin) or Cross-Platform (React Native/Flutter)?', answer: 'For apps requiring heavy device hardware access, complex 3D graphics, or specialized widgets, Native is ideal. For content, commerce, and SaaS apps seeking fast cross-platform parity and budget efficiency, React Native or Flutter is exceptionally performant.' },
      { question: 'Do you assist with Apple App Store and Google Play approval guidelines?', answer: 'Yes. We handle 100% of the submission process, privacy nutrition labels, in-app purchase compliance, and guideline reviews to ensure guaranteed store approval.' },
      { question: 'Can the mobile app work when users have no internet connection?', answer: 'Yes. We specialize in offline-first architectures using local SQLite databases and automatic background data synchronization as soon as connectivity resumes.' },
      { question: 'How do you test across hundreds of different Android screen sizes?', answer: 'We utilize automated device matrix testing in Firebase Test Lab and real physical devices covering major Samsung, Google Pixel, and iOS device dimensions.' },
    ],
  },

  'web-cms-development': {
    id: 'web-cms-development',
    slug: 'web-cms-development',
    title: 'Web & CMS Development',
    tagline: 'High-Performance Web Applications & Headless CMS Portals',
    category: 'Core Engineering',
    heroBadge: 'Modern Web & Headless CMS',
    heroHeadline: 'High-Performance Web',
    heroHeadlineHighlight: '& CMS Development',
    heroDescription:
      'Build ultra-fast, SEO-optimized web applications and headless content management systems. We engineer scalable web portals using Next.js, React, Node.js, and headless CMS architectures (Sanity, Strapi, Contentful) with sub-second page loads.',
    metrics: [
      { value: '100/100', label: 'Google PageSpeed Score' },
      { value: '< 0.8s', label: 'Largest Contentful Paint' },
      { value: '100%', label: 'SEO & Core Web Vitals Ready' },
      { value: '99.99%', label: 'Edge Availability' },
    ],
    capabilities: [
      {
        title: 'Modern Next.js & React Web Applications',
        description:
          'Server-Side Rendered (SSR) and Incremental Static Regenerated (ISR) web apps engineered with Next.js 15, React 19, and Tailwind CSS for lightning-fast loads.',
        tags: ['Next.js 15 / React 19', 'Server Components', 'Edge Rendering', 'Tailwind CSS'],
      },
      {
        title: 'Headless CMS Architecture (Sanity, Strapi, Contentful)',
        description:
          'Decoupled content engines giving marketing teams visual editing freedom while developers maintain a modern, secure, and performant frontend.',
        tags: ['Sanity.io / Strapi', 'Contentful / Payload', 'Live Visual Previews', 'Structured Schemas'],
      },
      {
        title: 'Enterprise Web Portals & Customer Dashboards',
        description:
          'Secure client portals featuring role-based access control (RBAC), multi-tenant billing, automated document management, and interactive data grids.',
        tags: ['B2B Portals', 'Multi-Tenant Auth', 'Data Grids', 'Document Management'],
      },
      {
        title: 'Core Web Vitals & Technical SEO Optimization',
        description:
          'Structured JSON-LD schema markup, automated XML sitemaps, dynamic OpenGraph meta tags, image format optimization (AVIF/WebP), and 100/100 Lighthouse performance.',
        tags: ['JSON-LD Schema', 'OpenGraph Meta', 'Image Optimization', '100/100 Lighthouse'],
      },
      {
        title: 'Global Edge CDN & Serverless Scaling',
        description:
          'Deploying web applications to Cloudflare and AWS CloudFront edge networks for ultra-low latency caching and automated DDoS mitigation worldwide.',
        tags: ['Cloudflare Workers', 'AWS CloudFront', 'Edge Caching', 'DDoS Protection'],
      },
      {
        title: 'Accessibility (WCAG 2.1 AAA) Compliance',
        description:
          'Keyboard navigation, ARIA live regions, semantic HTML5 structure, and screen reader testing to guarantee universal accessibility compliance.',
        tags: ['WCAG 2.1 AAA', 'ARIA Standards', 'Semantic HTML5', 'Screen Reader Audited'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Information Architecture & CMS Modeling',
        description: 'Defining content taxonomies, schema relationships, editorial workflows, and technical SEO wireframes.',
        deliverables: ['CMS Content Model', 'Information Architecture Spec', 'SEO Strategy Document'],
      },
      {
        step: '02',
        title: 'Frontend Component System & CMS Sync',
        description: 'Building atomic React components with Storybook and wiring live preview hooks into the headless CMS backend.',
        deliverables: ['Storybook Component Library', 'CMS Custom Schema', 'Live Editorial Preview'],
      },
      {
        step: '03',
        title: 'API Integrations & Edge Deployment',
        description: 'Integrating CRM, analytics, payment gateways, and deploying multi-region edge caches.',
        deliverables: ['Third-Party Webhooks', 'Edge Cache Rules', 'Security Header Config'],
      },
      {
        step: '04',
        title: 'Core Web Vitals Audit & Editorial Handoff',
        description: 'Lighthouse 100/100 speed optimization, WCAG accessibility validation, and comprehensive CMS training workshops for editorial teams.',
        deliverables: ['Lighthouse Audit Report', 'WCAG Compliance Certificate', 'Editorial User Manual'],
      },
    ],
    deliverables: [
      { title: 'Full Web App Source Code', category: 'Frontend', description: 'Modular Next.js / TypeScript codebase with 100% test coverage and clean component architecture.', format: 'Git Repository' },
      { title: 'Configured Headless CMS Engine', category: 'Backend', description: 'Fully structured Sanity/Strapi CMS with custom roles, automated workflows, and visual previews.', format: 'Cloud Instance & Config' },
      { title: 'Lighthouse 100/100 Performance Report', category: 'SEO', description: 'Validation certificate confirming sub-second load times, minimal CLS, and optimal LCP metrics.', format: 'Lighthouse Audit PDF' },
      { title: 'Editorial Video Walkthroughs & Documentation', category: 'Training', description: 'Step-by-step video guides and documentation for your marketing team to manage content effortlessly.', format: 'Loom Video & Docs' },
    ],
    techStack: [
      { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'CMS Platforms', items: ['Sanity.io', 'Strapi', 'Contentful', 'Payload CMS', 'WordPress Headless'] },
      { category: 'Deployment & CDN', items: ['Vercel', 'AWS CloudFront', 'Cloudflare', 'Netlify'] },
      { category: 'Testing & Quality', items: ['Storybook', 'Playwright', 'Jest', 'Lighthouse CI'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds rebuilt our global marketing platform and headless CMS in Next.js. Our organic search traffic tripled in 6 months, and our editorial team can now launch campaigns in minutes instead of weeks.',
      author: 'Elena Rostova',
      role: 'Head of Growth',
      company: 'Authenticom',
      metric: '300% Organic Traffic Growth',
    },
    faqs: [
      { question: 'Why should we choose a Headless CMS over traditional WordPress?', answer: 'A headless CMS decouples content from the frontend, delivering 10x faster load times, virtually bulletproof security (no exposed PHP/database endpoints), and the flexibility to publish content simultaneously to web, mobile apps, and smart displays.' },
      { question: 'Will our marketing team need to write code to update pages?', answer: 'No. We configure intuitive visual page builders inside Sanity or Strapi with drag-and-drop sections, real-time live previews, and automated image resizing so editors have full autonomy.' },
      { question: 'How do you achieve 100/100 Google PageSpeed scores?', answer: 'We combine server-side static generation (SSG), automatic next-gen image conversion (AVIF/WebP), zero-layout-shift font rendering, critical CSS inlining, and global edge CDN caching.' },
      { question: 'Can you migrate our existing content from WordPress or Drupal?', answer: 'Yes. We build automated data migration scripts that extract all posts, categories, media assets, and SEO metadata into the new headless CMS structure without losing URL redirects or search rankings.' },
    ],
  },

  'ecommerce-development': {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'Ecommerce Development',
    tagline: 'High-Conversion Headless & Custom Commerce Platforms',
    category: 'Core Engineering',
    heroBadge: 'Omnichannel Digital Commerce',
    heroHeadline: 'High-Conversion Digital',
    heroHeadlineHighlight: 'Ecommerce Development',
    heroDescription:
      'Elevate your digital revenue with scalable ecommerce architectures. We engineer high-converting headless storefronts, custom Shopify Plus implementations, multi-currency checkout engines, and complex ERP/WMS inventory integrations.',
    metrics: [
      { value: '+35%', label: 'Average Checkout Conversion' },
      { value: '< 1.2s', label: 'Instant Headless Checkout' },
      { value: '$100M+', label: 'Processed GMV Annually' },
      { value: '100%', label: 'PCI-DSS Level 1 Compliant' },
    ],
    capabilities: [
      {
        title: 'Headless Ecommerce Storefronts (Shopify & Commercelayer)',
        description:
          'Ultra-fast Next.js commerce frontends powered by Shopify Storefront API or Commercelayer. Instant product page transitions, sub-second search, and zero cart drop-offs.',
        tags: ['Shopify Plus', 'Storefront API', 'Commercelayer / Medusa', 'Next.js Commerce'],
      },
      {
        title: 'Custom Multi-Currency & Localized Checkout Engines',
        description:
          'Localized currency conversions, dynamic international tax calculations (Avalara), localized payment gateways (Stripe, Klarna, Adyen), and seamless 1-click checkouts.',
        tags: ['Stripe Elements / Adyen', 'Klarna / Affirm', 'Avalara Tax Automation', '1-Click Checkout'],
      },
      {
        title: 'ERP, WMS & Inventory Synchronizers',
        description:
          'Bi-directional real-time inventory synchronization with NetSuite, SAP, Brightpearl, and custom warehouse management systems (WMS) preventing out-of-stock orders.',
        tags: ['NetSuite / SAP ERP', 'Real-Time WMS Sync', 'Multi-Warehouse Routing', 'Order Webhooks'],
      },
      {
        title: 'B2B Wholesale Portals & Custom Pricing',
        description:
          'Tiered volume pricing, wholesale company accounts, automated net-30/60 invoice generation, quote-to-order workflows, and punchout catalog integrations.',
        tags: ['B2B Wholesale', 'Volume Price Tiers', 'Invoice Terms', 'Custom Catalogs'],
      },
      {
        title: 'AI-Powered Recommendations & Search',
        description:
          'Semantic search with instant typo tolerance, predictive visual autocomplete (Algolia), and personalized AI upselling engines boosting Average Order Value (AOV).',
        tags: ['Algolia / Meilisearch', 'AI Product Recommendations', 'Upsell & Cross-Sell', 'Smart Filters'],
      },
      {
        title: 'Subscription Commerce & Customer Retention',
        description:
          'Recurring billing engines powered by ReCharge and custom Stripe Billing with self-service customer pause/skip portals and automated churn recovery loops.',
        tags: ['ReCharge / Stripe Billing', 'Customer Portal', 'Dunning Management', 'Retention Loops'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Catalog Architecture & Tech Stack Scoping',
        description: 'Analyzing SKU variations, international currency rules, warehouse locations, and designing checkout conversion funnels.',
        deliverables: ['Catalog Data Model', 'Checkout Funnel Architecture', 'ERP Integration Spec'],
      },
      {
        step: '02',
        title: 'Headless Storefront & Cart Engineering',
        description: 'Developing high-speed product catalog browsing, instant search filters, sliding cart drawers, and secure payment tokens.',
        deliverables: ['Interactive Storefront', 'Fast Cart Engine', 'Stripe / Shopify API Sync'],
      },
      {
        step: '03',
        title: 'ERP, Inventory & Payment Integration',
        description: 'Connecting warehouse APIs, automated shipping label generation (ShipStation), tax rules, and live order confirmation webhooks.',
        deliverables: ['WMS Sync Pipelines', 'Payment Gateway Certification', 'Order Fulfillment Flows'],
      },
      {
        step: '04',
        title: 'Conversion Load Testing & Store Launch',
        description: 'Stress-testing during simulated Black Friday traffic spikes, certifying PCI-DSS compliance, and zero-downtime store cutover.',
        deliverables: ['Black Friday Load Benchmarks', 'PCI-DSS Compliance Certificate', 'Store Launch Runbook'],
      },
    ],
    deliverables: [
      { title: 'Production Headless Ecommerce Store', category: 'Storefront', description: 'Fully responsive, high-converting digital storefront ready for high-volume customer traffic.', format: 'Live URL & Git Codebase' },
      { title: 'ERP & Inventory Sync Connector', category: 'Integration', description: 'Automated webhook pipelines syncing stock levels, order status, and customer accounts in real-time.', format: 'Microservices & Webhooks' },
      { title: 'Custom Payment & Checkout Gateway', category: 'Payment', description: 'PCI-compliant checkout flow with Apple Pay, Google Pay, Klarna, and automated sales tax calculation.', format: 'Stripe / Shopify Module' },
      { title: 'Analytics & Revenue Tracking Dashboard', category: 'Analytics', description: 'Server-side Google Analytics 4, Meta Conversions API (CAPI), and Klaviyo email flows.', format: 'Tracking Configuration' },
    ],
    techStack: [
      { category: 'Platforms', items: ['Shopify Plus', 'Medusa.js', 'Commercelayer', 'BigCommerce', 'Magento'] },
      { category: 'Frontend', items: ['Next.js Commerce', 'React 19', 'Tailwind CSS', 'Algolia'] },
      { category: 'Payments', items: ['Stripe', 'Adyen', 'Klarna', 'PayPal', 'Shopify Payments'] },
      { category: 'Integrations', items: ['NetSuite', 'Klaviyo', 'ShipStation', 'Avalara', 'ReCharge'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds transitioned our multi-brand apparel business to a headless Shopify Plus architecture. Our mobile checkout speed doubled, resulting in a 38% increase in mobile conversion rates during holiday sales.',
      author: 'David Chen',
      role: 'Chief Digital Officer',
      company: 'Aura Lifestyle Group',
      metric: '+38% Mobile Conversion',
    },
    faqs: [
      { question: 'Why should we upgrade from a standard Shopify theme to Headless Commerce?', answer: 'Standard themes suffer from app bloat and slow script execution. Headless commerce decouples the frontend to give you instant sub-second page transitions, complete design freedom, and significantly higher conversion rates on mobile devices.' },
      { question: 'How do you handle flash sales and massive holiday traffic spikes?', answer: 'We engineer serverless edge frontends backed by Redis caching that can seamlessly withstand 50,000+ concurrent shoppers without slowing down or crashing.' },
      { question: 'Can you integrate custom B2B pricing and wholesale account approval flows?', answer: 'Yes. We build dedicated B2B portals supporting custom price lists per customer tier, minimum order quantities (MOQ), and automated payment term agreements.' },
      { question: 'Is the platform compliant with PCI-DSS data protection laws?', answer: 'Yes. All payment credentials are tokenized directly through certified Tier 1 PCI-DSS payment gateways (like Stripe or Shopify Pay) so sensitive credit card numbers never touch your application server.' },
    ],
  },

  'devops': {
    id: 'devops',
    slug: 'devops',
    title: 'DevOps',
    tagline: 'Cloud Infrastructure, Kubernetes & CI/CD Automation',
    category: 'Cloud & Operations',
    heroBadge: 'Cloud Architecture & DevSecOps',
    heroHeadline: 'Automated Cloud',
    heroHeadlineHighlight: '& DevOps Engineering',
    heroDescription:
      'Accelerate release velocity and guarantee 99.99% system reliability. We engineer automated multi-cloud infrastructure (AWS, GCP, Azure), Kubernetes container orchestration, zero-downtime CI/CD pipelines, and proactive 24/7 observability suites.',
    metrics: [
      { value: '10x', label: 'Deployment Frequency' },
      { value: '< 5 min', label: 'Zero-Downtime Rollbacks' },
      { value: '35%', label: 'Cloud Cost (FinOps) Savings' },
      { value: '99.99%', label: 'Production High Availability' },
    ],
    capabilities: [
      {
        title: 'Kubernetes (EKS / GKE / AKS) Orchestration',
        description:
          'Production-grade Kubernetes clusters with automated horizontal pod autoscaling, ingress controllers, service mesh (Istio), and GitOps (ArgoCD) synchronization.',
        tags: ['AWS EKS / GKE / AKS', 'ArgoCD GitOps', 'Istio Service Mesh', 'Helm Charts'],
      },
      {
        title: 'Infrastructure as Code (Terraform & Pulumi)',
        description:
          'Reproducible, version-controlled cloud infrastructure. We automate VPC networking, IAM least-privilege security policies, RDS clusters, and edge CDN routing.',
        tags: ['Terraform / OpenTofu', 'Pulumi TypeScript', 'AWS CloudFormation', 'Multi-Account IAM'],
      },
      {
        title: 'Zero-Downtime CI/CD Pipelines',
        description:
          'Fast, secure automated release workflows with blue/green and canary rollouts, automated unit/integration testing gates, and instant one-click rollback triggers.',
        tags: ['GitHub Actions / GitLab CI', 'Canary & Blue/Green', 'Docker BuildKit', 'Automated Gates'],
      },
      {
        title: 'FinOps Cloud Cost Optimization',
        description:
          'Comprehensive audit of cloud spending, right-sizing overprovisioned instances, spot instance automation, and storage tier lifecycle policies saving 30-40% monthly.',
        tags: ['AWS Cost Explorer', 'Karpenter Spot Autoscaling', 'Reserved Instance Audits', 'FinOps Governance'],
      },
      {
        title: '24/7 Observability & Telemetry (Prometheus & Datadog)',
        description:
          'Centralized logging, distributed tracing (OpenTelemetry), interactive Grafana dashboards, and automated PagerDuty alert escalation for SLA monitoring.',
        tags: ['Prometheus & Grafana', 'Datadog / New Relic', 'OpenTelemetry Traces', 'PagerDuty Alerts'],
      },
      {
        title: 'DevSecOps & Automated Security Compliance',
        description:
          'Integrating Trivy container vulnerability scanning, SonarQube static code audits, automated secret rotation, and SOC 2 / ISO 27001 policy enforcement.',
        tags: ['Trivy & Snyk', 'SonarQube SAST', 'Vault Secret Management', 'SOC 2 / ISO 27001'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Infrastructure & Security Audit',
        description: 'Evaluating current cloud topology, deployment bottlenecks, security attack surfaces, and cloud cost inefficiencies.',
        deliverables: ['Cloud Infrastructure Audit', 'DevSecOps Maturity Report', 'FinOps Cost Reduction Plan'],
      },
      {
        step: '02',
        title: 'Terraform IaC & Kubernetes Scaffolding',
        description: 'Writing modular Terraform scripts, provisioning secure VPC networks, and deploying hardened Kubernetes clusters.',
        deliverables: ['Terraform Modules Repository', 'Hardened Kubernetes Cluster', 'GitOps ArgoCD Setup'],
      },
      {
        step: '03',
        title: 'Automated CI/CD & Security Gates',
        description: 'Building GitHub Actions pipelines with automated container builds, vulnerability scanning, and multi-environment staging.',
        deliverables: ['CI/CD Workflow Scripts', 'Container Security Scan Reports', 'Automated Rollback Hooks'],
      },
      {
        step: '04',
        title: 'Observability & SLA Handover',
        description: 'Setting up Grafana dashboards, synthetic uptime monitors, incident escalation playbooks, and training in-house teams.',
        deliverables: ['Grafana Telemetry Dashboards', 'Incident Response Playbooks', 'DevOps Team Training'],
      },
    ],
    deliverables: [
      { title: 'Modular Terraform Infrastructure Repository', category: 'IaC Code', description: 'Version-controlled infrastructure scripts defining your entire cloud environment from VPCs to databases.', format: 'Terraform / OpenTofu' },
      { title: 'Production Kubernetes Cluster & GitOps Manifests', category: 'Orchestration', description: 'Fully configured EKS/GKE cluster with Helm charts, ingress controllers, and ArgoCD pipelines.', format: 'Kubernetes YAML & Helm' },
      { title: 'Zero-Downtime CI/CD Pipeline Configuration', category: 'Pipelines', description: 'Automated build, test, security scan, and canary deployment scripts for all backend and frontend services.', format: 'GitHub Actions / GitLab' },
      { title: 'Observability Suite & Incident Runbooks', category: 'Monitoring', description: 'Pre-configured Grafana telemetry dashboards, PagerDuty alert policies, and operational runbooks.', format: 'Grafana & Runbook Docs' },
    ],
    techStack: [
      { category: 'Cloud Providers', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Cloudflare'] },
      { category: 'Containers & IaC', items: ['Kubernetes', 'Docker', 'Terraform', 'OpenTofu', 'Helm', 'ArgoCD'] },
      { category: 'CI/CD & Security', items: ['GitHub Actions', 'GitLab CI', 'HashiCorp Vault', 'Trivy', 'SonarQube'] },
      { category: 'Observability', items: ['Prometheus', 'Grafana', 'Datadog', 'OpenTelemetry', 'ELK Stack'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds transitioned our monolithic AWS setup into an automated Kubernetes and Terraform architecture. We cut our monthly AWS bill by 36% while reducing deployment release times from 2 days to 8 minutes.',
      author: 'Alexandre Kachaev',
      role: 'Head of Infrastructure',
      company: 'CNote Financial',
      metric: '36% Cloud Cost Reduction',
    },
    faqs: [
      { question: 'What is Infrastructure as Code (IaC) and why is it necessary?', answer: 'IaC defines your servers, databases, and networks as code in git repositories. This ensures your infrastructure can be automatically replicated in minutes across staging, production, or disaster recovery environments with zero manual human configuration errors.' },
      { question: 'How do you ensure zero downtime when deploying new software updates?', answer: 'We implement Blue/Green and Canary deployments in Kubernetes, spinning up new container versions and validating health checks before shifting live user traffic seamlessly.' },
      { question: 'Can you help us achieve SOC 2 and ISO 27001 cloud compliance?', answer: 'Yes. We enforce automated encryption at rest (AES-256) and in transit (TLS 1.3), least-privilege IAM policies, automated secret rotation, and continuous compliance telemetry required for audit certification.' },
      { question: 'How quickly can your team respond to critical production incidents?', answer: 'Our 24/7 DevOps engineering squad provides guaranteed sub-15 minute response times for P1 production incidents backed by rigorous SLAs.' },
    ],
  },

  'ai-agents': {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Autonomous Multi-Agent Systems & Tool-Calling Workflows',
    category: 'AI & Intelligence',
    heroBadge: 'Autonomous AI Agents & Swarms',
    heroHeadline: 'Autonomous Multi-Agent',
    heroHeadlineHighlight: 'AI Systems & Swarms',
    heroDescription:
      'Empower your business with autonomous AI agents that reason, plan, execute multi-step workflows, call APIs, and collaborate in teams. We build stateful agentic architectures using LangGraph, CrewAI, and OpenAI Assistants with human-in-the-loop oversight.',
    metrics: [
      { value: '85%', label: 'Reduction in Manual Workflows' },
      { value: '24/7', label: 'Autonomous Continuous Execution' },
      { value: '< 1%', label: 'Error Rate with Self-Reflection' },
      { value: '100%', label: 'Human-in-the-Loop Safeguards' },
    ],
    capabilities: [
      {
        title: 'Multi-Agent Collaborative Swarms (CrewAI & LangGraph)',
        description:
          'Coordinated agent teams where specialized agents (Researchers, Coders, Quality Reviewers, Planners) collaborate sequentially and hierarchically to solve complex tasks.',
        tags: ['LangGraph', 'CrewAI', 'Hierarchical Swarms', 'Stateful Memory Graphs'],
      },
      {
        title: 'Tool-Calling & API Execution Engines',
        description:
          'Agents equipped with real-world tool execution: querying SQL databases, executing Python code in sandboxes, interacting with CRM APIs, and sending verified webhooks.',
        tags: ['Function Calling', 'E2B Python Sandboxes', 'SQL Query Generation', 'REST API Connectors'],
      },
      {
        title: 'Self-Correction & Reflection Verification Loops',
        description:
          'Adversarial critique loops where validator agents evaluate intermediate reasoning steps, identify hallucinations, and force self-correction before returning output.',
        tags: ['Critique Evaluator', 'Reflexion Architecture', 'Convergence Loops', 'Quality Assurance'],
      },
      {
        title: 'Human-in-the-Loop (HITL) Governance & Auditing',
        description:
          'Configurable approval gates that pause autonomous agent execution for critical actions (financial transfers, external emails, database mutations) awaiting human sign-off.',
        tags: ['Approval Gateways', 'Audit Trails', 'Step-by-Step Trajectories', 'Permission Bounds'],
      },
      {
        title: 'Long-Term Memory & Vector State Persistence',
        description:
          'Cross-session memory architectures storing user preferences, past project context, and procedural knowledge using vector search and hierarchical summarization.',
        tags: ['Long-Term Memory', 'Hierarchical Summarization', 'Context Compaction', 'Vector Knowledge'],
      },
      {
        title: 'Enterprise ERP & Back-Office Autonomous Squads',
        description:
          'Dedicated AI agents for automated customer invoice reconciliation, technical candidate screening, automated bug triage, and real-time competitor intelligence scanning.',
        tags: ['Back-Office Agents', 'Invoice Matching', 'Candidate Screening', 'Automated Triage'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Agent Persona & Workflow Mapping',
        description: 'Defining agent roles, goals, reasoning constraints, tool access permissions, and human approval checkpoints.',
        deliverables: ['Agent Architecture Map', 'Tool Specification Spec', 'Governance & Safety Policy'],
      },
      {
        step: '02',
        title: 'LangGraph State Machine & Tool Sandboxing',
        description: 'Constructing stateful cyclic graphs, tool integration functions, memory stores, and secure isolated code execution sandboxes.',
        deliverables: ['LangGraph State Machine', 'Tool Integration Code', 'Sandbox Security Sandbox'],
      },
      {
        step: '03',
        title: 'Adversarial Verification & Reflection Loops',
        description: 'Implementing critique agents, synthetic edge-case benchmarking, and automated recovery loops for API timeouts.',
        deliverables: ['Validation Benchmark Report', 'Reflexion Evaluators', 'Error Recovery Triggers'],
      },
      {
        step: '04',
        title: 'Production Deployment & Trajectory Telemetry',
        description: 'Deploying agent runtimes with LangSmith trajectory logging, token budget throttling, and human approval dashboard interfaces.',
        deliverables: ['Production Agent Runtime', 'LangSmith Monitoring Setup', 'HITL Approval Dashboard'],
      },
    ],
    deliverables: [
      { title: 'LangGraph / CrewAI Agent Engine Repository', category: 'Agent Code', description: 'Complete stateful Python/TypeScript multi-agent system with full tool connectors and memory stores.', format: 'Git Repository' },
      { title: 'Interactive Human-in-the-Loop Dashboard', category: 'Frontend', description: 'React-based admin interface allowing managers to review agent reasoning trajectories and approve critical steps.', format: 'Web Dashboard' },
      { title: 'Sandboxed Tool Execution Service', category: 'Security', description: 'Secure Docker/E2B environment for isolated database queries, web scraping, and code execution.', format: 'Microservice' },
      { title: 'Telemetry & Token Cost Monitoring Dashboard', category: 'Observability', description: 'Live tracking of agent execution steps, task completion rates, token expenses, and latency.', format: 'LangSmith / Langfuse' },
    ],
    techStack: [
      { category: 'Agent Frameworks', items: ['LangGraph', 'CrewAI', 'OpenAI Assistants API', 'AutoGPT', 'LlamaIndex Workflows'] },
      { category: 'Models', items: ['Claude 3.5 Sonnet', 'GPT-4o', 'DeepSeek R1', 'Llama 3.3 70B'] },
      { category: 'Sandboxes & Tools', items: ['E2B Sandboxes', 'Browserbase', 'Tavily Search', 'SQLAlchemy'] },
      { category: 'Telemetry & Storage', items: ['LangSmith', 'Langfuse', 'PostgreSQL', 'Redis', 'Pinecone'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built an autonomous financial analysis agent squad that reviews and cross-verifies 2,000 quarterly SEC filings per day, extracting revenue anomalies in real time with 99.4% accuracy.',
      author: 'Jonathan Sterling',
      role: 'Managing Director',
      company: 'Delphi Vision Capital',
      metric: '2,000 Filings Analyzed / Day',
    },
    faqs: [
      { question: 'How do AI Agents differ from standard chatbots?', answer: 'Chatbots only respond to single queries with conversational text. AI Agents are autonomous programs that reason through multi-step goals, create execution plans, call external software tools (databases, APIs, calculators), evaluate their own errors, and continue until the task is completely finished.' },
      { question: 'How do you prevent agents from taking dangerous autonomous actions?', answer: 'We implement strict Human-in-the-Loop (HITL) approval gateways. Any sensitive action (e.g., executing a financial transaction, modifying production records, or emailing a client) pauses the agent and sends an approval notification to a human manager.' },
      { question: 'What happens if an API called by the agent fails or times out?', answer: 'Our agentic state machines include self-healing reflection loops. If a tool fails, the agent analyzes the error code, formulates an alternate approach or retries with modified parameters without halting the entire workflow.' },
      { question: 'Can we run AI agents on our own private infrastructure?', answer: 'Yes. We deploy agent engines within your private AWS, GCP, or Azure VPC using open-weights models (like DeepSeek or Llama 3) for complete confidentiality.' },
    ],
  },

  'ai-automations': {
    id: 'ai-automations',
    slug: 'ai-automations',
    title: 'AI Automations',
    tagline: 'End-to-End Enterprise Workflow & Process Automation',
    category: 'AI & Intelligence',
    heroBadge: 'Intelligent Process Automation (IPA)',
    heroHeadline: 'End-to-End Enterprise',
    heroHeadlineHighlight: 'AI Automations & IPA',
    heroDescription:
      'Eliminate repetitive manual operations and accelerate business speed. We replace legacy brittle RPA scripts with cognitive AI automations that ingest messy unstructured documents, automate multi-app data workflows, and reconcile enterprise records in real time.',
    metrics: [
      { value: '70%', label: 'Operational Cost Savings' },
      { value: '< 2 sec', label: 'Document Processing Speed' },
      { value: '99.8%', label: 'Data Extraction Accuracy' },
      { value: 'Zero', label: 'Human Intervention Required' },
    ],
    capabilities: [
      {
        title: 'Cognitive Document Processing (IDP)',
        description:
          'Extracting structured JSON data from non-standard invoices, receipts, bills of lading, medical records, and legal contracts with zero manual data entry.',
        tags: ['LayoutLM & Vision LLMs', 'Invoice Extraction', 'Medical Claims', 'Structured JSON'],
      },
      {
        title: 'Enterprise App Integration & n8n / Zapier Orchestration',
        description:
          'Complex event-driven workflows synchronizing CRM (Salesforce/HubSpot), ERP (NetSuite/SAP), databases, and communication channels (Slack/Email).',
        tags: ['n8n Self-Hosted', 'Salesforce & HubSpot', 'Custom Webhooks', 'Event-Driven Sync'],
      },
      {
        title: 'Automated Financial Reconciliation & Audits',
        description:
          'Matching bank transactions against ledger line items, identifying discrepancies, flagging suspicious fraud patterns, and generating compliance audit trails.',
        tags: ['Bank Reconciliation', 'Ledger Matching', 'Discrepancy Detection', 'Audit Logging'],
      },
      {
        title: 'Intelligent Customer Support Ticket Routing',
        description:
          'Analyzing incoming support emails/tickets, classifying urgency and sentiment, retrieving user account history, and drafting contextual responses or escalating.',
        tags: ['Zendesk / Freshdesk', 'Sentiment Analysis', 'Contextual Auto-Reply', 'Priority Escalation'],
      },
      {
        title: 'Automated Candidate Screening & HR Pipelines',
        description:
          'Parsing thousands of resumes, matching candidate competencies against job descriptions, scheduling interviews, and updating ATS (Greenhouse/Lever).',
        tags: ['Greenhouse / Lever ATS', 'Resume Parsing', 'Skill Matching', 'Automated Scheduling'],
      },
      {
        title: 'Automated Regulatory Compliance & Contract Review',
        description:
          'Scanning legal agreements for non-standard indemnity clauses, GDPR compliance risks, and expiration dates with automatic stakeholder alert notifications.',
        tags: ['Contract Review', 'Risk Flagging', 'GDPR Verification', 'Renewal Alerts'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Process Mapping & ROI Calculation',
        description: 'Shadowing operational teams, cataloging manual bottlenecks, calculating time-savings ROI, and designing workflow state diagrams.',
        deliverables: ['Process Automation Blueprint', 'ROI & Cost-Savings Model', 'Data Privacy Protocol'],
      },
      {
        step: '02',
        title: 'Document AI Pipeline & Connector Build',
        description: 'Training OCR extraction models, configuring API credentials, and writing n8n/Python orchestrator workflows.',
        deliverables: ['Document Processing Models', 'n8n Workflow Templates', 'API Connector Modules'],
      },
      {
        step: '03',
        title: 'Exception Handling & Confidence Thresholds',
        description: 'Implementing fallback queues for low-confidence extractions, human validation portals, and automated retry logic.',
        deliverables: ['Human Review Portal', 'Exception Handling Rules', 'Confidence Scoring Engine'],
      },
      {
        step: '04',
        title: 'Production Cutover & Savings Dashboard',
        description: 'Deploying automation engines to production with live Grafana dashboards monitoring throughput, error rates, and saved hours.',
        deliverables: ['Production Automation Setup', 'Executive ROI Dashboard', 'Operations Runbook'],
      },
    ],
    deliverables: [
      { title: 'Self-Hosted n8n / Python Automation Workflows', category: 'Automation Engine', description: 'Production-ready workflow definitions with error-handling, webhook triggers, and enterprise connectors.', format: 'n8n JSON & Python' },
      { title: 'Intelligent Document Processing (IDP) Service', category: 'AI Microservice', description: 'High-speed API for converting PDFs and images into validated structured JSON records.', format: 'FastAPI / Docker' },
      { title: 'Low-Confidence Exception Review Dashboard', category: 'Frontend', description: 'Lightweight web interface allowing operations staff to quickly verify edge-case documents with one click.', format: 'React Web Portal' },
      { title: 'ROI & Operational Hours Saved Dashboard', category: 'Analytics', description: 'Live tracking of automated transactions, processing speed, accuracy rates, and financial savings.', format: 'Grafana & Metabase' },
    ],
    techStack: [
      { category: 'Orchestration', items: ['n8n Self-Hosted', 'Temporal.io', 'Apache Airflow', 'Make / Zapier'] },
      { category: 'Document AI', items: ['LayoutLM v3', 'AWS Textract', 'Google Document AI', 'OpenAI Vision'] },
      { category: 'Enterprise Connectors', items: ['Salesforce', 'HubSpot', 'NetSuite', 'Stripe', 'Zendesk', 'Jira'] },
      { category: 'Databases & Queues', items: ['PostgreSQL', 'Redis', 'RabbitMQ', 'AWS SQS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds automated our freight invoice processing workflow. We went from 12 full-time clerks manually entering data over 48 hours to fully automated 3-second processing with 99.8% accuracy.',
      author: 'Henrik Lindqvist',
      role: 'VP of Global Logistics',
      company: 'Maersk Broker Digital',
      metric: '99.8% Extraction Accuracy',
    },
    faqs: [
      { question: 'How is AI Automation different from traditional RPA (like UiPath)?', answer: 'Traditional RPA relies on brittle screen coordinates that break whenever a website or software updates its UI. Cognitive AI Automations use API-first integrations and LLM document understanding to process messy, variable layouts without breaking.' },
      { question: 'What happens when a document has bad handwriting or poor scan quality?', answer: 'Our system assigns confidence scores to every extracted field. If confidence falls below your defined threshold (e.g. 95%), the document is automatically routed to a fast human review portal with highlighted fields for 5-second signoff.' },
      { question: 'Can automations be hosted entirely on our private cloud servers?', answer: 'Yes. We specialize in deploying self-hosted n8n, Temporal, and local AI model containers inside your AWS, GCP, or on-premise infrastructure for complete data isolation.' },
      { question: 'How quickly can we see positive ROI from an automation project?', answer: 'Most enterprise automation workflows pay for themselves within 60 to 90 days by eliminating thousands of hours of manual administrative labor and preventing costly human entry errors.' },
    ],
  },

  'chatbot-videobot': {
    id: 'chatbot-videobot',
    slug: 'chatbot-videobot',
    title: 'Chatbot & Video Bot Development',
    tagline: 'Conversational AI, Voice Agents & Real-Time Video Avatars',
    category: 'AI & Intelligence',
    heroBadge: 'Conversational AI & Synthetic Avatars',
    heroHeadline: 'Conversational AI, Voice',
    heroHeadlineHighlight: '& Video Bot Development',
    heroDescription:
      'Transform customer and employee interactions with next-generation conversational experiences. We build multi-lingual conversational AI chatbots, ultra-low-latency voice agents, and interactive real-time video avatar assistants powered by LLMs.',
    metrics: [
      { value: '< 600ms', label: 'Voice-to-Voice Latency' },
      { value: '95%', label: 'First-Contact Resolution' },
      { value: '50+ Languages', label: 'Multi-Lingual Support' },
      { value: '24/7', label: 'Always-On Availability' },
    ],
    capabilities: [
      {
        title: 'Enterprise Multi-Channel AI Chatbots',
        description:
          'Smart conversational bots integrated across Web, WhatsApp, iOS, Android, Slack, and Microsoft Teams grounded in your proprietary knowledge base with zero hallucinations.',
        tags: ['Web / WhatsApp / Slack', 'Zendesk & Intercom Sync', 'RAG Knowledge Grounding', 'Contextual Memory'],
      },
      {
        title: 'Real-Time Interactive Video Avatar Bots',
        description:
          'Photorealistic synthetic digital humans with synchronized lip-sync, dynamic facial expressions, and natural eye contact for virtual sales reps and onboarding concierges.',
        tags: ['HeyGen / Tavus Avatars', 'WebRTC Video Streams', 'Lip-Sync Animation', 'Interactive Kiosks'],
      },
      {
        title: 'Ultra-Low-Latency Voice AI Agents',
        description:
          'Sub-600ms conversational phone and web voice bots that interrupt naturally, understand tone, handle objections, and schedule calendar appointments.',
        tags: ['LiveKit / WebRTC', 'Whisper & Deepgram STT', 'ElevenLabs & Cartesia TTS', 'Twilio Phone Calling'],
      },
      {
        title: 'Live CRM & Calendar Action Triggers',
        description:
          'Bots that go beyond talking by booking Google/Outlook calendar slots, querying order statuses in Shopify, updating HubSpot deals, and processing payments.',
        tags: ['Calendar Booking', 'Shopify Order Queries', 'HubSpot / Salesforce Sync', 'Payment Links'],
      },
      {
        title: 'Intelligent Human Handoff & Sentiment Escalation',
        description:
          'Seamless real-time handoff to human agents when sentiment turns negative or complex edge-cases occur, transferring complete conversation transcripts and context.',
        tags: ['Live Agent Handoff', 'Sentiment Monitoring', 'Zendesk Chat Transfer', 'Context Preservation'],
      },
      {
        title: 'Enterprise Guardrails & Privacy Redaction',
        description:
          'Strict real-time PII redaction (masking credit cards and SSNs), prompt-injection defenses, and brand-safe response validation filters.',
        tags: ['NeMo Guardrails', 'Real-Time PII Masking', 'Prompt Injection Shield', 'Brand Voice Controls'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Conversation Design & Persona Definition',
        description: 'Mapping customer intent trees, defining brand voice tone, safety boundaries, and avatar visual aesthetic.',
        deliverables: ['Conversation Flow Diagram', 'Brand Voice Guide', 'Avatar Visual Spec'],
      },
      {
        step: '02',
        title: 'Knowledge Base Grounding & Voice Latency Tuning',
        description: 'Connecting product documentation, fine-tuning Speech-to-Text models, and configuring sub-second audio streaming pipelines.',
        deliverables: ['Vector Knowledge Store', 'WebRTC Audio Engine', 'Low-Latency Pipeline'],
      },
      {
        step: '03',
        title: 'Avatar Rendering & Tool-Calling Integration',
        description: 'Integrating synthetic video avatar lip-sync engines, calendar scheduling tools, and CRM live update webhooks.',
        deliverables: ['Video Stream Engine', 'Calendar & CRM Tools', 'Human Handoff Trigger'],
      },
      {
        step: '04',
        title: 'Multi-Channel Deployment & Analytics',
        description: 'Deploying widgets to website, WhatsApp, and phone telephony with real-time conversation analytics dashboards.',
        deliverables: ['Embeddable Web Widget', 'Telephony Phone Line', 'Conversation Analytics Suite'],
      },
    ],
    deliverables: [
      { title: 'Embeddable Web & Mobile Bot Widget', category: 'Frontend', description: 'Lightweight, responsive React/JavaScript widget with voice input, video avatar streaming, and dark mode support.', format: 'NPM Package / Script' },
      { title: 'Real-Time Voice / Video AI Streaming Server', category: 'Backend Engine', description: 'High-throughput WebRTC audio/video server orchestrating speech recognition, LLM reasoning, and voice generation.', format: 'FastAPI / WebRTC' },
      { title: 'WhatsApp & Telephony Phone Integration', category: 'Omnichannel', description: 'Twilio and Meta Cloud API connectors for inbound/outbound customer phone calls and WhatsApp messaging.', format: 'Cloud Webhook Service' },
      { title: 'Conversation Analytics & Transcript Dashboard', category: 'Analytics', description: 'Real-time analytics tracking resolution rates, sentiment scores, drop-off questions, and deflection savings.', format: 'Analytics Portal' },
    ],
    techStack: [
      { category: 'LLMs & Reasoning', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Groq LPU Inference', 'Mistral'] },
      { category: 'Voice & Video', items: ['LiveKit WebRTC', 'Deepgram STT', 'ElevenLabs TTS', 'Cartesia', 'HeyGen Streaming'] },
      { category: 'Channels', items: ['Twilio Telephony', 'WhatsApp Cloud API', 'Slack API', 'Intercom / Zendesk'] },
      { category: 'Infrastructure', items: ['WebSockets', 'Redis Streams', 'Docker', 'AWS ECS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our 24/7 interactive customer video avatar and phone voice agent. It resolves 91% of tier-1 support tickets instantly, reducing our customer wait times to under 5 seconds.',
      author: 'Sophia Martinez',
      role: 'Director of Customer Experience',
      company: 'FinServe Global',
      metric: '91% Tier-1 Resolution Rate',
    },
    faqs: [
      { question: 'How realistic are real-time video avatar bots in 2026?', answer: 'Extremely realistic. Using modern WebRTC synthetic rendering and photorealistic generative diffusion, our avatars feature natural human eye blinking, head movement, realistic breathing, and millisecond-accurate lip synchronization.' },
      { question: 'How do you achieve conversational voice latency under 600ms?', answer: 'We utilize ultra-fast Groq LPU inference, Deepgram streaming Speech-to-Text, and Cartesia sonic voice models over WebRTC connections to ensure speech begins before the user notices any pause.' },
      { question: 'Can the bot transfer users to a live human support rep if needed?', answer: 'Yes. The bot continuously monitors user sentiment and frustration markers. If triggered, it transfers the caller to your Zendesk, Freshdesk, or phone queue with the complete context transcript.' },
      { question: 'Can the chatbot speak multiple languages?', answer: 'Yes. Our bots automatically detect the user’s language (over 50+ languages supported) and respond fluently with native cultural nuances and correct pronunciation.' },
    ],
  },

  'analytics-dashboard': {
    id: 'analytics-dashboard',
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    tagline: 'Real-Time Business Intelligence & Interactive Data Visualization',
    category: 'Cloud & Operations',
    heroBadge: 'Enterprise BI & Real-Time Dashboards',
    heroHeadline: 'Real-Time Business',
    heroHeadlineHighlight: 'Analytics & Dashboards',
    heroDescription:
      'Turn vast data streams into actionable executive clarity. We engineer real-time business intelligence dashboards, custom embedded analytics, high-performance time-series charts, and automated data warehouse pipelines using modern technologies.',
    metrics: [
      { value: '< 100ms', label: 'Data Query Speed' },
      { value: '10M+ Rows', label: 'Rendered in Real Time' },
      { value: '100%', label: 'Embedded White-Label Ready' },
      { value: 'SOC 2', label: 'Compliant Data Governance' },
    ],
    capabilities: [
      {
        title: 'Real-Time Interactive Data Visualizations',
        description:
          'High-performance interactive charts, financial heatmaps, geographic spatial maps, and hierarchical tree maps built with Apache ECharts, D3.js, and Canvas.',
        tags: ['Apache ECharts / D3.js', 'WebGL Canvas Renderers', 'Financial Heatmaps', 'Geospatial Maps'],
      },
      {
        title: 'Embedded White-Label Customer Analytics',
        description:
          'Seamlessly embedding multi-tenant analytics dashboards directly inside your SaaS application with row-level security (RLS) and custom client branding.',
        tags: ['Multi-Tenant RLS', 'Embedded Analytics', 'White-Label Theming', 'Export to PDF/CSV'],
      },
      {
        title: 'Modern Data Stack (ClickHouse, Snowflake, BigQuery)',
        description:
          'High-speed columnar analytical data warehouses (ClickHouse, Snowflake, DuckDB) capable of querying billions of rows in milliseconds without degrading production DBs.',
        tags: ['ClickHouse / DuckDB', 'Snowflake & BigQuery', 'dbt Data Modeling', 'Columnar Storage'],
      },
      {
        title: 'Real-Time Event Streaming & ETL Pipelines',
        description:
          'Automated data ingestion from PostgreSQL, Stripe, Segment, and Kafka streams transformed with dbt pipelines into clean analytical data marts.',
        tags: ['Kafka / Debezium CDC', 'dbt Transformations', 'Airflow Pipelines', 'Data Lakes'],
      },
      {
        title: 'Automated Executive Reports & Slack/Email Alerts',
        description:
          'Scheduled PDF executive summaries, automated KPI variance anomaly alerts, and real-time Slack notifications whenever financial metrics cross target thresholds.',
        tags: ['Automated PDF Reports', 'Anomaly Detection', 'Slack / Email Alerts', 'KPI Forecasting'],
      },
      {
        title: 'Natural Language "Talk to Your Data" (Text-to-SQL)',
        description:
          'Empower non-technical executives to ask plain English questions ("Show MRR growth in Europe last quarter") and receive verified charts and SQL citations instantly.',
        tags: ['Text-to-SQL LLM', 'Semantic Data Layers', 'SQL Guardrails', 'Self-Service BI'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'Data Modeling & KPI Workshop',
        description: 'Identifying key executive metrics, mapping transactional database schemas, and designing analytical star-schemas.',
        deliverables: ['KPI Metrics Taxonomy', 'Dimensional Star Schema', 'Query Performance Goals'],
      },
      {
        step: '02',
        title: 'Analytical Data Warehouse & ETL Ingestion',
        description: 'Deploying ClickHouse or Snowflake warehouses with automated change-data-capture (CDC) pipelines from production DBs.',
        deliverables: ['ClickHouse / Snowflake Schema', 'dbt Transformation Models', 'Automated CDC Sync'],
      },
      {
        step: '03',
        title: 'Interactive Dashboard UI & Component Build',
        description: 'Developing responsive React dashboard layouts, custom filter bars, date-range pickers, and high-framerate charts.',
        deliverables: ['React Dashboard Component Kit', 'Apache ECharts Visualizations', 'PDF Export Engine'],
      },
      {
        step: '04',
        title: 'Row-Level Security & Production Launch',
        description: 'Configuring multi-tenant security filters, cache invalidation rules, and role-based viewing permissions.',
        deliverables: ['Row-Level Security Policies', 'Cache Performance Tuning', 'User Documentation'],
      },
    ],
    deliverables: [
      { title: 'Interactive React Analytics Dashboard Application', category: 'Frontend', description: 'Modular, responsive dashboard portal with dark/light themes, custom filters, and sub-100ms chart rendering.', format: 'React / Next.js' },
      { title: 'Analytical Data Warehouse & dbt Models', category: 'Data Architecture', description: 'Optimized columnar database schema with automated dbt transformation scripts and data tests.', format: 'ClickHouse / dbt Code' },
      { title: 'Automated Scheduled PDF Reporting Engine', category: 'Reporting', description: 'Microservice generating pixel-perfect executive PDF summaries delivered via email and Slack.', format: 'Puppeteer Microservice' },
      { title: 'Natural Language Text-to-SQL Interface', category: 'AI Analytics', description: 'Semantic layer allowing users to query metrics using natural language with guaranteed SQL accuracy.', format: 'FastAPI Service' },
    ],
    techStack: [
      { category: 'Visualization', items: ['Apache ECharts', 'D3.js', 'Tremor', 'Chart.js', 'Mapbox GL'] },
      { category: 'Data Warehouses', items: ['ClickHouse', 'Snowflake', 'DuckDB', 'Google BigQuery', 'PostgreSQL Timescale'] },
      { category: 'Data Engineering', items: ['dbt', 'Apache Airflow', 'Kafka', 'Debezium', 'Dagster'] },
      { category: 'Frontend & APIs', items: ['Next.js 15', 'React 19', 'FastAPI', 'Tailwind CSS'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds built our multi-tenant SaaS analytics portal on ClickHouse. Our customers can now analyze 50 million transaction records in under 80 milliseconds directly inside our application.',
      author: 'Rachel Kovalev',
      role: 'VP of Product Analytics',
      company: 'City Index Analytics',
      metric: '< 80ms Query on 50M Records',
    },
    faqs: [
      { question: 'Will running heavy analytics queries slow down our live production database?', answer: 'No. We use Change Data Capture (CDC) to stream data from your production transactional database into an isolated columnar analytical warehouse (like ClickHouse or Snowflake), ensuring zero performance impact on live users.' },
      { question: 'Can we embed these dashboards directly inside our existing SaaS app?', answer: 'Yes. We build embedded React components with Row-Level Security (RLS) so each of your enterprise customers only sees their authorized data with your white-label branding.' },
      { question: 'How do you handle multi-million row datasets without browser lag?', answer: 'We utilize server-side aggregation, WebGL Canvas chart renderers, and progressive data windowing so millions of data points render at a silky smooth 60 frames per second.' },
      { question: 'Can non-technical executives create custom queries without knowing SQL?', answer: 'Yes. We integrate our natural language "Talk to Your Data" interface, allowing executives to ask questions in plain English and receive instant verified visual charts.' },
    ],
  },

  'technical-support': {
    id: 'technical-support',
    slug: 'technical-support',
    title: 'Technical Support',
    tagline: '24/7 SLA-Backed Maintenance, Monitoring & Incident Management',
    category: 'Cloud & Operations',
    heroBadge: '24/7 SLA Technical Maintenance',
    heroHeadline: '24/7 Enterprise SLA',
    heroHeadlineHighlight: '& Technical Support',
    heroDescription:
      'Ensure uninterrupted business continuity for mission-critical software. We provide round-the-clock L1-L3 technical support, proactive uptime monitoring, automated vulnerability patching, database optimization, and guaranteed response SLAs.',
    metrics: [
      { value: '< 15 min', label: 'P1 Critical Response Time' },
      { value: '24/7/365', label: 'Continuous Human Coverage' },
      { value: '99.99%', label: 'Guaranteed System Uptime' },
      { value: '100%', label: 'Dedicated Escalation Engineers' },
    ],
    capabilities: [
      {
        title: '24/7/365 L1-L3 Tiered Support Squads',
        description:
          'Dedicated support engineers covering L1 triage, L2 technical investigation, and L3 core code debugging with clear SLA escalation matrix governance.',
        tags: ['L1-L3 Tiered Support', '24/7 Global Rotation', 'Sub-15m P1 SLA', 'Dedicated Squads'],
      },
      {
        title: 'Proactive Synthetic Uptime & Performance Monitoring',
        description:
          'Automated health checks, synthetic browser user journeys, API endpoint heartbeats, and memory leak detection alerting engineers before users notice issues.',
        tags: ['Datadog & New Relic', 'Synthetic User Journeys', 'API Heartbeats', 'Memory Profiling'],
      },
      {
        title: 'Security Vulnerability Patching & Dependency Upgrades',
        description:
          'Continuous CVE scanning, automated zero-day security patching, database minor/major version upgrades, and library compatibility maintenance.',
        tags: ['CVE Vulnerability Scans', 'Zero-Day Patching', 'Database Upgrades', 'Dependency Audits'],
      },
      {
        title: 'Continuous Database Health & Performance Tuning',
        description:
          'Slow query log optimization, vacuuming routines, index re-indexing, read-replica lag management, and automated disaster recovery backup drills.',
        tags: ['PostgreSQL / MySQL Tuning', 'Index Optimization', 'Backup Restorations', 'Deadlock Resolution'],
      },
      {
        title: 'Cloud Cost Optimization & Right-Sizing',
        description:
          'Ongoing monthly FinOps audits, eliminating orphaned cloud volumes, optimizing storage lifecycles, and adjusting serverless memory limits.',
        tags: ['FinOps Auditing', 'Orphaned Resource Pruning', 'Cloud Capacity Planning', 'Cost Controls'],
      },
      {
        title: 'Disaster Recovery Drills & Business Continuity',
        description:
          'Semi-annual disaster recovery simulation tests, point-in-time database restore verification, and multi-region failover certifications.',
        tags: ['RTO < 30min / RPO < 5min', 'Disaster Recovery Drills', 'Multi-Region Failover', 'Audit Documentation'],
      },
    ],
    processSteps: [
      {
        step: '01',
        title: 'System Handover & Runbook Ingestion',
        description: 'Auditing existing codebase, documenting cloud topology, capturing environment variables, and establishing escalation matrices.',
        deliverables: ['System Runbook Specification', 'SLA Escalation Matrix', 'Access & Security Credentials'],
      },
      {
        step: '02',
        title: 'Synthetic Monitoring & Alert Integration',
        description: 'Deploying Datadog / Prometheus synthetic monitors, configuring PagerDuty alert thresholds, and testing incident loops.',
        deliverables: ['Synthetic Alert Setup', 'PagerDuty On-Call Schedule', 'Live System Health Board'],
      },
      {
        step: '03',
        title: 'Continuous Maintenance & Patch Management',
        description: 'Executing bi-weekly dependency updates, security vulnerability remediation, and database maintenance scripts.',
        deliverables: ['Monthly Patch Report', 'Security Audit Logs', 'Performance Improvement Log'],
      },
      {
        step: '04',
        title: 'Quarterly Executive Review & DR Drills',
        description: 'Presenting quarterly SLA compliance scorecards, cloud expenditure trends, and conducting full disaster recovery restoration drills.',
        deliverables: ['Quarterly SLA Scorecard', 'Disaster Recovery Certificate', 'Infrastructure Roadmap'],
      },
    ],
    deliverables: [
      { title: '24/7 SLA Support Agreement & Runbook', category: 'Governance', description: 'Legally binding SLA contract outlining response times (P1 < 15 min, P2 < 1 hour), coverage, and runbooks.', format: 'Formal SLA Document' },
      { title: 'Live System Health & Status Page', category: 'Monitoring', description: 'Public or private status page (e.g. status.yourcompany.com) tracking real-time uptime and incident history.', format: 'Hosted Status Portal' },
      { title: 'Monthly Maintenance & Performance Report', category: 'Reporting', description: 'Detailed breakdown of resolved tickets, security patches applied, uptime percentages, and response metrics.', format: 'Monthly Executive PDF' },
      { title: 'Disaster Recovery Audit & Restore Certificate', category: 'Compliance', description: 'Documented test results confirming RTO (<30m) and RPO (<5m) restoration from cloud backups.', format: 'Audit Certificate' },
    ],
    techStack: [
      { category: 'Monitoring & Alerting', items: ['Datadog', 'Prometheus', 'Grafana', 'PagerDuty', 'Sentry', 'BetterUptime'] },
      { category: 'Cloud Management', items: ['AWS Systems Manager', 'Google Cloud Operations', 'Azure Monitor', 'Cloudflare'] },
      { category: 'Ticketing & Service Desk', items: ['Jira Service Management', 'Zendesk', 'Linear', 'ServiceNow'] },
      { category: 'Security & Scanning', items: ['Snyk', 'Trivy', 'Dependabot', 'SonarQube'] },
    ],
    caseStudyQuote: {
      quote: 'Neominds manages 24/7 support for our core transaction platform. Over 3 years of partnership, we have maintained a 99.995% uptime record with zero unaddressed critical incidents.',
      author: 'Elena Rostova',
      role: 'Chief Operating Officer',
      company: 'Authenticom Logistics',
      metric: '99.995% Uptime Over 3 Years',
    },
    faqs: [
      { question: 'What is your response time for critical P1 production outages?', answer: 'We guarantee a sub-15 minute response time for P1 critical outages (complete system downtime or data integrity threat) with engineers actively troubleshooting and communicating in dedicated incident channels.' },
      { question: 'How do your support engineers get up to speed on our custom codebase?', answer: 'We perform a structured 2-week onboarding transition period where our senior architects map all dependencies, document operational runbooks, and shadow your team before going live.' },
      { question: 'Do you only fix bugs, or do you also build feature enhancements?', answer: 'Our support plans include dedicated development hours each month that can be flexibly allocated to minor feature additions, UI enhancements, or dependency modernization.' },
      { question: 'How do you handle security vulnerability updates?', answer: 'We continuously run automated dependency vulnerability scans (CVE tracking) and deploy critical security patches within 24 hours of release following strict staging validation.' },
    ],
  },
};
