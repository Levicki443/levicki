/**
 * @file AdminDashboardPage.js
 * @description Tableau de bord administrateur et supervision de la gare routière (Section 12).
 */

import { createBackButton } from '../components/BackButton.js';

/**
 * Construit et retourne l'élément DOM du tableau de bord administrateur.
 * @returns {HTMLElement} Conteneur du tableau de bord.
 */
export function renderAdminDashboardPage() {
  const container = document.createElement('div');
  container.className = 'main-content';

  // 1. Bouton Retour 3D
  const backWrapper = createBackButton({
    label: 'Retour à l\'espace voyageur',
    onClick: () => { window.location.hash = '#/app'; }
  });
  container.appendChild(backWrapper);

  // 2. En-tête de supervision
  const header = document.createElement('div');
  header.style.margin = 'var(--spacing-4) 0 var(--spacing-6) 0';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.flexWrap = 'wrap';
  header.style.gap = 'var(--spacing-4)';

  header.innerHTML = `
    <div>
      <h1 style="margin-bottom: var(--spacing-1);">Tableau de Bord Administrateur</h1>
      <p style="margin-bottom: 0;">Supervision en direct des départs, des réservations et des gares.</p>
    </div>
    <a href="#/admin/departures" class="btn-primary-blue">
      <span>+ Programmer un départ</span>
    </a>
  `;
  container.appendChild(header);

  // 3. Grille des indicateurs clés (KPIs)
  const kpiSection = document.createElement('div');
  kpiSection.className = 'admin-kpi-grid';

  kpiSection.innerHTML = `
    <div class="card-blue kpi-card">
      <span class="kpi-title">Convois programmés aujourd'hui</span>
      <div class="kpi-value">12 Départs</div>
      <span class="kpi-trend">Lignes Abidjan, Bondoukou, Bouaké</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Billets réservés en ligne</span>
      <div class="kpi-value">284 Passagers</div>
      <span class="kpi-trend">↗ +18% par rapport à hier</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Taux de remplissage moyen</span>
      <div class="kpi-value">86.5 %</div>
      <span class="kpi-trend">Capacité globale optimisée</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Recettes encaissées (FCFA)</span>
      <div class="kpi-value" style="color: #fbbf24;">1 988 000 F</div>
      <span class="kpi-trend">Mobile Money (Wave / OM / MTN)</span>
    </div>
  `;
  container.appendChild(kpiSection);

  // 4. Tableau des départs du jour
  const tableCard = document.createElement('div');
  tableCard.className = 'card-blue';
  tableCard.innerHTML = `
    <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-4);">
      Départs en cours et à venir (Gare Routière)
    </h2>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Convoi</th>
            <th>Trajet</th>
            <th>Heure</th>
            <th>Gare d'embarquement</th>
            <th>Places réservées</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1er Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>06h30</td>
            <td>Gare d'Adjamé Quai Nord</td>
            <td>42 / 60</td>
            <td><span class="badge-bus-status status-on-time">En route</span></td>
          </tr>
          <tr>
            <td><strong>2e Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>10h00</td>
            <td>Gare d'Adjamé Pôle Est</td>
            <td>36 / 60</td>
            <td><span class="badge-bus-status status-boarding">Embarquement</span></td>
          </tr>
          <tr>
            <td><strong>3e Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>14h30</td>
            <td>Gare de Yopougon Siporex</td>
            <td>48 / 60</td>
            <td><span class="badge-bus-status status-on-time">À quai</span></td>
          </tr>
          <tr>
            <td><strong>1er Départ</strong></td>
            <td>Abidjan ➔ Bouaké</td>
            <td>07h00</td>
            <td>Gare d'Adjamé Renaissance</td>
            <td>55 / 70</td>
            <td><span class="badge-bus-status status-on-time">En route</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
  container.appendChild(tableCard);

  return container;
}
