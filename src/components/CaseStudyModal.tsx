import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export interface CaseStudyDetail {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export const caseStudyDetails: Record<string, CaseStudyDetail> = {
  '1': {
    id: '1',
    title: 'AI integration for medical coding software',
    client: 'TruBridge Healthcare',
    industry: 'Healthcare & HealthTech',
    duration: '9 Months',
    tags: ['Healthcare', 'Artificial intelligence', 'Microsoft Azure', 'Integration', 'HIPAA'],
    summary:
      'Engineered an AI-assisted ICD-10/CPT autonomous suggestion copilot and real-time validation engine embedded inside clinical coding workflows.',
    challenge:
      'Manual coding of complex clinical charts resulted in an 8.4% error rate and an average processing time of 42 minutes per multi-encounter patient record. Inaccurate codes led to delayed reimbursements and compliance audits.',
    solution:
      'Neominds deployed fine-tuned clinical transformer models with retrieval-augmented generation (RAG) over medical ontology databases. The solution includes sub-second automated code validation, audit trail generation, and continuous compliance checks.',
    metrics: [
      { label: 'Coding Efficiency', value: '+46%' },
      { label: 'Error Rate Reduction', value: '8.4% → 0.9%' },
      { label: 'Days in A/R', value: '-14 Days' },
      { label: 'Chart Processing Speed', value: '3.2x Faster' },
    ],
    technologies: ['Microsoft Azure', 'Python / FastAPI', 'PyTorch', 'Vector Embeddings', 'React / TypeScript', 'HIPAA-Vault'],
  },
  '2': {
    id: '2',
    title: 'Real-Time Algorithmic Trading Platform',
    client: 'Global Quant Capital',
    industry: 'Fintech & Capital Markets',
    duration: '12 Months',
    tags: ['Fintech', 'Machine learning', 'High Frequency', 'AWS Cloud', 'Sub-millisecond'],
    summary:
      'Engineered ultra-low latency order matching engine and real-time risk analytics processing 50,000+ transactions per second with sub-millisecond execution.',
    challenge:
      'Legacy execution infrastructure suffered from latency spikes during market open volatility, resulting in slippage, unoptimized fill rates, and delayed risk exposure re-hedging.',
    solution:
      'Architected a lock-free C++ and Rust matching kernel integrated with high-throughput Kafka streaming and AWS dedicated direct-connect instances. Deployed ML-driven predictive liquidity routing algorithms.',
    metrics: [
      { label: 'Peak Throughput', value: '50k+ tx/sec' },
      { label: 'Tick-to-Trade Latency', value: '< 450 μs' },
      { label: 'System Availability', value: '99.999%' },
      { label: 'Slippage Reduction', value: '-38%' },
    ],
    technologies: ['Rust', 'C++20', 'AWS Direct Connect', 'Apache Kafka', 'TimescaleDB', 'React WebSockets UI'],
  },
  '3': {
    id: '3',
    title: 'Autonomous Fleet Logistics & Route Optimizer',
    client: 'Maersk Broker Tech',
    industry: 'Logistics & Maritime Shipping',
    duration: '8 Months',
    tags: ['Logistics', 'IoT', 'Agentic AI', 'Google Cloud', 'Predictive Telemetry'],
    summary:
      'Deployed predictive route optimization algorithms reducing fuel consumption by 14% across global maritime shipping routes.',
    challenge:
      'Unpredictable weather fronts, canal congestion, and bunker fuel volatility caused escalating fuel expenditure and unpredictable cargo arrival windows.',
    solution:
      'Built an agentic routing engine ingesting live satellite AIS telemetry, ocean current forecasts, and port wait-time APIs to calculate dynamic voyage speeds and optimal maritime corridors.',
    metrics: [
      { label: 'Fuel Consumption', value: '-14%' },
      { label: 'ETA Accuracy', value: '98.4%' },
      { label: 'CO2 Emission Savings', value: '42,000 Tons' },
      { label: 'Active Monitored Vessels', value: '380+ Fleet' },
    ],
    technologies: ['Google Cloud Platform', 'Kubernetes', 'Golang', 'TensorFlow', 'PostGIS', 'MQTT Telemetry'],
  },
};

interface CaseStudyModalProps {
  studyId: string | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ studyId, onClose, onRequestQuote }) => {
  if (!studyId || !caseStudyDetails[studyId]) return null;

  const data = caseStudyDetails[studyId];

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
      aria-labelledby="modal-case-study-title"
    >
      <div
        data-lenis-prevent
        style={{
          width: '100%',
          maxWidth: '860px',
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
            transition: 'background-color 0.2s',
          }}
          aria-label="Close modal"
        >
          <X size={22} />
        </button>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px', paddingRight: '48px' }}>
          {data.tags.map((t, idx) => (
            <span
              key={idx}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '12px',
                fontWeight: 600,
                color: '#93c5fd',
                backgroundColor: 'rgba(34, 88, 231, 0.2)',
                padding: '4px 12px',
                border: '1px solid rgba(34, 88, 231, 0.4)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          id="modal-case-study-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          {data.title}
        </h2>

        {/* Client & Metadata */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            paddingBottom: '20px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '14px',
            fontFamily: 'var(--font-body)',
            color: '#8893a7',
          }}
        >
          <div>
            Client: <strong style={{ color: '#ffffff' }}>{data.client}</strong>
          </div>
          <div>
            Industry: <strong style={{ color: '#ffffff' }}>{data.industry}</strong>
          </div>
          <div>
            Duration: <strong style={{ color: '#ffffff' }}>{data.duration}</strong>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '16px',
            marginBottom: '36px',
          }}
        >
          {data.metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#121722',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '16px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#2258e7', marginBottom: '4px' }}>
                {m.value}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 600, color: '#8893a7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              The Engineering Challenge
            </h3>
            <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
              {data.challenge}
            </p>
          </div>

          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
              Our Architectural Solution
            </h3>
            <p className="body-text" style={{ color: '#d0d3dd', lineHeight: 1.65 }}>
              {data.solution}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#ffffff', marginBottom: '12px' }}>
            Technology & Infrastructure Stack
          </h3>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {data.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  backgroundColor: '#181d28',
                  padding: '6px 14px',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {tech}
              </span>
            ))}
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
            Discuss similar project <ArrowRight size={16} style={{ marginLeft: '8px' }} />
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
