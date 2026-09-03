import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ServiceCapability } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceCapabilitiesProps {
  title: string;
  capabilities: ServiceCapability[];
  icon: LucideIcon;
}

export const ServiceCapabilities: React.FC<ServiceCapabilitiesProps> = ({
  title,
  capabilities,
  icon: IconComponent,
}) => {
  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Engineered Capabilities
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.4vw, 42px)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.15,
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={6}
          >
            What We Deliver in {title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              Production-grade architectural capabilities engineered for mission-critical reliability, scale, and seamless integrations.
            </p>
          </RevealElement>
        </div>

        {/* 6-8 Capability Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {capabilities.map((cap, idx) => (
            <RevealElement key={idx} variant="card" delay={idx * 0.04}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '28px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(34, 88, 231, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(34, 88, 231, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2258e7',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComponent size={20} />
                  </div>

                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#2258e7', marginBottom: '6px' }}>
                    0{idx + 1}
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0f172a',
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '12px',
                    }}
                  >
                    {cap.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '14.5px',
                      lineHeight: 1.65,
                      color: '#475569',
                      marginBottom: '24px',
                    }}
                  >
                    {cap.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 600,
                        backgroundColor: '#f1f5f9',
                        color: '#334155',
                        padding: '4px 10px',
                        borderRadius: '3px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealElement>
          ))}
        </div>
      </div>
    </section>
  );
};
