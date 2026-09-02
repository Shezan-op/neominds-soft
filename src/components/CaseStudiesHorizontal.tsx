import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudy {
  id: string;
  title: string;
  categories: string[];
  extraTagsCount?: number;
  highlightMetric: string;
  metricLabel: string;
  description: string;
  clientType: string;
  deliverables: string[];
  techStack: string[];
  accentGradient: string;
  heroVisualType: 'trading' | 'etl' | 'medical';
}

const caseStudies: CaseStudy[] = [
  {
    id: 'etl-modernization',
    title: 'Mission-critical ETL platform, modernized with agentic AI',
    categories: ['Financial intelligence', 'Data pipelines'],
    extraTagsCount: 4,
    highlightMetric: '10x',
    metricLabel: 'Faster Pipeline Throughput',
    description:
      'Engineered an event-driven data ingestion platform processing 45M daily transactions with sub-second ETL latency and automated LLM anomaly reconciliation.',
    clientType: 'Tier-1 Global Financial Institution',
    deliverables: ['Autonomous Agentic Reconciliation', 'Apache Kafka / Flink Pipeline', 'Zero-Downtime Data Migration', 'ISO 27001 Security Blueprint'],
    techStack: ['Python', 'Kafka', 'pgvector', 'FastAPI', 'Kubernetes'],
    accentGradient: 'linear-gradient(135deg, #091a38 0%, #15326a 100%)',
    heroVisualType: 'etl',
  },
  {
    id: 'trading-platform',
    title: 'A startup idea engineered into a million-user trading platform',
    categories: ['Financial services & Trading'],
    extraTagsCount: 9,
    highlightMetric: '<1.2ms',
    metricLabel: 'Order Routing Latency',
    description:
      'Architected a high-concurrency order matching system capable of sustaining 250k simultaneous active traders with real-time risk margin recalculations.',
    clientType: 'Next-Gen FinTech Trading Scaleup',
    deliverables: ['Sub-Millisecond Execution Engine', 'Real-Time WebSocket Market Data', 'PCI-DSS Tier 1 Compliance', 'Mobile Apps (iOS & Android)'],
    techStack: ['Go', 'Rust', 'React 19', 'Redis', 'AWS EKS'],
    accentGradient: 'linear-gradient(135deg, #132b50 0%, #1e457f 100%)',
    heroVisualType: 'trading',
  },
  {
    id: 'medical-coding',
    title: 'AI integration for medical coding software',
    categories: ['Healthcare', 'Artificial intelligence'],
    extraTagsCount: 4,
    highlightMetric: '98.4%',
    metricLabel: 'Automated Coding Accuracy',
    description:
      'Integrated specialized LLM pipelines with HL7/FHIR EHR systems to automate ICD-10 clinical chart review, reducing physician administrative load by 60%.',
    clientType: 'Leading US Healthcare Network',
    deliverables: ['Clinical NLP Chart Analyzer', 'FHIR v4 Bi-Directional Bridge', 'HIPAA Certified Cloud Infrastructure', 'Physician Audit Dashboard'],
    techStack: ['PyTorch', 'Claude API', 'PostgreSQL', 'Docker', 'FHIR API'],
    accentGradient: 'linear-gradient(135deg, #0b1f2d 0%, #154558 100%)',
    heroVisualType: 'medical',
  },
];

interface CaseStudiesProps {
  onContactClick?: () => void;
  onSelectCaseStudy?: (id: string) => void;
}

export const CaseStudiesHorizontal: React.FC<CaseStudiesProps> = ({ onContactClick, onSelectCaseStudy }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 860);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    // On mobile, disable GSAP horizontal pinning so cards stack vertically
    if (isMobile) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // GSAP Horizontal Scroll Pinning
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 500}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === sectionRef.current) {
          st.kill(true, true);
        }
      });
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <section
      id="casestudies"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? 'auto' : '100vh',
        backgroundColor: '#ffffff',
        overflow: isMobile ? 'visible' : 'hidden',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        padding: isMobile ? '48px 16px' : '0',
      }}
    >
      {/* Mobile Header Title */}
      {isMobile && (
        <div style={{ marginBottom: '24px', textAlign: 'left', maxWidth: '1280px', margin: '0 auto 24px auto', width: '100%' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258E7', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            FEATURED WORK
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '4px 0 0 0', letterSpacing: '-0.02em' }}>
            Case Studies & Impact
          </h2>
        </div>
      )}

      {/* Horizontal Track / Mobile Vertical Column Container */}
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'stretch' : 'center',
          gap: isMobile ? '24px' : 'clamp(20px, 3.5vw, 40px)',
          paddingLeft: isMobile ? '0' : 'clamp(16px, 4vw, 64px)',
          paddingRight: isMobile ? '0' : 'clamp(24px, 5vw, 64px)',
          height: isMobile ? 'auto' : '86vh',
          maxHeight: isMobile ? 'none' : '760px',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '1280px' : 'none',
          margin: isMobile ? '0 auto' : '0',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      >
        {/* 3 Case Study Panels */}
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            style={{
              position: 'relative',
              width: isMobile ? '100%' : 'clamp(320px, 68vw, 1020px)',
              height: isMobile ? 'auto' : '100%',
              minHeight: isMobile ? '380px' : 'auto',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: isMobile ? '8px' : '12px',
              padding: isMobile ? '24px' : 'clamp(24px, 3.5vw, 44px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
              overflow: 'hidden',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Top Tag Pills */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                zIndex: 3,
                marginBottom: isMobile ? '16px' : '0',
              }}
            >
              {cs.categories.map((cat, cIdx) => (
                <span
                  key={cIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: '#1e293b',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 14px',
                    borderRadius: '100px',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                  }}
                >
                  {cat}
                </span>
              ))}
              {cs.extraTagsCount && (
                <span
                  style={{
                    backgroundColor: 'rgba(34, 88, 231, 0.08)',
                    border: '1px solid rgba(34, 88, 231, 0.2)',
                    color: '#2258e7',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '100px',
                  }}
                >
                  +{cs.extraTagsCount}
                </span>
              )}
            </div>

            {/* Middle Content Visual Simulation (Clean White Card) */}
            <div
              style={{
                margin: isMobile ? '16px 0' : '24px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: isMobile ? '140px' : '200px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '680px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '24px',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                    {cs.clientType}
                  </span>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: '#2258e7', marginTop: '4px', fontFamily: 'var(--font-heading)' }}>
                    {cs.highlightMetric}
                  </div>
                  <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 600 }}>
                    {cs.metricLabel}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', maxWidth: '320px' }}>
                  {cs.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '12px',
                        backgroundColor: '#f1f5f9',
                        border: '1px solid #e2e8f0',
                        color: '#334155',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Title & Action Arrow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '16px',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '20px',
                zIndex: 3,
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(18px, 2.2vw, 26px)',
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25,
                  margin: 0,
                  fontFamily: 'var(--font-heading)',
                  maxWidth: '85%',
                }}
              >
                {cs.title}
              </h3>

              <button
                onClick={() => {
                  if (onSelectCaseStudy) {
                    onSelectCaseStudy(cs.id);
                  }
                  if (onContactClick) {
                    onContactClick();
                  }
                }}
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: '#2258e7',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  flexShrink: 0,
                  transition: 'transform 0.2s, background-color 0.2s',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 12px rgba(34, 88, 231, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#183c9e';
                  e.currentTarget.style.transform = 'scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2258e7';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="View case study"
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
