import '@testing-library/jest-dom';
import { vi } from 'vitest';

Object.defineProperty(window, 'scrollTo', { value: vi.fn(), writable: true });

class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}
window.IntersectionObserver = MockIntersectionObserver as any;
