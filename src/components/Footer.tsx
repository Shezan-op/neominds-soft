import React from 'react';

interface FooterColumn {
  title: string;
  links: { label: string; target: string; isLegal?: 'privacy' | 'cookie' | 'security'; isSettings?: boolean }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: 'Core Services',
    links: [
      { label: 'Software Development', target: '#software-development' },
      { label: 'AI Development', target: '#ai-development' },
      { label: 'Mobile App Development', target: '#mobile-app-development' },
      { label: 'Web & CMS Development', target: '#web-cms-development' },
      { label: 'Ecommerce Development', target: '#ecommerce-development' },
      { label: 'DevOps & Cloud', target: '#devops' },
    ],
  },
  {
    title: 'AI & Intelligence',
    links: [
      { label: 'AI Agents & Swarms', target: '#ai-agents' },
      { label: 'AI Automations (IPA)', target: '#ai-automations' },
      { label: 'Chatbot & Video Bot', target: '#chatbot-videobot' },
      { label: 'Analytics Dashboard', target: '#analytics-dashboard' },
      { label: '24/7 Technical Support', target: '#technical-support' },
    ],
  },
  {
    title: 'Strategic Phases',
    links: [
      { label: 'Product Discovery', target: '#product-discovery' },
      { label: 'Solution Architecture', target: '#product-engineering' },
      { label: 'Business Analysis', target: '#business-analysis' },
      { label: 'IT Consulting', target: '#it-consulting' },
      { label: 'UI/UX Design', target: '#ui-ux-design' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'FinTech & Banking', target: '#portfolio' },
      { label: 'Healthcare & HIPAA', target: '#portfolio' },
      { label: 'Ecommerce & Retail', target: '#portfolio' },
      { label: 'Logistics & Supply Chain', target: '#portfolio' },
      { label: 'Enterprise SaaS', target: '#portfolio' },
    ],
  },
  {
    title: 'Company & Legal',
    links: [
      { label: 'About Us', target: '#about-us' },
      { label: 'Case Studies', target: '#portfolio' },
      { label: 'Insights & Blogs', target: '#insights' },
      { label: 'Contacts & RFP', target: '#contacts' },
      { label: 'Privacy Policy', target: '#privacy-policy', isLegal: 'privacy' },
      { label: 'Cookie Policy', target: '#cookie-policy', isLegal: 'cookie' },
      { label: 'Security Standards', target: '#security-policy', isLegal: 'security' },
    ],
  },
];

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
  onOpenCookies?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal, onOpenCookies }) => {
  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'var(--footer-padding-top)',
        paddingBottom: 'var(--footer-padding-bottom)',
        borderTop: '1px solid #e4e4e7',
        color: '#121212',
      }}
    >
      <div className="container-large">
        {/* 5 Multi-Column Layout matching EffectiveSoft design */}
        <div
          className="footer-nav-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 'var(--footer-col-gap) var(--space-6)',
            marginBottom: 'var(--space-9)',
          }}
        >
          {footerColumns.map((col, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#121212',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {col.title}
              </h4>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--footer-link-gap)' }}>
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.target}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.isSettings && onOpenCookies) {
                          onOpenCookies();
                        } else if (link.isLegal && onOpenLegal) {
                          onOpenLegal(link.isLegal);
                        } else {
                          onNavigate(link.target);
                        }
                      }}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        color: '#475067',
                        lineHeight: 1.4,
                        transition: 'color 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        minHeight: '28px',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#2258E7')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#475067')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Decorative blue dot */}
              {idx === 0 && (
                <div style={{ position: 'absolute', bottom: '-20px', left: '0' }}>
                  <span className="blue-dot" style={{ width: '6px', height: '6px' }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar: Logo Mark, Copyright & Clean Attribution */}
        <div
          style={{
            paddingTop: '32px',
            borderTop: '1px solid #f0f2f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div
            onClick={() => onNavigate('#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
          >
            {/* Neominds Speed Bars Icon */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5px',
                width: '18px',
              }}
            >
              <span style={{ height: '2px', backgroundColor: '#121212', width: '100%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '85%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '100%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '70%' }} />
              <span style={{ height: '2px', backgroundColor: '#121212', width: '100%' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em', color: '#121212' }}>
              Neominds
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#666e85' }}>
            © {new Date().getFullYear()} Neominds Inc. All rights reserved. High-fidelity product engineering & applied AI.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-nav-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
};
