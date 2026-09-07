export interface ServiceMetaSummary {
  title: string;
  description: string;
  heroImage?: string;
}

export const SERVICE_METADATA_MAP: Record<string, ServiceMetaSummary> = {
  'software-development': {
    title: "Software Development",
    description: "Full-Cycle Custom Software Engineering",
  },
  'ai-development': {
    title: "AI Development",
    description: "Production ML, Custom LLMs & Foundation Model Engineering",
  },
  'mobile-app-development': {
    title: "Mobile App Development",
    description: "Native iOS, Android & High-Performance Cross-Platform Apps",
  },
  'web-cms-development': {
    title: "Web & CMS Development",
    description: "Headless CMS, Edge-Rendered Web Applications & Sub-Second Page Loads",
  },
  'ecommerce-development': {
    title: "Ecommerce Development",
    description: "Headless Commerce, Sub-Second Catalog Search & High-Concurrency Checkout",
  },
  'ai-agents': {
    title: "AI Agents",
    description: "Recursive Reasoning, Dynamic Tool-Calling & Persistent Vector Memory",
  },
  'ai-automations': {
    title: "AI Automations",
    description: "Automated Document Processing, Event-Driven Workflows & Zero-Touch Back-Office",
  },
  'chatbot-videobot': {
    title: "Chatbot & Video Bot",
    description: "Real-Time Conversational AI, Low-Latency Voice & Photorealistic WebRTC Video Avatars",
  },
  'analytics-dashboard': {
    title: "Analytics Dashboard",
    description: "Real-Time Business Intelligence & Interactive Data Visualization",
  },
  'technical-support': {
    title: "Technical Support",
    description: "24/7 SLA-Backed Maintenance, Monitoring & Incident Management",
  },
  'digital-banking': {
    title: "Digital Banking",
    description: "Next-Generation Core & Digital Banking Architectures",
  },
  'payment-solutions': {
    title: "Payment Solutions",
    description: "High-Throughput Payment Gateways, Tokenization & Multi-Acquirer Routing",
  },
  'lending-credit-platforms': {
    title: "Lending & Credit Platforms",
    description: "Automated Loan Origination, Credit Decisioning & Servicing Engines",
  },
  'investment-wealth-management': {
    title: "Investment & Wealth Management",
    description: "Institutional Portfolio Management, Robo-Advisory & Custody Systems",
  },
  'financial-analytics': {
    title: "Financial Analytics",
    description: "Real-Time Quantitative Analytics, Cash Flow Forecasting & Treasury BI",
  },
  'fraud-risk-management': {
    title: "Fraud & Risk Management",
    description: "Sub-10ms Transaction Risk Scoring, AML Screening & Anomaly Detection",
  },
  'healthcare-management-software': {
    title: "Healthcare Management Software",
    description: "Enterprise EHR/EMR Integration, Hospital Operating Systems & FHIR Backends",
  },
  'telemedicine-platforms': {
    title: "Telemedicine Platforms",
    description: "HIPAA-Compliant Video Consultations, Virtual Waiting Rooms & Clinical Chat",
  },
  'patient-engagement': {
    title: "Patient Engagement",
    description: "Omnichannel Patient Portals, Automated Scheduling & Care Journeys",
  },
  'medical-ai-solutions': {
    title: "Medical AI Solutions",
    description: "Clinical Decision Support, Diagnostic Imaging AI & Medical NLP",
  },
  'healthcare-analytics': {
    title: "Healthcare Analytics",
    description: "Population Health BI, Value-Based Care Telemetry & Epidemiological Dashboards",
  },
  'healthcare-automation': {
    title: "Healthcare Automation",
    description: "Prior Authorization Automation, Revenue Cycle Management & Clinical Routing",
  },
  'ai-product-engineering': {
    title: "AI Product Engineering",
    description: "Enterprise AI Product Design, Foundation Model Integration & Production Runtimes",
  },
  'applied-ai': {
    title: "Applied AI",
    description: "Domain-Specific Machine Learning, Predictive Modeling & Operational AI",
  },
  'ai-agent-systems': {
    title: "AI Agent Systems",
    description: "Distributed Multi-Agent Architectures, Dynamic Negotiation & Swarm Intelligence",
  },
  'intelligent-automation': {
    title: "Intelligent Automation",
    description: "Human-in-the-Loop Process Automation, Decision Orchestration & Core Workflows",
  },
  'generative-ai': {
    title: "Generative AI",
    description: "Enterprise Generative Media, Synthetic Data & Domain-Specific Foundation Models",
  },
};
