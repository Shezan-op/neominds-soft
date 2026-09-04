import React, { useState, useCallback, useEffect } from 'react';
import { useLenis } from './hooks/useLenis';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header, PageType } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { IndustryRecognition } from './components/IndustryRecognition';
import { EngineeringBlobSection } from './components/EngineeringBlobSection';
import { DeliveryPrinciples } from './components/DeliveryPrinciples';
import { ServicesStack } from './components/ServicesStack';
import { CaseStudiesHorizontal } from './components/CaseStudiesHorizontal';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { LocationsSection } from './components/LocationsSection';
import { Footer } from './components/Footer';

// Universal Service Page System & 28 Services Registry
import { ServicePage } from './components/service/ServicePage';
import { UNIVERSAL_SERVICES_MAP } from './data/universalServicesRegistry';
import { SERVICES_DATA } from './data/servicesData';

// Content & Legacy Strategy Pages
import { ProductDiscoveryPage } from './components/ProductDiscoveryPage';
import { ProductEngineeringPage } from './components/ProductEngineeringPage';
import { BusinessAnalysisPage } from './components/BusinessAnalysisPage';
import { ITConsultingPage } from './components/ITConsultingPage';
import { UIUXDesignPage } from './components/UIUXDesignPage';
import { PortfolioPage } from './components/PortfolioPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactsPage } from './components/ContactsPage';
import { InsightsPage } from './components/InsightsPage';
import { BlogHubPage } from './components/BlogHubPage';
import { CompanyUpdatesPage } from './components/CompanyUpdatesPage';
import { BlogPostDetailPage } from './components/BlogPostDetailPage';

// Legal Policy Pages
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { SecurityPolicyPage } from './components/SecurityPolicyPage';

// Modals & UI Utilities
import { CaseStudyModal } from './components/CaseStudyModal';
import { ServiceModal } from './components/ServiceModal';
import { LegalModal } from './components/LegalModal';
import { CookieConsent } from './components/CookieConsent';
import { CommandPalette } from './components/CommandPalette';
import { Toast, ToastMessage } from './components/Toast';
import { CinematicScroll } from './components/lightswind/cinematic-scroll';

