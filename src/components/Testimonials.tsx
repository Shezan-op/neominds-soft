import React from 'react';

interface TestimonialItem {
  id: string;
  logo: React.ReactNode;
  quote: string;
  author: string;
  title: string;
  hasBlueDot?: boolean;
}

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="28" height="16" viewBox="0 0 34 20" fill="none">
            <path d="M2 18C8 4 26 4 32 18H26C22 9 12 9 8 18H2Z" fill="#059669" />
          </svg>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#121212' }}>
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
          <span style={{ fontSize: '18px', fontWeight: 900, letterSpacing: '0.05em', color: '#121212' }}>
            MOTIVE
          </span>
          <span style={{ fontSize: '18px', fontWeight: 900, color: '#ea580c' }}>
            RETAIL
          </span>
        </div>
      ),
      quote:
        'We have had a very positive experience with Neominds’ staff augmentation services. Their skilled, knowledgeable professionals integrated seamlessly with our team, requiring minimal ramp-up time. Their expertise enhanced our project’s efficiency and quality. We confidently recommend Neominds for any organization seeking top-tier talent to augment their teams and drive successful outcomes.',
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
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </div>
          <span style={{ fontSize: '15px', fontWeight: 800, color: '#121212', letterSpacing: '0.04em' }}>
            MAERSK BROKER
          </span>
        </div>
      ),
      quote:
        'Neominds’ team deeply understood our requirements and have been a proactive part of any problem-solving process. We have only experienced a professional approach to our projects, as well as a pleasant and trust-based collaboration. They’ve quickly found and added the necessary resources to the team when needed. I have no doubt that they will continue to be a valuable asset to any collaborators in the future.',
      author: 'Sasja Ihn Christensen',
      title: 'Senior Director, Head of Digital Business',
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(70px, 8vw, 110px)',
        paddingBottom: 'clamp(80px, 9vw, 120px)',
        borderTop: '1px solid #e4e4e7',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* 3-Column Testimonial Layout matching testimonials.png */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(28px, 4vw, 48px) clamp(20px, 3vw, 36px)',
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)',
                border: '1px solid #e4e4e7',
                minHeight: '400px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
              }}
            >
              {/* Top Client Logo */}
              <div style={{ marginBottom: 'clamp(24px, 3vw, 36px)', height: '36px', display: 'flex', alignItems: 'center' }}>
                {t.logo}
              </div>

              {/* Quote Body */}
              <div style={{ flex: 1, marginBottom: 'clamp(20px, 3vw, 32px)' }}>
                <p
                  className="body-text"
                  style={{
                    color: '#475067',
                    lineHeight: 1.72,
                  }}
                >
                  {t.quote}
                </p>

                {t.hasBlueDot && (
                  <div style={{ marginTop: '16px' }}>
                    <span className="blue-dot" style={{ width: '6px', height: '6px' }} />
                  </div>
                )}
              </div>

              {/* Bottom Author Info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid #f0f2f6' }}>
                {/* Author Avatar Initial */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#e9eefd',
                    color: '#2258E7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '16px',
                    fontFamily: 'var(--font-heading)',
                    flexShrink: 0,
                  }}
                >
                  {t.author.charAt(0)}
                </div>

                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#121212', marginBottom: '2px' }}>
                    {t.author}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#666e85', lineHeight: 1.35, fontFamily: 'var(--font-body)' }}>
                    {t.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
