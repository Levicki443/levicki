/**
 * @file HistoryPage.js
 * @description Espace « Mes Voyages » affichant l'historique des réservations du passager.
 */

import { createBackButton } from '../components/BackButton.js';
import { createUserTopBar } from '../components/UserTopBar.js';
import { SoundEngine } from '../services/interactiveEffects.js';

/**
 * Construit et retourne l'élément DOM de la page d'historique.
 * @returns {HTMLElement} Conteneur de l'historique des tickets.
 */
export function renderHistoryPage() {
  const container = document.createElement('div');
  container.className = 'main-content';

  let history = [];
  try {
    const rawHistory = localStorage.getItem('user_tickets_history');
    if (rawHistory) {
      const parsed = JSON.parse(rawHistory);
      if (Array.isArray(parsed)) {
        history = parsed.filter((item) => item && typeof item === 'object');
      }
    }
  } catch {
    history = [];
  }

  // 1. Barre supérieure utilisateur unifiée
  const topbar = createUserTopBar({ activeRoute: '/history' });
  container.appendChild(topbar);

  // 2. Bouton Retour 3D
  const backWrapper = createBackButton({
    label: 'Retour à l\'espace réservation',
    onClick: () => { 
      if (window.location.hash === '#/app') {
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      } else {
        window.location.hash = '#/app';
      }
    }
  });
  container.appendChild(backWrapper);

  // 3. En-tête de section
  const headerSection = document.createElement('div');
  headerSection.style.margin = 'var(--spacing-4) 0 var(--spacing-6) 0';
  headerSection.innerHTML = `
    <h1 style="margin-bottom: var(--spacing-1);">Mes Billets & Historique des Voyages</h1>
    <p style="margin-bottom: 0;">Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et consultez vos e-billets.</p>
  `;
  container.appendChild(headerSection);

  // 4. Liste des réservations
  if (history.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'card-blue';
    emptyBox.style.maxWidth = '600px';
    emptyBox.style.margin = 'var(--spacing-6) auto';
    emptyBox.style.textAlign = 'center';
    emptyBox.style.padding = 'var(--spacing-8)';
    emptyBox.innerHTML = `
      <div style="font-size: 3.5rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun billet pour le moment</h2>
      <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-6);">
        Vous n'avez pas encore réservé de trajet en autocar sur la plateforme.
      </p>
      <button type="button" class="btn-card-white" id="btn-goto-booking-empty" style="cursor: pointer;">
        <span>🚌 Réserver mon premier départ</span>
      </button>
    `;

    const gotoBooking = emptyBox.querySelector('#btn-goto-booking-empty');
    if (gotoBooking) {
      gotoBooking.addEventListener('click', (e) => {
        e.preventDefault();
        SoundEngine.play('click');
        window.location.hash = '#/app';
      });
    }

    container.appendChild(emptyBox);
    return container;
  }

  const listContainer = document.createElement('div');
  listContainer.className = 'history-list';
  listContainer.style.display = 'flex';
  listContainer.style.flexDirection = 'column';
  listContainer.style.gap = 'var(--spacing-4)';

  history.forEach((t, index) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'card-blue history-item-card';
    itemCard.style.display = 'flex';
    itemCard.style.justifyContent = 'space-between';
    itemCard.style.alignItems = 'center';
    itemCard.style.flexWrap = 'wrap';
    itemCard.style.gap = 'var(--spacing-4)';
    itemCard.style.padding = 'var(--spacing-5)';

    const refCode = t.bookingRef || `BILLET-${index + 1}`;
    const depCity = t.departureCity || 'Abidjan';
    const arrCity = t.arrivalCity || 'Destination';
    const depTime = t.departureTime || '06h30';
    const depRank = t.departureRank || 'Convoi VIP';
    const stName = t.stationName || 'Gare Centrale';
    const price = (typeof t.priceCfa === 'number' && !isNaN(t.priceCfa)) ? t.priceCfa : 7000;
    const paymentMethod = t.paymentMethod || 'Mobile Money';

    itemCard.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-2); flex-wrap: wrap;">
          <span class="history-badge-status status-paid" style="background: rgba(16, 185, 129, 0.15); color: #34d399; padding: 2px 10px; border-radius: var(--radius-full); font-size: var(--font-size-xs); font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.4);">
            ✓ Payé (${paymentMethod})
          </span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-family: monospace;">Réf : ${refCode}</span>
        </div>
        <h3 style="font-size: var(--font-size-xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${depCity} ➔ ${arrCity}
        </h3>
        <p style="font-size: var(--font-size-sm); margin-bottom: 0; color: var(--color-text-secondary);">
          📅 Départ : <strong>${depTime}</strong> (${depRank}) • 📍 Gare : ${stName}
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: var(--spacing-4); flex-wrap: wrap;">
        <span style="font-size: var(--font-size-xl); font-weight: 800; color: #fbbf24;">
          ${price.toLocaleString('fr-FR')} FCFA
        </span>
        <button type="button" class="btn-card-white btn-view-ticket-action" style="cursor: pointer;">
          <span>🎟️ Voir le billet ➔</span>
        </button>
      </div>
    `;

    const viewBtn = itemCard.querySelector('.btn-view-ticket-action');
    if (viewBtn) {
      viewBtn.addEventListener('click', (e) => {
        e.preventDefault();
        SoundEngine.play('click');
        sessionStorage.setItem('current_ticket', JSON.stringify(t));
        window.location.hash = '#/confirmation';
      });
    }

    listContainer.appendChild(itemCard);
  });

  container.appendChild(listContainer);
  return container;
}
