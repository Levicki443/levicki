/**
 * @file Header.js
 * @description Composant En-tête de navigation de l'application (Section 6.1 du cahier des charges).
 */

import { openModal } from './Modals.js';

/**
 * Crée et retourne l'élément Header de navigation principale.
 * @returns {HTMLElement} Élément <header> configuré.
 */
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  const user = JSON.parse(sessionStorage.getItem('current_user') || 'null');

  header.innerHTML = `
    <a href="#/" class="brand-logo" aria-label="Accueil - Gare Routière">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4"></rect>
        <path d="M7 10h10"></path>
        <path d="M7 14h10"></path>
        <circle cx="8" cy="18" r="1"></circle>
        <circle cx="16" cy="18" r="1"></circle>
      </svg>
      <span>Gare<span style="color: var(--color-btn-blue-bg);">Express</span></span>
      <span class="brand-badge">Côte d'Ivoire</span>
    </a>

    <nav class="nav-actions" aria-label="Navigation secondaire">
      ${user ? `
        <a href="#/profile" class="btn-nav-link" style="color: #93c5fd; border-color: rgba(147, 197, 253, 0.3);">
          👤 ${user.fullname.split(' ')[0]}
        </a>
        <a href="#/app" class="btn-nav-link">
          🚌 Trajets
        </a>
      ` : ''}
      <button type="button" class="btn-nav-link" id="nav-btn-about">
        À propos
      </button>
      <button type="button" class="btn-nav-link" id="nav-btn-contact">
        Nous contacter
      </button>
    </nav>
  `;

  // Gestion des clics pour l'ouverture des modales immersives
  const aboutBtn = header.querySelector('#nav-btn-about');
  const contactBtn = header.querySelector('#nav-btn-contact');

  if (aboutBtn) {
    aboutBtn.addEventListener('click', () => {
      openModal('about-modal');
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      openModal('contact-modal');
    });
  }

  return header;
}
