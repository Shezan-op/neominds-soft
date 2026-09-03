import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ServiceFaq } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceFAQProps {
  title: string;
  faqs: ServiceFaq[];
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({ title, faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        maxWidth: '860px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
          Common Questions
        </div>
        <ScrollReveal
          as="h2"
          style={{
            fontSize: 'clamp(28px, 3.2vw, 38px)',
            fontWeight: 800,
            color: '#0f172a',
            fontFamily: 'var(--font-heading)',
            lineHeight: 1.18,
            display: 'block',
          }}
          blurStrength={6}
        >
          Frequently Asked Questions About {title}
        </ScrollReveal>
      </div>

      <RevealElement variant="card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  aria-expanded={isExpanded}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '15.5px', fontWeight: 700, color: '#0f172a', paddingRight: '16px' }}>
                    {faq.question}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={18} color="#2258e7" />
                  ) : (
                    <ChevronDown size={18} color="#64748b" />
                  )}
                </button>

                {isExpanded && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      fontSize: '14.5px',
                      lineHeight: 1.65,
                      color: '#475569',
                      borderTop: '1px solid #edf2f7',
                      marginTop: '2px',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </RevealElement>
    </section>
  );
};
