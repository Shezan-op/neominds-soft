import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import gsap from 'gsap';

interface RecognitionSlide {
  badgeTitle: string;
  category: string;
  org: string;
  orgSub: string;
  location: string;
  year: string;
  badgeType: 'clutch' | 'forrester';
}

const slides: RecognitionSlide[] = [
  {
    badgeTitle: 'TOP',
    category: 'ARTIFICIAL INTELLIGENCE COMPANY',
    org: 'Clutch',
    orgSub: '',
    location: 'SAN FRANCISCO',
    year: '2026',
    badgeType: 'clutch',
  },
  {
    badgeTitle: 'GLOBAL LEADER',
    category: 'ENTERPRISE AI & DIGITAL ENGINEERING',
    org: 'Forrester',
    orgSub: 'WAVE REVIEW',
    location: 'NORTH AMERICA',
    year: '2026',
    badgeType: 'forrester',
  },
];

export const IndustryRecognition: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 5-second automatic switching
  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  // Refined crossfade animation on slide change
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0.4, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <section
      id="recognition"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'var(--section-padding-y)',
        paddingBottom: 'var(--section-padding-y)',
        overflow: 'hidden',
        borderTop: '1px solid #e2e8f0',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
            gap: 'clamp(40px, 6vw, 64px)',
          }}
        >
          {/* Left Column Text */}
          <div style={{ maxWidth: '540px' }}>
            <h2
              className="section-title"
              style={{
                color: '#0f172a',
                marginBottom: 'clamp(20px, 3vw, 28px)',
              }}
            >
              Industry recognition
            </h2>

            <p
              className="body-lead"
              style={{
                color: '#334155',
                marginBottom: '20px',
              }}
            >
              We are recognized for AI engineering capabilities in the{' '}
              <span style={{ color: '#2258e7', fontWeight: 700 }}>
                “Agentic AI in Digital Engineering Market 2025–2029”
              </span>{' '}
              report by Research and Markets, listed alongside NVIDIA, OpenAI, Google Cloud, and Accenture.
            </p>

            <p
              className="body-text"
              style={{
                color: '#64748b',
              }}
            >
              Beyond AI, we bring AWS, Google Cloud, and Microsoft partnerships with ISO/IEC 27001:2022-certified processes.
            </p>
          </div>

          {/* Right Column Recognition Artwork Carousel */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: 'clamp(36px, 5vw, 60px) clamp(20px, 3vw, 40px)',
              minHeight: '440px',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Left Nav Arrow */}
            <button
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#0f172a',
                opacity: 0.7,
                padding: '12px',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
                zIndex: 4,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              aria-label="Previous Award"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#0f172a',
                opacity: 0.7,
                padding: '12px',
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.2s',
                zIndex: 4,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
              aria-label="Next Award"
            >
              <ChevronRight size={28} />
            </button>

            {/* Recognition Badge Container */}
            <div
              ref={cardRef}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
                maxWidth: '420px',
              }}
            >
              {/* Hexagonal Stylized Award Badge */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  backgroundColor: '#ffffff',
                  color: '#121212',
                  padding: 'clamp(28px, 4vw, 36px) clamp(16px, 3vw, 28px)',
                  clipPath: 'polygon(50% 0%, 100% 18%, 100% 82%, 50% 100%, 0% 82%, 0% 18%)',
                  boxShadow: '0 20px 48px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '8px solid #f1f5f9',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    color: '#64748b',
                    marginBottom: '4px',
                  }}
                >
                  {currentSlide.badgeTitle}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#0f172a',
                    marginBottom: '16px',
                  }}
                >
                  {currentSlide.category}
                </span>

                {/* Divider Line */}
                <div style={{ width: '80%', height: '1px', backgroundColor: '#e2e8f0', marginBottom: '14px' }} />

                {/* Org Logo / Brand Title */}
                <div style={{ margin: '8px 0' }}>
                  {currentSlide.badgeType === 'clutch' ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span
                        style={{
                          fontSize: 'clamp(36px, 5vw, 44px)',
                          fontWeight: 900,
                          letterSpacing: '-0.03em',
                          color: '#192b3a',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        Clut<span style={{ color: '#ea4335' }}>c</span>h
                      </span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: 'clamp(26px, 4vw, 32px)',
                          fontWeight: 800,
                          letterSpacing: '-0.02em',
                          color: '#00558f',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        FORRESTER
                      </span>
                      <span style={{ fontSize: '11px', letterSpacing: '0.15em', fontWeight: 600, color: '#475067', fontFamily: 'var(--font-heading)' }}>
                        WAVE LEADER
                      </span>
                    </div>
                  )}
                </div>

                {/* Small blue dot motif */}
                <div style={{ margin: '8px 0' }}>
                  <span className="blue-dot" style={{ width: '6px', height: '6px' }} />
                </div>

                {/* Divider Line */}
                <div style={{ width: '80%', height: '1px', backgroundColor: '#e2e8f0', marginTop: '6px', marginBottom: '12px' }} />

                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    color: '#64748b',
                    marginBottom: '2px',
                  }}
                >
                  {currentSlide.location}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: '#2258e7',
                  }}
                >
                  {currentSlide.year}
                </span>
              </div>
            </div>

            {/* Bottom Controls: Pause Button & Slide Indicators */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '380px',
                marginTop: '32px',
              }}
            >
              {/* Pause / Play Toggle Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  background: '#ffffff',
                }}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>

              {/* Progress Indicator Bars */}
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: idx === currentIndex ? '36px' : '20px',
                      height: '4px',
                      backgroundColor: idx === currentIndex ? '#2258e7' : '#cbd5e1',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderRadius: '2px',
                    }}
                    role="button"
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
