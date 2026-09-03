import React from 'react';
import { ServiceTechCategory, ServiceDeliverable } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceTechnologyProps {
  techStack: ServiceTechCategory[];
  deliverables: ServiceDeliverable[];
}

export const ServiceTechnology: React.FC<ServiceTechnologyProps> = ({
  techStack,
  deliverables,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '1240px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)',
        }}
      >
        {/* Deliverables Column */}
        <div>
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
            Tangible Artifacts
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'var(--font-heading)',
              marginBottom: '24px',
              display: 'block',
            }}
            blurStrength={6}
          >
            What You Receive
          </ScrollReveal>

          <RevealElement variant="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {deliverables.map((del, dIdx) => (
                <div
                  key={dIdx}
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '20px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                      {del.title}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: '#e2e8f0',
                        color: '#475569',
                        padding: '2px 8px',
                        borderRadius: '3px',
                      }}
                    >
                      {del.category}
                    </span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5, margin: '0 0 10px 0' }}>
                    {del.description}
                  </p>
                  <div style={{ fontSize: '12px', color: '#2258e7', fontWeight: 600 }}>
                    Format: {del.format}
                  </div>
                </div>
              ))}
            </div>
          </RevealElement>
        </div>

        {/* Tech Stack Column */}
        <div>
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
            Modern Production Primitives
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'var(--font-heading)',
              marginBottom: '24px',
              display: 'block',
            }}
            blurStrength={6}
          >
            Technology Stack
          </ScrollReveal>

          <RevealElement variant="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {techStack.map((stack, sIdx) => (
                <div
                  key={sIdx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '20px',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                    {stack.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {stack.items.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          backgroundColor: '#f1f5f9',
                          color: '#1e293b',
                          padding: '4px 12px',
                          borderRadius: '3px',
                          border: '1px solid #e2e8f0',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealElement>
        </div>
      </div>
    </section>
  );
};
