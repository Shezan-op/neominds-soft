import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Principle {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  points: string[];
}

const principles: Principle[] = [
  {
    id: 'product',
    title: 'PRODUCT-CENTRIC',
    tagline: 'Engineering aligned with tangible business metrics and user workflows.',
    desc: 'Every architectural decision is anchored to measurable ROI, product-market velocity, and real end-user conversion. We eliminate speculative engineering by validating assumptions early through rapid interactive prototypes and production telemetry.',
    points: [
      'Business-driven architecture linked to measurable customer ROI',
      'Continuous validation with rapid customer feedback loops',
      'Zero feature bloat: laser focus on high-impact capability delivery',
    ],
  },
  {
    id: 'ai',
    title: 'AI-MINDED',
    tagline: 'Production cognitive systems with automated decision loops.',
    desc: 'We incorporate intelligence at the system foundation. From autonomous agent reasoning to domain-grounded RAG pipelines, our systems maintain deterministic SLAs, zero data leakage, and comprehensive real-time evaluation harnesses.',
    points: [
      'Autonomous agent orchestration for mission-critical workflows',
      'Private enterprise RAG grounded in proprietary datasets',
      'Deterministic latency SLAs, eval harnesses & automated safety guardrails',
    ],
  },
  {
    id: 'industry',
    title: 'INDUSTRY-FOCUSED',
    tagline: 'Domain expertise in heavily regulated and compliance-driven environments.',
    desc: 'Deep domain engineering for Healthcare, FinTech, Logistics, and Enterprise SaaS. We architect systems with native compliance for HIPAA, SOC 2 Type II, ISO 27001, and GDPR from day one rather than treating compliance as a retrofitted afterthought.',
    points: [
      'Built-in compliance architecture: HIPAA, SOC 2 Type II, ISO & GDPR',
      'Immutable audit ledgers, row-level security & encrypted token storage',
      'Domain schemas optimized for sub-second high-concurrency loads',
    ],
  },
];

const statsData = [
  { label: 'AI-CERTIFIED TALENT', target: 34, suffix: '%' },
  { label: 'YEARS OF ENGINEERING EXPERIENCE', target: 23, suffix: '' },
  { label: 'CLIENTS IN HIGHLY REGULATED INDUSTRIES', target: 86, suffix: '%' },
  { label: 'LONGEST ENGAGEMENT IN YEARS', target: 18, suffix: '' },
];

export const DeliveryPrinciples: React.FC = () => {
  // Default to first principle active, switches smoothly on hover or click like an FAQ
  const [activePrinciple, setActivePrinciple] = useState<string>('product');
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const hasAnimatedRef = useRef(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Smooth IntersectionObserver-driven counter animation
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          const duration = 2200; // 2.2 seconds smooth counter
          const startTime = performance.now();
          const targets = statsData.map((s) => s.target);

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out curve for natural deceleration
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = targets.map((target) => Math.round(target * easeOutProgress));
            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(targets); // Guaranteed exact termination values
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="delivery"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(70px, 8vw, 100px)',
        paddingBottom: 'clamp(70px, 8vw, 100px)',
        color: '#121212',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Top Header & Principle Rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 80px)',
          }}
        >
          {/* Left Column: Label */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#475067',
                textTransform: 'uppercase',
              }}
            >
              OUR DELIVERY PRINCIPLES
            </span>
          </div>

          {/* Right Column: Statement & Interactive FAQ Principles */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(20px, 2.2vw, 32px)',
                fontWeight: 600,
                lineHeight: 1.3,
                color: '#121212',
                marginBottom: 'clamp(28px, 4vw, 40px)',
                maxWidth: '650px',
              }}
            >
              We own the engineering from early concept to enterprise-scale systems and long-term support.
            </h3>

            {/* Principle Accordion Items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e4e4e7',
              }}
            >
              {principles.map((p, idx) => {
                const isActive = activePrinciple === p.id;
                return (
                  <div
                    key={p.id}
                    onMouseEnter={() => setActivePrinciple(p.id)}
                    onClick={() => setActivePrinciple(p.id)}
                    style={{
                      borderBottom: idx < principles.length - 1 ? '1px solid #e4e4e7' : 'none',
                      backgroundColor: isActive ? '#2258E7' : '#ffffff',
                      color: isActive ? '#ffffff' : '#121212',
                      cursor: 'pointer',
                      transition: 'background-color 0.28s ease, color 0.28s ease, box-shadow 0.28s ease',
                      boxShadow: isActive ? '0 10px 30px rgba(34, 88, 231, 0.2)' : 'none',
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActivePrinciple(p.id);
                      }
                    }}
                    aria-expanded={isActive}
                    aria-label={`Principle: ${p.title}`}
                  >
                    {/* Header Row: Title & Arrow Indicator */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'clamp(18px, 2.5vw, 24px) clamp(20px, 2.8vw, 32px)',
                        userSelect: 'none',
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(17px, 1.7vw, 24px)',
                            fontWeight: 700,
                            letterSpacing: '0.01em',
                            lineHeight: 1.2,
                          }}
                        >
                          {p.title}
                        </span>
                        {!isActive && (
                          <span
                            style={{
                              fontSize: '13px',
                              color: '#64748b',
                              fontWeight: 400,
                              marginTop: '2px',
                            }}
                          >
                            {p.tagline}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? 'rgba(255, 255, 255, 0.18)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease',
                          transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                        }}
                      >
                        <ArrowRight
                          size={22}
                          color={isActive ? '#ffffff' : '#121212'}
                          style={{
                            flexShrink: 0,
                            transition: 'color 0.2s ease',
                          }}
                        />
                      </div>
                    </div>

                    {/* Expandable FAQ Details Panel */}
                    <div
                      style={{
                        maxHeight: isActive ? '360px' : '0px',
                        opacity: isActive ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          padding: '0 clamp(20px, 2.8vw, 32px) clamp(22px, 3vw, 28px)',
                          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                          paddingTop: '16px',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                            lineHeight: 1.65,
                            color: 'rgba(255, 255, 255, 0.95)',
                            margin: '0 0 16px 0',
                            fontWeight: 400,
                          }}
                        >
                          {p.desc}
                        </p>

                        {/* Bullet Highlights */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {p.points.map((point, i) => (
                            <div
                              key={i}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '10px',
                                fontSize: 'clamp(13px, 1vw, 14px)',
                                color: 'rgba(255, 255, 255, 0.9)',
                                lineHeight: 1.5,
                              }}
                            >
                              <CheckCircle2
                                size={16}
                                color="#ffffff"
                                style={{ flexShrink: 0, marginTop: '3px' }}
                              />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4-Column Statistics Grid with Smooth Animated Viewport Counter */}
        <div
          ref={statsRef}
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            border: '1px solid #e4e4e7',
            backgroundColor: '#ffffff',
          }}
        >
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-box"
              style={{
                padding: 'clamp(28px, 3.5vw, 40px) clamp(20px, 2.5vw, 32px)',
                borderRight: index < 3 ? '1px solid #e4e4e7' : 'none',
                borderBottom: '1px solid #e4e4e7',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '190px',
                transition: 'background-color 0.2s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: '#475067',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </span>
              <h4
                style={{
                  fontSize: 'clamp(44px, 5.2vw, 84px)',
                  fontWeight: 800,
                  color: '#2258E7',
                  lineHeight: 1,
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.03em',
                  margin: 0,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {counts[index]}
                {stat.suffix}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-grid .stat-box:nth-child(2) {
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
};
