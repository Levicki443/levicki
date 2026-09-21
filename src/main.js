/**
 * @file main.js
 * @description Routeur SPA centralisé et orchestration des vues de l'application « Gestion d'une gare routière ».
 */

import { initModals } from './components/Modals.js';
import { initAssistantBot } from './components/AssistantBot.js';
import { initInteractiveRipples, init3DTiltCards } from './services/interactiveEffects.js';
import { renderLandingPage } from './pages/LandingPage.js';
import { renderRegisterPage } from './pages/RegisterPage.js';
import { renderLoginPage } from './pages/LoginPage.js';
import { renderBookingPage } from './pages/BookingPage.js';
import { renderPaymentPage } from './pages/PaymentPage.js';
import { renderConfirmationPage } from './pages/ConfirmationPage.js';
import { renderHistoryPage } from './pages/HistoryPage.js';
import { renderProfilePage } from './pages/ProfilePage.js';
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

  // Nettoyage et rendu du composant
  appRoot.innerHTML = '';
  const viewElement = renderFunction();
  appRoot.appendChild(viewElement);

  // Remise en haut de page fluide
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Ré-attachement des effets interactifs (Ripples & 3D Tilt)
  requestAnimationFrame(() => {
    initInteractiveRipples(appRoot);
    init3DTiltCards(appRoot);
  });
}

/**
 * Initialisation au chargement du DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation des modales globales
  initModals();

  // 2. Initialisation de l'assistant virtuel interactif flottant (Djassa-Bot)
  initAssistantBot();

  // 3. Écoute des changements de hash
  window.addEventListener('hashchange', handleRouting);

  // 4. Rendu initial
  handleRouting();
});
