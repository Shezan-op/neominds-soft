import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Footer } from './Footer';

interface PortfolioPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigatePage,
  onSuccessToast,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Fintech' | 'Healthcare' | 'Enterprise' | 'AI'>('All');
  const [leadEmail, setLeadEmail] = useState('');

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadEmail) return;
    onSuccessToast('Thank you! A custom portfolio case study deck has been sent to your email.');
    setLeadEmail('');
  };

  const caseStudies = [
    {
      id: 'authenticom',
      category: 'Enterprise',
      title: 'Automotive Data Ingestion & Integration Platform',
      client: 'Authenticom',
      clientLogo: 'Authenticom',
      stats: '15,000+ Dealerships Connected',
      metric: '99.99%',
      metricLabel: 'Data Pipeline Uptime',
      description:
        'Engineered high-throughput enterprise data pipelines processing millions of vehicle inventory records daily across 15,000+ North American automotive dealerships with bi-directional DMS synchronization.',
      tags: ['Data Engineering', 'AWS', 'PostgreSQL', 'Kafka', 'ETL Pipelines'],
      link: '#contact',
      highlight: true,
    },
    {
      id: 'trubridge',
      category: 'Healthcare',
      title: 'Automated Medical Coding & Claims Verification Engine',
      client: 'TruBridge (formerly TruCode)',
      clientLogo: 'TruBridge',
      stats: '40% Reduction in Claims Denials',
      metric: '2.4M',
      metricLabel: 'Patient Encounters Analyzed / Mo',
      description:
        'Built a HIPAA-compliant clinical decision support and medical encoder platform that accelerates hospital billing accuracy, integrates ICD-10/CPT guidelines, and cuts insurance claim rejection rates.',
      tags: ['Healthcare', 'HIPAA / HITECH', 'C# / .NET Core', 'Angular', 'ICD-10 Engine'],
      link: '#contact',
      highlight: true,
    },
    {
      id: 'plato',
      category: 'Enterprise',
      title: 'Autonomous Delivery Dispatch & Fleet Optimization',
      client: 'Plato Delivery Systems',
      clientLogo: 'Plato',
      stats: '3.5x Increase in Delivery Velocity',
      metric: '< 150ms',
      metricLabel: 'Route Optimization Latency',
      description:
        'Developed an algorithmic dispatching engine that dynamically pairs on-demand drivers with local retail fulfillment hubs, reducing delivery costs by 28% and driving company profitability.',
      tags: ['Logistics & IoT', 'Golang', 'Google Cloud', 'Real-Time Geo-Routing', 'React Native'],
      link: '#contact',
      highlight: false,
    },
    {
      id: 'adventr',
      category: 'AI',
      title: 'Interactive Smart-Video Generation & Analytics Suite',
      client: 'Adventr',
      clientLogo: 'Adventr',
      stats: '600% Higher User Engagement',
      metric: '4K 60fps',
      metricLabel: 'Zero-Latency Branching Video',
      description:
        'Constructed a cloud-native interactive video authoring suite enabling creators and global brands to build clickable, branching video experiences with real-time viewer behavior heatmaps.',
      tags: ['Interactive Media', 'WebRTC', 'AWS Elemental', 'React', 'AI Video Analytics'],
      link: '#contact',
      highlight: false,
    },
    {
      id: 'cnote',
      category: 'Fintech',
      title: 'Community Impact Investing Platform with SEC Compliance',
      client: 'CNote Financial',
      clientLogo: 'CNote',
      stats: '$500M+ Impact Capital Deployed',
      metric: 'SOC 2',
      metricLabel: 'Certified Infrastructure',
      description:
        'Architected an institutional investment gateway connecting Fortune 500 treasuries to CDFIs and minority-owned business lenders, automating ACH clearing and SEC compliance reporting.',
      tags: ['Fintech & Banking', 'Node.js', 'React', 'Plaid API', 'Automated ACH / SEC'],
      link: '#contact',
      highlight: true,
    },
    {
      id: 'delphi',
      category: 'AI',
      title: 'AI Computer Vision & Diagnostic Screening Platform',
      client: 'Delphi Vision Ltd',
      clientLogo: 'Delphi Vision',
      stats: '99.2% Model Classification Accuracy',
      metric: '18 FPS',
      metricLabel: 'Edge Inference Throughput',
      description:
        'Designed high-speed computer vision pipeline for automated defect detection in industrial manufacturing, deploying PyTorch deep learning models to low-power edge gateways.',
      tags: ['AI / Computer Vision', 'PyTorch', 'FastAPI', 'Docker Edge', 'Real-Time Ingestion'],
      link: '#contact',
      highlight: false,
    },
    {
      id: 'cityindex',
      category: 'Fintech',
      title: 'High-Frequency Forex & CFD Trading Execution Terminal',
      client: 'City Index (StoneX Group)',
      clientLogo: 'City Index',
      stats: 'Sub-Millisecond Order Routing',
      metric: '100,000+',
      metricLabel: 'Concurrent Trading Sessions',
      description:
        'Engineered institutional multi-asset trading engine with FIX 4.4 protocol gateways, live depth-of-market feeds, customizable charting workspaces, and automated margin risk controls.',
      tags: ['Fintech', 'C++ / Rust', 'WebSockets', 'FIX Protocol', 'Trading Terminal UI'],
      link: '#contact',
      highlight: false,
    },
    {
      id: 'maersk',
      category: 'Enterprise',
      title: 'Global Supply Chain Telemetry & Container Tracking',
      client: 'Maersk Line',
      clientLogo: 'Maersk',
      stats: 'Global Container Telemetry',
      metric: '50,000+',
      metricLabel: 'Connected IoT Beacons',
      description:
        'Delivered scalable IoT monitoring platform providing cold-chain integrity tracking, automated customs clearance document generation, and real-time vessel position mapping.',
      tags: ['Supply Chain', 'Azure IoT Hub', 'Kafka', 'React / TypeScript', 'Microservices'],
      link: '#contact',
      highlight: false,
    },
  ];

  const filteredCases =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeFilter);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 90px) 24px clamp(48px, 6vw, 70px)',
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              backgroundColor: 'rgba(34, 88, 231, 0.08)',
              border: '1px solid rgba(34, 88, 231, 0.25)',
              borderRadius: '2px',
              color: '#2258e7',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginBottom: '24px',
              textTransform: 'uppercase',
            }}
          >
            <Sparkles size={14} />
            <span>Success Stories & Client Results</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#0f172a',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Engineering <span style={{ color: '#2258e7' }}>Impactful</span> Digital Products
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              lineHeight: 1.6,
              color: '#475569',
              marginBottom: '36px',
              maxWidth: '560px',
            }}
          >
            Across finance, healthcare, AI, and enterprise logistics, we turn bold ideas into clear product direction, fragmented workflows into automated systems, and legacy tech into scalable platforms. Over 23+ years, Neominds has delivered 1,000+ successful projects globally.
          </p>

          <div className="btn-group-lg">
            <button
              onClick={() => {
                const el = document.getElementById('portfolio-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary btn-lg"
            >
              <span>Explore Case Studies</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => onNavigatePage('contacts')}
              className="btn btn-outline btn-lg"
              style={{ color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <span>Request Custom Portfolio</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '28px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.04)',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
            </div>
            <span style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace', fontWeight: 600 }}>
              DELIVERY METRICS // 2003–2026
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '18px', borderRadius: '6px', borderLeft: '3px solid #2258e7' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#2258e7', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>1,000+</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>Successful Products Delivered</div>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '18px', borderRadius: '6px', borderLeft: '3px solid #16a34a' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#16a34a', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>52%</div>
              <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>Clients Partnering &gt; 4 Years</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>Top Vertical Specializations</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>Fintech, HealthTech, AI & Automotive</div>
            </div>
            <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.1)', color: '#2258e7', padding: '6px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: 700 }}>
              ISO 27001
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FILTER TABS BAR
          ======================================================== */}
      <section
        id="portfolio-grid"
        style={{
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          padding: '16px 24px',
          position: 'sticky',
          top: '68px',
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {(['All', 'Fintech', 'Healthcare', 'Enterprise', 'AI'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  backgroundColor: activeFilter === filter ? '#2258e7' : '#ffffff',
                  color: activeFilter === filter ? '#ffffff' : '#334155',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '8px 18px',
                  borderRadius: '4px',
                  border: activeFilter === filter ? '1px solid #2258e7' : '1px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.18s',
                }}
              >
                {filter} {filter === 'All' ? `(${caseStudies.length})` : ''}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '13px', color: '#64748b' }}>
            Showing <strong>{filteredCases.length}</strong> featured projects
          </div>
        </div>
      </section>

      {/* ========================================================
          CASE STUDIES GRID
          ======================================================== */}
      <section style={{ padding: '60px 24px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#2258e7';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(34, 88, 231, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
              }}
            >
              {/* Category & Metric Pill */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#2258e7',
                      backgroundColor: 'rgba(34, 88, 231, 0.08)',
                      padding: '4px 10px',
                      borderRadius: '2px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {cs.category}
                  </span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#2258e7', fontFamily: 'var(--font-heading)' }}>{cs.metric}</div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{cs.metricLabel}</div>
                  </div>
                </div>

                <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.02em', marginBottom: '8px' }}>
                  Client: {cs.client}
                </div>

                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#0f172a',
                    lineHeight: 1.3,
                    marginBottom: '16px',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {cs.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#475569',
                    marginBottom: '24px',
                  }}
                >
                  {cs.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        color: '#334155',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action */}
                <div
                  style={{
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#16a34a' }}>{cs.stats}</span>
                  <button
                    onClick={() => onNavigatePage('contacts')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#2258e7',
                      fontSize: '14px',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Read scope</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          LEAD CTA STRIP
          ======================================================== */}
      <section
        style={{
          backgroundColor: '#2258e7',
          padding: '48px 24px',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>
              Looking for a specialized project reference in your industry?
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>
              Over 80% of our enterprise systems operate under strict NDA. Contact us for custom architectures and code walk-throughs.
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your corporate email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              required
              style={{
                padding: '12px 18px',
                fontSize: '14px',
                backgroundColor: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '4px',
                color: '#0f172a',
                minWidth: '280px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              className="btn btn-white btn-md"
              style={{ backgroundColor: '#ffffff', color: '#2258e7', fontWeight: 700 }}
            >
              Get Custom Deck
            </button>
          </form>
        </div>
      </section>

      {/* ========================================================
          GLOBAL FOOTER
          ======================================================== */}
      <Footer
        onNavigate={(target) => {
          if (target === '#contact') {
            onNavigatePage('contacts');
          } else if (target === '#casestudies') {
            onNavigatePage('portfolio');
          } else {
            onNavigatePage('home');
          }
        }}
      />
    </div>
  );
};
