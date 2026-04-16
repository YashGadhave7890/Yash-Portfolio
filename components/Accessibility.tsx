"use client";

import { useEffect, useState } from 'react';

interface AccessibilityProps {
  children: React.ReactNode;
}

const Accessibility: React.FC<AccessibilityProps> = ({ children }) => {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Detect keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setIsKeyboardUser(true);
        document.body.classList.add('keyboard-user');
      }
    };

    const handleMouseDown = () => {
      setIsKeyboardUser(false);
      document.body.classList.remove('keyboard-user');
    };

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    // Check for high contrast preference
    const highContrastQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(highContrastQuery.matches);

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Focus trap for modals
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Close any open modals or menus
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
          if (modal instanceof HTMLElement && modal.style.display !== 'none') {
            modal.style.display = 'none';
          }
        });
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Skip to main content link
  const SkipLink = () => (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-400 text-gray-900 px-4 py-2 rounded-md font-semibold z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
    >
      Skip to main content
    </a>
  );

  return (
    <div 
      className={`${isHighContrast ? 'high-contrast' : ''} ${isReducedMotion ? 'reduced-motion' : ''}`}
      data-keyboard-user={isKeyboardUser}
    >
      <SkipLink />
      <div id="main-content">
        {children}
      </div>
    </div>
  );
};

// Custom hook for keyboard navigation
export const useKeyboardNavigation = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleKeyDown = (e: KeyboardEvent, items: string[]) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        // Activate the focused item
        const focusedElement = document.activeElement;
        if (focusedElement instanceof HTMLElement) {
          focusedElement.click();
        }
        break;
    }
  };

  return { focusedIndex, handleKeyDown };
};

// ARIA live region for announcements
export const LiveRegion = ({ message }: { message: string }) => (
  <div
    className="sr-only"
    role="status"
    aria-live="polite"
    aria-atomic="true"
  >
    {message}
  </div>
);

export default Accessibility;
