/**
 * @file main.js
 * @description Routeur SPA centralisé et orchestration des vues de l'application « Gestion d'une gare routière ».
 */

import { initModals } from './components/Modals.js';
import { initAssistantBot } from './components/AssistantBot.js';
import { initWelcomeSplash } from './components/WelcomeSplash.js';
import { initInteractiveRipples, init3DTiltCards } from './services/interactiveEffects.js';
import { renderLandingPage } from './pages/LandingPage.js';
import { renderRegisterPage } from './pages/RegisterPage.js';
import { renderLoginPage } from './pages/LoginPage.js';
import { renderBookingPage } from './pages/BookingPage.js';
import { renderPaymentPage } from './pages/PaymentPage.js';
import { renderConfirmationPage } from './pages/ConfirmationPage.js';
import { renderHistoryPage } from './pages/HistoryPage.js';
import { renderProfilePage } from './pages/ProfilePage.js';
import { renderCourierPage } from './pages/CourierPage.js';
import { renderAdminDashboardPage } from './pages/AdminDashboardPage.js';
import { renderAdminDeparturesPage } from './pages/AdminDeparturesPage.js';

/**
 * Conteneur racine de l'application.
 */
const appRoot = document.getElementById('app');

/**
 * Table des routes de l'application.
 */
const routes = {
  '/': renderLandingPage,
  '/register': renderRegisterPage,
  '/login': renderLoginPage,
  '/app': renderBookingPage,
  '/payment': renderPaymentPage,
  '/confirmation': renderConfirmationPage,
  '/history': renderHistoryPage,
  '/profile': renderProfilePage,
  '/courier': renderCourierPage,
  '/admin': renderAdminDashboardPage,
  '/admin/departures': renderAdminDeparturesPage
};

/**
 * Gestionnaire du routage SPA basé sur le hash d'URL.
 */
function handleRouting() {
  if (!appRoot) return;

  const rawHash = window.location.hash.slice(1) || '/';
  const cleanPath = rawHash.startsWith('/') ? rawHash : `/${rawHash}`;

  const renderFunction = routes[cleanPath] || routes['/'];

  // Gestion de la classe spécifique pour l'immobilité du service courrier
  if (cleanPath === '/courier') {
    document.body.classList.add('page-courier');
  } else {
    document.body.classList.remove('page-courier');
  }

  // Nettoyage et rendu sécurisé du composant
  try {
    appRoot.innerHTML = '';
    const viewElement = renderFunction();
    if (viewElement) {
      appRoot.appendChild(viewElement);
    }
  } catch (err) {
    console.error('Erreur de rendu sur la route:', cleanPath, err);
    appRoot.innerHTML = `
      <div class="main-content" style="text-align: center; padding: var(--spacing-8) var(--spacing-4);">
        <div class="card-blue" style="max-width: 500px; margin: 0 auto; text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: var(--spacing-3);">⚠️</div>
          <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">Page momentanément indisponible</h2>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-4);">
            Une erreur inattendue est survenue lors de l'accès à cette section.
          </p>
          <a href="#/app" class="btn-card-white">
            <span>Retour à l'espace réservation</span>
          </a>
        </div>
      </div>
    `;
  }

  // Remise en haut de page fluide
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Ré-attachement des effets interactifs (Ripples & 3D Tilt)
  requestAnimationFrame(() => {
    initInteractiveRipples(appRoot);
    if (cleanPath !== '/courier') {
      init3DTiltCards(appRoot);
    }
  });
}

/**
 * Initialisation au chargement du DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Écran de bienvenue & réveil intelligent du Backend (Render)
  initWelcomeSplash();

  // 2. Initialisation des modales globales
  initModals();

  // 3. Initialisation de l'assistant virtuel interactif flottant (Djassa-Bot)
  initAssistantBot();

  // 4. Écoute des changements de hash
  window.addEventListener('hashchange', handleRouting);

  // 5. Rendu initial
  handleRouting();
});
