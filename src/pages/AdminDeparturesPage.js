/**
 * @file AdminDeparturesPage.js
 * @description Formulaire de programmation et d'ajout de nouveaux départs de car (Section 12).
 */

import { createBackButton } from '../components/BackButton.js';
import { CITIES } from '../data/tripsData.js';

/**
 * Construit et retourne l'élément DOM de la page d'administration des départs.
 * @returns {HTMLElement} Conteneur de programmation de départ.
 */
export function renderAdminDeparturesPage() {
  const container = document.createElement('div');
  container.className = 'main-content';

  // 1. Bouton Retour 3D vers le tableau de bord
  const backWrapper = createBackButton({
    label: 'Retour au tableau de bord',
    onClick: () => { window.location.hash = '#/admin'; }
  });
  container.appendChild(backWrapper);

  // 2. Formulaire de programmation de convoi
  const card = document.createElement('div');
  card.className = 'card-blue auth-card';
  card.style.maxWidth = '680px';
  card.style.margin = 'var(--spacing-6) auto';

  card.innerHTML = `
    <div class="auth-header">
      <h1 class="auth-title">Programmer un Nouveau Départ</h1>
      <p class="auth-subtitle">Configurez un horaire, une gare d'embarquement et la capacité du car.</p>
    </div>

    <form id="admin-departure-form" class="auth-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-from">Ville de départ</label>
          <select id="adm-from" class="form-select" required>
            ${CITIES.map((c) => `<option value="${c}">${c}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-to">Ville d'arrivée</label>
          <select id="adm-to" class="form-select" required>
            ${CITIES.map((c, i) => `<option value="${c}" ${i === 1 ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-rank">Libellé du convoi</label>
          <input type="text" id="adm-rank" class="form-input" placeholder="Ex : 4e Départ" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-time">Heure de départ</label>
          <input type="text" id="adm-time" class="form-input" placeholder="Ex : 16h30" required />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="adm-station">Nom de la gare d'embarquement</label>
        <input type="text" id="adm-station" class="form-input" placeholder="Ex : Gare Routière d'Adjamé Quai Ouest" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="adm-directions">Indications précises pour les passagers</label>
        <textarea id="adm-directions" class="form-input" rows="3" placeholder="Ex : Présentation voie C face au guichet 4. Dépose bagages 30min avant..." required></textarea>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-price">Tarif du ticket (FCFA)</label>
          <input type="number" id="adm-price" class="form-input" placeholder="Ex : 7500" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-seats">Nombre de places</label>
          <input type="number" id="adm-seats" class="form-input" placeholder="Ex : 60" value="60" required />
        </div>
      </div>

      <button type="submit" class="btn-card-white" id="btn-save-departure" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
        <span>Enregistrer et publier le départ</span>
      </button>
    </form>
  `;

  // Gestion de l'enregistrement
  const form = card.querySelector('#admin-departure-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('#btn-save-departure');
    btn.disabled = true;
    btn.innerHTML = '<span>Publication en cours...</span>';

    setTimeout(() => {
      window.location.hash = '#/admin';
    }, 600);
  });

  container.appendChild(card);
  return container;
}
