import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ServiceProcessStep } from '../../types/service';
import { ScrollReveal, RevealElement } from '../scroll-reveal';

interface ServiceProcessProps {
  title: string;
  steps: ServiceProcessStep[];
}

export const ServiceProcess: React.FC<ServiceProcessProps> = ({ title, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      style={{
        padding: 'clamp(64px, 7vw, 96px) 24px',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Structured Execution
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
            How We Deliver {title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              An agile, multi-stage delivery framework engineered to minimize delivery risk and achieve zero-defect launches.
            </p>
          </RevealElement>
        </div>

        {/* Step Tabs Grid */}
        <RevealElement variant="card">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            {steps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: activeStep === idx ? '#ffffff' : '#f8fafc',
                  border: activeStep === idx ? '2px solid #2258e7' : '1px solid #e2e8f0',
                  borderRadius: '4px',
                  padding: '16px 20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: activeStep === idx ? '0 4px 12px rgba(34, 88, 231, 0.1)' : 'none',
                }}
              >
                <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#2258e7', marginBottom: '4px' }}>
                  STEP {step.step}
                </div>
                <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#0f172a' }}>
                  {step.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detail View */}
          <div
            style={{
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              <div>
                <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#2258e7', textTransform: 'uppercase' }}>
                  Phase {steps[activeStep].step} Details
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', margin: '8px 0 16px' }}>
                  {steps[activeStep].title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569', margin: 0 }}>
                  {steps[activeStep].description}
                </p>
              </div>

              <div>
                <h4 style={{ fontSize: '13.5px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
                  Key Phase Deliverables
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {steps[activeStep].deliverables.map((del, dIdx) => (
                    <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#2258e7" />
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealElement>
      </div>
    </section>
  );
};
