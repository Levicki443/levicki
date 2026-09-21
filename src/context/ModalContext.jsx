/**
 * @file ModalContext.jsx
 * @description Contexte pour la gestion globale des modales immersives (« À propos » et « Nous contacter »).
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null); // 'about' | 'contact' | null

  const openAbout = useCallback(() => setActiveModal('about'), []);
  const openContact = useCallback(() => setActiveModal('contact'), []);
  const closeModal = useCallback(() => setActiveModal(null), []);

  // Fermeture par la touche Échap et verrouillage du défilement du corps
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && activeModal) {
        closeModal();
      }
    };

    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, closeModal]);

  const value = {
    activeModal,
    openAbout,
    openContact,
    closeModal
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

/**
 * Hook personnalisé pour interagir avec le gestionnaire de modales.
 * @returns {Object} Fonctions d'ouverture et état de la modale active.
 */
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal doit être utilisé au sein d\'un ModalProvider');
  }
  return context;
}
