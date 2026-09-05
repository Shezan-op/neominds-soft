import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RevealElement } from './scroll-reveal';

interface TestimonialItem {
  id: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
  title: string;
  hasBlueDot?: boolean;
}

export const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="28" height="16" viewBox="0 0 34 20" fill="none">
            <path d="M2 18C8 4 26 4 32 18H26C22 9 12 9 8 18H2Z" fill="#059669" />
          </svg>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#121212', fontFamily: 'var(--font-heading)' }}>
            TruBridge<sup style={{ fontSize: '9px' }}>®</sup>
          </span>
        </div>
      ),
      quote:
        'We have been partnering with Neominds since 2006, so we’ve had time to become familiar with their professionalism and the quality of service they provide. I would highlight the great responsibility which my company assumes when solving critical tasks.',
      author: 'Thomas Golden',
      title: 'VP of Engineering',
    },
    {
      id: '2',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em', color: '#121212', fontFamily: 'var(--font-heading)' }}>
            MOTIVE
          </span>
          <span style={{ fontSize: '18px', fontWeight: 900, color: '#ea580c', fontFamily: 'var(--font-heading)' }}>
            RETAIL
          </span>
        </div>
      ),
      quote:
        'We have had a very positive experience with Neominds’ staff augmentation services. Their skilled, knowledgeable professionals integrated seamlessly with our team, requiring minimal ramp-up time. Their expertise enhanced our project’s efficiency and quality.',
      author: 'Philipe Araujo',
      title: 'Director of Technology',
      hasBlueDot: true,
    },
    {
      id: '3',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '22px',
              height: '22px',
              backgroundColor: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '0.04em', fontFamily: 'var(--font-heading)' }}>
            MAERSK BROKER
          </span>
        </div>
      ),
      quote:
        'Neominds’ team deeply understood our requirements and have been a proactive part of any problem-solving process. We have only experienced a professional approach to our projects, as well as a pleasant and trust-based collaboration.',
      author: 'Sasja Ihn Christensen',
      title: 'Senior Director, Head of Digital Business',
    },
    {
      id: '4',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L36 34H4L20 4Z" stroke="#2258e7" strokeWidth="4" strokeLinejoin="round" />
            <path d="M20 16L28 30H12L20 16Z" fill="#2258e7" />
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '0.05em', fontFamily: 'var(--font-heading)' }}>
            AUTHENTICOM
          </span>
        </div>
      ),
      quote:
        'Modernizing our ETL pipeline with autonomous agentic intelligence was a complex undertaking. The engineering discipline and architectural precision brought by the team gave us a 10x throughput leap with zero compliance incidents.',
      author: 'David Meyer',
      title: 'Chief Technology Officer',
      hasBlueDot: true,
    },
    {
      id: '5',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '16px', fontWeight: 800, color: '#00a3a6', fontFamily: 'var(--font-heading)', letterSpacing: '0.04em' }}>
            SIEMENS
          </span>
          <span style={{ fontSize: '12px', color: '#121212', fontWeight: 600 }}>Healthineers</span>
        </div>
      ),
      quote:
        'Their engineering rigor in healthcare compliance and real-time medical imaging systems exceeded our expectations. They deliver production-ready code that adheres strictly to ISO and FDA software safety guidelines.',
      author: 'Dr. Elena Vogel',
      title: 'Head of Medical Software Systems',
    },
    {
      id: '6',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '11px',
            }}
          >
            S
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '0.02em', fontFamily: 'var(--font-heading)' }}>
            Santander Tech
          </span>
        </div>
      ),
      quote:
        'From high-frequency transaction order routing to sub-millisecond risk recalculations, Neominds delivered rock-solid distributed cloud infrastructure. A true enterprise engineering partner.',
      author: 'Mateo Morales',
      title: 'Lead FinTech Architect',
    },
    {
      id: '7',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '11px',
            }}
          >
            N
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '0.04em', fontFamily: 'var(--font-heading)' }}>
            Novartis R&D
          </span>
        </div>
      ),
      quote:
        'Their bio-computational engineering team accelerated our high-throughput compound screening pipeline by 4x, achieving complete audit readiness across GxP cloud benchmarks.',
      author: 'Claire Beaumont',
      title: 'VP of Discovery Informatics',
      hasBlueDot: true,
    },
    {
      id: '8',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '4px',
              backgroundColor: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 900,
              fontSize: '11px',
            }}
          >
            C
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '0.04em', fontFamily: 'var(--font-heading)' }}>
            CITY INDEX
          </span>
        </div>
      ),
      quote:
        'The latency-critical execution engines and real-time risk dashboards built by Neominds handle billions in daily volume with zero dropped packets or downtime.',
      author: 'Marcus Vance',
      title: 'Global Head of Trading Systems',
    },
    {
      id: '9',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '-0.02em', fontFamily: 'var(--font-heading)' }}>
            plato data
          </span>
        </div>
      ),
      quote:
        'Neominds helped us engineer a multi-region Kafka data fabric processing over 12 million events per second with automatic recovery and seamless failover.',
      author: 'Sarah Chen',
      title: 'Principal Distributed Architect',
      hasBlueDot: true,
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(70px, 8vw, 110px)',
        paddingBottom: 'clamp(70px, 8vw, 110px)',
        borderTop: '1px solid #e4e4e7',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: 'clamp(28px, 4vw, 44px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              CLIENT TESTIMONIALS
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 700,
                color: '#0f172a',
                letterSpacing: '-0.025em',
                margin: '6px 0 0 0',
              }}
            >
              What engineering leaders say about us
            </h2>
          </div>

          {/* Quick Page Info */}
          <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
            Showing {currentPage * itemsPerPage + 1}–{Math.min((currentPage + 1) * itemsPerPage, testimonials.length)} of {testimonials.length} reviews
          </div>
        </div>

        {/* 3-Column Testimonial Layout with Smooth Fade-in */}
        <div
          key={currentPage}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 3vw, 36px)',
            animation: 'testimonialFadeIn 0.35s ease-out',
          }}
        >
          {currentTestimonials.map((t, idx) => (
            <RevealElement key={t.id} variant="card" delay={idx * 0.06} start="top 90%" end="top 60%">
              <div
                style={{
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)',
                  border: '1px solid #e4e4e7',
                  minHeight: '380px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  height: '100%',
                  borderRadius: '6px',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.07)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.borderColor = '#e4e4e7';
                }}
              >
                {/* Top Client Logo */}
                <div style={{ marginBottom: 'clamp(20px, 2.8vw, 32px)', height: '36px', display: 'flex', alignItems: 'center' }}>
                  {t.logo}
                </div>

                {/* Quote Body */}
                <div style={{ flex: 1, marginBottom: 'clamp(20px, 3vw, 32px)' }}>
                  <p
                    className="body-text"
                    style={{
                      color: '#334155',
                      lineHeight: 1.72,
                      fontSize: '14.5px',
                    }}
                  >
                    "{t.quote}"
                  </p>

                  {t.hasBlueDot && (
                    <div style={{ marginTop: '16px' }}>
                      <span className="blue-dot" style={{ width: '6px', height: '6px' }} />
                    </div>
                  )}
                </div>

                {/* Bottom Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                  {/* Author Avatar Initial */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#eff6ff',
                      color: '#2258e7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '15px',
                      fontFamily: 'var(--font-heading)',
                      flexShrink: 0,
                      border: '1px solid #dbeafe',
                    }}
                  >
                    {t.author.charAt(0)}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#0f172a', marginBottom: '2px' }}>
                      {t.author}
                    </h4>
                    <p style={{ fontSize: '12.5px', color: '#64748b', lineHeight: 1.35, fontFamily: 'var(--font-body)', margin: 0 }}>
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </RevealElement>
          ))}
        </div>

        {/* Dedicated Carousel Arrow Controls Below Testimonials */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginTop: 'clamp(36px, 5vw, 54px)',
            paddingTop: '20px',
          }}
        >
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1.5px solid #cbd5e1',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2258e7';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#2258e7';
              e.currentTarget.style.transform = 'translateX(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(34, 88, 231, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
          >
            <ArrowLeft size={20} />
          </button>

          {/* Page Indicators & Numerical Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {Array.from({ length: totalPages }).map((_, pIdx) => (
              <button
                key={pIdx}
                onClick={() => setCurrentPage(pIdx)}
                aria-label={`Go to testimonial page ${pIdx + 1}`}
                style={{
                  width: currentPage === pIdx ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  backgroundColor: currentPage === pIdx ? '#2258e7' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1.5px solid #cbd5e1',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2258e7';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#2258e7';
              e.currentTarget.style.transform = 'translateX(3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(34, 88, 231, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            }}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes testimonialFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};
