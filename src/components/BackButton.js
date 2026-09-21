/**
 * @file BackButton.js
 * @description Composant réutilisable pour le Bouton Retour avec effet 3D immersif (Section 7 du cahier des charges).
 */

/**
 * Crée et retourne un bouton de retour avec animation et profondeur 3D.
 * @param {Object} options - Options de configuration du bouton.
 * @param {string} [options.label='Retour'] - Libellé textuel du bouton.
 * @param {Function} [options.onClick] - Gestionnaire de clic personnalisé (par défaut : retour historique).
 * @param {string} [options.customClass=''] - Classe CSS additionnelle éventuelle.
 * @returns {HTMLElement} Élément conteneur du bouton 3D.
 */
export function createBackButton(options = {}) {
  const {
    label = 'Retour',
    onClick = null,
    customClass = ''
  } = options;

  const wrapper = document.createElement('div');
  wrapper.className = `btn-back-3d-wrapper ${customClass}`.trim();

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn-back-3d';
  button.setAttribute('aria-label', label);

  // Icône SVG flèche gauche stylisée
  button.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>${label}</span>
  `;

  // Gestion de l'événement de navigation
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (typeof onClick === 'function') {
      onClick(event);
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#/';
    }
  });

  wrapper.appendChild(button);
  return wrapper;
}
