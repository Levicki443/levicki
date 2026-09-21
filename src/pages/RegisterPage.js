/**
 * @file RegisterPage.js
 * @description Page de création de compte utilisateur (Section 6.2 du cahier des charges).
 */

import { createBackButton } from '../components/BackButton.js';

/**
 * Construit et retourne l'élément DOM de la page d'inscription.
 * @returns {HTMLElement} Conteneur de la vue d'inscription.
 */
export function renderRegisterPage() {
  const container = document.createElement('div');
  container.className = 'auth-view-container';

  // 1. Bouton Retour 3D pour revenir à l'accueil
  const backButtonWrapper = createBackButton({
    label: 'Retour à l\'accueil',
    onClick: () => {
      window.location.hash = '#/';
    }
  });
  container.appendChild(backButtonWrapper);

  // 2. Carte d'inscription bleue
  const card = document.createElement('div');
  card.className = 'auth-card';

  card.innerHTML = `
    <div class="auth-header">
      <h1 class="auth-title">Créer un compte</h1>
      <p class="auth-subtitle">Rejoignez la plateforme et réservez vos trajets en quelques clics.</p>
    </div>

    <form id="register-form" class="auth-form" novalidate>
      <div class="form-group">
        <label for="reg-fullname" class="form-label">Nom complet</label>
        <input 
          type="text" 
          id="reg-fullname" 
          name="fullname" 
          class="form-input" 
          placeholder="Ex : Kouassi Jean-Marc" 
          required 
          autocomplete="name"
        />
        <span class="form-feedback" id="feedback-fullname">Veuillez renseigner votre nom complet.</span>
      </div>

      <div class="form-group">
        <label for="reg-phone" class="form-label">Numéro de téléphone</label>
        <input 
          type="tel" 
          id="reg-phone" 
          name="phone" 
          class="form-input" 
          placeholder="Ex : +225 07 12 34 56 78" 
          required 
          autocomplete="tel"
        />
        <span class="form-feedback" id="feedback-phone">Format de téléphone invalide (ex: +225 07...).</span>
      </div>

      <div class="form-group">
        <label for="reg-email" class="form-label">Adresse courriel (optionnelle)</label>
        <input 
          type="email" 
          id="reg-email" 
          name="email" 
          class="form-input" 
          placeholder="Ex : jean.kouassi@exemple.ci" 
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="reg-password" class="form-label">Mot de passe</label>
        <input 
          type="password" 
          id="reg-password" 
          name="password" 
          class="form-input" 
          placeholder="Au moins 6 caractères" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="feedback-password">Le mot de passe doit comporter au moins 6 caractères.</span>
      </div>

      <div class="form-group">
        <label for="reg-password-confirm" class="form-label">Confirmer le mot de passe</label>
        <input 
          type="password" 
          id="reg-password-confirm" 
          name="passwordConfirm" 
          class="form-input" 
          placeholder="Retapez votre mot de passe" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="feedback-password-confirm">Les mots de passe ne correspondent pas.</span>
      </div>

      <!-- Bouton d'action dans la carte : Blanc pur selon la charte -->
      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-2);">
        <span>Valider mon inscription</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </form>

    <div class="auth-footer">
      <span>Vous possédez déjà un compte ?</span>
      <a href="#/login">Se connecter ici</a>
    </div>
  `;

  // 3. Gestionnaire de soumission avec validation
  const form = card.querySelector('#register-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullname = form.querySelector('#reg-fullname').value.trim();
    const phone = form.querySelector('#reg-phone').value.trim();
    const email = form.querySelector('#reg-email').value.trim();
    const password = form.querySelector('#reg-password').value;
    const passwordConfirm = form.querySelector('#reg-password-confirm').value;

    let isValid = true;

    // Validation du nom
    const fbName = form.querySelector('#feedback-fullname');
    if (!fullname) {
      fbName.className = 'form-feedback error';
      isValid = false;
    } else {
      fbName.className = 'form-feedback';
    }

    // Validation du téléphone
    const fbPhone = form.querySelector('#feedback-phone');
    if (!phone || phone.length < 8) {
      fbPhone.className = 'form-feedback error';
      isValid = false;
    } else {
      fbPhone.className = 'form-feedback';
    }

    // Validation du mot de passe
    const fbPassword = form.querySelector('#feedback-password');
    if (password.length < 6) {
      fbPassword.className = 'form-feedback error';
      isValid = false;
    } else {
      fbPassword.className = 'form-feedback';
    }

    // Validation de la confirmation
    const fbConfirm = form.querySelector('#feedback-password-confirm');
    if (password !== passwordConfirm) {
      fbConfirm.className = 'form-feedback error';
      isValid = false;
    } else {
      fbConfirm.className = 'form-feedback';
    }

    if (isValid) {
      // Enregistrement de session utilisateur
      const userData = { fullname, phone, email: email || 'contact@client.ci' };
      sessionStorage.setItem('current_user', JSON.stringify(userData));

      // Redirection immédiate vers l'espace de réservation
      window.location.hash = '#/app';
    }
  });

  container.appendChild(card);
  return container;
}
