/**
 * @file LandingPage.js
 * @description Vue de la page d'accueil (Landing Page) conforme à la section 6.1 du cahier des charges.
 */

import { createHeader } from '../components/Header.js';

/**
 * Construit et retourne l'élément DOM complet de la Landing Page.
 * @returns {HTMLElement} Conteneur de la page d'accueil.
 */
export function renderLandingPage() {
  const container = document.createElement('div');
  container.className = 'landing-view';

  // 1. Ajout de l'en-tête (Logo + boutons À propos & Nous contacter)
  const header = createHeader();
  container.appendChild(header);

  // 2. Corps principal de la Landing Page
  const main = document.createElement('main');
  main.className = 'main-content';

  main.innerHTML = `
    <section class="landing-hero">
      <div class="hero-tag">
        <span>🚀 Plateforme Officielle de Transport Interurbain</span>
      </div>

      <h1 class="hero-title">
        Voyagez en toute sérénité à travers la <span class="hero-title-highlight">Côte d'Ivoire</span>
      </h1>

      <p class="hero-description">
        Consultez les départs en temps réel, choisissez votre gare d'embarquement et réservez votre ticket sans vous déplacer. Une expérience fluide conçue pour tous vos trajets.
      </p>

      <!-- Zone centrale : Bouton d'action Rejoindre la Communauté -->
      <div class="hero-cta-container">
        <a href="#/register" class="btn-primary-blue btn-cta-main" id="btn-join-community">
          <span>Rejoindre la Communauté</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <span class="cta-subtext">Déjà inscrit ? <a href="#/login" style="color: #60a5fa; font-weight: 600;">Se connecter</a></span>
      </div>

      <!-- Section de présentation : Genèse et raison d'être du projet -->
      <div class="landing-grid">
        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="feature-title">Ponctualité & Horaires</h3>
            <p class="feature-text">
              Accédez aux heures de départ précises pour chaque convoi (1er, 2e, 3e départ) et organisez vos déplacements en toute quiétude.
            </p>
          </div>
        </article>

        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="feature-title">Gares & Embarquement</h3>
            <p class="feature-text">
              Obtenez des indications claires et détaillées pour vous rendre au point d'embarquement exact de votre compagnie de transport.
            </p>
          </div>
        </article>

        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M7 15h0M2 9.5h20"></path>
              </svg>
            </div>
            <h3 class="feature-title">Réservation à Domicile</h3>
            <p class="feature-text">
              Fini les longues attentes au guichet. Sélectionnez votre trajet d'Abidjan à Bondoukou ou toute autre ville, et validez votre ticket en ligne.
            </p>
          </div>
        </article>
      </div>
    </section>

    <footer class="landing-footer-info">
      <p>Plateforme de Gestion d'une Gare Routière — Conçue pour une expérience voyageur moderne et sécurisée.</p>
    </footer>
  `;

  container.appendChild(main);
  return container;
}
