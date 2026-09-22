/**
 * @file WelcomeSplash.js
 * @description Écran d'accueil et d'animation de bienvenue avec réveil intelligent du Backend (Render Cold Start).
 */

import logoSrc from '../assets/logo.png';
import { ApiService, API_BASE_URL } from '../services/apiService.js';

/**
 * Durée maximale d'attente du réveil du backend en millisecondes (1 minute 30 secondes).
 */
const MAX_WAKEUP_TIMEOUT_MS = 90000;

/**
 * Intervalle de sondage (ping) du backend en millisecondes.
 */
const PING_INTERVAL_MS = 2500;

/**
 * Délai minimal d'affichage pour une transition fluide et élégante (1 seconde).
 */
const MIN_SPLASH_DISPLAY_MS = 1200;

/**
 * Initialise et affiche l'overlay de bienvenue avec réveil du Backend.
 * @param {Object} [options]
 * @param {boolean} [options.force=false] - Forcer l'affichage même si déjà réveillé.
 * @returns {Promise<void>}
 */
export function initWelcomeSplash(options = {}) {
  // Si le réveil a déjà été validé dans la session et qu'on ne force pas, ne pas bloquer
  const alreadyWoken = sessionStorage.getItem('gareexpress_backend_ready') === 'true';
  if (alreadyWoken && !options.force) {
    return Promise.resolve();
  }

  // Vérifier si un overlay existe déjà
  let overlay = document.getElementById('welcome-splash-overlay');
  if (overlay) return Promise.resolve();

  overlay = document.createElement('div');
  overlay.id = 'welcome-splash-overlay';
  overlay.className = 'welcome-splash-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Écran de bienvenue et initialisation de GareExpress');

  overlay.innerHTML = `
    <div class="welcome-splash-card">
      <!-- Halo lumineux et Logo circulaire -->
      <div class="welcome-splash-logo-container">
        <div class="welcome-splash-logo-glow"></div>
        <img src="${logoSrc}" alt="GareExpress - Logo Officiel" class="welcome-splash-logo" />
      </div>

      <!-- Titre et sous-titre de marque -->
      <h1 class="welcome-splash-title">
        Gare<span class="welcome-splash-title-highlight">Express</span>
      </h1>
      <p class="welcome-splash-subtitle">
        Plateforme Nationale de Réservation de Billets & Fret Routier en Côte d'Ivoire
      </p>

      <!-- Badge d'état de connexion -->
      <div class="welcome-splash-status-badge" id="splash-status-badge">
        <span class="splash-spinner" id="splash-spinner"></span>
        <span id="splash-status-text">Connexion au serveur sécurisé...</span>
      </div>

      <!-- Barre de progression intelligente -->
      <div class="welcome-splash-progress-track">
        <div class="welcome-splash-progress-bar" id="splash-progress-bar"></div>
      </div>

      <!-- Chronomètre & Info Render -->
      <div class="welcome-splash-info-row">
        <span id="splash-timer-text">Initialisation des services...</span>
        <span class="splash-render-tag" id="splash-subtext">Hébergement Cloud VIP</span>
      </div>

      <!-- Bouton d'accès de secours (s'active après quelques secondes ou timeout) -->
      <div class="welcome-splash-actions" id="splash-actions" style="display: none;">
        <button type="button" class="btn-card-white welcome-splash-skip-btn" id="btn-splash-skip">
          <span>Accéder directement à l'application ➔</span>
        </button>
        <button type="button" class="btn-primary-blue welcome-splash-retry-btn" id="btn-splash-retry" style="display: none;">
          <span>🔄 Réessayer la connexion</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const statusText = overlay.querySelector('#splash-status-text');
  const statusBadge = overlay.querySelector('#splash-status-badge');
  const spinner = overlay.querySelector('#splash-spinner');
  const progressBar = overlay.querySelector('#splash-progress-bar');
  const timerText = overlay.querySelector('#splash-timer-text');
  const subText = overlay.querySelector('#splash-subtext');
  const actionsContainer = overlay.querySelector('#splash-actions');
  const skipBtn = overlay.querySelector('#btn-splash-skip');
  const retryBtn = overlay.querySelector('#btn-splash-retry');

  const startTime = Date.now();
  let isCompleted = false;
  let pollingTimer = null;
  let progressInterval = null;

  // Fermeture en fondu élégant
  function dismissSplash(success = true) {
    if (isCompleted) return;
    isCompleted = true;

    clearInterval(pollingTimer);
    clearInterval(progressInterval);

    if (success) {
      sessionStorage.setItem('gareexpress_backend_ready', 'true');
      if (progressBar) progressBar.style.width = '100%';
      if (statusText) statusText.textContent = '✓ Serveur connecté ! Bienvenue sur GareExpress.';
      if (statusBadge) {
        statusBadge.classList.add('ready');
      }
      if (spinner) {
        spinner.style.display = 'none';
      }
    }

    // Calcul du temps minimum pour un rendu soigné
    const elapsed = Date.now() - startTime;
    const remainingMinTime = Math.max(0, MIN_SPLASH_DISPLAY_MS - elapsed);

    setTimeout(() => {
      overlay.classList.add('fade-out');
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 700);
    }, remainingMinTime);
  }

  // Écouteurs sur les boutons d'action
  if (skipBtn) {
    skipBtn.addEventListener('click', () => {
      dismissSplash(true);
    });
  }

  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      retryBtn.style.display = 'none';
      if (skipBtn) skipBtn.style.display = 'inline-flex';
      if (spinner) spinner.style.display = 'inline-block';
      if (statusBadge) statusBadge.classList.remove('error');
      startWakeupProcess();
    });
  }

  // Animation de la barre de progression progressive
  progressInterval = setInterval(() => {
    if (isCompleted) return;
    const elapsed = Date.now() - startTime;
    const elapsedSeconds = Math.floor(elapsed / 1000);

    // Calcul d'une progression asynchrone (monte jusqu'à 92% tant qu'on n'a pas la confirmation)
    const asymptoticProgress = Math.min(92, Math.round((1 - Math.exp(-elapsed / 25000)) * 95));
    if (progressBar) {
      progressBar.style.width = `${Math.max(8, asymptoticProgress)}%`;
    }

    if (timerText) {
      if (elapsedSeconds < 4) {
        timerText.textContent = 'Vérification du statut du serveur...';
      } else if (elapsedSeconds < 15) {
        timerText.textContent = `Démarrage des microservices (${elapsedSeconds}s)...`;
      } else if (elapsedSeconds < 40) {
        timerText.textContent = `Réveil du serveur Render en cours (${elapsedSeconds}s / 90s max)...`;
      } else {
        timerText.textContent = `Chargement des données gares & lignes (${elapsedSeconds}s)...`;
      }
    }

    if (subText && elapsedSeconds > 8) {
      subText.textContent = 'Mise en ligne automatique';
    }

    // Affichage d'un bouton de secours après 8 secondes si le serveur met du temps
    if (elapsedSeconds >= 8 && actionsContainer && actionsContainer.style.display === 'none') {
      actionsContainer.style.display = 'flex';
    }

    // Gestion du timeout maximal (90 secondes)
    if (elapsed >= MAX_WAKEUP_TIMEOUT_MS) {
      clearInterval(pollingTimer);
      clearInterval(progressInterval);

      if (statusText) statusText.textContent = 'Le serveur met du temps à répondre.';
      if (statusBadge) statusBadge.classList.add('error');
      if (timerText) timerText.textContent = 'Mode local disponible ou nouvelle tentative';
      if (spinner) spinner.style.display = 'none';

      if (actionsContainer) {
        actionsContainer.style.display = 'flex';
      }
      if (retryBtn) {
        retryBtn.style.display = 'inline-flex';
      }
    }
  }, 300);

  // Fonction de sondage du endpoint Healthcheck
  async function pingHealth() {
    if (isCompleted) return;

    try {
      const isHealthy = await ApiService.checkHealth(4000);
      if (isHealthy) {
        dismissSplash(true);
      }
    } catch {
      // Ignorer l'erreur réseau pendant la mise en veille
    }
  }

  function startWakeupProcess() {
    pingHealth();
    pollingTimer = setInterval(pingHealth, PING_INTERVAL_MS);
  }

  // Démarrage immédiat du réveil
  startWakeupProcess();
}
