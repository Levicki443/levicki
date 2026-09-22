/**
 * @file LoginPage.js
 * @description Page d'authentification utilisateur (Section 6.3 du cahier des charges).
 */

import { createBackButton } from '../components/BackButton.js';

/**
 * Construit et retourne l'élément DOM de la page de connexion.
 * @returns {HTMLElement} Conteneur de la vue de connexion.
 */
export function renderLoginPage() {
  const container = document.createElement('div');
  container.className = 'auth-view-container';

  // 1. Bouton Retour 3D
  const backButtonWrapper = createBackButton({
    label: 'Retour à l\'accueil',
    onClick: () => {
      window.location.hash = '#/';
    }
  });
  container.appendChild(backButtonWrapper);

  // 2. Carte de connexion bleue
  const card = document.createElement('div');
  card.className = 'auth-card';

  card.innerHTML = `
    <div class="auth-header">
      <h1 class="auth-title">Connexion</h1>
      <p class="auth-subtitle">Accédez à votre espace voyageur et gérez vos réservations.</p>
    </div>

    <form id="login-form" class="auth-form" novalidate>
      <div class="form-group">
        <label for="login-identifier" class="form-label">Numéro de téléphone ou Courriel</label>
        <input 
          type="text" 
          id="login-identifier" 
          name="identifier" 
          class="form-input" 
          placeholder="Ex : +225 07 12 34 56 78" 
          required 
          autocomplete="username"
        />
        <span class="form-feedback" id="feedback-login-id">Veuillez renseigner votre identifiant.</span>
      </div>

      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label for="login-password" class="form-label">Mot de passe</label>
          <a href="#/login" style="font-size: var(--font-size-xs); color: #93c5fd;">Mot de passe oublié ?</a>
        </div>
        <input 
          type="password" 
          id="login-password" 
          name="password" 
          class="form-input" 
          placeholder="Entrez votre mot de passe" 
          required 
          autocomplete="current-password"
        />
        <span class="form-feedback" id="feedback-login-pwd">Veuillez entrer votre mot de passe.</span>
      </div>

      <!-- Bouton d'action dans la carte : Blanc pur selon la charte -->
      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-2);">
        <span>Se connecter</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </form>

    <div class="auth-footer">
      <span>Vous n'avez pas encore de compte ?</span>
      <a href="#/register">Créer un compte</a>
    </div>
  `;

  // 3. Gestionnaire de soumission
  const form = card.querySelector('#login-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const identifier = form.querySelector('#login-identifier').value.trim();
    const password = form.querySelector('#login-password').value;

    let isValid = true;

    const fbId = form.querySelector('#feedback-login-id');
    if (!identifier) {
      fbId.className = 'form-feedback error';
      isValid = false;
    } else {
      fbId.className = 'form-feedback';
    }

    const fbPwd = form.querySelector('#feedback-login-pwd');
    if (!password) {
      fbPwd.className = 'form-feedback error';
      isValid = false;
    } else {
      fbPwd.className = 'form-feedback';
    }

    if (isValid) {
      // Définition de la session connectée
      const existingUser = JSON.parse(sessionStorage.getItem('current_user') || 'null');
      const currentUser = existingUser || {
        fullname: identifier.includes('@') ? 'Voyageur' : 'Passager Express',
        phone: identifier,
        email: identifier.includes('@') ? identifier : 'voyageur@transport.ci'
      };
      sessionStorage.setItem('current_user', JSON.stringify(currentUser));

      // Redirection vers l'espace de réservation
      if (window.navigateTo) {
        window.navigateTo('/app');
      } else {
        window.location.hash = '#/app';
      }
    }
  });

  container.appendChild(card);
  return container;
}
