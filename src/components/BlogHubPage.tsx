import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  Send,
  Calendar,
} from 'lucide-react';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { Footer } from './Footer';
import { ScrollReveal, RevealElement } from './scroll-reveal';

interface BlogHubPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: string) => void;
  onSelectArticle: (articleId: string) => void;
  onSuccessToast: (msg: string) => void;
  onOpenLegal?: (tab: 'privacy' | 'cookie' | 'security') => void;
}

export const BlogHubPage: React.FC<BlogHubPageProps> = ({
  onNavigatePage,
  onSelectArticle,
  onSuccessToast,
  onOpenLegal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud & Architecture',
    'Fintech & Security',
    'Engineering Leadership',
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter((post) => {
      const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    onSuccessToast(`Thank you! "${newsletterEmail}" is subscribed to the Neominds Technical Blog.`);
    setNewsletterEmail('');
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', paddingTop: '68px', fontFamily: 'var(--font-body)' }}>
      {/* ========================================================
          1. BLOG HEADER SECTION
          ======================================================== */}
      <section
        style={{
          padding: 'clamp(56px, 7vw, 84px) 24px clamp(36px, 5vw, 48px)',
          background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', backgroundColor: 'rgba(34, 88, 231, 0.08)', borderRadius: '2px', color: '#2258e7', fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '16px' }}>
            <BookOpen size={14} />
            <span>Neominds Engineering Publications</span>
          </div>

          <ScrollReveal
            as="h1"
            style={{
              fontSize: 'clamp(36px, 4.5vw, 54px)',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              marginBottom: '16px',
              display: 'block',
            }}
            blurStrength={7}
          >
            Engineering <span style={{ color: '#2258e7' }}>Blog & Architecture</span>
          </ScrollReveal>

          <RevealElement variant="text" delay={0.06}>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '720px', lineHeight: 1.6, marginBottom: '32px' }}>
              In-depth technical essays, production post-mortems, and system design teardowns written by practitioners building mission-critical enterprise systems.
            </p>
          </RevealElement>

          {/* Search & Category Filter Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative', maxWidth: '480px' }}>
              <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search articles by title, keyword, or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 46px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#0f172a',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                  style={{
                    color: selectedCategory === cat ? '#ffffff' : '#475569',
                    borderColor: selectedCategory === cat ? '#2258e7' : '#cbd5e1',
                    backgroundColor: selectedCategory === cat ? '#2258e7' : '#f8fafc',
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FEATURED HERO ARTICLE (Why AI Projects Fail)
          ======================================================== */}
      {featuredPost && (
        <section style={{ padding: '48px 24px 32px', maxWidth: '1240px', margin: '0 auto' }}>
          <RevealElement variant="card" start="top 90%" end="top 65%">
            <div
              style={{
                backgroundColor: '#0c0e12',
                color: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                cursor: 'pointer',
              }}
              onClick={() => onSelectArticle(featuredPost.id)}
            >
              {/* Cover Image & Graphic Banner */}
              <div
                style={{
                  position: 'relative',
                  minHeight: '300px',
                  backgroundImage: `url(${featuredPost.coverImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(12, 14, 18, 0.2) 0%, rgba(12, 14, 18, 0.95) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '32px',
                  }}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(34, 88, 231, 0.9)', backdropFilter: 'blur(4px)', padding: '5px 12px', borderRadius: '4px', width: 'fit-content', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    <Sparkles size={12} />
                    <span>Featured Teardown</span>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Text Information Body */}
              <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {featuredPost.category}
                  </span>

                  <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#ffffff', margin: '12px 0 16px', lineHeight: 1.28 }}>
                    {featuredPost.title}
                  </h2>

                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#94a3b8', marginBottom: '24px' }}>
                    {featuredPost.excerpt}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                    {featuredPost.tags.slice(0, 4).map((t) => (
                      <span key={t} style={{ fontSize: '11px', backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '2px 8px', borderRadius: '2px', color: '#cbd5e1' }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>{featuredPost.author.name}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{featuredPost.author.role}</div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectArticle(featuredPost.id);
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    <span>Read Full Essay</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </RevealElement>
        </section>
      )}

      {/* ========================================================
          3. ALL BLOG ARTICLES GRID
          ======================================================== */}
      <section style={{ padding: '32px 24px 80px', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
          {filteredPosts.map((post, idx) => (
            <RevealElement key={post.id} variant="card" delay={idx * 0.08} start="top 92%" end="top 65%">
              <article
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
                onClick={() => onSelectArticle(post.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2258e7';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(34, 88, 231, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                }}
              >
                {/* Thumbnail Image */}
                <div style={{ height: '180px', backgroundImage: `url(${post.coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: 'rgba(12, 14, 18, 0.85)', backdropFilter: 'blur(4px)', color: '#ffffff', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' }}>
                    {post.category}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '12px', color: '#94a3b8' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', fontFamily: 'var(--font-heading)', lineHeight: 1.35, marginBottom: '10px' }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748b', marginBottom: '18px' }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{post.author.name}</div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{post.author.role}</div>
                    </div>

                    <span className="btn-text" style={{ fontSize: '13px', color: '#2258e7', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                      <span>Read</span>
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </RevealElement>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. NEWSLETTER SUBSCRIPTION STRIP
          ======================================================== */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '64px 24px', borderTop: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
            Engineering Digest
          </div>
          <ScrollReveal
            as="h2"
            style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)', marginBottom: '12px', display: 'block' }}
            blurStrength={6}
          >
            Subscribe to Neominds Architecture Teardowns
          </ScrollReveal>
          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '580px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            Bi-weekly deep dives into production system design, multi-agent frameworks, and high-frequency financial architecture.
          </p>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', maxWidth: '480px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              placeholder="Enter your corporate email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: '240px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '3px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button type="submit" className="btn btn-primary btn-md">
              <span>Subscribe</span>
              <Send size={14} />
            </button>
          </form>
        </div>
      </section>

      <Footer
        onNavigate={(target) => {
          if (target === '#contact') onNavigatePage('contacts');
          else if (target === '#casestudies') onNavigatePage('portfolio');
          else onNavigatePage('home');
        }}
        onOpenLegal={onOpenLegal}
      />
    </div>
  );
};
