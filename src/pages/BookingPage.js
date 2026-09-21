/**
 * @file BookingPage.js
 * @description Espace de recherche et de réservation de départs connecté au service API (Sections 3, 8 et 9).
 */

import { createBackButton } from '../components/BackButton.js';
import { ApiService } from '../services/apiService.js';
import { CITIES, findTrip } from '../data/tripsData.js';

/**
 * Construit et retourne l'élément DOM de la page de recherche et réservation.
 * @returns {HTMLElement} Conteneur de l'espace de réservation.
 */
export function renderBookingPage() {
  const container = document.createElement('div');
  container.className = 'main-content';

  const user = JSON.parse(sessionStorage.getItem('current_user') || '{"fullname": "Voyageur", "phone": "" }');

  // État local initial
  let currentCities = [...CITIES];
  let currentFrom = 'Abidjan';
  let currentTo = 'Bondoukou';
  let currentTrip = findTrip(currentFrom, currentTo);
  let selectedDeparture = currentTrip.departures[1] || currentTrip.departures[0];

  // 1. Barre supérieure utilisateur avec accès rapide à l'historique et au profil
  const topbar = document.createElement('div');
  topbar.className = 'booking-topbar';
  topbar.innerHTML = `
    <a href="#/profile" class="user-badge-info" style="text-decoration: none; cursor: pointer;">
      <div class="user-avatar">${user.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${user.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: #93c5fd;">👤 Gérer mon profil & mot de passe ➔</div>
      </div>
    </a>
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;">
      <a href="#/profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        👤 Mon Profil
      </a>
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        🎟️ Mes Billets
      </a>
      <a href="#/" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        Déconnexion
      </a>
    </div>
  `;
  container.appendChild(topbar);

  // 2. Bouton Retour 3D
  const backWrapper = createBackButton({
    label: 'Retour à l\'accueil',
    onClick: () => { window.location.hash = '#/'; }
  });
  container.appendChild(backWrapper);

  // 3. Conteneur principal
  const bookingWorkspace = document.createElement('div');
  bookingWorkspace.id = 'booking-workspace';

  function renderWorkspaceContent() {
    bookingWorkspace.innerHTML = `
      <!-- Formulaire de recherche -->
      <section class="card-blue search-trip-card">
        <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">
          Rechercher un trajet interurbain
        </h2>
        <p style="font-size: var(--font-size-sm); margin-bottom: var(--spacing-4);">
          Sélectionnez votre ville de départ et votre destination pour consulter les convois disponibles.
        </p>

        <form id="search-route-form" class="search-form-grid">
          <div class="form-group">
            <label class="form-label" for="select-from">Ville de départ</label>
            <select id="select-from" class="form-select">
              ${currentCities.map((c) => `<option value="${c}" ${c === currentFrom ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-to">Ville d'arrivée (Destination)</label>
            <select id="select-to" class="form-select">
              ${currentCities.map((c) => `<option value="${c}" ${c === currentTo ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 48px;">
            <span>Rechercher</span>
          </button>
        </form>
      </section>

      <!-- Liste des départs et détails -->
      <section class="departures-section">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h3>Départs disponibles : <span style="color: #60a5fa;">${currentFrom} → ${currentTo}</span></h3>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
            Durée estimée : ~${currentTrip.estimatedDuration} (${currentTrip.distanceKm} km)
          </span>
        </div>

        <div class="departures-grid">
          ${currentTrip.departures.map((dep) => `
            <div class="card-blue departure-card ${selectedDeparture && selectedDeparture.id === dep.id ? 'active' : ''}" data-dep-id="${dep.id}">
              <div>
                <div class="departure-header">
                  <span class="departure-rank">${dep.rankLabel}</span>
                  <span class="departure-price">${dep.priceCfa.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div class="departure-time">${dep.time}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--spacing-2);">
                  📍 ${dep.stationName}
                </div>
              </div>
              <div style="margin-top: var(--spacing-4); font-size: var(--font-size-xs); color: #34d399; font-weight: 600;">
                ✓ ${dep.availableSeats} places disponibles
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Détails du départ sélectionné et indications vers la gare -->
        ${selectedDeparture ? `
          <div class="station-details-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4);">
              <h4 style="margin-bottom: 0; color: #ffffff;">
                Détails du voyage : ${selectedDeparture.rankLabel} (${selectedDeparture.time})
              </h4>
              <span class="departure-rank" style="background-color: rgba(16, 185, 129, 0.2); color: #34d399;">
                ${selectedDeparture.company}
              </span>
            </div>

            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              🏢 <strong>Gare d'embarquement :</strong> ${selectedDeparture.stationName}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              📍 <strong>Adresse :</strong> ${selectedDeparture.stationAddress}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              🚌 <strong>Véhicule :</strong> ${selectedDeparture.busType}
            </p>

            <div class="station-direction-box">
              <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
                🗺️ Indications pour vous rendre à la gare :
              </strong>
              <p style="margin-bottom: 0; font-size: var(--font-size-sm); color: var(--color-text-primary);">
                ${selectedDeparture.directions}
              </p>
            </div>

            <!-- Bandeau explicite des 4 opérateurs Mobile Money -->
            <div style="background-color: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin-top: var(--spacing-4); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--spacing-2);">
              <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">
                💳 <strong>Paiement Mobile Money disponible :</strong> Wave • Orange Money • MTN MoMo • Moov Flooz
              </div>
              <div style="display: flex; gap: var(--spacing-1);">
                <span class="operator-icon-badge operator-wave" style="width: 26px; height: 26px; font-size: 8px;">WAVE</span>
                <span class="operator-icon-badge operator-orange" style="width: 26px; height: 26px; font-size: 8px;">OM</span>
                <span class="operator-icon-badge operator-mtn" style="width: 26px; height: 26px; font-size: 8px;">MTN</span>
                <span class="operator-icon-badge operator-moov" style="width: 26px; height: 26px; font-size: 8px;">MOOV</span>
              </div>
            </div>

            <!-- Bouton vers la passerelle de paiement Mobile Money -->
            <button type="button" id="btn-proceed-payment" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
              <span>Payer mon ticket (${selectedDeparture.priceCfa.toLocaleString('fr-FR')} FCFA)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        ` : ''}
      </section>
    `;

    // Événement recherche
    const searchForm = bookingWorkspace.querySelector('#search-route-form');
    searchForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      currentFrom = searchForm.querySelector('#select-from').value;
      currentTo = searchForm.querySelector('#select-to').value;
      currentTrip = await ApiService.searchTrips(currentFrom, currentTo);
      selectedDeparture = currentTrip.departures[0] || null;
      renderWorkspaceContent();
    });

    // Événement sélection de départ
    bookingWorkspace.querySelectorAll('.departure-card').forEach((cardEl) => {
      cardEl.addEventListener('click', () => {
        const depId = cardEl.getAttribute('data-dep-id');
        selectedDeparture = currentTrip.departures.find((d) => d.id === depId);
        renderWorkspaceContent();
      });
    });

    // Événement acheminement vers le paiement Mobile Money
    const payBtn = bookingWorkspace.querySelector('#btn-proceed-payment');
    if (payBtn) {
      payBtn.addEventListener('click', async () => {
        payBtn.disabled = true;
        payBtn.innerHTML = '<span>Préparation du paiement...</span>';

        const bookingPayload = {
          passengerName: user.fullname,
          passengerPhone: user.phone || 'Non renseigné',
          departureCity: currentFrom,
          arrivalCity: currentTo,
          departureTime: selectedDeparture.time,
          departureRank: selectedDeparture.rankLabel,
          stationName: selectedDeparture.stationName,
          stationAddress: selectedDeparture.stationAddress,
          directions: selectedDeparture.directions,
          busType: selectedDeparture.busType,
          company: selectedDeparture.company,
          priceCfa: selectedDeparture.priceCfa
        };

        const ticket = await ApiService.createReservation(bookingPayload);
        sessionStorage.setItem('pending_ticket', JSON.stringify(ticket));
        sessionStorage.setItem('current_ticket', JSON.stringify(ticket));
        window.location.hash = '#/payment';
      });
    }
  }

  // Chargement asynchrone des villes
  ApiService.getCities().then((cities) => {
    if (cities && cities.length > 0) {
      currentCities = cities;
      renderWorkspaceContent();
    }
  });

  renderWorkspaceContent();
  container.appendChild(bookingWorkspace);
  return container;
}
