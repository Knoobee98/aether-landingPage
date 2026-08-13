import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import ContactModal from './components/ContactModal';
import LegalModal, { LegalType } from './components/LegalModal';
import NotFoundView from './components/NotFoundView';
import MaintenanceView from './components/MaintenanceView';
import { PROJECTS as DEFAULT_PROJECTS, BLOG_POSTS as DEFAULT_BLOG_POSTS } from './data';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setView] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalType | null>(null);

  const openLegalModal = (type: LegalType) => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  const handleSetView = useCallback((view: string) => {
    setView(view);
  }, []);

  // Drill-down detail triggers
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  // Static Data
  const projects = DEFAULT_PROJECTS;
  const blogPosts = DEFAULT_BLOG_POSTS;

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Handle dark mode classes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Custom setter for selecting project from another screen
  const handleSelectProjectAndNavigate = (id: string) => {
    setSelectedProjectId(id);
    setView('portfolio');
  };

  const handleSelectPostAndNavigate = (id: string) => {
    setSelectedPostId(id);
    setView('blog');
  };

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
      
      {/* Navigation Header */}
      <Header
        currentView={currentView}
        setView={handleSetView}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        openContact={() => setContactOpen(true)}
      />

      {/* Main Layout Stage */}
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
            {renderViewContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Footer block */}
      <Footer
        setView={handleSetView}
        openContact={() => setContactOpen(true)}
        isAdminMode={false}
        openLegalModal={openLegalModal}
      />

      {/* Shared slide-over Contact & Inquiries Modal Form */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Legal Document Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        type={legalModalType}
      />

    </div>
  );
}
