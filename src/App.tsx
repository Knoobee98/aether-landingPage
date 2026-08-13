import React, { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ContactModal from './components/ContactModal';
import LegalModal from './components/LegalModal';
import MaintenanceView from './components/MaintenanceView';
import WhatsAppWidget from './components/WhatsAppWidget';

const ServicesView = lazy(() => import('./components/ServicesView'));
const PortfolioView = lazy(() => import('./components/PortfolioView'));
const AboutView = lazy(() => import('./components/AboutView'));
const BlogView = lazy(() => import('./components/BlogView'));
const NotFoundView = lazy(() => import('./components/NotFoundView'));
import { PROJECTS as DEFAULT_PROJECTS, BLOG_POSTS as DEFAULT_BLOG_POSTS } from './data';
import { motion, AnimatePresence } from 'motion/react';
import { useAppNavigation } from './hooks/useAppNavigation';

export default function App() {
  const {
    currentView,
    handleSetView,
    darkMode,
    toggleDarkMode,
    contactOpen,
    setContactOpen,
    legalModalOpen,
    legalModalType,
    openLegalModal,
    closeLegalModal,
    selectedProjectId,
    setSelectedProjectId,
    handleSelectProjectAndNavigate,
    selectedPostId,
    setSelectedPostId,
    handleSelectPostAndNavigate
  } = useAppNavigation();

  // Static Data (Can be extracted to a hook if it grows)
  const projects = DEFAULT_PROJECTS;
  const blogPosts = DEFAULT_BLOG_POSTS;

  // Handle dark mode classes at the document level
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Track page views for Google Analytics
  useEffect(() => {
    if (import.meta.env.VITE_GA_ID) {
      import('react-ga4').then((ReactGA) => {
        ReactGA.default.send({ hitType: "pageview", page: `/${currentView}` });
      });
    }
  }, [currentView]);

  const renderViewContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView
            setView={handleSetView}
            openContact={() => setContactOpen(true)}
            setSelectedProject={handleSelectProjectAndNavigate}
            setSelectedPost={handleSelectPostAndNavigate}
            projects={projects}
            blogPosts={blogPosts}
          />
        );
      case 'services':
        return <ServicesView openContact={() => setContactOpen(true)} />;
      case 'portfolio':
        return (
          <PortfolioView
            projects={projects}
            selectedProjectId={selectedProjectId}
            setSelectedProjectId={setSelectedProjectId}
          />
        );
      case 'about':
        return <AboutView />;
      case 'blog':
        return (
          <BlogView
            blogPosts={blogPosts}
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
          />
        );
      default:
        return <NotFoundView setView={handleSetView} />;
    }
  };

  if (import.meta.env.VITE_MAINTENANCE_MODE === 'true') {
    return (
      <div id="aether-app-root" className="min-h-screen flex flex-col font-sans bg-bg-light text-primary-light dark:bg-bg-dark dark:text-primary-dark">
        <MaintenanceView />
      </div>
    );
  }

  return (
    <div id="aether-app-root" className="min-h-screen flex flex-col justify-between font-sans bg-bg-light text-primary-light transition-colors duration-300 dark:bg-bg-dark dark:text-primary-dark">
      <Header
        currentView={currentView}
        setView={handleSetView}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        openContact={() => setContactOpen(true)}
      />

      <main className="flex-1 w-full" id="aether-app-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
            id={`view-wrapper-${currentView}`}
          >
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center animate-pulse"><span className="font-mono text-sm tracking-[0.3em] uppercase opacity-50">Memuat...</span></div>}>
              {renderViewContent()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        setView={handleSetView}
        openContact={() => setContactOpen(true)}
        isAdminMode={false}
        openLegalModal={openLegalModal}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <LegalModal
        isOpen={legalModalOpen}
        onClose={closeLegalModal}
        type={legalModalType}
      />

      <WhatsAppWidget />
    </div>
  );
}
