import React from 'react';
import {
  Sparkles,
} from 'lucide-react';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface AboutUsPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast?: (msg: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onNavigatePage,
}) => {
  const leaders = [
    {
      name: 'Alexander Kachaev',
      title: 'Chief Executive Officer',
      role: 'Global Leadership & Strategic Vision',
      bio: 'Leading EffectiveSoft since inception, Alexander has scaled the company into a premier international engineering powerhouse delivering transformative software solutions for Fortune 500 enterprises and hyper-growth innovators.',
      image: '/uploads/ESThumbnails/127053/330.Image.jpeg',
    },
    {
      name: 'Mark Minehart',
      title: 'Chief Technology Officer',
      role: 'Technology Strategy & Architecture',
      bio: 'Directs the engineering practices, cloud infrastructure modernization, and AI innovation labs across all global delivery centers, ensuring rock-solid technical execution and adherence to ISO/IEC 27001 standards.',
      image: '/uploads/ESThumbnails/141627/330.Vladimir-Arefev.png',
    },
    {
      name: 'Elena Rostova',
      title: 'Head of Business Analysis & Strategy',
      role: 'CBAP Certified, Requirements Engineering',
      bio: 'Over 14 years bridging executive vision and software code. Elena leads our requirements engineering practice, ensuring every product sprint delivers quantifiable commercial ROI and zero scope ambiguity.',
      image: '/uploads/ESThumbnails/140007/330.Emanuel-Hernandez-Castillo.png',
    },
    {
      name: 'Vladimir Arefyev',
      title: 'Principal Solution Consultant',
      role: 'Enterprise Architecture & Cloud Advisory',
      bio: 'Specializes in legacy monolith strangler migrations, distributed microservices, and high-throughput streaming pipelines for automotive and financial platforms.',
      image: '/uploads/ESThumbnails/141627/330.Vladimir-Arefev.png',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(64px, 8vw, 90px) 24px clamp(48px, 6vw, 70px)',
          maxWidth: '1240px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            backgroundColor: 'rgba(34, 88, 231, 0.08)',
            border: '1px solid rgba(34, 88, 231, 0.25)',
            borderRadius: '2px',
            color: '#2258e7',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.04em',
            marginBottom: '24px',
            textTransform: 'uppercase',
          }}
        >
          <Sparkles size={14} />
          <span>About Neominds</span>
        </div>

        <ScrollReveal
          as="h1"
          style={{
            fontSize: 'clamp(40px, 6vw, 68px)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#0f172a',
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)',
            display: 'block',
          }}
          blurStrength={8}
        >
          Fueling <span style={{ color: '#2258e7' }}>Disruption</span>
        </ScrollReveal>

        <RevealElement variant="text" delay={0.06}>
          <p
            style={{
              fontSize: 'clamp(17px, 1.3vw, 20px)',
              lineHeight: 1.6,
              color: '#475569',
              maxWidth: '780px',
              margin: '0 auto 48px',
            }}
          >
            For over 23 years, Neominds has been the trusted software product engineering partner for global enterprises and fast-growing innovators, turning ambitious technical vision into resilient digital reality.
          </p>
        </RevealElement>

        {/* Stats Grid */}
        <RevealElement variant="card" start="top 92%" end="top 65%">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              maxWidth: '1040px',
              margin: '0 auto',
            }}
          >
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '42px', fontWeight: 800, color: '#2258e7', fontFamily: 'var(--font-heading)' }}>23+</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '6px', fontWeight: 500 }}>Years of Engineering Excellence</div>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>1,000+</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '6px', fontWeight: 500 }}>Delivered Software Projects</div>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '42px', fontWeight: 800, color: '#16a34a', fontFamily: 'var(--font-heading)' }}>52%</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '6px', fontWeight: 500 }}>Clients Partnering &gt; 4 Years</div>
            </div>
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '28px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)' }}>
              <div style={{ fontSize: '42px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>9+</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '6px', fontWeight: 500 }}>Global Delivery Locations</div>
            </div>
          </div>
        </RevealElement>
      </section>

      {/* ========================================================
          LEADERSHIP TEAM (Image & Bio Grid)
          ======================================================== */}
      <section style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
            Executive Leadership
          </div>
          <ScrollReveal
            as="h2"
            style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)', display: 'block' }}
            blurStrength={7}
          >
            Guiding Minds
          </ScrollReveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {leaders.map((ldr, idx) => (
            <RevealElement key={ldr.name} variant="card" delay={(idx % 4) * 0.08} start="top 90%" end="top 65%">
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                }}
              >
                <div>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(34, 88, 231, 0.1)', border: '2px solid #2258e7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 800, color: '#2258e7', marginBottom: '20px' }}>
                    {ldr.name.charAt(0)}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '4px', fontFamily: 'var(--font-heading)' }}>{ldr.name}</h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#2258e7', marginBottom: '16px' }}>{ldr.title}</div>
                  <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', margin: 0 }}>{ldr.bio}</p>
                </div>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', marginTop: '20px', fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
                  {ldr.role}
                </div>
              </div>
            </RevealElement>
          ))}
        </div>
      </section>

      {/* ========================================================
          GLOBAL LOCATIONS
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <ScrollReveal
              as="h2"
              style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', marginBottom: '12px', fontFamily: 'var(--font-heading)', display: 'block' }}
              blurStrength={6}
            >
              Our Global Locations
            </ScrollReveal>
            <RevealElement variant="text" delay={0.06}>
              <p style={{ fontSize: '16px', color: '#64748b' }}>Worldwide engineering centers and client collaboration offices</p>
            </RevealElement>
          </div>

          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '6px', borderLeft: '3px solid #2258e7', border: '1px solid #e2e8f0', borderLeftWidth: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>San Diego, California (HQ)</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>4445 Eastgate Mall, Suite 200, 92121</p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '6px', borderLeft: '3px solid #2258e7', border: '1px solid #e2e8f0', borderLeftWidth: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>San Francisco, California</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>50 California St #1500, 94111</p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '6px', borderLeft: '3px solid #2258e7', border: '1px solid #e2e8f0', borderLeftWidth: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>Warsaw, Poland</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>126/134 Marszalkowska Street, 00-008</p>
              </div>
              <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '6px', borderLeft: '3px solid #2258e7', border: '1px solid #e2e8f0', borderLeftWidth: '3px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px', fontFamily: 'var(--font-heading)' }}>Dubai, UAE</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Dubai Silicon Oasis, DDP, Building A1</p>
              </div>
            </div>
          </RevealElement>
        </div>
      </section>

      {/* ========================================================
          GLOBAL FOOTER
          ======================================================== */}
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
      />
    </div>
  );
};
