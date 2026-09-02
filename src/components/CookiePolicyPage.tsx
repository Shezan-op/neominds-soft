import React, { useState } from 'react';
import { Cookie, CheckCircle2, Sliders } from 'lucide-react';
import { Footer } from './Footer';

interface CookiePolicyPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const CookiePolicyPage: React.FC<CookiePolicyPageProps> = ({
  onNavigatePage,
  onOpenLegal,
}) => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    performance: true,
    functional: true,
    targeting: false,
  });

  const [savedToast, setSavedToast] = useState(false);

  const handleSavePreferences = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: 'var(--navbar-height)', fontFamily: 'var(--font-body)' }}>
      {/* Hero */}
      <section style={{ paddingBlock: 'var(--section-small-y)', paddingInline: 'var(--page-padding)', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container-reading">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--badge-pad-y) var(--badge-pad-x)', backgroundColor: 'rgba(34, 88, 231, 0.08)', borderRadius: 'var(--badge-radius)', color: '#2258e7', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 'var(--space-4)' }}>
            <Cookie size={14} />
            <span>Transparency & Tracking Controls</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#0f172a', marginBottom: 'var(--space-3)' }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
            Last updated: February 2026 • ePrivacy Directive and GDPR Compliant
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ paddingBlock: 'var(--section-padding-y)', paddingInline: 'var(--page-padding)' }}>
        <div className="container-reading" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)', lineHeight: 1.7, color: '#334155', fontSize: '15px' }}>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-3)' }}>
              1. What Are Cookies?
            </h2>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Cookies are small text files placed on your device by web servers to remember preferences, analyze website traffic, and maintain authenticated sessions. We use cookies and similar browser storage mechanisms (localStorage, sessionStorage) to optimize website performance and user experience.
            </p>
          </div>

          {/* Interactive Preference Manager */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Sliders size={20} color="#2258e7" />
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', margin: 0 }}>
                Manage Your Cookie Preferences
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              {/* Necessary */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                <div style={{ maxWidth: '80%' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Strictly Necessary Cookies</span>
                    <span style={{ fontSize: '11px', color: '#2258e7', backgroundColor: 'rgba(34, 88, 231, 0.1)', padding: '2px 6px', borderRadius: '2px' }}>Required</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    Essential for secure navigation, CSRF protection, and page rendering. Cannot be disabled.
                  </div>
                </div>
                <input type="checkbox" checked={true} disabled style={{ width: '18px', height: '18px', accentColor: '#2258e7' }} />
              </div>

              {/* Performance */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                <div style={{ maxWidth: '80%' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>Performance & Analytics Cookies</div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    Anonymized aggregated metrics (Google Analytics 4, PostHog) used to identify slow page loads.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.performance}
                  onChange={(e) => setPreferences({ ...preferences, performance: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#2258e7', cursor: 'pointer' }}
                />
              </div>

              {/* Functional */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
                <div style={{ maxWidth: '80%' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>Functional Cookies</div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    Remembers your preferred regional office selection and form draft state across visits.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#2258e7', cursor: 'pointer' }}
                />
              </div>

              {/* Targeting */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ maxWidth: '80%' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>Targeting & Retargeting Pixels</div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    Used by LinkedIn and Google Ads to deliver relevant B2B technology consulting case studies.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.targeting}
                  onChange={(e) => setPreferences({ ...preferences, targeting: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: '#2258e7', cursor: 'pointer' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={handleSavePreferences}
                className="btn btn-primary btn-md"
              >
                Save Preferences
              </button>
              {savedToast && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '14px', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>Preferences saved successfully!</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
              2. Managing Cookies in Your Browser
            </h2>
            <p>
              In addition to the controls above, you can modify cookie acceptance settings directly within your web browser (Chrome, Safari, Firefox, Edge). Please note that blocking all cookies may prevent interactive forms or client portal sessions from functioning properly.
            </p>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer
        onNavigate={(target) => {
          if (target === '#contact') {
            onNavigatePage('contacts');
          } else if (target === '#casestudies') {
            onNavigatePage('portfolio');
          } else {
            onNavigatePage('home');
          }
        }}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
