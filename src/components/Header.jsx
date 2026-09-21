/**
 * @file Header.jsx
 * @description Composant En-tête de navigation principale avec logo et déclencheurs de modales.
 */

import React from 'react';
import { useModal } from '../context/ModalContext.jsx';

export function Header() {
  const { openAbout, openContact } = useModal();

  return (
    <header className="site-header">
      <a href="#/" className="brand-logo" aria-label="Accueil - Gare Routière">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M7 10h10" />
          <path d="M7 14h10" />
          <circle cx="8" cy="18" r="1" />
          <circle cx="16" cy="18" r="1" />
        </svg>
        <span>
          Gare<span style={{ color: 'var(--color-btn-blue-bg)' }}>Express</span>
        </span>
        <span className="brand-badge">Côte d&apos;Ivoire</span>
      </a>

      <nav className="nav-actions" aria-label="Navigation secondaire">
        <button
          type="button"
          className="btn-nav-link"
          id="nav-btn-about"
          onClick={openAbout}
        >
          À propos
        </button>
        <button
          type="button"
          className="btn-nav-link"
          id="nav-btn-contact"
          onClick={openContact}
        >
          Nous contacter
        </button>
      </nav>
    </header>
  );
}
