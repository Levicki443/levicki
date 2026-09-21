/**
 * @file AdminDashboardPage.jsx
 * @description Tableau de bord d'administration pour la supervision de la gare et des départs.
 */

import React from 'react';
import { BackButton } from '../components/BackButton.jsx';

export function AdminDashboardPage() {
  return (
    <div className="main-content">
      {/* 1. Bouton Retour 3D */}
      <BackButton
        label="Retour à l'espace voyageur"
        onClick={() => {
          window.location.hash = '#/app';
        }}
      />

      {/* 2. En-tête de supervision */}
      <div
        style={{
          margin: 'var(--spacing-4) 0 var(--spacing-6) 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--spacing-4)'
        }}
      >
        <div>
          <h1 style={{ marginBottom: 'var(--spacing-1)' }}>Tableau de Bord Administrateur</h1>
          <p style={{ marginBottom: 0 }}>Supervision en direct des départs, des réservations et des gares.</p>
        </div>
        <a href="#/admin/departures" className="btn-primary-blue">
          <span>+ Programmer un départ</span>
        </a>
      </div>

      {/* 3. Grille des KPIs */}
      <div className="admin-kpi-grid">
        <div className="card-blue kpi-card">
          <span className="kpi-title">Convois programmés aujourd&apos;hui</span>
          <div className="kpi-value">12 Départs</div>
          <span className="kpi-trend">Lignes Abidjan, Bondoukou, Bouaké</span>
        </div>

        <div className="card-blue kpi-card">
          <span className="kpi-title">Billets réservés en ligne</span>
          <div className="kpi-value">284 Passagers</div>
          <span className="kpi-trend">↗ +18% par rapport à hier</span>
        </div>

        <div className="card-blue kpi-card">
          <span className="kpi-title">Taux de remplissage moyen</span>
          <div className="kpi-value">86.5 %</div>
          <span className="kpi-trend">Capacité globale optimisée</span>
        </div>

        <div className="card-blue kpi-card">
          <span className="kpi-title">Recettes encaissées (FCFA)</span>
          <div className="kpi-value" style={{ color: '#fbbf24' }}>
            1 988 000 F
          </div>
          <span className="kpi-trend">Mobile Money (Wave / OM / MTN / Moov)</span>
        </div>
      </div>

      {/* 4. Tableau des départs */}
      <div className="card-blue">
        <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-4)' }}>
          Départs en cours et à venir (Gare Routière)
        </h2>
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Convoi</th>
                <th>Trajet</th>
                <th>Heure</th>
                <th>Gare d&apos;embarquement</th>
                <th>Places réservées</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1er Départ</strong></td>
                <td>Abidjan ➔ Bondoukou</td>
                <td>06h30</td>
                <td>Gare d&apos;Adjamé Quai Nord</td>
                <td>42 / 60</td>
                <td><span className="badge-bus-status status-on-time">En route</span></td>
              </tr>
              <tr>
                <td><strong>2e Départ</strong></td>
                <td>Abidjan ➔ Bondoukou</td>
                <td>10h00</td>
                <td>Gare d&apos;Adjamé Pôle Est</td>
                <td>36 / 60</td>
                <td><span className="badge-bus-status status-boarding">Embarquement</span></td>
              </tr>
              <tr>
                <td><strong>3e Départ</strong></td>
                <td>Abidjan ➔ Bondoukou</td>
                <td>14h30</td>
                <td>Gare de Yopougon Siporex</td>
                <td>48 / 60</td>
                <td><span className="badge-bus-status status-on-time">À quai</span></td>
              </tr>
              <tr>
                <td><strong>1er Départ</strong></td>
                <td>Abidjan ➔ Bouaké</td>
                <td>07h00</td>
                <td>Gare d&apos;Adjamé Renaissance</td>
                <td>55 / 70</td>
                <td><span className="badge-bus-status status-on-time">En route</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
