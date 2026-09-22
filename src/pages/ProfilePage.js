/**
 * @file ProfilePage.js
 * @description Page de gestion de profil passager, modification des identifiants, mot de passe, préférences et contacts d'urgence.
 */

import { createBackButton } from '../components/BackButton.js';
import { createUserTopBar } from '../components/UserTopBar.js';
import { CITIES } from '../data/tripsData.js';

/**
 * Affiche une notification Toast flottante.
 * @param {string} message - Message à afficher.
 * @param {boolean} [isError=false] - Indique si c'est une erreur.
 */
function showToast(message, isError = false) {
  let toast = document.getElementById('profile-toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'profile-toast-notification';
    toast.className = 'profile-toast';
    document.body.appendChild(toast);
  }

  toast.className = `profile-toast ${isError ? 'error' : ''} show`;
  toast.innerHTML = `
    <span>${isError ? '⚠️' : '✓'}</span>
    <span>${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/**
 * Évalue la robustesse d'un mot de passe.
 * @param {string} pwd - Mot de passe.
 * @returns {'weak'|'medium'|'strong'} Niveau de robustesse.
 */
function evaluatePasswordStrength(pwd) {
  if (!pwd || pwd.length < 6) return 'weak';
  const hasUpper = /[A-Z]/.test(pwd);
  const hasLower = /[a-z]/.test(pwd);
  const hasNumber = /[0-9]/.test(pwd);
  const hasSpecial = /[^A-Za-z0-9]/.test(pwd);

  const score = [hasUpper, hasLower, hasNumber, hasSpecial, pwd.length >= 8].filter(Boolean).length;
  if (score >= 4) return 'strong';
  if (score >= 2) return 'medium';
  return 'weak';
}

/**
 * Construit et retourne l'élément DOM de la page Profil & Compte Passager.
 * @returns {HTMLElement} Conteneur de la vue profil.
 */
export function renderProfilePage() {
  const container = document.createElement('div');
  container.className = 'main-content profile-container';

  // 1. Récupération ou initialisation robuste des données du passager connecté
  const rawUser = sessionStorage.getItem('current_user');
  let user = {
    fullname: 'Voyageur Express',
    username: 'voyageur_express',
    phone: '+225 07 12 34 56 78',
    email: 'voyageur@transport.ci',
    city: 'Abidjan',
    emergencyContactName: 'Kouassi Marie (Épouse)',
    emergencyContactPhone: '+225 05 98 76 54 32',
    preferredPayment: 'wave',
    preferredCompany: 'UTB',
    seatPreference: 'fenetre',
    smsAlerts: true,
    memberSince: 'Janvier 2026'
  };

  if (rawUser) {
    try {
      const parsed = JSON.parse(rawUser);
      if (parsed && typeof parsed === 'object') {
        user = { ...user, ...parsed };
      }
    } catch {
      // Ignorer l'erreur JSON
    }
  }

  // Sécurisation stricte de toutes les propriétés
  user.fullname = (user.fullname && typeof user.fullname === 'string' && user.fullname.trim().length > 0)
    ? user.fullname.trim()
    : 'Voyageur Express';
  user.username = (user.username && typeof user.username === 'string' && user.username.trim().length > 0)
    ? user.username.trim()
    : user.fullname.toLowerCase().replace(/[\s-]/g, '_');
  user.city = user.city || 'Abidjan';
  user.phone = user.phone || '';
  user.email = user.email || '';
  user.emergencyContactName = user.emergencyContactName || '';
  user.emergencyContactPhone = user.emergencyContactPhone || '';
  user.preferredPayment = user.preferredPayment || 'wave';
  user.preferredCompany = user.preferredCompany || 'Toutes compagnies';
  user.seatPreference = user.seatPreference || 'fenetre';
  user.smsAlerts = user.smsAlerts !== undefined ? user.smsAlerts : true;
  user.memberSince = user.memberSince || '2026';

  // Récupération de l'historique des billets pour les statistiques
  let history = [];
  try {
    const rawHistory = localStorage.getItem('user_tickets_history');
    if (rawHistory) {
      const parsedHistory = JSON.parse(rawHistory);
      if (Array.isArray(parsedHistory)) history = parsedHistory;
    }
  } catch {
    history = [];
  }

  const totalTrips = history.length;
  const totalSpent = history.reduce((sum, t) => sum + (t.priceCfa || 0), 0);
  const loyaltyPoints = totalTrips * 150 + 500;
  const loyaltyStatus = totalTrips >= 5 ? 'Membre Gold ⭐' : totalTrips >= 2 ? 'Membre Silver ✨' : 'Passager Certifié ✓';

  // 1. Barre supérieure utilisateur unifiée
  const topbar = createUserTopBar({ activeRoute: '/profile' });
  container.appendChild(topbar);

  // 2. Bouton Retour 3D
  const backWrapper = createBackButton({
    label: 'Retour aux trajets',
    onClick: () => {
      window.location.hash = '#/app';
    }
  });
  container.appendChild(backWrapper);

  // 3. Carte Hero du Profil
  const heroCard = document.createElement('div');
  heroCard.className = 'profile-hero-card';
  heroCard.innerHTML = `
    <div class="profile-user-details">
      <div class="profile-avatar-large" id="profile-avatar-display">
        ${user.fullname.charAt(0).toUpperCase() || 'V'}
      </div>
      <div class="profile-name-group">
        <h1 id="profile-hero-name">
          ${user.fullname}
          <span class="profile-username-badge" id="profile-hero-username">@${user.username}</span>
        </h1>
        <div class="profile-meta-text">
          <span class="profile-status-badge">${loyaltyStatus}</span>
          <span>📍 <strong id="profile-hero-city">${user.city}</strong></span>
          <span>📞 <span id="profile-hero-phone">${user.phone}</span></span>
        </div>
      </div>
    </div>

    <div class="profile-hero-actions">
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🎟️ Mes Billets (${totalTrips})
      </a>
      <a href="#/app" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🚌 Réserver
      </a>
      <button type="button" id="btn-logout-profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #ef4444; border-color: rgba(239, 68, 68, 0.4);">
        🚪 Déconnexion
      </button>
    </div>
  `;
  container.appendChild(heroCard);

  // 4. Barre des statistiques voyageur
  const statsSection = document.createElement('div');
  statsSection.className = 'profile-stats-grid';
  statsSection.innerHTML = `
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎟️</div>
      <div class="profile-stat-value">${totalTrips}</div>
      <div class="profile-stat-label">Voyages Effectués</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">💰</div>
      <div class="profile-stat-value">${totalSpent.toLocaleString('fr-FR')} <span style="font-size: var(--font-size-xs);">FCFA</span></div>
      <div class="profile-stat-label">Total Dépensé</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎁</div>
      <div class="profile-stat-value">${loyaltyPoints}</div>
      <div class="profile-stat-label">Points Fidélité</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🏆</div>
      <div class="profile-stat-value" style="font-size: var(--font-size-lg); color: #34d399;">${loyaltyStatus}</div>
      <div class="profile-stat-label">Statut Voyageur</div>
    </div>
  `;
  container.appendChild(statsSection);

  // 5. Grille des formulaires de gestion
  const gridLayout = document.createElement('div');
  gridLayout.className = 'profile-grid-layout';

  // --- SECTION 1 : Informations Personnelles & Nom d'utilisateur ---
  const personalCard = document.createElement('div');
  personalCard.className = 'profile-section-card';
  personalCard.innerHTML = `
    <div class="profile-section-header">
      <div class="profile-section-icon">👤</div>
      <div>
        <h2 class="profile-section-title">Informations Personnelles</h2>
        <p class="profile-section-desc">Gérez votre identité et vos coordonnées sur la plateforme.</p>
      </div>
    </div>

    <form id="form-personal-info" class="auth-form" novalidate>
      <div class="form-group">
        <label for="prof-username" class="form-label">Nom d'utilisateur (Pseudo)</label>
        <div style="position: relative;">
          <input 
            type="text" 
            id="prof-username" 
            name="username" 
            class="form-input" 
            value="${user.username}" 
            required 
            placeholder="Ex : kouassi_jean"
            autocomplete="username"
          />
        </div>
        <span class="form-feedback" id="fb-prof-username">Ce nom sera affiché publiquement sur votre compte.</span>
      </div>

      <div class="form-group">
        <label for="prof-fullname" class="form-label">Nom complet & Prénoms</label>
        <input 
          type="text" 
          id="prof-fullname" 
          name="fullname" 
          class="form-input" 
          value="${user.fullname}" 
          required 
          placeholder="Ex : Kouassi Jean-Marc"
          autocomplete="name"
        />
        <span class="form-feedback" id="fb-prof-fullname">Nom utilisé pour l'émission officielle de vos billets.</span>
      </div>

      <div class="form-group">
        <label for="prof-phone" class="form-label">Numéro de téléphone principal</label>
        <input 
          type="tel" 
          id="prof-phone" 
          name="phone" 
          class="form-input" 
          value="${user.phone}" 
          required 
          placeholder="Ex : +225 07 12 34 56 78"
          autocomplete="tel"
        />
        <span class="form-feedback" id="fb-prof-phone">Utilisé pour les réceptions Mobile Money et notifications de départ.</span>
      </div>

      <div class="form-group">
        <label for="prof-email" class="form-label">Adresse courriel (E-mail)</label>
        <input 
          type="email" 
          id="prof-email" 
          name="email" 
          class="form-input" 
          value="${user.email}" 
          placeholder="Ex : jean.kouassi@exemple.ci"
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="prof-city" class="form-label">Ville de résidence principale</label>
        <select id="prof-city" name="city" class="form-select">
          ${CITIES.map((c) => `<option value="${c}" ${c === user.city ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4);">
        <span>Enregistrer mes coordonnées</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `;
  gridLayout.appendChild(personalCard);

  // --- SECTION 2 : Sécurité & Modification du mot de passe ---
  const securityCard = document.createElement('div');
  securityCard.className = 'profile-section-card';
  securityCard.innerHTML = `
    <div class="profile-section-header">
      <div class="profile-section-icon">🔒</div>
      <div>
        <h2 class="profile-section-title">Sécurité & Mot de Passe</h2>
        <p class="profile-section-desc">Modifiez votre mot de passe pour sécuriser votre compte.</p>
      </div>
    </div>

    <form id="form-password-change" class="auth-form" novalidate>
      <div class="form-group">
        <label for="prof-old-pwd" class="form-label">Ancien mot de passe</label>
        <input 
          type="password" 
          id="prof-old-pwd" 
          name="oldPassword" 
          class="form-input" 
          placeholder="Votre mot de passe actuel" 
          required 
          autocomplete="current-password"
        />
        <span class="form-feedback" id="fb-prof-old-pwd">Veuillez renseigner votre mot de passe actuel.</span>
      </div>

      <div class="form-group">
        <label for="prof-new-pwd" class="form-label">Nouveau mot de passe</label>
        <input 
          type="password" 
          id="prof-new-pwd" 
          name="newPassword" 
          class="form-input" 
          placeholder="Au moins 6 caractères" 
          required 
          autocomplete="new-password"
        />
        <div class="password-strength-container">
          <div class="password-strength-bar">
            <div id="pwd-strength-fill" class="password-strength-fill"></div>
          </div>
          <span id="pwd-strength-text" class="password-strength-label">Sécurité : Entrez un mot de passe</span>
        </div>
      </div>

      <div class="form-group">
        <label for="prof-confirm-pwd" class="form-label">Confirmer le nouveau mot de passe</label>
        <input 
          type="password" 
          id="prof-confirm-pwd" 
          name="confirmPassword" 
          class="form-input" 
          placeholder="Retapez le nouveau mot de passe" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="fb-prof-confirm-pwd">Les mots de passe ne correspondent pas.</span>
      </div>

      <div style="background: rgba(37, 99, 235, 0.1); border-left: 3px solid #3b82f6; border-radius: var(--radius-sm); padding: var(--spacing-3); font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--spacing-2);">
        🛡️ Utilisez au moins 6 caractères avec des chiffres et lettres pour renforcer la sécurité.
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: auto;">
        <span>Mettre à jour le mot de passe</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </button>
    </form>
  `;
  gridLayout.appendChild(securityCard);

  // --- SECTION 3 : Préférences de voyage, Contacts d'urgence & Paiement ---
  const preferencesCard = document.createElement('div');
  preferencesCard.className = 'profile-section-card profile-card-full';
  preferencesCard.innerHTML = `
    <div class="profile-section-header">
      <div class="profile-section-icon">⚙️</div>
      <div>
        <h2 class="profile-section-title">Préférences de Voyage & Contact d'Urgence</h2>
        <p class="profile-section-desc">Personnalisez votre expérience de réservation et sécurisez vos trajets en autocar.</p>
      </div>
    </div>

    <form id="form-preferences" class="auth-form" novalidate>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--spacing-4);">
        <!-- Contact d'urgence -->
        <div class="form-group">
          <label for="prof-emergency-name" class="form-label">Contact d'urgence (Nom & Lien de parenté)</label>
          <input 
            type="text" 
            id="prof-emergency-name" 
            name="emergencyContactName" 
            class="form-input" 
            value="${user.emergencyContactName}" 
            placeholder="Ex : Kouassi Marie (Épouse / Frère)" 
          />
          <span class="form-feedback">Personne à joindre en cas d'imprévu durant le convoi.</span>
        </div>

        <div class="form-group">
          <label for="prof-emergency-phone" class="form-label">Téléphone du contact d'urgence</label>
          <input 
            type="tel" 
            id="prof-emergency-phone" 
            name="emergencyContactPhone" 
            class="form-input" 
            value="${user.emergencyContactPhone}" 
            placeholder="Ex : +225 05 98 76 54 32" 
          />
          <span class="form-feedback">Numéro joignable 24h/24.</span>
        </div>

        <!-- Mode de paiement par défaut -->
        <div class="form-group">
          <label class="form-label">Mode de paiement Mobile Money favori</label>
          <div class="operator-radio-group">
            <label class="operator-radio-label ${user.preferredPayment === 'wave' ? 'selected' : ''}">
              <input type="radio" name="preferredPayment" value="wave" ${user.preferredPayment === 'wave' ? 'checked' : ''} />
              <span>🌊 Wave</span>
            </label>
            <label class="operator-radio-label ${user.preferredPayment === 'orange' ? 'selected' : ''}">
              <input type="radio" name="preferredPayment" value="orange" ${user.preferredPayment === 'orange' ? 'checked' : ''} />
              <span>🍊 Orange</span>
            </label>
            <label class="operator-radio-label ${user.preferredPayment === 'mtn' ? 'selected' : ''}">
              <input type="radio" name="preferredPayment" value="mtn" ${user.preferredPayment === 'mtn' ? 'checked' : ''} />
              <span>💛 MTN</span>
            </label>
            <label class="operator-radio-label ${user.preferredPayment === 'moov' ? 'selected' : ''}">
              <input type="radio" name="preferredPayment" value="moov" ${user.preferredPayment === 'moov' ? 'checked' : ''} />
              <span>🔵 Moov</span>
            </label>
          </div>
        </div>

        <!-- Préférence de siège & Compagnie -->
        <div class="form-group">
          <label for="prof-seat-pref" class="form-label">Préférence d'emplacement de siège</label>
          <select id="prof-seat-pref" name="seatPreference" class="form-select">
            <option value="fenetre" ${user.seatPreference === 'fenetre' ? 'selected' : ''}>🪟 Côté Fenêtre (Vue panoramique)</option>
            <option value="couloir" ${user.seatPreference === 'couloir' ? 'selected' : ''}>🚶 Côté Couloir (Accès aisé)</option>
            <option value="avant" ${user.seatPreference === 'avant' ? 'selected' : ''}>🚌 À l'avant du car (Débarquement rapide)</option>
            <option value="peu_importe" ${user.seatPreference === 'peu_importe' ? 'selected' : ''}>✓ Sans préférence particulière</option>
          </select>
        </div>
      </div>

      <!-- Option notifications SMS -->
      <div style="margin-top: var(--spacing-4); padding: var(--spacing-3); background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-3);">
        <div>
          <strong style="color: #ffffff; font-size: var(--font-size-sm); display: block;">Notifications SMS & WhatsApp</strong>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Recevoir un rappel automatique 1 heure avant l'embarquement à la gare.</span>
        </div>
        <input type="checkbox" id="prof-sms-alerts" name="smsAlerts" ${user.smsAlerts ? 'checked' : ''} style="width: 20px; height: 20px; cursor: pointer;" />
      </div>

      <button type="submit" class="btn-card-white" style="margin-top: var(--spacing-4); align-self: flex-start; padding: var(--spacing-3) var(--spacing-6);">
        <span>Sauvegarder toutes mes préférences</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `;
  gridLayout.appendChild(preferencesCard);

  container.appendChild(gridLayout);

  // ==========================================================================
  // ATTACHEMENT DES GESTIONNAIRES D'ÉVÉNEMENTS
  // ==========================================================================

  // 1. Soumission Formulaire Informations Personnelles
  const personalForm = personalCard.querySelector('#form-personal-info');
  personalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newUsername = personalForm.querySelector('#prof-username').value.trim();
    const newFullname = personalForm.querySelector('#prof-fullname').value.trim();
    const newPhone = personalForm.querySelector('#prof-phone').value.trim();
    const newEmail = personalForm.querySelector('#prof-email').value.trim();
    const newCity = personalForm.querySelector('#prof-city').value;

    let valid = true;
    if (!newUsername) {
      personalForm.querySelector('#fb-prof-username').className = 'form-feedback error';
      valid = false;
    } else {
      personalForm.querySelector('#fb-prof-username').className = 'form-feedback';
    }

    if (!newFullname) {
      personalForm.querySelector('#fb-prof-fullname').className = 'form-feedback error';
      valid = false;
    } else {
      personalForm.querySelector('#fb-prof-fullname').className = 'form-feedback';
    }

    if (!newPhone || newPhone.length < 8) {
      personalForm.querySelector('#fb-prof-phone').className = 'form-feedback error';
      valid = false;
    } else {
      personalForm.querySelector('#fb-prof-phone').className = 'form-feedback';
    }

    if (valid) {
      user.username = newUsername;
      user.fullname = newFullname;
      user.phone = newPhone;
      user.email = newEmail;
      user.city = newCity;

      sessionStorage.setItem('current_user', JSON.stringify(user));
      localStorage.setItem('saved_passenger_profile', JSON.stringify(user));

      // Mise à jour visuelle immédiate du Hero
      container.querySelector('#profile-hero-name').innerHTML = `
        ${user.fullname}
        <span class="profile-username-badge" id="profile-hero-username">@${user.username}</span>
      `;
      container.querySelector('#profile-avatar-display').textContent = user.fullname.charAt(0).toUpperCase();
      container.querySelector('#profile-hero-city').textContent = user.city;
      container.querySelector('#profile-hero-phone').textContent = user.phone;

      showToast('Vos informations personnelles ont été mises à jour avec succès !');
    }
  });

  // 2. Gestion de la jauge de mot de passe en temps réel
  const newPwdInput = securityCard.querySelector('#prof-new-pwd');
  const strengthFill = securityCard.querySelector('#pwd-strength-fill');
  const strengthText = securityCard.querySelector('#pwd-strength-text');

  newPwdInput.addEventListener('input', () => {
    const val = newPwdInput.value;
    if (!val) {
      strengthFill.className = 'password-strength-fill';
      strengthText.textContent = 'Sécurité : Entrez un mot de passe';
      return;
    }
    const strength = evaluatePasswordStrength(val);
    strengthFill.className = `password-strength-fill ${strength}`;
    if (strength === 'strong') {
      strengthText.textContent = 'Sécurité : Mot de passe robuste et sécurisé ✓';
      strengthText.style.color = '#34d399';
    } else if (strength === 'medium') {
      strengthText.textContent = 'Sécurité : Niveau moyen (ajoutez des chiffres ou symboles)';
      strengthText.style.color = '#fbbf24';
    } else {
      strengthText.textContent = 'Sécurité : Mot de passe trop court ou faible';
      strengthText.style.color = '#ef4444';
    }
  });

  // 3. Soumission Formulaire Changement de Mot de Passe
  const pwdForm = securityCard.querySelector('#form-password-change');
  pwdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const oldPwd = pwdForm.querySelector('#prof-old-pwd').value;
    const newPwd = pwdForm.querySelector('#prof-new-pwd').value;
    const confirmPwd = pwdForm.querySelector('#prof-confirm-pwd').value;

    let valid = true;

    if (!oldPwd) {
      pwdForm.querySelector('#fb-prof-old-pwd').className = 'form-feedback error';
      valid = false;
    } else {
      pwdForm.querySelector('#fb-prof-old-pwd').className = 'form-feedback';
    }

    if (newPwd.length < 6) {
      strengthText.textContent = 'Erreur : Le nouveau mot de passe doit comporter au moins 6 caractères.';
      strengthText.style.color = '#ef4444';
      valid = false;
    }

    if (newPwd !== confirmPwd) {
      pwdForm.querySelector('#fb-prof-confirm-pwd').className = 'form-feedback error';
      valid = false;
    } else {
      pwdForm.querySelector('#fb-prof-confirm-pwd').className = 'form-feedback';
    }

    if (valid) {
      user.passwordUpdated = new Date().toISOString();
      sessionStorage.setItem('current_user', JSON.stringify(user));
      pwdForm.reset();
      strengthFill.className = 'password-strength-fill';
      strengthText.textContent = 'Sécurité : Entrez un mot de passe';
      strengthText.style.color = 'var(--color-text-muted)';
      showToast('Votre mot de passe a été modifié avec succès !');
    }
  });

  // 4. Gestion des boutons radio pour le paiement favori
  const prefForm = preferencesCard.querySelector('#form-preferences');
  prefForm.querySelectorAll('.operator-radio-label').forEach((labelEl) => {
    labelEl.addEventListener('click', () => {
      prefForm.querySelectorAll('.operator-radio-label').forEach((l) => l.classList.remove('selected'));
      labelEl.classList.add('selected');
      const radio = labelEl.querySelector('input');
      if (radio) radio.checked = true;
    });
  });

  // 5. Soumission Formulaire Préférences & Contact d'urgence
  prefForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emergencyName = prefForm.querySelector('#prof-emergency-name').value.trim();
    const emergencyPhone = prefForm.querySelector('#prof-emergency-phone').value.trim();
    const selectedRadio = prefForm.querySelector('input[name="preferredPayment"]:checked');
    const preferredPayment = selectedRadio ? selectedRadio.value : 'wave';
    const seatPref = prefForm.querySelector('#prof-seat-pref').value;
    const smsAlerts = prefForm.querySelector('#prof-sms-alerts').checked;

    user.emergencyContactName = emergencyName;
    user.emergencyContactPhone = emergencyPhone;
    user.preferredPayment = preferredPayment;
    user.seatPreference = seatPref;
    user.smsAlerts = smsAlerts;

    sessionStorage.setItem('current_user', JSON.stringify(user));
    localStorage.setItem('saved_passenger_profile', JSON.stringify(user));
    showToast('Vos préférences de voyage et contact d\'urgence ont été enregistrés !');
  });

  // 6. Déconnexion
  const logoutBtn = heroCard.querySelector('#btn-logout-profile');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('current_user');
      window.location.hash = '#/';
    });
  }

  return container;
}
