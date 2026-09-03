import React from 'react';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceOverviewProps {
  statement: string;
  paragraphs: string[];
  keyTakeaway: string;
}

export const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  statement,
  paragraphs,
  keyTakeaway,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
        Strategic Overview
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
          alignItems: 'start',
        }}
      >
        {/* Left Column: Bold Statement */}
        <div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#0f172a',
              lineHeight: 1.2,
              marginBottom: '24px',
              display: 'block',
            }}
            blurStrength={6}
          >
            {statement}
          </ScrollReveal>

          {/* Key Takeaway Card */}
          <RevealElement variant="card">
            <div
              style={{
                backgroundColor: '#f8fafc',
                borderLeft: '4px solid #2258e7',
                borderTop: '1px solid #e2e8f0',
                borderRight: '1px solid #e2e8f0',
                borderBottom: '1px solid #e2e8f0',
                borderRadius: '4px',
                padding: '18px 20px',
                marginTop: '16px',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                Primary Value Vector
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b', lineHeight: 1.5 }}>
                {keyTakeaway}
              </div>
            </div>
          </RevealElement>
        </div>

        {/* Right Column: Editorial Body Paragraphs */}
        <RevealElement variant="text" delay={0.06}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#475569',
                  margin: 0,
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </RevealElement>
      </div>
    </section>
  );
};
