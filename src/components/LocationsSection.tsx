import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface LocationsSectionProps {
  onSuccessToast?: (msg: string) => void;
  onOpenPrivacy?: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSuccessToast, onOpenPrivacy }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !newsletterConsent) {
      alert('Please enter your email and accept terms.');
      return;
    }
    setSubscribed(true);
    if (onSuccessToast) onSuccessToast(`Subscribed "${email}" to Neominds technology briefs.`);
  };

  return (
    <section
      id="locations"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        paddingTop: 'clamp(60px, 7vw, 90px)',
        paddingBottom: 'clamp(48px, 6vw, 60px)',
        color: '#121212',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px' }}>
        {/* Main Location Section matching ourlocations.png */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1fr) minmax(300px, 1.4fr)',
            gap: 'clamp(36px, 5vw, 64px)',
            marginBottom: 'clamp(48px, 6vw, 90px)',
          }}
          className="location-grid"
        >
          {/* Left Column: Heading & Contact Info */}
          <div>
            <ScrollReveal
              as="h2"
              className="section-title"
              style={{
                color: '#121212',
                marginBottom: '16px',
                display: 'block',
              }}
              blurStrength={6}
            >
              Our locations
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p
                className="body-lead"
                style={{
                  color: '#475067',
                  marginBottom: '28px',
                  maxWidth: '380px',
                }}
              >
                Say hello to our friendly engineering team at our headquarters.
              </p>
            </RevealElement>

            <a
              href="mailto:rfq@neominds.io"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#2258E7',
                fontSize: '16px',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.2s',
                minHeight: '44px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#183c9e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#2258E7')}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  backgroundColor: '#2258E7',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Mail size={15} />
              </div>
              <span>rfq@neominds.io</span>
            </a>
          </div>

          {/* Right Column: Single Neominds Headquarters Location Card */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div>
              {/* Region Tab */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
                <button
                  className="btn-primary btn-sm"
                  style={{
                    borderRadius: '0px',
                  }}
                >
                  Americas
                </button>
              </div>

              {/* Single Location Card for Neominds */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e4e4e7',
                  padding: 'clamp(24px, 3.5vw, 36px) clamp(20px, 3vw, 32px)',
                  maxWidth: '480px',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                }}
              >
                <h3
                  style={{
                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    color: '#121212',
                    marginBottom: '12px',
                  }}
                >
                  San Francisco, California
                </h3>

                <p style={{ color: '#475067', fontSize: '15px', lineHeight: 1.6, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>
                  50 California St #1500
                </p>
                <p style={{ color: '#475067', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px', fontFamily: 'var(--font-body)' }}>
                  San Francisco, CA 94111, United States
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <a
                    href="tel:+14159685678"
                    style={{
                      color: '#121212',
                      fontSize: '15px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: 'var(--font-heading)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2258E7')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#121212')}
                  >
                    +1 (415) 968-5678
                  </a>
                </div>
              </div>
            </div>
          </RevealElement>
        </div>

        {/* Newsletter Strip matching lower portion of ourlocations.png */}
        <RevealElement variant="card" start="top 92%" end="top 70%">
          <div
            style={{
              borderTop: '1px solid #e4e4e7',
              paddingTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 1fr) minmax(300px, 1.4fr)',
              gap: '36px',
              alignItems: 'center',
            }}
            className="newsletter-grid"
          >
            {/* Newsletter Text */}
            <div>
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.2vw, 30px)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  color: '#121212',
                  marginBottom: '8px',
                }}
              >
                Join our newsletter
              </h3>
              <p className="body-text" style={{ color: '#475067' }}>
                Stay up to date with the latest news, announcements, and articles.
              </p>
            </div>

            {/* Newsletter Form */}
            <div>
              {subscribed ? (
                <div style={{ color: '#059669', fontWeight: 600, fontSize: '15px', fontFamily: 'var(--font-heading)' }}>
                  ✓ Thank you for subscribing to Neominds updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: 1,
                        minWidth: '220px',
                        minHeight: '44px',
                        padding: '10px 16px',
                        border: '1px solid #d0d3dd',
                        borderRadius: '0px',
                        fontSize: '15px',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        color: '#121212',
                      }}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-md"
                    >
                      Subscribe
                    </button>
                  </div>

                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      lineHeight: 1.45,
                      color: '#666e85',
                    }}
                  >
                    <input
                      type="checkbox"
                      required
                      checked={newsletterConsent}
                      onChange={(e) => setNewsletterConsent(e.target.checked)}
                      className="custom-checkbox"
                    />
                    <span>
                      Subscribe to Neominds newsletter to receive updates. You can unsubscribe at any time. See our{' '}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onOpenPrivacy) onOpenPrivacy();
                        }}
                        style={{ color: '#121212', textDecoration: 'underline', cursor: 'pointer', fontSize: '12px', background: 'none', border: 'none', padding: 0 }}
                      >
                        Privacy Policy
                      </button>{' '}
                      for details.
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>
        </RevealElement>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-grid, .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
