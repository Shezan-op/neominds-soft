import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineElements = textContainerRef.current?.querySelectorAll('.fill-line-text');
      if (!lineElements || lineElements.length === 0) return;

      // Line-by-line progressive text fill linked to scroll position
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 60%',
          scrub: 0.8,
        },
      });

      lineElements.forEach((line) => {
        tl.fromTo(
          line,
          { opacity: 0.2, color: 'rgba(255, 255, 255, 0.25)' },
          { opacity: 1, color: '#ffffff', ease: 'none', duration: 1 }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#001334',
        paddingTop: 'clamp(80px, 9vw, 120px)',
        paddingBottom: 'clamp(70px, 8vw, 110px)',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Large Editorial Headline with Line-by-Line Fill */}
        <div
          ref={textContainerRef}
          style={{
            maxWidth: '1120px',
            marginBottom: 'clamp(28px, 4vw, 40px)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4.2vw, 64px)',
              fontWeight: 600,
              lineHeight: 1.2,
              letterSpacing: '-0.025em',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <span className="fill-line-text" style={{ transition: 'color 0.2s' }}>
              Backed by 23 years of full-spectrum
            </span>
            <span className="fill-line-text" style={{ transition: 'color 0.2s' }}>
              engineering for healthcare, financial
            </span>
            <span className="fill-line-text" style={{ transition: 'color 0.2s' }}>
              services, and ISV/SaaS companies.
            </span>
          </p>
        </div>

        {/* Decorative Blue Dot Motif */}
        <div style={{ margin: 'clamp(24px, 4vw, 40px) 0 clamp(48px, 6vw, 80px) 0', paddingLeft: '4px' }}>
          <span className="blue-dot" style={{ width: '8px', height: '8px' }} />
        </div>

        {/* Client Logos Grid (Responsive 4-col desktop, 2-col mobile) */}
        <div
          className="logos-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            alignItems: 'center',
            justifyItems: 'start',
            gap: '36px 28px',
            opacity: 0.9,
            paddingTop: '24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* miDiagnostics Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontSize: 'clamp(20px, 2.2vw, 24px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.03em',
              }}
            >
              <i style={{ fontStyle: 'italic', fontWeight: 800 }}>mi</i>Diagnostics
            </span>
          </div>

          {/* Delta Symbol Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="38" height="34" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 2L38 33H2L20 2Z"
                stroke="#ffffff"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              <path
                d="M20 12L29 28H11L20 12Z"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* MAERSK BROKER Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#001334">
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
              </svg>
            </div>
            <span
              style={{
                fontSize: 'clamp(14px, 1.4vw, 17px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.04em',
              }}
            >
              MAERSK BROKER
            </span>
          </div>

          {/* TruBridge Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="32" height="18" viewBox="0 0 34 20" fill="none">
              <path
                d="M2 18C8 4 26 4 32 18H26C22 9 12 9 8 18H2Z"
                fill="#ffffff"
              />
            </svg>
            <span
              style={{
                fontSize: 'clamp(18px, 1.8vw, 22px)',
                fontWeight: 700,
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '-0.02em',
              }}
            >
              TruBridge<sup style={{ fontSize: '10px' }}>®</sup>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 580px) {
          .logos-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
