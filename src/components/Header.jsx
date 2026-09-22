/**
 * @file Header.jsx
 * @description Composant En-tête de navigation principale avec logo et déclencheurs de modales.
 */

import React from 'react';
import logoSrc from '../assets/logo.png';
import { useModal } from '../context/ModalContext.jsx';

export function Header() {
  const { openAbout, openContact } = useModal();

  return (
    <header className="site-header">
      <a href="#/" className="brand-logo" aria-label="Accueil - GareExpress">
        <img src={logoSrc} alt="Logo GareExpress" className="brand-logo-img" />
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
