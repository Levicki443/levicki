/**
 * @file Header.js
 * @description Composant En-tête de navigation de l'application (Section 6.1 du cahier des charges).
 */

import logoSrc from '../assets/logo.png';
import { openModal } from './Modals.js';
import { SoundEngine } from '../services/interactiveEffects.js';

/**
 * Crée et retourne l'élément Header de navigation principale.
 * @returns {HTMLElement} Élément <header> configuré.
 */
export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  const user = JSON.parse(sessionStorage.getItem('current_user') || 'null');
  const isSoundOn = SoundEngine.isEnabled();

  header.innerHTML = `
    <a href="#/" class="brand-logo" aria-label="Accueil - GareExpress">
      <img src="${logoSrc}" alt="Logo GareExpress" class="brand-logo-img" />
      <span>Gare<span style="color: var(--color-btn-blue-bg);">Express</span></span>
      <span class="brand-badge">Côte d'Ivoire</span>
    </a>

    <nav class="nav-actions" aria-label="Navigation secondaire">
      <a href="#/courier" class="btn-nav-link" style="color: #fbbf24; border-color: rgba(251, 191, 36, 0.35);">
        📦 Fret & Colis
      </a>
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
      <button type="button" class="sound-toggle-btn" id="btn-toggle-sound" title="Activer / Couper les effets sonores">
        ${isSoundOn ? '🔊' : '🔇'}
      </button>
    </nav>
  `;

  // Gestion des clics pour l'ouverture des modales immersives
  const aboutBtn = header.querySelector('#nav-btn-about');
  const contactBtn = header.querySelector('#nav-btn-contact');
  const soundBtn = header.querySelector('#btn-toggle-sound');

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

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = SoundEngine.toggleSound();
      soundBtn.textContent = active ? '🔊' : '🔇';
    });
  }

  return header;
}
