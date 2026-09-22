/**
 * @file HistoryPage.js
 * @description Espace « Mes Voyages » affichant l'historique des réservations du passager.
 */

import { createBackButton } from '../components/BackButton.js';
import { createUserTopBar } from '../components/UserTopBar.js';

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
        history = parsed;
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
    onClick: () => { window.location.hash = '#/app'; }
  });
  container.appendChild(backWrapper);

  // 2. En-tête de section
  const headerSection = document.createElement('div');
  headerSection.style.margin = 'var(--spacing-4) 0 var(--spacing-6) 0';
  headerSection.innerHTML = `
    <h1>Mes Billets & Historique des Voyages</h1>
    <p>Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et réimprimez vos tickets.</p>
  `;
  container.appendChild(headerSection);

  // 3. Liste des réservations
  if (history.length === 0) {
    const emptyBox = document.createElement('div');
    emptyBox.className = 'card-blue';
    emptyBox.style.maxWidth = '600px';
    emptyBox.style.textAlign = 'center';
    emptyBox.style.padding = 'var(--spacing-8)';
    emptyBox.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun voyage enregistré</h2>
      <p>Vous n'avez pas encore réservé de trajet sur la plateforme.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Réserver mon premier départ
      </a>
    `;
    container.appendChild(emptyBox);
    return container;
  }

  const listContainer = document.createElement('div');
  listContainer.className = 'history-list';

  history.forEach((t) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'card-blue history-item-card';

    itemCard.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-2);">
          <span class="history-badge-status status-paid">✓ Payé (${t.paymentMethod || 'Mobile Money'})</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Réf : ${t.bookingRef}</span>
        </div>
        <h3 style="font-size: var(--font-size-xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${t.departureCity} ➔ ${t.arrivalCity}
        </h3>
        <p style="font-size: var(--font-size-sm); margin-bottom: 0; color: var(--color-text-secondary);">
          📅 Départ : <strong>${t.departureTime}</strong> (${t.departureRank}) • Gare : ${t.stationName}
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: var(--spacing-4);">
        <span style="font-size: var(--font-size-lg); font-weight: 700; color: #fbbf24;">
          ${(t.priceCfa || 7000).toLocaleString('fr-FR')} FCFA
        </span>
        <button type="button" class="btn-card-white" data-ticket-ref="${t.bookingRef}">
          <span>Voir le billet</span>
        </button>
      </div>
    `;

    const viewBtn = itemCard.querySelector(`[data-ticket-ref="${t.bookingRef}"]`);
    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        sessionStorage.setItem('current_ticket', JSON.stringify(t));
        window.location.hash = '#/confirmation';
      });
    }

    listContainer.appendChild(itemCard);
  });

  container.appendChild(listContainer);
  return container;
}
