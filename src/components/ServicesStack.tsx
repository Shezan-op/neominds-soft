import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles, Server, Cpu, Database, Cloud, ShieldCheck, Zap, Activity } from 'lucide-react';

interface ServicePill {
  label: string;
  slug: string;
}

interface ServiceStackCard {
  id: number;
  slug: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  links: { label: string; slug: string }[];
  servicePills: ServicePill[];
  visualType: 'ai' | 'design' | 'product' | 'devops' | 'analytics' | 'mobile';
  bgGradient: string;
}

const stackCards: ServiceStackCard[] = [
  {
    id: 1,
    slug: 'ai-development',
    category: 'COGNITIVE INTELLIGENCE',
    title: 'ARTIFICIAL INTELLIGENCE & AGENTS',
    tagline: 'Autonomous multi-agent orchestration, enterprise RAG & LLM-driven acceleration',
    description:
      'AI is an engineering layer that extends existing systems rather than replaces them. We apply it where it can improve automation, decision-making, and product behavior in real operational environments. In practice, this includes AI-enabled products, workflow automation, legacy system modernization, and intelligent software delivery.',
    links: [
      { label: 'AI-enabled products', slug: 'ai-development' },
      { label: 'workflow automation', slug: 'ai-automations' },
      { label: 'legacy system modernization', slug: 'software-development' },
      { label: 'intelligent software delivery', slug: 'ai-agents' },
    ],
    servicePills: [
      { label: 'AI Development', slug: 'ai-development' },
      { label: 'Autonomous AI Agents', slug: 'ai-agents' },
      { label: 'Workflow Automations', slug: 'ai-automations' },
      { label: 'Chatbot & Video Bots', slug: 'chatbot-videobot' },
    ],
    visualType: 'ai',
    bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
  },
  {
    id: 2,
    slug: 'software-development',
    category: 'CORE ENGINEERING',
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    tagline: 'High-throughput transactional architectures, event microservices & API platforms',
    description:
      'Product engineering forms the core of our work. We build and evolve software that remains reliable as data volumes grow, integrations expand, and requirements change. From solution architecture and cloud deployment to QA testing, automated CI/CD, and ongoing maintenance, we stay involved to keep digital products stable, secure, and ready to advance.',
    links: [
      { label: 'solution architecture', slug: 'software-development' },
      { label: 'cloud deployment', slug: 'devops' },
      { label: 'QA testing', slug: 'software-development' },
      { label: 'ongoing maintenance', slug: 'technical-support' },
    ],
    servicePills: [
      { label: 'Software Development', slug: 'software-development' },
      { label: 'Web & CMS Development', slug: 'web-cms-development' },
      { label: 'Ecommerce Development', slug: 'ecommerce-development' },
      { label: 'Product Engineering', slug: 'product-engineering' },
    ],
    visualType: 'product',
    bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%)',
  },
  {
    id: 3,
    slug: 'devops',
    category: 'CLOUD & RELIABILITY',
    title: 'CLOUD INFRASTRUCTURE & DEVOPS',
    tagline: 'Resilient multi-cloud Kubernetes clusters, automated GitOps CI/CD & FinOps',
    description:
      'Resilient cloud infrastructure engineered for 99.99% availability, zero-downtime continuous deployment pipelines, automated infrastructure as code, and FinOps cost optimization. We automate Kubernetes orchestration, implement versioned Terraform cloud environments, and deliver continuous 24/7 telemetry monitoring.',
    links: [
      { label: 'cloud infrastructure', slug: 'devops' },
      { label: 'Kubernetes orchestration', slug: 'devops' },
      { label: 'infrastructure as code', slug: 'devops' },
      { label: 'telemetry monitoring', slug: 'technical-support' },
    ],
    servicePills: [
      { label: 'DevOps & Cloud', slug: 'devops' },
      { label: '24/7 Technical Support', slug: 'technical-support' },
      { label: 'IT Consulting', slug: 'it-consulting' },
    ],
    visualType: 'devops',
    bgGradient: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
  },
  {
    id: 4,
    slug: 'analytics-dashboard',
    category: 'DATA PLATFORMS',
    title: 'DATA ANALYTICS & BI DASHBOARDS',
    tagline: 'Real-time lakehouses, ClickHouse/Snowflake pipelines & executive intelligence',
    description:
      'Transform high-velocity data streams into actionable intelligence. We architect real-time lakehouse pipelines, implement sub-second ClickHouse and Snowflake data warehouses, and build interactive multi-tenant analytics dashboards with natural language querying and high-framerate visualizations.',
    links: [
      { label: 'lakehouse pipelines', slug: 'analytics-dashboard' },
      { label: 'ClickHouse and Snowflake', slug: 'analytics-dashboard' },
      { label: 'analytics dashboards', slug: 'analytics-dashboard' },
      { label: 'natural language querying', slug: 'ai-development' },
    ],
    servicePills: [
      { label: 'Analytics Dashboard', slug: 'analytics-dashboard' },
      { label: 'Business Analysis', slug: 'business-analysis' },
      { label: 'Real-Time Pipelines', slug: 'analytics-dashboard' },
    ],
    visualType: 'analytics',
    bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 50%, #a7f3d0 100%)',
  },
  {
    id: 5,
    slug: 'mobile-app-development',
    category: 'DIGITAL PRODUCTS',
    title: 'MOBILE & WEB EXPERIENCES',
    tagline: 'Native iOS & Android, offline-first sync, Next.js portals & 100/100 Core Web Vitals',
    description:
      'Engaging digital experiences crafted for performance and accessibility. From native iOS (Swift 6) and Android (Kotlin Compose) applications with offline-first synchronization to high-speed Next.js and headless CMS web portals, we ensure sub-second latency and 100/100 Core Web Vitals.',
    links: [
      { label: 'native iOS (Swift 6)', slug: 'mobile-app-development' },
      { label: 'Android (Kotlin Compose)', slug: 'mobile-app-development' },
      { label: 'Next.js and headless CMS', slug: 'web-cms-development' },
      { label: '100/100 Core Web Vitals', slug: 'web-cms-development' },
    ],
    servicePills: [
      { label: 'Mobile App Development', slug: 'mobile-app-development' },
      { label: 'Web & CMS Development', slug: 'web-cms-development' },
      { label: 'Ecommerce Platforms', slug: 'ecommerce-development' },
    ],
    visualType: 'mobile',
    bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)',
  },
  {
    id: 6,
    slug: 'ui-ux-design',
    category: 'DESIGN & STRATEGY',
    title: 'UX/UI DESIGN & PRODUCT DISCOVERY',
    tagline: 'Design systems, rapid interactive prototyping & strategic discovery roadmaps',
    description:
      'Design thinking is where product direction becomes concrete. It helps us align around the problem, user context, and expected outcomes before implementation begins. That clarity carries into product and UX design, where requirements are translated into structure, interaction logic, and system behavior through our dedicated UX practice embedded in delivery. Engineering then turns those decisions into production systems, ensuring the product behaves consistently under production conditions.',
    links: [
      { label: 'product direction', slug: 'product-discovery' },
      { label: 'product and UX design', slug: 'ui-ux-design' },
      { label: 'dedicated UX practice', slug: 'ui-ux-design' },
      { label: 'production systems', slug: 'software-development' },
    ],
    servicePills: [
      { label: 'UX/UI Design', slug: 'ui-ux-design' },
      { label: 'Product Discovery', slug: 'product-discovery' },
      { label: 'Business Analysis', slug: 'business-analysis' },
      { label: 'IT Consulting', slug: 'it-consulting' },
    ],
    visualType: 'design',
    bgGradient: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #cbd5e1 100%)',
  },
];

