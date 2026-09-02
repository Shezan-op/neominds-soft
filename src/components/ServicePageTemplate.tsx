import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Send,
  Layers,
  Code2,
  Cpu,
  Smartphone,
  Globe,
  ShoppingCart,
  Cloud,
  Bot,
  Zap,
  MessageSquare,
  BarChart3,
  LifeBuoy,
} from 'lucide-react';
import { ServiceData } from '../data/servicesData';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface ServicePageTemplateProps {
  data: ServiceData;
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  data,
  onNavigatePage,
  onSuccessToast,
  onOpenLegal,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '$50k - $100k',
    message: '',
    ndaRequired: true,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessToast(`Your inquiry for "${data.title}" has been submitted! Our lead architect will contact you in < 2 hours.`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '$50k - $100k',
        message: '',
        ndaRequired: true,
      });
    }, 600);
  };

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'software-development':
        return Code2;
      case 'ai-development':
        return Cpu;
      case 'mobile-app-development':
        return Smartphone;
      case 'web-cms-development':
        return Globe;
      case 'ecommerce-development':
        return ShoppingCart;
      case 'devops':
        return Cloud;
      case 'ai-agents':
        return Bot;
      case 'ai-automations':
        return Zap;
      case 'chatbot-videobot':
        return MessageSquare;
      case 'analytics-dashboard':
        return BarChart3;
      case 'technical-support':
        return LifeBuoy;
      default:
        return Layers;
    }
  };

  const IconComponent = getServiceIcon(data.slug);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          1. HERO SECTION (Clean White / Slate Aesthetics)
          ======================================================== */}
      <section
        style={{
          position: 'relative',
          padding: 'clamp(64px, 8vw, 100px) 24px clamp(48px, 6vw, 80px)',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              {/* Category Badge */}
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
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                }}
              >
                <IconComponent size={15} />
                <span>{data.heroBadge}</span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontSize: 'clamp(36px, 4.8vw, 56px)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1.14,
                  letterSpacing: '-0.03em',
                  color: '#0f172a',
                  marginBottom: '20px',
                }}
              >
                {data.heroHeadline} <span style={{ color: '#2258e7' }}>{data.heroHeadlineHighlight}</span>
              </h1>

              {/* Description */}
              <p
                style={{
                  fontSize: 'clamp(16px, 1.2vw, 18px)',
                  lineHeight: 1.65,
                  color: '#475569',
                  marginBottom: '32px',
                  maxWidth: '580px',
                }}
              >
                {data.heroDescription}
              </p>

              {/* Action Buttons */}
              <div className="btn-group-lg" style={{ marginBottom: '40px' }}>
                <a
                  href="#service-contact"
                  className="btn btn-primary btn-lg"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </a>

                <button
                  onClick={() => onNavigatePage('portfolio')}
                  className="btn btn-outline btn-lg"
                  style={{ color: '#0f172a', borderColor: '#cbd5e1' }}
                >
                  <span>View Case Studies</span>
                </button>
              </div>

              {/* Key Metric Ribbon */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '16px',
                  paddingTop: '24px',
                  borderTop: '1px solid #e2e8f0',
                }}
              >
                {data.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#2258e7', fontFamily: 'var(--font-heading)' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: '#64748b', marginTop: '2px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Architecture Visual Card */}
            <div
              style={{
                backgroundColor: '#0f172a',
                color: '#ffffff',
                borderRadius: '6px',
                padding: '32px',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                border: '1px solid #1e293b',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                    {data.title} Architecture Map
                  </span>
                </div>
                <span style={{ fontSize: '12px', color: '#60a5fa', fontWeight: 600 }}>Production Ready</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '4px', borderLeft: '3px solid #2258e7' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>01 / Ingestion & Core Logic</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>High-throughput APIs with microservice orchestration.</div>
                </div>

                <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '4px', borderLeft: '3px solid #38bdf8' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>02 / Scalable Cloud Compute</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Auto-scaling Kubernetes pods with Redis caching layer.</div>
                </div>

                <div style={{ backgroundColor: '#1e293b', padding: '16px', borderRadius: '4px', borderLeft: '3px solid #10b981' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>03 / Security & Compliance Gateways</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>SOC 2 Type II, ISO 27001, and AES-256 encryption at rest.</div>
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Guaranteed Enterprise SLA</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#22c55e' }}>99.99% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CAPABILITIES (6 Core Offerings)
          ======================================================== */}
      <section style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Comprehensive Capabilities
          </div>
          <ScrollReveal
            as="h2"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.2,
              display: 'block',
            }}
            blurStrength={7}
          >
            What We Deliver in {data.title}
          </ScrollReveal>
          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '16px', color: '#64748b', marginTop: '12px' }}>
              Engineered with deep domain rigor, modern cloud primitives, and zero technical debt.
            </p>
          </RevealElement>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
          {data.capabilities.map((cap, idx) => (
            <RevealElement key={idx} variant="card" delay={(idx % 3) * 0.08} start="top 90%" end="top 65%">
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(34, 88, 231, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(34, 88, 231, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#2258e7',
                      marginBottom: '20px',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '12px' }}>
                    {cap.title}
                  </h3>

                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', marginBottom: '24px' }}>
                    {cap.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '12px',
                        color: '#1e293b',
                        backgroundColor: '#e2e8f0',
                        padding: '4px 10px',
                        borderRadius: '2px',
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealElement>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. 4-PHASE DELIVERY PROCESS (Interactive Step Tabs)
          ======================================================== */}
      <section style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Methodology
            </div>
            <ScrollReveal
              as="h2"
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'var(--font-heading)',
                display: 'block',
              }}
              blurStrength={6}
            >
              Our 4-Phase Delivery Framework
            </ScrollReveal>
          </div>

          {/* Process Step Tabs */}
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '32px' }}>
              {data.processSteps.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    backgroundColor: activeTab === idx ? '#ffffff' : '#f1f5f9',
                    border: activeTab === idx ? '2px solid #2258e7' : '1px solid #e2e8f0',
                    borderRadius: '4px',
                    padding: '18px 20px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: activeTab === idx ? '0 4px 12px rgba(34, 88, 231, 0.1)' : 'none',
                  }}
                >
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#2258e7', marginBottom: '4px' }}>
                    STEP {step.step}
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                    {step.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Active Step Detail Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                padding: 'clamp(24px, 4vw, 40px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: '#2258e7', textTransform: 'uppercase' }}>
                    Step {data.processSteps[activeTab].step} Overview
                  </span>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', margin: '8px 0 16px' }}>
                    {data.processSteps[activeTab].title}
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#475569' }}>
                    {data.processSteps[activeTab].description}
                  </p>
                </div>

                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
                    Key Deliverables
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {data.processSteps[activeTab].deliverables.map((del, dIdx) => (
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

      {/* ========================================================
          4. TECH STACK & DELIVERABLES
          ======================================================== */}
      <section style={{ padding: '80px 24px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
          {/* Deliverables Column */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Tangible Artifacts
            </div>
            <ScrollReveal
              as="h2"
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'var(--font-heading)',
                marginBottom: '24px',
                display: 'block',
              }}
              blurStrength={6}
            >
              What You Receive
            </ScrollReveal>

            <RevealElement variant="card" start="top 90%" end="top 65%">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {data.deliverables.map((del, dIdx) => (
                  <div
                    key={dIdx}
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '4px',
                      padding: '20px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{del.title}</span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#2258e7', backgroundColor: 'rgba(34, 88, 231, 0.08)', padding: '2px 8px', borderRadius: '2px' }}>
                        {del.format}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>{del.description}</p>
                  </div>
                ))}
              </div>
            </RevealElement>
          </div>

          {/* Tech Stack Column */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
              Modern Primitives
            </div>
            <ScrollReveal
              as="h2"
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#0f172a',
                fontFamily: 'var(--font-heading)',
                marginBottom: '24px',
                display: 'block',
              }}
              blurStrength={6}
            >
              Technology Stack
            </ScrollReveal>

            <RevealElement variant="card" start="top 90%" end="top 65%">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.techStack.map((stack, sIdx) => (
                  <div key={sIdx} style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '20px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                      {stack.category}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {stack.items.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            backgroundColor: '#f1f5f9',
                            color: '#1e293b',
                            padding: '4px 12px',
                            borderRadius: '2px',
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </RevealElement>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CLIENT CASE QUOTE STRIP
          ======================================================== */}
      <RevealElement variant="card" start="top 90%" end="top 65%">
        <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '64px 24px' }}>
          <div style={{ maxWidth: '1020px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(34, 88, 231, 0.2)', borderRadius: '100px', color: '#60a5fa', fontSize: '13px', fontWeight: 700, marginBottom: '24px' }}>
              <Sparkles size={14} />
              <span>Proven Enterprise Impact: {data.caseStudyQuote.metric}</span>
            </div>

            <ScrollReveal
              as="p"
              style={{
                fontSize: 'clamp(20px, 2.5vw, 28px)',
                fontWeight: 600,
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.4,
                color: '#f8fafc',
                marginBottom: '24px',
                display: 'block',
              }}
              blurStrength={6}
            >
              “{data.caseStudyQuote.quote}”
            </ScrollReveal>

            <div style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>
              {data.caseStudyQuote.author}
            </div>
            <div style={{ fontSize: '14px', color: '#94a3b8' }}>
              {data.caseStudyQuote.role}, <strong style={{ color: '#ffffff' }}>{data.caseStudyQuote.company}</strong>
            </div>
          </div>
        </section>
      </RevealElement>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS (FAQ)
          ======================================================== */}
      <section style={{ padding: '80px 24px', maxWidth: '840px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#2258e7', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Got Questions?
          </div>
          <ScrollReveal
            as="h2"
            style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)', display: 'block' }}
            blurStrength={6}
          >
            Frequently Asked Questions
          </ScrollReveal>
        </div>

        <RevealElement variant="card" start="top 90%" end="top 65%">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{faq.question}</span>
                  {expandedFaq === idx ? <ChevronUp size={18} color="#2258e7" /> : <ChevronDown size={18} color="#64748b" />}
                </button>
                {expandedFaq === idx && (
                  <div style={{ padding: '0 20px 20px 20px', fontSize: '14px', lineHeight: 1.65, color: '#475569' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </RevealElement>
      </section>

      {/* ========================================================
          7. REQUEST FOR PROPOSAL (RFP) FORM
          ======================================================== */}
      <section id="service-contact" style={{ padding: '80px 24px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <RevealElement variant="card" start="top 90%" end="top 60%">
          <div style={{ maxWidth: '840px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: 'clamp(24px, 4vw, 48px)', boxShadow: '0 12px 32px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <ScrollReveal
                as="h2"
                style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', fontFamily: 'var(--font-heading)', marginBottom: '8px', display: 'block' }}
                blurStrength={6}
              >
                Request a Technical Consultation
              </ScrollReveal>
              <RevealElement variant="text" delay={0.06}>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>
                  Speak with a Principal Architect in <strong>{data.title}</strong>. Receive a custom technical roadmap within 24 hours.
                </p>
              </RevealElement>
            </div>

          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Your Name*</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '14px', color: '#0f172a', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Work Email*</label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '14px', color: '#0f172a', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Company Name</label>
                <input
                  type="text"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '14px', color: '#0f172a', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{ width: '100%', padding: '12px 14px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '14px', color: '#0f172a', outline: 'none' }}
                >
                  <option value="<$25k">&lt; $25k (Pilot / MVP Scope)</option>
                  <option value="$25k - $50k">$25k - $50k (Standard Project)</option>
                  <option value="$50k - $100k">$50k - $100k (Enterprise Scale)</option>
                  <option value="$100k+">$100k+ (Strategic Dedicated Squad)</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>Project Goals & Architecture Requirements</label>
              <textarea
                rows={4}
                placeholder={`Describe your requirements for ${data.title}...`}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '12px 14px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '14px', color: '#0f172a', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#475569', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={formData.ndaRequired}
                onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                style={{ width: '16px', height: '16px', accentColor: '#2258e7' }}
              />
              <span>Send mutual Non-Disclosure Agreement (NDA) prior to technical discussions</span>
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <span>{isSubmitting ? 'Submitting...' : 'Submit Technical Request'}</span>
              <Send size={16} />
            </button>
            </form>
          </div>
        </RevealElement>
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
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
