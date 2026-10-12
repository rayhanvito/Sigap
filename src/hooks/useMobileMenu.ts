'use client';

import { useCallback, useEffect, useState } from 'react';

interface UseMobileMenuReturn {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

/**
 * Custom hook for managing mobile menu state and animations
 * Handles sidebar open/close state and body scroll lock
 */
export const useMobileMenu = (): UseMobileMenuReturn => {
  const [isOpen, setIsOpen] = useState(false);

  // Open mobile menu
  const openMenu = useCallback(() => {
    setIsOpen(true);
    // Prevent body scroll when menu is open
    document.body.classList.add('overflow-hidden');
  }, []);

  // Close mobile menu
  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, closeMenu, openMenu]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return {
    isOpen,
    openMenu,
    closeMenu,
    toggleMenu,
  };
};
