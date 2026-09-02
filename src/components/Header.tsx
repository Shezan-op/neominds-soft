import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import {
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

export type PageType =
  | 'home'
  | 'insights'
  | 'portfolio'
  | 'about-us'
  | 'contacts'
  | 'privacy-policy'
  | 'cookie-policy'
  | 'security-policy'
  | 'software-development'
  | 'ai-development'
  | 'mobile-app-development'
  | 'web-cms-development'
  | 'ecommerce-development'
  | 'devops'
  | 'ai-agents'
  | 'ai-automations'
  | 'chatbot-videobot'
  | 'analytics-dashboard'
  | 'technical-support'
  | 'product-discovery'
  | 'product-engineering'
  | 'business-analysis'
  | 'it-consulting'
  | 'ui-ux-design';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  currentPage?: PageType;
  onSelectPage?: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  currentPage = 'home',
  onSelectPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState<'what-we-do' | 'who-we-are' | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('product-engineering');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>('what-we-do');

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // When switching pages, always ensure navbar is visible at the top
  useEffect(() => {
    setIsVisible(true);
    setIsScrolled(window.scrollY > 40);
  }, [currentPage]);

  useEffect(() => {
    let lastWheelTime = 0;
    let isTouching = false;

    const hideAndStartTimer = (delay = 1500) => {
      if (activeMenu || mobileMenuOpen) return;

      setIsScrolled(window.scrollY > 40);
      setIsVisible(false);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Exactly 1.5s after user stops scrolling, smoothly slide navbar back in
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    };

    // 1. Mouse wheel / trackpad (Desktop)
    const onWheel = () => {
      lastWheelTime = Date.now();
      hideAndStartTimer(1500);
    };

    // 2. Touch interactions (Smartphones & Tablets)
    const onTouchStart = () => {
      isTouching = true;
    };

    const onTouchMove = () => {
      hideAndStartTimer(1500);
    };

    const onTouchEnd = () => {
      isTouching = false;
      hideAndStartTimer(1500);
    };

    // 3. Native scroll (Scrollbar dragging, keyboard navigation, or programmatic jumps)
    const onNativeScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // If scroll was triggered by recent wheel input (< 1000ms ago) or touch drag,
      // let the user-input countdown run so smooth Lenis inertia doesn't prolong the timer
      if (Date.now() - lastWheelTime < 1000 || isTouching) {
        return;
      }

      // User is dragging the scrollbar directly
      hideAndStartTimer(1500);
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('scroll', onNativeScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeMenu, mobileMenuOpen]);

  // GSAP animation for smooth header reveal/hide
  useEffect(() => {
    if (!headerRef.current) return;
    if (isVisible) {
      gsap.to(headerRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    } else {
      gsap.to(headerRef.current, {
        y: -120,
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
        overwrite: 'auto',
      });
    }
  }, [isVisible]);

  const handleMouseEnter = (menu: 'what-we-do' | 'who-we-are') => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleMenuToggle = (e: React.MouseEvent, menu: 'what-we-do' | 'who-we-are') => {
    e.stopPropagation();
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const navigateToPage = (page: PageType) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (onSelectPage) {
      onSelectPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    navigateToPage('home');
    onNavigate('#hero');
  };

  // Left Categories in What We Do Dropdown
  const categories = [
    { id: 'product-discovery', title: 'Product discovery', directPage: 'product-discovery' as const },
    { id: 'product-engineering', title: 'Product engineering', isExpandable: true },
    { id: 'business-analysis', title: 'Business analysis', directPage: 'business-analysis' as const },
    { id: 'it-consulting', title: 'IT consulting', directPage: 'it-consulting' as const },
    { id: 'ui-ux-design', title: 'UX/UI design', directPage: 'ui-ux-design' as const },
  ];

  // 11 Core Services provided by Neominds (Pure Text Only, ZERO Cards)
  const neomindsServicesCol1 = [
    { title: 'Software Development', page: 'software-development' as const },
    { title: 'AI Development', page: 'ai-development' as const },
    { title: 'Mobile App Development', page: 'mobile-app-development' as const },
    { title: 'Web & CMS Development', page: 'web-cms-development' as const },
    { title: 'Ecommerce Development', page: 'ecommerce-development' as const },
    { title: 'DevOps', page: 'devops' as const },
  ];

  const neomindsServicesCol2 = [
    { title: 'AI Agents', page: 'ai-agents' as const, isNew: true },
    { title: 'AI Automations', page: 'ai-automations' as const },
    { title: 'Chatbot & Video Bot Development', page: 'chatbot-videobot' as const },
    { title: 'Analytics Dashboard', page: 'analytics-dashboard' as const },
    { title: 'Technical Support', page: 'technical-support' as const },
  ];

  return (
    <>
      <header
        ref={headerRef}
        data-visible={isVisible}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          pointerEvents: isVisible ? 'auto' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 'clamp(14px, 1.8vw, 20px)',
          paddingInline: '16px',
          boxSizing: 'border-box',
        }}
      >
        {/* ========================================================
            REFINED FLOATING NAVBAR PILL (Pulled Down & Sleek Size)
            ======================================================== */}
        <div
          style={{
            width: isScrolled ? 'min(90%, 780px)' : 'min(92%, 840px)',
            maxWidth: isScrolled ? '780px' : '840px',
            height: isScrolled ? '46px' : '50px',
            borderRadius: '9px',
            backgroundColor: isScrolled ? 'rgba(12, 14, 18, 0.95)' : 'rgba(10, 12, 16, 0.90)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: isScrolled
              ? '0 12px 30px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.05)'
              : '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: isScrolled ? '16px' : '18px',
            pointerEvents: 'auto',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          {/* Left Brand Logo */}
          <div
            onClick={handleLogoClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {/* 5-Bar Logo SVG matching EffectiveSoft */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '16px' }}>
              <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
              <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
              <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
              <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
              <span style={{ height: '2px', backgroundColor: '#ffffff', width: '100%', borderRadius: '1px' }} />
            </div>

            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                transition: 'font-size 0.3s ease',
              }}
            >
              Neominds
            </span>
          </div>

          {/* Center Navigation Links (Pure Text) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: isScrolled ? '18px' : '22px',
              height: '100%',
              transition: 'gap 0.3s ease',
            }}
            className="desktop-nav"
          >
            {/* 1. What we do */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('what-we-do')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'what-we-do')}
                style={{
                  color: activeMenu === 'what-we-do' ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 2px',
                  transition: 'color 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>What we do</span>
                <ChevronRight
                  size={12}
                  style={{
                    transform: activeMenu === 'what-we-do' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'what-we-do' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>
            </div>

            {/* 2. Who we are */}
            <div
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => handleMouseEnter('who-we-are')}
            >
              <button
                onClick={(e) => handleMenuToggle(e, 'who-we-are')}
                style={{
                  color: activeMenu === 'who-we-are' ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 2px',
                  transition: 'color 0.2s',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>Who we are</span>
                <ChevronRight
                  size={12}
                  style={{
                    transform: activeMenu === 'who-we-are' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: activeMenu === 'who-we-are' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>
            </div>

            {/* 3. Insights */}
            <button
              onClick={() => navigateToPage('insights')}
              style={{
                color: currentPage === 'insights' ? '#2258e7' : 'rgba(255, 255, 255, 0.85)',
                fontSize: '13.5px',
                fontWeight: 500,
                padding: '6px 2px',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentPage === 'insights' ? '#2258e7' : 'rgba(255, 255, 255, 0.85)')}
            >
              Insights
            </button>

            {/* 4. Case studies */}
            <button
              onClick={() => navigateToPage('portfolio')}
              style={{
                color: currentPage === 'portfolio' ? '#2258e7' : 'rgba(255, 255, 255, 0.85)',
                fontSize: '13.5px',
                fontWeight: 500,
                padding: '6px 2px',
                transition: 'color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = currentPage === 'portfolio' ? '#2258e7' : 'rgba(255, 255, 255, 0.85)')}
            >
              Case studies
            </button>
          </nav>

          {/* Right CTA Button & Mobile Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => navigateToPage('contacts')}
              className="desktop-send-btn"
              style={{
                height: isScrolled ? '32px' : '34px',
                paddingInline: isScrolled ? '14px' : '16px',
                fontSize: '12.5px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: 1,
                borderRadius: '6px',
                backgroundColor: '#2258e7',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 2px 8px rgba(34, 88, 231, 0.35)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
            >
              Send request
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="mobile-hamburger"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label="Open Mobile Menu"
            >
              <Menu size={17} />
            </button>
          </div>
        </div>

        {/* ========================================================
            PURE TEXT-ONLY DROPDOWNS (MATCHES NAVBAR WIDTH & CORNERS)
            ======================================================== */}
        {activeMenu === 'what-we-do' && (
          <div
            style={{
              width: isScrolled ? 'min(90%, 780px)' : 'min(92%, 840px)',
              maxWidth: isScrolled ? '780px' : '840px',
              marginTop: '8px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(12, 14, 18, 0.97)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: '190px 1fr',
                gap: '28px',
              }}
            >
              {/* Left Column: Pure Text Categories */}
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', paddingRight: '20px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#5f85ed', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  What we do
                </div>

                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(cat.id)}
                    onClick={() => {
                      if (cat.directPage) {
                        navigateToPage(cat.directPage);
                      } else {
                        setActiveCategory(cat.id);
                      }
                    }}
                    style={{
                      padding: '8px 0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      color: activeCategory === cat.id ? '#2258e7' : 'rgba(255, 255, 255, 0.85)',
                      fontWeight: activeCategory === cat.id ? 600 : 400,
                      fontSize: '15px',
                      transition: 'color 0.2s',
                    }}
                  >
                    <span>{cat.title}</span>
                    <ChevronRight size={14} style={{ opacity: activeCategory === cat.id ? 1 : 0.4, color: activeCategory === cat.id ? '#2258e7' : 'inherit' }} />
                  </div>
                ))}
              </div>

              {/* Right Column: Pure Text Services List (2 Clean Columns, NO Cards) */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {activeCategory === 'product-discovery'
                      ? 'Product Discovery'
                      : activeCategory === 'business-analysis'
                      ? 'Business Analysis'
                      : activeCategory === 'it-consulting'
                      ? 'IT Consulting'
                      : activeCategory === 'ui-ux-design'
                      ? 'UX/UI Design'
                      : 'Services & Offerings'}
                  </span>

                  <button
                    onClick={() => navigateToPage('portfolio')}
                    className="btn-text"
                    style={{
                      fontSize: '12px',
                      color: '#94a3b8',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Explore All Case Studies</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>

                {/* 2-Column Pure Text Services List */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '8px 24px' }}>
                  {/* Column 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {neomindsServicesCol1.map((srv) => (
                      <div
                        key={srv.page}
                        onClick={() => navigateToPage(srv.page)}
                        style={{
                          cursor: 'pointer',
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '14px',
                          fontWeight: 400,
                          padding: '4px 0',
                          transition: 'color 0.2s, transform 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#2258e7';
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <span>{srv.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {neomindsServicesCol2.map((srv) => (
                      <div
                        key={srv.page}
                        onClick={() => navigateToPage(srv.page)}
                        style={{
                          cursor: 'pointer',
                          color: 'rgba(255, 255, 255, 0.85)',
                          fontSize: '14px',
                          fontWeight: 400,
                          padding: '4px 0',
                          transition: 'color 0.2s, transform 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '6px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#2258e7';
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <span>{srv.title}</span>
                        {srv.isNew && (
                          <span
                            style={{
                              fontSize: '9px',
                              fontWeight: 700,
                              backgroundColor: '#2258e7',
                              color: '#ffffff',
                              padding: '1px 5px',
                              borderRadius: '2px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.04em',
                            }}
                          >
                            NEW
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Who We Are Pure Text Dropdown */}
        {activeMenu === 'who-we-are' && (
          <div
            style={{
              width: isScrolled ? 'min(90%, 600px)' : 'min(92%, 640px)',
              maxWidth: isScrolled ? '600px' : '640px',
              marginTop: '8px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: 'rgba(12, 14, 18, 0.97)',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.85), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              zIndex: 1001,
              animation: 'megaDropdownFadeIn 0.22s ease-out',
              pointerEvents: 'auto',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '100%',
                padding: '22px 28px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
              }}
            >
              <div
                onClick={() => navigateToPage('about-us')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                About Neominds
              </div>

              <div
                onClick={() => navigateToPage('about-us')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Guiding Leadership
              </div>

              <div
                onClick={() => navigateToPage('security-policy')}
                style={{
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#2258e7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)')}
              >
                Security & Compliance
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================
          MOBILE NAVIGATION DRAWER (Full-Screen Immersive Menu)
          ======================================================== */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100dvh',
            backgroundColor: '#0c0e12',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 20px 36px',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Mobile Header Top */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
              Neominds<span style={{ color: '#2258e7' }}>.</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer', padding: '6px' }}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Section 1: What we do (Accordion) */}
            <div>
              <button
                onClick={() => setMobileExpandedSection(mobileExpandedSection === 'what-we-do' ? null : 'what-we-do')}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 0',
                  color: '#ffffff',
                  fontSize: '18px',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>What we do</span>
                <ChevronRight
                  size={18}
                  style={{
                    transform: mobileExpandedSection === 'what-we-do' ? 'rotate(90deg)' : 'none',
                    transition: 'transform 0.2s',
                    color: mobileExpandedSection === 'what-we-do' ? '#2258e7' : 'inherit',
                  }}
                />
              </button>

              {mobileExpandedSection === 'what-we-do' && (
                <div style={{ padding: '12px 0 16px 12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[...neomindsServicesCol1, ...neomindsServicesCol2].map((srv) => (
                    <button
                      key={srv.page}
                      onClick={() => navigateToPage(srv.page)}
                      style={{
                        textAlign: 'left',
                        color: currentPage === srv.page ? '#2258e7' : 'rgba(255, 255, 255, 0.8)',
                        fontSize: '15px',
                        fontWeight: 500,
                        padding: '8px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <span>{srv.title}</span>
                      {('isNew' in srv) && srv.isNew && (
                        <span style={{ fontSize: '9px', backgroundColor: '#2258e7', color: '#fff', padding: '2px 6px', borderRadius: '2px', fontWeight: 700 }}>
                          NEW
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Section 2: Who we are */}
            <button
              onClick={() => navigateToPage('about-us')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                color: currentPage === 'about-us' ? '#2258e7' : '#ffffff',
                fontSize: '18px',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Who we are</span>
              <ChevronRight size={18} opacity={0.6} />
            </button>

            {/* Section 3: Insights */}
            <button
              onClick={() => navigateToPage('insights')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                color: currentPage === 'insights' ? '#2258e7' : '#ffffff',
                fontSize: '18px',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Insights & Blogs</span>
              <ChevronRight size={18} opacity={0.6} />
            </button>

            {/* Section 4: Case studies */}
            <button
              onClick={() => navigateToPage('portfolio')}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 0',
                color: currentPage === 'portfolio' ? '#2258e7' : '#ffffff',
                fontSize: '18px',
                fontWeight: 600,
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Case studies</span>
              <ChevronRight size={18} opacity={0.6} />
            </button>
          </div>

          {/* Mobile Footer Send Request Button */}
          <div style={{ marginTop: 'auto', paddingTop: '32px' }}>
            <button
              onClick={() => navigateToPage('contacts')}
              className="btn btn-primary btn-lg"
              style={{ width: '100%' }}
            >
              Send request
            </button>
          </div>
        </div>
      )}

      {/* Global CSS Media Queries & Animations */}
      <style>{`
        @keyframes megaDropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger {
            display: none !important;
          }
          .desktop-send-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
          .desktop-send-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
