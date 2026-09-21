/**
 * @file ConfirmationPage.js
 * @description Page de confirmation et ticket numérique (Section 11 du cahier des charges).
 */

import { createBackButton } from '../components/BackButton.js';

/**
 * Construit et retourne l'élément DOM de la page de confirmation de réservation.
 * @returns {HTMLElement} Conteneur de la vue de confirmation.
 */
export function renderConfirmationPage() {
  const container = document.createElement('div');
  container.className = 'main-content';

  const ticket = JSON.parse(sessionStorage.getItem('current_ticket') || 'null');

  // 1. Bouton Retour 3D vers l'espace de réservation
  const backWrapper = createBackButton({
    label: 'Retour aux trajets',
    onClick: () => { window.location.hash = '#/app'; }
  });
  container.appendChild(backWrapper);

  if (!ticket) {
    const errorCard = document.createElement('div');
    errorCard.className = 'card-blue';
    errorCard.style.maxWidth = '550px';
    errorCard.style.margin = 'var(--spacing-8) auto';
    errorCard.style.textAlign = 'center';
    errorCard.innerHTML = `
      <h2 style="margin-bottom: var(--spacing-4);">Aucune réservation trouvée</h2>
      <p>Veuillez d'abord sélectionner un trajet et valider votre départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Rechercher un départ
      </a>
    `;
    container.appendChild(errorCard);
    return container;
  }

  // 2. Affichage du ticket électronique confirmé
  const ticketWrapper = document.createElement('div');
  ticketWrapper.className = 'card-blue ticket-container';

  ticketWrapper.innerHTML = `
    <div class="ticket-header-band">
      <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: var(--spacing-1);">
        ✓ Réservation & Paiement Confirmés
      </h2>
      <span style="color: rgba(255, 255, 255, 0.9); font-size: var(--font-size-sm); font-weight: 600;">
        Réf Ticket : ${ticket.bookingRef}
      </span>
    </div>

    <div class="ticket-body">
      <!-- QR Code de contrôle -->
      <div class="ticket-qr-mock">
        <svg viewBox="0 0 24 24" width="90" height="90" fill="#0f172a">
          <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm10 0h2v2h-2zm4 0h4v6h-4zm-4 4h2v2h-2zm2-2h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z"/>
        </svg>
      </div>

      <div style="text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: var(--spacing-4);">
        <h3 style="font-size: var(--font-size-2xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${ticket.departureCity} ➔ ${ticket.arrivalCity}
        </h3>
        <p style="color: #cbd5e1; font-size: var(--font-size-sm); margin-bottom: 0;">
          ${ticket.departureRank} • Départ prévu à <strong>${ticket.departureTime}</strong>
        </p>
      </div>

      <!-- Badge de règlement Mobile Money sécurisé -->
      <div style="background-color: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin: var(--spacing-2) 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-2);">
        <div>
          <span style="color: #34d399; font-weight: 700; font-size: var(--font-size-sm); display: block;">
            ✓ Réglé avec succès par ${ticket.paymentMethod || 'Mobile Money'}
          </span>
          <span style="font-size: var(--font-size-xs); color: #94a3b8;">
            Transaction : <strong>${ticket.paymentTransactionId || 'TXN-DIRECT-VAL'}</strong>
          </span>
        </div>
        <div style="text-align: right;">
          <span style="color: #fbbf24; font-weight: 800; font-size: var(--font-size-base);">
            ${(ticket.priceCfa || 7000).toLocaleString('fr-FR')} FCFA
          </span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm);">
        <div>
          <span style="color: var(--color-text-muted); display: block;">Passager :</span>
          <strong style="color: #ffffff;">${ticket.passengerName}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Téléphone débité :</span>
          <strong style="color: #ffffff;">${ticket.passengerPhone}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Compagnie :</span>
          <strong style="color: #ffffff;">${ticket.company}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Statut embarquement :</span>
          <strong style="color: #34d399;">VALIDE / EMBARQUEMENT AUTORISÉ</strong>
        </div>
      </div>

      <div class="station-direction-box" style="margin: var(--spacing-2) 0;">
        <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
          📍 Point d'embarquement : ${ticket.stationName}
        </strong>
        <p style="margin-bottom: var(--spacing-2); font-size: var(--font-size-xs); color: #ffffff;">
          ${ticket.stationAddress}
        </p>
        <p style="margin-bottom: 0; font-size: var(--font-size-xs); color: #cbd5e1;">
          <em>${ticket.directions}</em>
        </p>
      </div>

      <div style="display: flex; gap: var(--spacing-4); margin-top: var(--spacing-2);">
        <button type="button" class="btn-card-white" id="btn-print-ticket" style="flex: 1;">
          <span>Imprimer mon billet</span>
        </button>
        <a href="#/history" class="btn-primary-blue" style="flex: 1; text-align: center;">
          <span>Mes Billets (Historique)</span>
        </a>
      </div>
    </div>
  `;

  // Gestion de l'impression du ticket
  const printBtn = ticketWrapper.querySelector('#btn-print-ticket');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  container.appendChild(ticketWrapper);
  return container;
}
