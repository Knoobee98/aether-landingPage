import { useState, useCallback, useEffect } from 'react';
import { LegalType } from '../components/LegalModal';

export function useAppNavigation() {
  const [currentView, setView] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<LegalType | null>(null);

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleSetView = useCallback((view: string) => {
    setView(view);
  }, []);

  const openLegalModal = useCallback((type: LegalType) => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  }, []);

  const closeLegalModal = useCallback(() => {
    setLegalModalOpen(false);
  }, []);

  const handleSelectProjectAndNavigate = useCallback((id: string) => {
    setSelectedProjectId(id);
    setView('portfolio');
  }, []);

  const handleSelectPostAndNavigate = useCallback((id: string) => {
    setSelectedPostId(id);
    setView('blog');
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    // Only scroll if window exists (for SSR/Test environments)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  return {
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
  };
}
