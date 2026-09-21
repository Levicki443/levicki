/**
 * @file LandingPage.js
 * @description Vue d'accueil moderne, animée et interactive avec bandeau direct, compteurs animés et aperçu de recherche.
 */

import { createHeader } from '../components/Header.js';
import { createLiveTicker } from '../components/LiveTicker.js';
import { CITIES } from '../data/tripsData.js';
import { initInteractiveRipples, init3DTiltCards, animateNumbers } from '../services/interactiveEffects.js';

/**
 * Construit et retourne l'élément DOM complet de la Landing Page.
 * @returns {HTMLElement} Conteneur de la page d'accueil.
 */
export function renderLandingPage() {
  const container = document.createElement('div');
  container.className = 'landing-view';

  // 1. En-tête avec bouton son
  const header = createHeader();
  container.appendChild(header);

  // 2. Bandeau défilant en direct
  const liveTicker = createLiveTicker();
  container.appendChild(liveTicker);

  // 3. Corps principal
  const main = document.createElement('main');
  main.className = 'main-content';

  main.innerHTML = `
    <section class="landing-hero">
      <div class="hero-tag">
        <span class="radar-dot" style="background-color: #3b82f6;"></span>
        <span>Plateforme Officielle de Transport Interurbain en Côte d'Ivoire</span>
      </div>

      <h1 class="hero-title">
        Voyagez en toute sérénité à travers la <span class="hero-title-highlight">Côte d'Ivoire</span>
      </h1>

      <p class="hero-description">
        Consultez les départs en temps réel, choisissez votre autocar VIP et réservez votre ticket sans file d'attente avec paiement Mobile Money instantané.
      </p>

      <!-- Sélecteur rapide et interactif de trajet directement sur la Landing Page -->
      <div class="card-blue" style="max-width: 780px; width: 100%; margin-bottom: var(--spacing-8); border: 1px solid rgba(59, 130, 246, 0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
          <div style="font-weight: 700; color: #ffffff; font-size: var(--font-size-base); display: flex; align-items: center; gap: 8px;">
            <span>⚡ Réservation Express</span>
            <span style="font-size: var(--font-size-xs); background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 8px; border-radius: var(--radius-full);">Disponibilité en direct</span>
          </div>
          <span style="font-size: var(--font-size-xs); color: #fbbf24;">Tarif garanti sans commission</span>
        </div>

        <form id="hero-quick-search-form" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) auto; gap: var(--spacing-3); align-items: flex-end;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-from">Ville de départ</label>
            <select id="quick-from" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${CITIES.map((c) => `<option value="${c}" ${c === 'Abidjan' ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-to">Destination</label>
            <select id="quick-to" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${CITIES.map((c) => `<option value="${c}" ${c === 'Bondoukou' ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 42px; padding: 0 var(--spacing-5);">
            <span>Consulter les Départs ➔</span>
          </button>
        </form>
      </div>

      <!-- Compteurs Statistiques Animés -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--spacing-4); width: 100%; max-width: 900px; margin-bottom: var(--spacing-10);">
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #60a5fa;" data-counter-target="150">0</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">DÉPARTS / JOUR</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #fbbf24;" data-counter-target="45000">0</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">PASSAGERS SERVIS</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #34d399;">99.4%</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">PONCTUALITÉ GARE</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #f472b6;">4</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">OPÉRATEURS MOBILE MONEY</div>
        </div>
      </div>

      <!-- Zone centrale : Bouton d'action Rejoindre la Communauté -->
      <div class="hero-cta-container">
        <a href="#/register" class="btn-primary-blue btn-cta-main" id="btn-join-community">
          <span>Créer mon Compte Passager</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <span class="cta-subtext">Déjà inscrit ? <a href="#/login" style="color: #60a5fa; font-weight: 600;">Se connecter</a></span>
      </div>

      <!-- Section de présentation des avantages -->
      <div class="landing-grid">
        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="feature-title">Ponctualité & Convois</h3>
            <p class="feature-text">
              Consultez les 3 départs quotidiens (Matin, Midi, Soir) avec l'état du trafic et le suivi de l'embarquement en temps réel.
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
            <h3 class="feature-title">Gares & Itinéraires 3D</h3>
            <p class="feature-text">
              Localisez précisément votre gare de départ (Adjamé, Yopougon, Treichville) et visualisez le trajet interactif vers votre destination.
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
            <h3 class="feature-title">Paiement Mobile 100% Sécurisé</h3>
            <p class="feature-text">
              Réglez instantanément avec Wave, Orange Money, MTN MoMo ou Moov Flooz et recevez votre e-billet numérique avec QR Code sécurisé.
            </p>
          </div>
        </article>
      </div>
    </section>

    <footer class="landing-footer-info">
      <p>Plateforme de Gestion d'une Gare Routière — Conçue pour une expérience voyageur moderne, animée et sécurisée.</p>
    </footer>
  `;

  // Gestion de la recherche rapide
  const quickForm = main.querySelector('#hero-quick-search-form');
  if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const from = quickForm.querySelector('#quick-from').value;
      const to = quickForm.querySelector('#quick-to').value;
      sessionStorage.setItem('search_from', from);
      sessionStorage.setItem('search_to', to);
      window.location.hash = '#/app';
    });
  }

  container.appendChild(main);

  // Initialisation des micro-interactions
  requestAnimationFrame(() => {
    initInteractiveRipples(container);
    init3DTiltCards(container);
    animateNumbers(container);
  });

  return container;
}
