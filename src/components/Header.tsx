import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  openContact: () => void;
}

export default function Header({
  currentView,
  setView,
  darkMode,
  toggleDarkMode,
  openContact,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Public nav
  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'services', label: 'Layanan' },
    { id: 'portfolio', label: 'Portofolio' },
    { id: 'about', label: 'Tentang' },
    { id: 'blog', label: 'Jurnal' },
  ];

  const handleNavClick = (view: string) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="aether-main-header"
      className="sticky top-0 z-40 w-full border-b backdrop-blur-md transition-colors duration-300 border-border-light bg-bg-light/90 dark:border-border-dark dark:bg-bg-dark/90 text-primary-light dark:text-primary-dark"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Brand / Logo Section */}
        <div className="flex flex-col select-none cursor-pointer" onClick={() => setView('home')}>
          <span 
            className="font-display text-2xl font-bold tracking-[0.25em]" 
            id="brand-logo"
          >
            AETHER
          </span>
          <span 
            className="font-mono text-[9px] font-medium tracking-[0.3em] text-muted-light dark:text-muted-dark" 
            id="brand-subtitle"
          >
            ARCHITECTURE
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`relative font-mono text-xs uppercase tracking-widest transition-colors hover:text-primary-light dark:hover:text-primary-dark cursor-pointer ${
                    currentView === item.id 
                      ? 'font-bold text-primary-light dark:text-primary-dark' 
                      : 'text-muted-light dark:text-muted-dark'
                  }`}
                >
                  {item.label}
                  {currentView === item.id && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary-light dark:bg-primary-dark"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-6 pl-6 border-l border-border-light dark:border-border-dark">
            <button
              onClick={toggleDarkMode}
              className="text-muted-light hover:text-primary-light dark:text-muted-dark dark:hover:text-primary-dark transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
              id="theme-toggle-btn"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={openContact}
              id="contact-btn-desktop"
              className="group flex items-center space-x-2 bg-primary-light px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-dark transition-all hover:bg-black/80 dark:bg-primary-dark dark:text-primary-light dark:hover:bg-white/90 cursor-pointer"
            >
              <span>Konsultasi Spasial</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="text-muted-light hover:text-primary-light dark:text-muted-dark dark:hover:text-primary-dark transition-colors cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-primary-light dark:text-primary-dark p-2 -mr-2 cursor-pointer"
            aria-label="Open menu"
            id="mobile-menu-btn"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg-light dark:bg-bg-dark text-primary-light dark:text-primary-dark"
            id="mobile-nav-menu"
          >
            <div className="flex h-20 items-center justify-between px-6 sm:px-8 border-b border-border-light dark:border-border-dark">
              <span className="font-display text-xl font-bold tracking-[0.25em]">AETHER</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col p-6 sm:p-8 space-y-8">
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`font-display text-2xl uppercase tracking-widest cursor-pointer ${
                        currentView === item.id 
                          ? 'font-bold' 
                          : 'font-light text-muted-light dark:text-muted-dark'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-border-light dark:border-border-dark mt-auto">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openContact();
                  }}
                  id="contact-btn-mobile"
                  className="flex w-full items-center justify-between bg-primary-light px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-dark dark:bg-primary-dark dark:text-primary-light cursor-pointer"
                >
                  <span>Konsultasi Spasial</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
