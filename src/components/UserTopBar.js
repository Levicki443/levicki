/**
 * @file UserTopBar.js
 * @description Barre supérieure commune et réutilisable pour l'ensemble des espaces connectés (Réservation, Billets, Profil, Colis).
 */

import { SoundEngine } from '../services/interactiveEffects.js';

/**
 * Crée et retourne la barre de navigation utilisateur connectée.
 * @param {Object} [options]
 * @param {'/app'|'/profile'|'/history'|'/courier'|string} [options.activeRoute='/app'] - Route actuellement active.
 * @returns {HTMLElement} Élément DOM de la topbar.
 */
export function createUserTopBar(options = {}) {
  const activeRoute = options.activeRoute || '/app';

  // Récupération sécurisée du profil utilisateur
  const rawUser = sessionStorage.getItem('current_user');
  let user = { fullname: 'Voyageur Express', phone: '' };
  if (rawUser) {
    try {
      const parsed = JSON.parse(rawUser);
      if (parsed && typeof parsed === 'object') {
        user = { ...user, ...parsed };
      }
    } catch {
      // Ignorer l'erreur de parsing
    }
  }

  user.fullname = (user.fullname && typeof user.fullname === 'string' && user.fullname.trim().length > 0)
    ? user.fullname.trim()
    : 'Voyageur Express';

  const avatarInitial = user.fullname.charAt(0).toUpperCase() || 'V';

  // Récupération du nombre de billets
  let ticketsCount = 0;
  try {
    const history = JSON.parse(localStorage.getItem('user_tickets_history') || '[]');
    if (Array.isArray(history)) {
      ticketsCount = history.length;
    }
  } catch {
    ticketsCount = 0;
  }

  const topbar = document.createElement('div');
  topbar.className = 'booking-topbar';

  topbar.innerHTML = `
    <!-- Bloc Identité Utilisateur & Accès Profil -->
    <a href="#/profile" class="user-badge-info" id="topbar-user-badge" style="text-decoration: none; cursor: pointer;" title="Accéder à mon profil passager">
      <div class="user-avatar">${avatarInitial}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${user.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: #93c5fd; display: flex; align-items: center; gap: 4px;">
          <span>👤 Gérer mon profil & mot de passe</span>
          <span style="font-size: 10px;">➔</span>
        </div>
      </div>
    </a>

    <!-- Boutons d'actions et navigation -->
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;" class="topbar-actions-group">
      <a href="#/courier" id="nav-topbar-courier" class="btn-card-white ${activeRoute === '/courier' ? 'btn-active-tab' : ''}" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #fbbf24; border-color: rgba(251, 191, 36, 0.4);">
        📦 Envoyer un Colis
      </a>
      
      <a href="#/app" id="nav-topbar-app" class="btn-card-white ${activeRoute === '/app' ? 'btn-active-tab' : ''}" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        🚌 Trajets
      </a>

      <a href="#/profile" id="nav-topbar-profile" class="btn-card-white ${activeRoute === '/profile' ? 'btn-active-tab' : ''}" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        👤 Mon Profil
      </a>

      <a href="#/history" id="nav-topbar-history" class="btn-card-white ${activeRoute === '/history' ? 'btn-active-tab' : ''}" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); position: relative;">
        🎟️ Mes Billets
        ${ticketsCount > 0 ? `<span style="background-color: #2563eb; color: #ffffff; font-size: 10px; font-weight: 800; padding: 1px 6px; border-radius: 9999px; margin-left: 4px;">${ticketsCount}</span>` : ''}
      </a>

      <button type="button" id="btn-global-logout" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4); cursor: pointer; background-color: #ef4444; border-color: #dc2626;" title="Se déconnecter de la plateforme">
        🚪 Déconnexion
      </button>
    </div>
  `;

  // Gestionnaire de déconnexion sécurisé
  const logoutBtn = topbar.querySelector('#btn-global-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      SoundEngine.play('click');
      sessionStorage.removeItem('current_user');
      sessionStorage.removeItem('pending_ticket');
      sessionStorage.removeItem('current_ticket');
      
      if (window.location.hash === '#/' || window.location.hash === '') {
        window.location.reload();
      } else {
        window.location.hash = '#/';
      }
    });
  }

  return topbar;
}
