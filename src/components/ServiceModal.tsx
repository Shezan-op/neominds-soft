import React from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

export interface ServiceDetail {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  engagementModels: string[];
  techStack: string[];
}

export const serviceDetails: Record<number, ServiceDetail> = {
  1: {
    id: 1,
    title: 'DESIGN THINKING & UX ARCHITECTURE',
    subtitle: 'From user intent and business objectives to production design systems.',
    description:
      'Our UX practice bridges product discovery and enterprise engineering. We translate complex domain workflows into frictionless user experiences, interactive prototypes, and tokenized design systems that guarantee engineering alignment.',
    deliverables: [
      'Comprehensive User Journey & Cognitive Friction Audits',
      'Interactive Figma Prototyping & Usability Benchmarking',
      'Tokenized Design Systems (Variables, Dark/Light Themes, Tokens)',
      'Design-to-Code Engineering Handoff Specs',
    ],
    engagementModels: ['Embedded UX Squad', 'Design Sprint Workshop', 'Full Design System Architecture'],
    techStack: ['Figma', 'Storybook', 'Tailwind/CSS Variables', 'Motion GSAP', 'WCAG 2.2 AAA Standards'],
  },
  2: {
    id: 2,
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    subtitle: 'High-throughput, resilient cloud-native systems architected for scale.',
    description:
      'We engineer bespoke enterprise applications designed for high transaction volume, zero downtime, and strict data security requirements. From distributed backend microservices to reactive web portals, we deliver mission-critical software.',
    deliverables: [
      'Distributed Microservices & Event-Driven Kernels',
      'High-Performance Web & Enterprise Portals',
      'REST & GraphQL API Gateways with Rate-Limiting',
      'Database Sharding & Query Optimization Strategies',
    ],
    engagementModels: ['Dedicated Engineering Team', 'Staff Augmentation', 'Fixed-Scope Turnkey Delivery'],
    techStack: ['Node.js', 'Go', 'Rust', 'Java Spring Boot', 'Python', 'PostgreSQL', 'Redis', 'Kafka'],
  },
  3: {
    id: 3,
    title: 'AI & MACHINE LEARNING INTEGRATION',
    subtitle: 'Production-ready cognitive intelligence, RAG pipelines, and agentic workflows.',
    description:
      'Move beyond simple AI prototypes into production-grade cognitive systems. We design agentic reasoning loops, fine-tune domain LLMs, establish secure vector databases, and implement automated AI evaluation harnesses.',
    deliverables: [
      'Autonomous Multi-Agent Task Orchestration',
      'High-Precision RAG (Retrieval-Augmented Generation) Architectures',
      'Proprietary Model Fine-Tuning & Quantization',
      'AI Safety, Guardrails & HIPAA/SOC2 Audit Logging',
    ],
    engagementModels: ['AI Pilot to Production (8 Weeks)', 'Dedicated Cognitive Team', 'Enterprise RAG Accelerator'],
    techStack: ['PyTorch', 'LangGraph', 'OpenAI/Anthropic APIs', 'Ollama/vLLM', 'pgvector', 'Pinecone', 'FastAPI'],
  },
  4: {
    id: 4,
    title: 'CLOUD & DEVOPS ENGINEERING',
    subtitle: 'Automated CI/CD pipelines, Kubernetes orchestration, and resilient multi-cloud architecture.',
    description:
      'Achieve 99.999% system reliability and instant developer velocity. We build automated GitOps infrastructure-as-code, multi-region failover clusters, and end-to-end observability suites across AWS, GCP, and Azure.',
    deliverables: [
      'Terraform & Pulumi Infrastructure-as-Code (IaC)',
      'Multi-Cluster Kubernetes & Service Mesh Deployments',
      'Zero-Downtime Blue/Green & Canary CI/CD Pipelines',
      '24/7 SRE Observability & Distributed Tracing Dashboards',
    ],
    engagementModels: ['DevOps Transformation', 'Cloud Migration Squad', '24/7 Managed SRE Support'],
    techStack: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Kubernetes', 'Terraform', 'Docker', 'Datadog', 'Prometheus'],
  },
  5: {
    id: 5,
    title: 'MOBILE APP DEVELOPMENT',
    subtitle: 'Fluid, 60fps native iOS, Android, and cross-platform Flutter/React Native solutions.',
    description:
      'We build consumer and enterprise mobile applications with tactile micro-interactions, offline-first data synchronization, biometric hardware security, and seamless cloud backend integrations.',
    deliverables: [
      'Native iOS (Swift / SwiftUI) & Android (Kotlin / Jetpack Compose)',
      'Cross-Platform Flutter & React Native Architecture',
      'Offline-First Local Data Sync (SQLite, WatermelonDB)',
      'App Store & Play Store CI/CD Automated Submission Pipeline',
    ],
    engagementModels: ['Dedicated Mobile Squad', 'End-to-End App Launch', 'App Modernization'],
    techStack: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'SQLite', 'GraphQL', 'Fastlane'],
  },
  6: {
    id: 6,
    title: 'LEGACY APPLICATION MODERNIZATION',
    subtitle: 'Decoupling monolithic codebases and migrating databases without live disruption.',
    description:
      'Eliminate technical debt and scale your legacy codebase. Using the Strangler-Fig pattern, we incrementally modernize legacy monolithic applications into modular cloud microservices with zero downtime for existing operations.',
    deliverables: [
      'Comprehensive Monolith Code & Database Dependency Audit',
      'Strangler-Fig Incremental Migration Roadmap',
      'Automated Database Schema Migration & Data Validation',
      'API Facade & Proxy Layer Implementation',
    ],
    engagementModels: ['Step-by-Step Modernization Phased Retainer', 'Architecture Advisory'],
    techStack: ['Docker', 'Kafka', 'PostgreSQL', 'Debezium CDC', 'Envoy Proxy', 'Go/TypeScript'],
  },
  7: {
    id: 7,
    title: 'QUALITY ASSURANCE & TEST AUTOMATION',
    subtitle: 'End-to-end automated testing, chaos engineering, and security vulnerability scanning.',
    description:
      'Ensure airtight software stability with automated regression testing, high-load performance stress tests, visual regression diffs, and security pen-testing embedded directly in your continuous integration pipeline.',
    deliverables: [
      'End-to-End Automated Test Suites (Playwright & Cypress)',
      'High-Concurrency Load & Stress Testing (k6, Locust)',
      'Security Vulnerability & SAST/DAST Static Analysis',
      'Automated Visual Regression Diff CI Checkers',
    ],
    engagementModels: ['QA Automation Squad', 'Pre-Launch Security & Load Audit', 'Continuous Test Integration'],
    techStack: ['Playwright', 'Cypress', 'k6', 'Jest/Vitest', 'SonarQube', 'OWASP ZAP'],
  },
};

