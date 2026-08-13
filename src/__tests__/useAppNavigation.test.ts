import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useAppNavigation } from '../hooks/useAppNavigation';

describe('useAppNavigation Hook', () => {
  beforeEach(() => {
    // Mock window.scrollTo since jsdom doesn't implement it
    Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });
  });

  it('should initialize with default states', () => {
    const { result } = renderHook(() => useAppNavigation());
    
    expect(result.current.currentView).toBe('home');
    expect(result.current.darkMode).toBe(false);
    expect(result.current.contactOpen).toBe(false);
    expect(result.current.legalModalOpen).toBe(false);
    expect(result.current.selectedProjectId).toBeNull();
    expect(result.current.selectedPostId).toBeNull();
  });

  it('should update currentView when handleSetView is called', () => {
    const { result } = renderHook(() => useAppNavigation());
    
    act(() => {
      result.current.handleSetView('about');
    });
    
    expect(result.current.currentView).toBe('about');
  });

  it('should toggle darkMode correctly', () => {
    const { result } = renderHook(() => useAppNavigation());
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(result.current.darkMode).toBe(true);
    
    act(() => {
      result.current.toggleDarkMode();
    });
    
    expect(result.current.darkMode).toBe(false);
  });

  it('should handle project selection and navigation', () => {
    const { result } = renderHook(() => useAppNavigation());
    
    act(() => {
      result.current.handleSelectProjectAndNavigate('AETH-123');
    });
    
    expect(result.current.selectedProjectId).toBe('AETH-123');
    expect(result.current.currentView).toBe('portfolio');
  });
});
