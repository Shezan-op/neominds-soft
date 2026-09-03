import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface RelatedServiceItem {
  slug: string;
  title: string;
  tagline: string;
  category: string;
}

interface RelatedServicesProps {
  currentSlug: string;
  currentTitle: string;
  relatedItems: RelatedServiceItem[];
  onNavigatePage: (slug: string) => void;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  currentTitle,
  relatedItems,
  onNavigatePage,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#2258e7',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px',
            }}
          >
            Connected Capabilities
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 40px)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            Complementary Ecosystem Services
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              Scale your initiatives by integrating {currentTitle} with adjacent platform engineering and AI disciplines.
            </p>
          </RevealElement>
        </div>

        {/* 3-4 Connected Service Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {relatedItems.map((item) => (
            <div
              key={item.slug}
              onClick={() => onNavigatePage(item.slug)}
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#2258e7';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(34, 88, 231, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#2258e7',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.category}
                </span>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#0f172a',
                    fontFamily: 'var(--font-heading)',
                    margin: '8px 0 10px 0',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                  {item.tagline}
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#2258e7',
                  fontSize: '13px',
                  fontWeight: 700,
                  marginTop: '20px',
                }}
              >
                <span>Explore Service</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