interface ServiceModalProps {
  serviceId: number | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ serviceId, onClose, onRequestQuote }) => {
  if (!serviceId || !serviceDetails[serviceId]) return null;

  const data = serviceDetails[serviceId];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(12px, 3vw, 24px)',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        data-lenis-prevent
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: '#0a0e17',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#ffffff',
          borderRadius: '0px',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
          position: 'relative',
          padding: 'clamp(24px, 4vw, 48px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: 'none',
            minWidth: '44px',
            minHeight: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            fontWeight: 700,
            color: '#2258e7',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '8px',
            paddingRight: '48px',
          }}
        >
          ENGINEERING CAPABILITY #0{data.id}
        </span>

        <h2
          id="modal-service-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: '12px',
            letterSpacing: '-0.02em',
          }}
        >
          {data.title}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(15px, 1.6vw, 17px)',
            color: '#93c5fd',
            marginBottom: '20px',
            lineHeight: 1.5,
          }}
        >
          {data.subtitle}
        </p>

        <p
          className="body-text"
          style={{
            color: '#d0d3dd',
            marginBottom: '28px',
            paddingBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            lineHeight: 1.68,
          }}
        >
          {data.description}
        </p>

        {/* Deliverables */}
        <div style={{ marginBottom: '32px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
            Key Deliverables & Outcomes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.deliverables.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <CheckCircle size={18} color="#2258e7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span className="body-text" style={{ color: '#e4e4e7', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models & Tech Stack */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '36px' }}>
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
              Engagement Models
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {data.engagementModels.map((em, idx) => (
                <span key={idx} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#8893a7' }}>
                  • {em}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
              Primary Technologies
            </h4>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {data.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    backgroundColor: '#161b26',
                    padding: '4px 10px',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <button
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="btn-primary btn-lg"
          >
            Request Engineering Proposal <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>

          <button
            onClick={onClose}
            style={{ color: '#8893a7', fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-heading)', minHeight: '44px', padding: '8px 16px' }}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