interface ServicesStackProps {
  onSelectService?: (slug: string) => void;
}

export const ServicesStack: React.FC<ServicesStackProps> = ({ onSelectService }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (slug: string) => {
    if (onSelectService) {
      onSelectService(slug);
    } else {
      window.location.hash = slug;
    }
  };

  return (
    <div
      id="services"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Section Introduction Header */}
      <div
        className="container"
        style={{
          maxWidth: '1280px',
          paddingTop: 'clamp(60px, 7vw, 90px)',
          paddingBottom: 'clamp(24px, 3vw, 40px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2258E7' }} />
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
            OUR SERVICES // WHAT WE DELIVER
          </span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#0f172a',
            maxWidth: '750px',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Specialized engineering practices tailored to enterprise scale.
        </h2>
      </div>

      {stackCards.map((card, idx) => {
        const isHovered = hoveredCard === card.id;

        return (
          <section
            key={card.id}
            style={{
              position: isMobile ? 'relative' : 'sticky',
              top: 0,
              minHeight: isMobile ? 'auto' : '100vh',
              height: isMobile ? 'auto' : '100vh',
              width: '100%',
              backgroundColor: '#ffffff',
              borderTop: idx > 0 ? '1px solid #e2e8f0' : 'none',
              zIndex: idx + 1,
              display: 'flex',
              alignItems: 'center',
              boxShadow: isMobile ? 'none' : '0 -12px 36px rgba(0, 0, 0, 0.04)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                alignItems: 'stretch',
              }}
            >
              {/* Left Visual Column */}
              <div
                onClick={() => handleCardClick(card.slug)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative',
                  backgroundColor: '#f1f5f9',
                  background: card.bgGradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: isMobile ? '48px 24px' : '64px',
                  minHeight: isMobile ? '380px' : 'auto',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '460px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'scale(1.02) translateY(-4px)' : 'scale(1)',
                  }}
                >
                  {card.visualType === 'ai' && <AiPhoneMockup />}
                  {card.visualType === 'design' && <DesignLaptopMockup />}
                  {card.visualType === 'product' && <ProductEngineMockup />}
                  {card.visualType === 'devops' && <DevOpsClusterMockup />}
                  {card.visualType === 'analytics' && <AnalyticsDashboardMockup />}
                  {card.visualType === 'mobile' && <MobileWebSuiteMockup />}

                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: isHovered
                        ? 'translate(-50%, -50%) scale(1.1)'
                        : 'translate(-50%, -50%) scale(1)',
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      backgroundColor: '#2258e7',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      textAlign: 'center',
                      boxShadow: '0 8px 24px rgba(34, 88, 231, 0.4), 0 2px 6px rgba(0, 0, 0, 0.15)',
                      zIndex: 30,
                      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s',
                      pointerEvents: 'none',
                    }}
                  >
                    <span>View</span>
                    <span>Service</span>
                  </div>
                </div>
              </div>

              {/* Right Content Column */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: isMobile ? '40px 24px 60px' : 'clamp(48px, 5vw, 84px) clamp(36px, 4.5vw, 72px)',
                }}
              >
                <div style={{ maxWidth: '620px' }}>
                  {/* Service Badge Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2258e7' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        color: '#2258e7',
                        textTransform: 'uppercase',
                      }}
                    >
                      NEOMINDS SERVICE 0{card.id} // {card.category}
                    </span>
                  </div>

                  <div
                    onClick={() => handleCardClick(card.slug)}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '20px',
                      cursor: 'pointer',
                      marginBottom: '10px',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(24px, 2.8vw, 38px)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        color: isHovered ? '#2258e7' : '#0f172a',
                        textTransform: 'uppercase',
                        margin: 0,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {card.title}
                    </h2>

                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? 'rgba(34, 88, 231, 0.1)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background-color 0.2s ease, transform 0.2s ease',
                        transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
                      }}
                    >
                      <ArrowUpRight
                        size={28}
                        style={{
                          color: isHovered ? '#2258e7' : '#0f172a',
                          transition: 'color 0.2s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Tagline */}
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#334155',
                      margin: '0 0 18px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.tagline}
                  </p>

                  {/* Detailed Description with Embedded Keyword Links */}
                  <p
                    style={{
                      fontSize: 'clamp(14px, 1.1vw, 16px)',
                      lineHeight: 1.7,
                      color: '#475569',
                      margin: '0 0 24px 0',
                      fontWeight: 400,
                    }}
                  >
                    {renderDescriptionWithLinks(card.description, card.links, handleCardClick)}
                  </p>

                  {/* Connected Neominds Services Pills */}
                  <div style={{ marginBottom: '28px' }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        color: '#64748b',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      Services in this Practice:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {card.servicePills.map((pill) => (
                        <button
                          key={pill.slug + pill.label}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCardClick(pill.slug);
                          }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#1e293b',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#2258e7';
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.borderColor = '#2258e7';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#f8fafc';
                            e.currentTarget.style.color = '#1e293b';
                            e.currentTarget.style.borderColor = '#cbd5e1';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <span>{pill.label}</span>
                          <ArrowUpRight size={13} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary CTA Button */}
                  <div>
                    <button
                      onClick={() => handleCardClick(card.slug)}
                      className="btn btn-primary"
                      style={{
                        padding: '11px 22px',
                        fontSize: '13px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(34, 88, 231, 0.25)',
                      }}
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

function renderDescriptionWithLinks(
  text: string,
  links: { label: string; slug: string }[],
  onNavigate: (slug: string) => void
) {
  let parts: (string | React.ReactNode)[] = [text];

  links.forEach((link) => {
    const nextParts: (string | React.ReactNode)[] = [];

    parts.forEach((part) => {
      if (typeof part !== 'string') {
        nextParts.push(part);
        return;
      }

      const index = part.indexOf(link.label);
      if (index === -1) {
        nextParts.push(part);
        return;
      }

      const before = part.slice(0, index);
      const after = part.slice(index + link.label.length);

      if (before) nextParts.push(before);

      nextParts.push(
        <span
          key={`${link.slug}-${index}`}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(link.slug);
          }}
          style={{
            color: '#2258e7',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            textDecorationThickness: '1.5px',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#1d4ed8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#2258e7';
          }}
        >
          {link.label}
        </span>
      );

      if (after) nextParts.push(after);
    });

    parts = nextParts;
  });

  return <>{parts}</>;
}

const AiPhoneMockup: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '310px',
        height: '460px',
        perspective: '1000px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#ffffff',
          borderRadius: '36px',
          border: '8px solid #0f172a',
          boxShadow:
            '0 30px 60px rgba(15, 23, 42, 0.25), 0 12px 24px rgba(34, 88, 231, 0.15), inset 0 0 0 2px rgba(255, 255, 255, 0.2)',
          transform: 'rotate(-12deg) rotateY(12deg) rotateX(10deg)',
          transformOrigin: 'center center',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '38px',
            padding: '8px 20px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '11px',
            fontWeight: 700,
            color: '#0f172a',
            backgroundColor: '#ffffff',
          }}
        >
          <span>13:44</span>
          <div
            style={{
              width: '74px',
              height: '18px',
              backgroundColor: '#000000',
              borderRadius: '12px',
            }}
          />
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Activity size={12} color="#0f172a" />
          </div>
        </div>

        <div
          style={{
            padding: '8px 16px 10px',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: '#2258e7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={14} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>Neominds AI Bot</div>
            <div style={{ fontSize: '9px', color: '#16a34a', fontWeight: 600 }}>● Online & Active</div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            padding: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            fontSize: '11px',
            backgroundColor: '#f8fafc',
          }}
        >
          <div
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '8px 12px',
              borderRadius: '12px 12px 12px 2px',
              color: '#334155',
              lineHeight: 1.4,
              maxWidth: '85%',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            <strong>Holiday Schedule:</strong> New Year&#8217;s Day off for our American, Polish, and UK engineering squads.
          </div>

          <div
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '8px 12px',
              borderRadius: '12px 12px 12px 2px',
              color: '#334155',
              lineHeight: 1.4,
              maxWidth: '85%',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            Please plan your sprint capacity accordingly.
          </div>

          <div
            style={{
              alignSelf: 'flex-end',
              backgroundColor: '#2258e7',
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '12px 12px 2px 12px',
              maxWidth: '80%',
              fontSize: '11px',
              lineHeight: 1.4,
              boxShadow: '0 4px 12px rgba(34, 88, 231, 0.25)',
            }}
          >
            Hello! I need access to Design Department wiki space.
          </div>

          <div
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '8px 12px',
              borderRadius: '12px 12px 12px 2px',
              color: '#334155',
              lineHeight: 1.4,
              maxWidth: '85%',
              boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            }}
          >
            Granted! Here is your token key for the design space.
          </div>
        </div>

        <div
          style={{
            padding: '10px 14px',
            backgroundColor: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '28px',
              backgroundColor: '#f1f5f9',
              borderRadius: '14px',
              padding: '0 12px',
              fontSize: '10px',
              color: '#94a3b8',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Type a message...
          </div>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#2258e7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Zap size={11} color="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignLaptopMockup: React.FC = () => {
  return (
    <div
      style={{
        width: '380px',
        backgroundColor: '#0f172a',
        borderRadius: '14px',
        padding: '10px',
        boxShadow: '0 28px 60px rgba(15, 23, 42, 0.25)',
        transform: 'rotate(4deg) rotateY(-8deg)',
      }}
    >
      <div
        style={{
          backgroundColor: '#1e293b',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          style={{
            height: '32px',
            backgroundColor: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 12px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          </div>
          <span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace' }}>
            Design System 2026.fig
          </span>
          <span style={{ fontSize: '10px', color: '#38bdf8', fontWeight: 600 }}>100% Flow</span>
        </div>

        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            <div style={{ height: '36px', backgroundColor: '#2258e7', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '10px', fontWeight: 700 }}>
              Primary #2258E7
            </div>
            <div style={{ height: '36px', backgroundColor: '#3b82f6', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '10px', fontWeight: 700 }}>
              Secondary #3B82F6
            </div>
            <div style={{ height: '36px', backgroundColor: '#10b981', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '10px', fontWeight: 700 }}>
              Success #10B981
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8px' }}>
            <div style={{ backgroundColor: '#0f172a', padding: '10px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>Component Specs</div>
              <div style={{ fontSize: '9px', color: '#94a3b8' }}>180+ auto-layout components mapped directly to React / CSS tokens.</div>
            </div>
            <div style={{ backgroundColor: '#0f172a', padding: '10px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '9px', color: '#38bdf8', fontWeight: 600 }}>WCAG 2.1 AAA</div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff', marginTop: '2px' }}>Verified High-Contrast</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductEngineMockup: React.FC = () => {
  return (
    <div
      style={{
        width: '380px',
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px',
        boxShadow: '0 28px 60px rgba(15, 23, 42, 0.25)',
        transform: 'rotate(-4deg)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Server size={14} color="#38bdf8" />
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Microservices Mesh</span>
        </div>
        <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 600 }}>● 99.99% Up</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px' }}>
        <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.15)', border: '1px solid rgba(34, 88, 231, 0.3)', borderRadius: '4px', padding: '10px 8px', textAlign: 'center' }}>
          <Cpu size={16} color="#2258e7" style={{ margin: '0 auto 4px' }} />
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#ffffff' }}>API Gateway</div>
          <div style={{ fontSize: '8px', color: '#94a3b8' }}>14ms Latency</div>
        </div>
        <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.25)', border: '1px solid #2258e7', borderRadius: '4px', padding: '10px 8px', textAlign: 'center' }}>
          <Zap size={16} color="#38bdf8" style={{ margin: '0 auto 4px' }} />
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#ffffff' }}>Event Engine</div>
          <div style={{ fontSize: '8px', color: '#38bdf8' }}>Kafka Cluster</div>
        </div>
        <div style={{ backgroundColor: 'rgba(34, 88, 231, 0.15)', border: '1px solid rgba(34, 88, 231, 0.3)', borderRadius: '4px', padding: '10px 8px', textAlign: 'center' }}>
          <Database size={16} color="#2258e7" style={{ margin: '0 auto 4px' }} />
          <div style={{ fontSize: '10px', fontWeight: 600, color: '#ffffff' }}>Postgres/Redis</div>
          <div style={{ fontSize: '8px', color: '#94a3b8' }}>Multi-Region</div>
        </div>
      </div>

      <div style={{ backgroundColor: '#1e293b', padding: '10px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '11px', color: '#e2e8f0', fontWeight: 500 }}>Zero-Downtime Releases</span>
        <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 700 }}>SOC 2 Certified</span>
      </div>
    </div>
  );
};

const DevOpsClusterMockup: React.FC = () => {
  return (
    <div
      style={{
        width: '380px',
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px',
        boxShadow: '0 28px 60px rgba(15, 23, 42, 0.25)',
        transform: 'rotate(3deg)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Cloud size={14} color="#0284c7" />
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Kubernetes EKS // Production</span>
        </div>
        <span style={{ fontSize: '10px', color: '#0284c7', fontWeight: 600 }}>ArgoCD Sync</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: '#e2e8f0', fontFamily: 'monospace' }}>deploy/payments-v2.14</span>
          <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 600 }}>Synced & Healthy</span>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '8px 12px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', color: '#e2e8f0', fontFamily: 'monospace' }}>deploy/ai-agents-worker</span>
          <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 600 }}>Auto-Scaling (12 pods)</span>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(2, 132, 199, 0.15)', border: '1px solid rgba(2, 132, 199, 0.3)', padding: '10px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={14} color="#38bdf8" />
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600 }}>FinOps Compute Reduction</span>
        </div>
        <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 800 }}>-35% Costs</span>
      </div>
    </div>
  );
};

