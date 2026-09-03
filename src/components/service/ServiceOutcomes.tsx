import React from 'react';
import { TrendingUp } from 'lucide-react';
import { ServiceOutcome } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceOutcomesProps {
  title: string;
  outcomes: ServiceOutcome[];
}

export const ServiceOutcomes: React.FC<ServiceOutcomesProps> = ({ title, outcomes }) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: '#0f172a',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              fontWeight: 700,
              color: '#60a5fa',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px',
            }}
          >
            <TrendingUp size={14} />
            <span>Measurable Impact</span>
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 42px)',
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            Business Outcomes Delivered by {title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              Tangible efficiency gains, cost reductions, and operational acceleration achieved through our engineered solutions.
            </p>
          </RevealElement>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {outcomes.map((item, idx) => (
            <RevealElement key={idx} variant="card" delay={idx * 0.05}>
              <div
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '6px',
                  padding: '28px',
                  height: '100%',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    color: '#38bdf8',
                    fontFamily: 'var(--font-heading)',
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}
                >
                  {item.metric}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '13.5px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </RevealElement>
          ))}
        </div>
      </div>
    </section>
  );
};
