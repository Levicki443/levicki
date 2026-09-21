/**
 * @file PaymentPage.js
 * @description Page de paiement sécurisé par Mobile Money (Wave, Orange, MTN, Moov) - Section 12.
 */

import { createBackButton } from '../components/BackButton.js';
import { ApiService } from '../services/apiService.js';

const OPERATORS = [
  { id: 'wave', name: 'Wave CI', class: 'operator-wave', logoText: 'WAVE' },
  { id: 'orange', name: 'Orange Money', class: 'operator-orange', logoText: 'OM' },
  { id: 'mtn', name: 'MTN MoMo', class: 'operator-mtn', logoText: 'MOMO' },
  { id: 'moov', name: 'Moov Money', class: 'operator-moov', logoText: 'MOOV' }
];

/**
 * Construit et retourne l'élément DOM de la page de paiement.
 * @returns {HTMLElement} Conteneur de paiement.
 */
export function renderPaymentPage() {
  const container = document.createElement('div');
  container.className = 'main-content';

  const ticket = JSON.parse(sessionStorage.getItem('pending_ticket') || sessionStorage.getItem('current_ticket') || 'null');

  // 1. Bouton Retour 3D
  const backWrapper = createBackButton({
    label: 'Modifier mon trajet',
    onClick: () => { window.location.hash = '#/app'; }
  });
  container.appendChild(backWrapper);

  if (!ticket) {
    const errorBox = document.createElement('div');
    errorBox.className = 'card-blue';
    errorBox.style.maxWidth = '500px';
    errorBox.style.margin = 'var(--spacing-8) auto';
    errorBox.style.textAlign = 'center';
    errorBox.innerHTML = `
      <h2>Aucun trajet en attente de paiement</h2>
      <p>Veuillez d'abord sélectionner un départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">Choisir un départ</a>
    `;
    container.appendChild(errorBox);
    return container;
  }

  let selectedOperator = OPERATORS[0].id;

  // 2. Carte de paiement
  const paymentCard = document.createElement('div');
  paymentCard.className = 'card-blue auth-card';
  paymentCard.style.maxWidth = '560px';
  paymentCard.style.margin = 'var(--spacing-6) auto';

  function renderPaymentContent() {
    paymentCard.innerHTML = `
      <div class="auth-header">
        <h1 class="auth-title">Règlement du Ticket</h1>
        <p class="auth-subtitle">Sélectionnez votre moyen de paiement Mobile Money en Côte d'Ivoire.</p>
      </div>

      <!-- Récapitulatif du trajet -->
      <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Trajet sélectionné :</span>
          <strong style="color: #60a5fa;">${ticket.departureCity} ➔ ${ticket.arrivalCity}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Départ :</span>
          <strong>${ticket.departureRank} (${ticket.departureTime})</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: var(--spacing-2);">
          <span style="font-weight: 700;">Montant total :</span>
          <strong style="color: #fbbf24; font-size: var(--font-size-lg);">${ticket.priceCfa.toLocaleString('fr-FR')} FCFA</strong>
        </div>
      </div>

      <!-- Sélecteur d'opérateur Mobile Money -->
      <label class="form-label">Opérateur Mobile Money :</label>
      <div class="payment-methods-grid">
        ${OPERATORS.map((op) => `
          <div class="payment-method-card ${selectedOperator === op.id ? 'active' : ''}" data-op-id="${op.id}">
            <div class="operator-icon-badge ${op.class}">${op.logoText}</div>
            <span class="operator-name">${op.name}</span>
          </div>
        `).join('')}
      </div>

      <form id="payment-form" class="auth-form" style="margin-top: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="pay-phone">Numéro de débit Mobile Money</label>
          <input 
            type="tel" 
            id="pay-phone" 
            class="form-input" 
            placeholder="Ex : +225 07 01 02 03 04" 
            value="${ticket.passengerPhone && ticket.passengerPhone !== 'Non renseigné' ? ticket.passengerPhone : ''}" 
            required 
          />
        </div>

        <button type="submit" class="btn-card-white" id="btn-submit-pay" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
          <span>Payer ${ticket.priceCfa.toLocaleString('fr-FR')} FCFA</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </form>
    `;

    // Changement d'opérateur
    paymentCard.querySelectorAll('.payment-method-card').forEach((cardEl) => {
      cardEl.addEventListener('click', () => {
        selectedOperator = cardEl.getAttribute('data-op-id');
        renderPaymentContent();
      });
    });

    // Soumission du paiement
    const form = paymentCard.querySelector('#payment-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('#btn-submit-pay');
      const phoneInput = form.querySelector('#pay-phone');
      const debitPhone = phoneInput ? phoneInput.value.trim() : ticket.passengerPhone;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Validation auprès de l\'opérateur...</span>';

      const opObj = OPERATORS.find((op) => op.id === selectedOperator);

      try {
        const paymentResult = await ApiService.initiatePayment({
          bookingRef: ticket.bookingRef,
          operatorId: selectedOperator,
          phone: debitPhone,
          amountCfa: ticket.priceCfa,
          passengerName: ticket.passengerName
        });

        const confirmedTicket = {
          ...ticket,
          passengerPhone: debitPhone,
          paymentMethod: opObj.name,
          paymentStatus: 'PAID',
          paymentTransactionId: paymentResult.transaction ? paymentResult.transaction.transactionId : `TXN-${selectedOperator.toUpperCase()}-${Date.now().toString().slice(-6)}`,
          paymentDate: new Date().toISOString()
        };

        // Enregistrement dans l'historique des réservations local
        const history = JSON.parse(localStorage.getItem('user_tickets_history') || '[]');
        history.unshift(confirmedTicket);
        localStorage.setItem('user_tickets_history', JSON.stringify(history));

        sessionStorage.setItem('current_ticket', JSON.stringify(confirmedTicket));
        window.location.hash = '#/confirmation';
      } catch {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Réessayer le paiement</span>';
      }
    });
  }

  renderPaymentContent();
  container.appendChild(paymentCard);
  return container;
}