const AnalyticsDashboardMockup: React.FC = () => {
  return (
    <div
      style={{
        width: '380px',
        backgroundColor: '#0f172a',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '20px',
        boxShadow: '0 28px 60px rgba(15, 23, 42, 0.25)',
        transform: 'rotate(-3deg)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px', marginBottom: '14px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#ffffff' }}>Real-Time Data Lakehouse</span>
        <span style={{ fontSize: '10px', color: '#10b981', fontWeight: 600 }}>ClickHouse 12ms</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '14px' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '4px' }}>
          <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase' }}>Daily Transactions</div>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981', marginTop: '2px' }}>$4.82M</div>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '4px' }}>
          <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase' }}>Ingested Events</div>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>1.2B / day</div>
        </div>
      </div>

      <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '10px 12px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '11px', color: '#34d399', fontWeight: 600 }}>Multi-Tenant Row-Level Security</span>
        <span style={{ fontSize: '10px', color: '#ffffff', fontWeight: 700 }}>100% Isolation</span>
      </div>
    </div>
  );
};

const MobileWebSuiteMockup: React.FC = () => {
  return (
    <div
      style={{
        width: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
      }}
    >
      <div
        style={{
          width: '130px',
          height: '240px',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          border: '4px solid #0f172a',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ height: '8px', width: '36px', backgroundColor: '#000', borderRadius: '4px', margin: '0 auto 6px' }} />
        <div style={{ height: '40px', backgroundColor: '#ec4899', borderRadius: '6px', opacity: 0.8 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ height: '12px', backgroundColor: '#f1f5f9', borderRadius: '2px' }} />
          <div style={{ height: '12px', backgroundColor: '#f1f5f9', borderRadius: '2px' }} />
          <div style={{ height: '12px', backgroundColor: '#f1f5f9', borderRadius: '2px' }} />
        </div>
        <div style={{ fontSize: '8px', fontWeight: 700, color: '#0f172a', textAlign: 'center' }}>iOS 26 / Swift 6</div>
      </div>

      <div
        style={{
          width: '210px',
          height: '220px',
          backgroundColor: '#0f172a',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '4px', paddingBottom: '6px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '10px', borderRadius: '4px' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: '#ffffff' }}>Next.js 15 Edge SSR</div>
          <div style={{ fontSize: '8px', color: '#10b981', marginTop: '2px' }}>100/100 Core Web Vitals</div>
        </div>
        <div style={{ fontSize: '9px', color: '#94a3b8', textAlign: 'center' }}>Headless Sanity CMS</div>
      </div>
    </div>
  );
};
