import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

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
  image: string;
  imageAlt: string;
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
    image: '/services/ai-development.png',
    imageAlt: 'Artificial Intelligence and Autonomous Multi-Agent Topology',
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
    image: '/services/software-development.png',
    imageAlt: 'Custom Enterprise Software Development Architecture',
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
    image: '/services/devops.png',
    imageAlt: 'Cloud Infrastructure and Zero-Downtime DevOps GitOps Pipeline',
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
    image: '/services/analytics-dashboard.png',
    imageAlt: 'Real-Time Enterprise Analytics Dashboard and Data Architecture',
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
    image: '/services/mobile-app-development.png',
    imageAlt: 'Native Mobile App Development and Responsive Web Experience',
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
    image: '/services/ui-ux-design.png',
    imageAlt: 'UX/UI Design Systems and Strategic Product Discovery Interface',
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
      {/* Embedded Responsive Styles for Smooth Performance on Any Viewport */}
      <style>{`
        @media (max-width: 999px) {
          .services-stack-section {
            position: relative !important;
            top: auto !important;
            min-height: auto !important;
            height: auto !important;
            box-shadow: none !important;
            border-top: 1px solid #e2e8f0 !important;
          }
          .services-stack-grid {
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
          .services-stack-visual {
            width: 100% !important;
            height: 320px !important;
            min-height: 320px !important;
            padding: 0 !important;
          }
          .services-stack-img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .services-stack-content {
            padding: 36px 22px 50px !important;
          }
        }
        @media (min-width: 1000px) {
          .services-stack-section {
            position: sticky !important;
            top: 0 !important;
            height: 100vh !important;
            min-height: 100vh !important;
            box-shadow: 0 -12px 36px rgba(0, 0, 0, 0.04) !important;
          }
          .services-stack-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            height: 100% !important;
            width: 100% !important;
          }
          .services-stack-visual {
            width: 100% !important;
            height: 100% !important;
            min-height: 100% !important;
            padding: 0 !important;
          }
          .services-stack-img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .services-stack-content {
            padding: clamp(48px, 5vw, 84px) clamp(40px, 4.5vw, 76px) !important;
          }
        }
      `}</style>

      {/* Section Introduction Header */}
      <div
        className="container"
        style={{
          maxWidth: '1280px',
          paddingTop: '20px',
          paddingBottom: 'clamp(24px, 3vw, 40px)',
        }}
      >
        <RevealElement variant="text">
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
        </RevealElement>

        <ScrollReveal
          as="h2"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#0f172a',
            maxWidth: '750px',
            margin: 0,
            letterSpacing: '-0.02em',
            display: 'block',
          }}
          blurStrength={7}
        >
          Specialized engineering practices tailored to enterprise scale.
        </ScrollReveal>
      </div>

      {stackCards.map((card, idx) => {
        const isHovered = hoveredCard === card.id;

        return (
          <section
            key={card.id}
            className="services-stack-section"
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
              className="services-stack-grid"
              style={{
                width: '100%',
                height: '100%',
                display: isMobile ? 'flex' : 'grid',
                flexDirection: isMobile ? 'column' : undefined,
                gridTemplateColumns: isMobile ? undefined : '1fr 1fr',
                alignItems: 'stretch',
              }}
            >
              {/* Left Visual Column - Full Screen / Edge-to-Edge Image */}
              <div
                onClick={() => handleCardClick(card.slug)}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="services-stack-visual"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: isMobile ? '320px' : '100%',
                  backgroundColor: '#0f172a',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  userSelect: 'none',
                }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  className="services-stack-img"
                  style={{
                    width: '100%',
                    height: '100%',
                    minHeight: isMobile ? '320px' : '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  }}
                />

                {/* Subtle dark gradient overlay for visual depth */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.18) 0%, transparent 45%), linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, transparent 35%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>

              {/* Right Content Column */}
              <div
                className="services-stack-content"
                style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: isMobile ? '36px 22px 50px' : 'clamp(48px, 5vw, 84px) clamp(40px, 4.5vw, 76px)',
                }}
              >
                <div style={{ maxWidth: '620px' }}>
                  <div
                    onClick={() => handleCardClick(card.slug)}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '16px',
                      cursor: 'pointer',
                      marginBottom: '12px',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(22px, 2.6vw, 36px)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.18,
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
                        width: '38px',
                        height: '38px',
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
                        size={26}
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
                      fontSize: isMobile ? '13px' : '14px',
                      fontWeight: 600,
                      color: '#334155',
                      margin: '0 0 16px 0',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.tagline}
                  </p>

                  {/* Detailed Description with Embedded Keyword Links */}
                  <p
                    style={{
                      fontSize: 'clamp(14px, 1.05vw, 15.5px)',
                      lineHeight: 1.65,
                      color: '#475569',
                      margin: '0 0 22px 0',
                      fontWeight: 400,
                    }}
                  >
                    {renderDescriptionWithLinks(card.description, card.links, handleCardClick)}
                  </p>

                  {/* Connected Neominds Services Pills */}
                  <div style={{ marginBottom: isMobile ? '20px' : '26px' }}>
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
                            gap: '5px',
                            padding: isMobile ? '5px 12px' : '6px 14px',
                            borderRadius: '20px',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #cbd5e1',
                            fontSize: isMobile ? '11px' : '12px',
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
                          <ArrowUpRight size={12} />
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
                        padding: isMobile ? '10px 18px' : '11px 22px',
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
