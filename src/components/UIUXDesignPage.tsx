import React, { useState } from 'react';
import {
  ArrowRight,
  Layout,
  Smartphone,
  Layers,
  Palette,
  Sparkles,
  Eye,
  Users,
} from 'lucide-react';
import { Footer } from './Footer';

interface UIUXDesignPageProps {
  onNavigateHome?: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
}

export const UIUXDesignPage: React.FC<UIUXDesignPageProps> = ({
  onNavigatePage,
  onSuccessToast,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectScope: 'SaaS Web App',
    message: '',
    ndaRequired: true,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    onSuccessToast('Your UI/UX design consultation request has been received. Our lead design director will contact you!');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectScope: 'SaaS Web App',
      message: '',
      ndaRequired: true,
    });
  };

  const designServices = [
    {
      title: 'SaaS & Enterprise Web App Design',
      description:
        'Data-dense dashboard layouts, streamlined B2B workflows, intuitive navigation paradigms, and accessible WCAG 2.1 AAA compliant interfaces.',
      icon: Layout,
      tags: ['B2B Workflows', 'Data Visualization', 'Micro-Interactions', 'WCAG 2.1'],
    },
    {
      title: 'iOS & Android Native Mobile Design',
      description:
        'Crafting pixel-perfect mobile experiences following Apple Human Interface Guidelines and Google Material You design principles.',
      icon: Smartphone,
      tags: ['iOS HIG', 'Material Design', 'Haptic Feedback', 'Gesture UI'],
    },
    {
      title: 'Enterprise Design Systems in Figma',
      description:
        'Scalable design tokens, variable color palettes, interactive Figma components, and Storybook-aligned design-to-code pipelines.',
      icon: Layers,
      tags: ['Design Tokens', 'Figma Auto-Layout', 'Storybook Sync', 'Component Kit'],
    },
    {
      title: 'User Research & Journey Mapping',
      description:
        'Qualitative user interviews, competitive UX heuristics, empathy maps, and click-path optimization to remove friction and boost conversions.',
      icon: Users,
      tags: ['User Personas', 'Heuristic Audits', 'Journey Maps', 'Conversion UX'],
    },
    {
      title: 'Interactive High-Fidelity Prototyping',
      description:
        'Clickable prototypes that look and feel like real production software for investor pitches, stakeholder sign-offs, and usability testing.',
      icon: Sparkles,
      tags: ['Interactive States', 'User Testing', 'Motion Physics', 'Figma Flow'],
    },
    {
      title: 'UI Modernization & Product Redesign',
      description:
        'Transform outdated legacy enterprise screens into sleek, modern, and high-performance interfaces without losing business logic.',
      icon: Eye,
      tags: ['Legacy Reskin', 'Information Architecture', 'Modern Aesthetics', 'Clean UI'],
    },
  ];

  const designProcess = [
    { step: '01', title: 'Discover', desc: 'Stakeholder interviews, user personas, competitor benchmarks, and friction audits.' },
    { step: '02', title: 'Wireframe', desc: 'Low-fidelity user flows, information architecture maps, and functional screen layouts.' },
    { step: '03', title: 'Design System', desc: 'Visual identity tokens, typography scales, responsive grids, and Figma UI kit.' },
    { step: '04', title: 'Interactive Prototype', desc: 'High-fidelity clickable flows, developer handoff specs, and Storybook tokens.' },
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
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
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
            <Palette size={14} />
            <span>Human-Centered Product Design</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#0f172a',
              marginBottom: '24px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            UI/UX Design <span style={{ color: '#2258e7' }}>Services</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 18px)',
              lineHeight: 1.6,
              color: '#475569',
              marginBottom: '36px',
              maxWidth: '560px',
            }}
          >
            Our dedicated team of product designers crafts exceptional user experiences and intuitive interfaces. With deep mastery in user psychology and modern design systems, we create products that look stunning and drive measurable business adoption.
          </p>

          <div className="btn-group-lg">
            <a
              href="#design-contact"
              className="btn btn-primary btn-lg"
            >
              <span>Book Design Consultation</span>
              <ArrowRight size={16} />
            </a>

            <button
              onClick={() => onNavigatePage('portfolio')}
              className="btn btn-outline btn-lg"
              style={{ color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <span>View Design Portfolio</span>
            </button>
          </div>
        </div>

        {/* Design System Mockup Graphic */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '32px',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>Figma Design System // 2026 UI Kit</span>
            <span style={{ color: '#16a34a', fontSize: '12px', fontWeight: 700, backgroundColor: 'rgba(22, 163, 74, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>WCAG 2.1 AAA</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
            <div style={{ height: '48px', backgroundColor: '#2258e7', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>
              Primary
            </div>
            <div style={{ height: '48px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: '#0f172a' }}>
              Surface
            </div>
            <div style={{ height: '48px', backgroundColor: '#16a34a', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#ffffff' }}>
              Success
            </div>
          </div>

          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Component Library Readiness</div>
            <div style={{ fontSize: '13px', color: '#64748b' }}>180+ auto-layout components mapped directly to React / CSS tokens.</div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6 DESIGN SERVICES
          ======================================================== */}
      <section style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Our UI/UX Design Capabilities
          </h2>
          <p style={{ fontSize: '16px', color: '#64748b' }}>
            From initial user journey discovery to production-ready design systems and interactive prototypes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {designServices.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.title}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(34, 88, 231, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(34, 88, 231, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2258e7',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', marginBottom: '24px' }}>
                    {srv.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {srv.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '12px',
                        color: '#334155',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          DESIGN PROCESS (4 STEPS)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
              Methodology
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)' }}>Our 4-Phase Product Design Process</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {designProcess.map((p) => (
              <div key={p.step} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#2258e7', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>{p.step}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#475569', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT FORM
          ======================================================== */}
      <section id="design-contact" style={{ padding: '80px 24px', maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: 'clamp(24px, 4vw, 40px)', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', fontFamily: 'var(--font-heading)' }}>Start Your Design Sprint</h2>
          <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '28px' }}>Share your app concept and we'll prepare a preliminary UX proposal within 24 hours.</p>

          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Your Name*</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Work Email*</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', color: '#334155', fontWeight: 600, marginBottom: '6px' }}>Project Scope & Notes</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe target users, key screens, or existing product links..."
                style={{ width: '100%', padding: '12px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', color: '#0f172a', borderRadius: '4px', resize: 'vertical', outline: 'none' }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-md"
              style={{
                width: '100%',
                marginTop: '8px',
              }}
            >
              <span>Submit Design Inquiry</span>
              <ArrowRight size={16} />
            </button>
          </form>
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