export const App: React.FC = () => {
  const { scrollTo, stop, start } = useLenis();

  // Active View State initialized from window location hash
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && (hash in SERVICES_DATA || [
      'insights', 'blog', 'company-updates', 'portfolio', 'about-us', 'contacts',
      'privacy-policy', 'cookie-policy', 'security-policy',
      'product-discovery', 'product-engineering', 'business-analysis',
      'it-consulting', 'ui-ux-design'
    ].includes(hash))) {
      return hash as PageType;
    }
    if (window.location.hash === '#casestudies') return 'portfolio';
    if (window.location.hash === '#leaders') return 'about-us';
    if (window.location.hash === '#contact') return 'contacts';
    return 'home';
  });

  // Interactive Modal & Palette State
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    tab: 'privacy' | 'cookie' | 'security';
  }>({
    isOpen: false,
    tab: 'privacy',
  });
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Listen for hash changes in browser window
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash;
      const cleanHash = rawHash.replace('#', '');

      if (cleanHash in UNIVERSAL_SERVICES_MAP) {
        setCurrentPage(cleanHash as PageType);
      } else if (cleanHash in SERVICES_DATA) {
        setCurrentPage(cleanHash as PageType);
      } else if (cleanHash === 'chatbot-video-bot-development') {
        setCurrentPage('chatbot-videobot');
      } else if (cleanHash === 'insights') {
        setCurrentPage('insights');
      } else if (cleanHash === 'blog') {
        setCurrentPage('blog');
      } else if (cleanHash === 'company-updates') {
        setCurrentPage('company-updates');
      } else if (cleanHash === 'portfolio' || rawHash === '#casestudies') {
        setCurrentPage('portfolio');
      } else if (cleanHash === 'about-us' || rawHash === '#leaders') {
        setCurrentPage('about-us');
      } else if (cleanHash === 'contacts' || rawHash === '#contact') {
        setCurrentPage('contacts');
      } else if (cleanHash === 'privacy-policy') {
        setCurrentPage('privacy-policy');
      } else if (cleanHash === 'cookie-policy') {
        setCurrentPage('cookie-policy');
      } else if (cleanHash === 'security-policy') {
        setCurrentPage('security-policy');
      } else if (cleanHash === 'product-discovery') {
        setCurrentPage('product-discovery');
      } else if (cleanHash === 'product-engineering') {
        setCurrentPage('product-engineering');
      } else if (cleanHash === 'business-analysis') {
        setCurrentPage('business-analysis');
      } else if (cleanHash === 'it-consulting') {
        setCurrentPage('it-consulting');
      } else if (cleanHash === 'ui-ux-design') {
        setCurrentPage('ui-ux-design');
      } else if (!rawHash || rawHash === '#hero' || rawHash === '#services') {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Freeze background scroll when any modal/palette is active
  const isAnyModalOpen = Boolean(
    selectedCaseStudy || selectedService || legalModal.isOpen || isCommandPaletteOpen
  );

  useEffect(() => {
    if (isAnyModalOpen) {
      stop();
    } else {
      start();
    }
  }, [isAnyModalOpen, stop, start]);

  const handleNavigate = useCallback(
    (targetId: string) => {
      const cleanTarget = targetId.replace('#', '');
      if (cleanTarget in SERVICES_DATA || [
        'insights', 'blog', 'company-updates', 'portfolio', 'about-us', 'contacts',
        'privacy-policy', 'cookie-policy', 'security-policy',
        'product-discovery', 'product-engineering', 'business-analysis',
        'it-consulting', 'ui-ux-design'
      ].includes(cleanTarget)) {
        handleSelectPage(cleanTarget as PageType);
        return;
      }

      if (currentPage !== 'home') {
        setCurrentPage('home');
        window.history.pushState(null, '', ' ');
        setTimeout(() => {
          scrollTo(targetId, { offset: 0, lerp: 0.1 });
        }, 100);
      } else {
        scrollTo(targetId, { offset: 0, lerp: 0.1 });
      }
    },
    [currentPage, scrollTo]
  );

  const handleSelectPage = (page: PageType) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.history.pushState(null, '', ' ');
    } else {
      window.history.pushState(null, '', `#${page}`);
    }
    scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const addToast = (title: string, description?: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Helper to check if current page is one of the 11 official service pages
  const isOfficialServicePage = currentPage in SERVICES_DATA;

  return (
    <ErrorBoundary>
      <CinematicScroll isGlobal accentColor="#2258e7" blurSize={80} blurMax={20}>
        <div className="neominds-app">
        {/* Skip to Main Content Link for Accessibility */}
        <a
          href="#main-content"
          style={{
            position: 'absolute',
            top: '-100px',
            left: '20px',
            backgroundColor: '#2258E7',
            color: '#ffffff',
            padding: '10px 18px',
            zIndex: 99999,
            fontWeight: 600,
            fontSize: '14px',
            transition: 'top 0.2s',
          }}
          onFocus={(e) => (e.currentTarget.style.top = '20px')}
          onBlur={(e) => (e.currentTarget.style.top = '-100px')}
        >
          Skip to main content
        </a>

        {/* Global Navigation Header with 11-Service Mega Menu & Mobile Drawer */}
        <Header
          onNavigate={handleNavigate}
          currentPage={currentPage}
          onSelectPage={handleSelectPage}
        />

        {/* ========================================================
            VIEW ROUTER: RENDER BASED ON ACTIVE SELECTION
            ======================================================== */}

        {/* 1. Universal Canonical Service Page System for All 28 Services */}
        {isOfficialServicePage && UNIVERSAL_SERVICES_MAP[currentPage] && (
          <main id="main-content">
            <ServicePage
              data={UNIVERSAL_SERVICES_MAP[currentPage]}
              allServices={UNIVERSAL_SERVICES_MAP}
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* 2. Insights & Tech Briefs Hub */}
        {currentPage === 'insights' && (
          <main id="main-content">
            <InsightsPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* 2b. Technical Blog Hub & Reader */}
        {currentPage === 'blog' && (
          <main id="main-content">
            {selectedArticleId ? (
              <BlogPostDetailPage
                articleId={selectedArticleId}
                onBack={() => setSelectedArticleId(null)}
                onNavigatePage={(p) => handleSelectPage(p as PageType)}
                onSelectArticle={(id) => setSelectedArticleId(id)}
                onSuccessToast={(msg) => addToast('Article', msg, 'info')}
                onOpenLegal={(tab) => {
                  if (tab === 'privacy') handleSelectPage('privacy-policy');
                  else if (tab === 'cookie') handleSelectPage('cookie-policy');
                  else handleSelectPage('security-policy');
                }}
              />
            ) : (
              <BlogHubPage
                onNavigateHome={() => handleSelectPage('home')}
                onNavigatePage={(p) => handleSelectPage(p as PageType)}
                onSelectArticle={(id) => setSelectedArticleId(id)}
                onSuccessToast={(msg) => addToast('Blog', msg, 'info')}
                onOpenLegal={(tab) => {
                  if (tab === 'privacy') handleSelectPage('privacy-policy');
                  else if (tab === 'cookie') handleSelectPage('cookie-policy');
                  else handleSelectPage('security-policy');
                }}
              />
            )}
          </main>
        )}

        {/* 2c. Company Updates & Milestones */}
        {currentPage === 'company-updates' && (
          <main id="main-content">
            <CompanyUpdatesPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Company Update', msg, 'info')}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* 3. Portfolio & Case Studies */}
        {currentPage === 'portfolio' && (
          <main id="main-content">
            <PortfolioPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {/* 4. About Us & Leadership */}
        {currentPage === 'about-us' && (
          <main id="main-content">
            <AboutUsPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {/* 5. Contacts & Global RFP Form */}
        {currentPage === 'contacts' && (
          <main id="main-content">
            <ContactsPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {/* 6. Privacy Policy Page */}
        {currentPage === 'privacy-policy' && (
          <main id="main-content">
            <PrivacyPolicyPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* 7. Cookie Policy Page */}
        {currentPage === 'cookie-policy' && (
          <main id="main-content">
            <CookiePolicyPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* 8. Security & Compliance Standards Page */}
        {currentPage === 'security-policy' && (
          <main id="main-content">
            <SecurityPolicyPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* 9. Specialized Strategic Phases (Product Discovery, etc.) */}
        {currentPage === 'product-discovery' && (
          <main id="main-content">
            <ProductDiscoveryPage
              onNavigateHome={() => handleSelectPage('home')}
              onOpenPrivacy={() => handleSelectPage('privacy-policy')}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {currentPage === 'product-engineering' && (
          <main id="main-content">
            <ProductEngineeringPage
              onNavigateHome={() => handleSelectPage('home')}
              onOpenPrivacy={() => handleSelectPage('privacy-policy')}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {currentPage === 'business-analysis' && (
          <main id="main-content">
            <BusinessAnalysisPage
              onNavigateHome={() => handleSelectPage('home')}
              onOpenPrivacy={() => handleSelectPage('privacy-policy')}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {currentPage === 'it-consulting' && (
          <main id="main-content">
            <ITConsultingPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {currentPage === 'ui-ux-design' && (
          <main id="main-content">
            <UIUXDesignPage
              onNavigateHome={() => handleSelectPage('home')}
              onNavigatePage={(p) => handleSelectPage(p as PageType)}
              onSuccessToast={(msg) => addToast('Success', msg, 'success')}
            />
          </main>
        )}

        {/* 10. Default Homepage with Full-Bleed Scroll Stack & Narrative Story */}
        {currentPage === 'home' && (
          <main id="main-content">
            {/* 1. Hero Section */}
            <HeroSection onTalkClick={() => handleSelectPage('contacts')} />

            {/* 2. 23 Years / Line-by-Line Text Fill & Client Logos */}
            <ExperienceSection />

            {/* 3. Industry Recognition 5s Crossfade Carousel */}
            <IndustryRecognition />

            {/* 4. Engineering First / Radial Blue Blob Scroll Transition */}
            <EngineeringBlobSection />

            {/* 5. 5-Layer Delivery Principles Accordion with Progress Fill */}
            <DeliveryPrinciples />

            {/* 6. Full-Width Borderless Pinned Scroll-Stacking Service Cards */}
            <ServicesStack onSelectService={(slug) => handleSelectPage(slug as PageType)} />

            {/* 7. Horizontal Scroll Pinned Case Studies */}
            <CaseStudiesHorizontal
              onContactClick={() => handleSelectPage('contacts')}
              onSelectCaseStudy={(id) => setSelectedCaseStudy(id)}
            />

            {/* 8. Canopy Client Testimonial Video/Photo Reel */}
            <Testimonials />

            {/* 9. Contact & RFP Form */}
            <ContactSection
              onSuccessToast={(msg) => addToast('Request Sent', msg, 'success')}
              onOpenPrivacy={() => handleSelectPage('privacy-policy')}
            />

            {/* 10. Global Engineering Locations */}
            <LocationsSection />

            {/* 11. Footer */}
            <Footer
              onNavigate={(target) => {
                if (target === '#casestudies') {
                  handleSelectPage('portfolio');
                } else if (target === '#contact') {
                  handleSelectPage('contacts');
                } else {
                  handleNavigate(target);
                }
              }}
              onOpenLegal={(tab) => {
                if (tab === 'privacy') handleSelectPage('privacy-policy');
                else if (tab === 'cookie') handleSelectPage('cookie-policy');
                else handleSelectPage('security-policy');
              }}
            />
          </main>
        )}

        {/* Global Case Study Deep-Dive Modal */}
        <CaseStudyModal
          studyId={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onRequestQuote={() => {
            setSelectedCaseStudy(null);
            handleSelectPage('contacts');
          }}
        />

        {/* Global Service Capability Modal */}
        <ServiceModal
          serviceId={selectedService}
          onClose={() => setSelectedService(null)}
          onRequestQuote={() => {
            setSelectedService(null);
            handleSelectPage('contacts');
          }}
        />

        {/* Global Privacy / Cookies / Security Modal */}
        <LegalModal
          isOpen={legalModal.isOpen}
          initialTab={legalModal.tab}
          onClose={() => setLegalModal({ isOpen: false, tab: 'privacy' })}
        />

        {/* EU / Global Cookie Consent Banner */}
        <CookieConsent onOpenPrivacy={() => handleSelectPage('privacy-policy')} />

        {/* Global Quick Command Palette (Cmd+K / Ctrl+K) */}
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onSelect={(targetId: string) => {
            const clean = targetId.replace('#', '');
            if (clean in SERVICES_DATA) {
              handleSelectPage(clean as PageType);
            } else if (clean === 'insights') {
              handleSelectPage('insights');
            } else if (clean === 'portfolio' || targetId === '#casestudies') {
              handleSelectPage('portfolio');
            } else if (clean === 'about-us' || targetId === '#leaders') {
              handleSelectPage('about-us');
            } else if (clean === 'contacts' || targetId === '#contact') {
              handleSelectPage('contacts');
            } else if (clean === 'privacy-policy') {
              handleSelectPage('privacy-policy');
            } else if (clean === 'cookie-policy') {
              handleSelectPage('cookie-policy');
            } else if (clean === 'security-policy') {
              handleSelectPage('security-policy');
            } else if (clean === 'product-discovery') {
              handleSelectPage('product-discovery');
            } else if (clean === 'product-engineering') {
              handleSelectPage('product-engineering');
            } else if (clean === 'business-analysis') {
              handleSelectPage('business-analysis');
            } else if (clean === 'it-consulting') {
              handleSelectPage('it-consulting');
            } else if (clean === 'ui-ux-design') {
              handleSelectPage('ui-ux-design');
            } else {
              handleNavigate(targetId);
            }
          }}
        />

        {/* Toast Notification Container */}
        <Toast toasts={toasts} onDismiss={removeToast} />
        </div>
      </CinematicScroll>
    </ErrorBoundary>
  );
};

export default App;
