/**
 * @file SeatSelectorModal.js
 * @description Modale interactive de sélection de place/siège dans l'autocar en temps réel.
 */

import { SoundEngine } from '../services/interactiveEffects.js';

/**
 * Initialise et ouvre le plan interactif de l'autocar.
 * @param {Object} options - Options de la sélection.
 * @param {string} options.currentSeat - Siège actuellement sélectionné (ex: "14").
 * @param {string} options.company - Nom de la compagnie.
 * @param {Function} options.onSeatConfirmed - Callback avec le siège choisi.
 */
export function openSeatSelectorModal({ currentSeat = '12', company = 'Compagnie Express', onSeatConfirmed }) {
  let modalBackdrop = document.getElementById('coach-seat-modal');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'coach-seat-modal';
    modalBackdrop.className = 'modal-backdrop';
    document.body.appendChild(modalBackdrop);
  }

  // Génération des 44 sièges avec occupation aléatoire réaliste
  let selectedSeat = currentSeat;
  const totalRows = 11;
  const occupiedSeats = [3, 7, 8, 15, 16, 21, 22, 28, 33, 34, 40];

  modalBackdrop.innerHTML = `
    <div class="modal-dialog coach-modal-container">
      <div class="modal-header">
        <div>
          <h2 class="modal-title" style="font-size: var(--font-size-xl);">💺 Plan Interactif de l'Autocar</h2>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
            Sélectionnez votre place à bord du car • ${company} (Climatisé VIP)
          </p>
        </div>
        <button type="button" class="modal-close-btn" id="btn-close-seat-modal" aria-label="Fermer">✕</button>
      </div>

      <div class="coach-blueprint">
        <!-- Pare-brise et cabine du chauffeur -->
        <div class="coach-windshield">
          <span>🚪 Porte avant</span>
          <span>🚌 Pare-brise & Tableau de bord</span>
          <span>👨‍✈️ Poste Chauffeur</span>
        </div>

        <!-- Grille des sièges (2 à gauche - allée - 2 à droite) -->
        <div class="coach-seats-grid">
          ${Array.from({ length: totalRows }).map((_, rowIndex) => {
            const baseSeat = rowIndex * 4;
            const s1 = baseSeat + 1;
            const s2 = baseSeat + 2;
            const s3 = baseSeat + 3;
            const s4 = baseSeat + 4;

            const isVipRow = rowIndex === 0;

            const renderSeat = (num, side) => {
              const isOccupied = occupiedSeats.includes(num);
              const isSelected = String(num) === String(selectedSeat);
              const isWindow = side === 'left-window' || side === 'right-window';
              const label = isWindow ? `N°${num} (Fenêtre)` : `N°${num} (Couloir)`;

              return `
                <button 
                  type="button" 
                  class="coach-seat-btn ${isSelected ? 'selected' : ''} ${isOccupied ? 'occupied' : ''} ${isVipRow ? 'vip' : ''}" 
                  data-seat-num="${num}"
                  data-seat-type="${isWindow ? 'Fenêtre' : 'Couloir'}"
                  data-row="${rowIndex + 1}"
                  title="${isOccupied ? 'Siège déjà réservé' : label}"
                  ${isOccupied ? 'disabled' : ''}
                >
                  <span style="font-size: 11px;">${num}</span>
                  <span style="font-size: 8px; opacity: 0.8;">${isWindow ? '🪟' : '🚶'}</span>
                </button>
              `;
            };

            return `
              ${renderSeat(s1, 'left-window')}
              ${renderSeat(s2, 'left-aisle')}
              <div class="coach-aisle">ALLÉE</div>
              ${renderSeat(s3, 'right-aisle')}
              ${renderSeat(s4, 'right-window')}
            `;
          }).join('')}
        </div>

        <!-- Légende des couleurs -->
        <div class="coach-legend">
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255,255,255,0.2);"></span>
            <span>Disponible</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: #10b981;"></span>
            <span>Votre Sélection</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: rgba(239, 68, 68, 0.4);"></span>
            <span>Déjà Réservé</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: #f59e0b;"></span>
            <span>1ère Rangée VIP</span>
          </div>
        </div>
      </div>

      <!-- Résumé du choix et validation -->
      <div style="background-color: rgba(37, 99, 235, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin-bottom: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); display: block;">Place actuellement choisie :</span>
          <strong id="seat-selection-label" style="color: #60a5fa; font-size: var(--font-size-base);">
            Siège N° ${selectedSeat} (Côté ${parseInt(selectedSeat, 10) % 2 === 1 ? 'Fenêtre' : 'Couloir'})
          </strong>
        </div>
        <button type="button" id="btn-confirm-seat-choice" class="btn-card-white" style="padding: var(--spacing-2) var(--spacing-5); font-size: var(--font-size-sm);">
          <span>Confirmer ce siège ✓</span>
        </button>
      </div>
    </div>
  `;

  // Ouverture animée
  requestAnimationFrame(() => {
    modalBackdrop.classList.add('active');
  });

  // Gestion des clics sur les sièges
  const seatButtons = modalBackdrop.querySelectorAll('.coach-seat-btn:not(.occupied)');
  const labelDisplay = modalBackdrop.querySelector('#seat-selection-label');

  seatButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundEngine.play('seat');
      seatButtons.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');

      selectedSeat = btn.getAttribute('data-seat-num');
      const seatType = btn.getAttribute('data-seat-type');
      const rowNum = btn.getAttribute('data-row');

      if (labelDisplay) {
        labelDisplay.textContent = `Siège N° ${selectedSeat} (${seatType} - Rangée ${rowNum})`;
      }
    });
  });

  // Fermeture
  function closeModal() {
    modalBackdrop.classList.remove('active');
  }

  modalBackdrop.querySelector('#btn-close-seat-modal').addEventListener('click', closeModal);

  // Confirmation
  modalBackdrop.querySelector('#btn-confirm-seat-choice').addEventListener('click', () => {
    SoundEngine.play('success');
    if (onSeatConfirmed) {
      onSeatConfirmed(selectedSeat);
    }
    closeModal();
  });
}
