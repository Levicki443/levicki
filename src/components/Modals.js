/**
 * @file Modals.js
 * @description Gestionnaire des modales immersives « À propos » et « Nous contacter ».
 */

/**
 * Ouvre la modale correspondant à l'identifiant fourni.
 * @param {string} modalId - ID du conteneur de modale.
 */
export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Ferme la modale correspondant à l'identifiant fourni.
 * @param {string} modalId - ID du conteneur de modale.
 */
export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Crée et insère dans le DOM les modales « À propos » et « Nous contacter ».
 */
export function initModals() {
  // Évite les doublons d'injection dans le DOM
  if (document.getElementById('modals-container')) {
    return;
  }

  const container = document.createElement('div');
  container.id = 'modals-container';

  container.innerHTML = `
    <!-- Modale : À propos -->
    <div id="about-modal" class="modal-backdrop" role="dialog" aria-labelledby="about-title" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 id="about-title" class="modal-title">À propos de la plateforme</h2>
          <button type="button" class="modal-close-btn" data-close="about-modal" aria-label="Fermer la fenêtre">✕</button>
        </div>
        <div class="modal-body">
          <p>
            Notre plateforme de <strong>Gestion d'une Gare Routière</strong> est conçue pour moderniser et simplifier la réservation de tickets de transport interurbain en Côte d'Ivoire.
          </p>
          <p>
            Née de la volonté de fluidifier les départs et d'éliminer les longues files d'attente en gare, elle permet à chaque voyageur de réserver son trajet depuis son domicile, d'obtenir les horaires précis et les indications claires vers les points d'embarquement.
          </p>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 0;">
            Société de transport partenaire certifiée — Confort, sécurité et ponctualité garantis.
          </p>
        </div>
      </div>
    </div>

    <!-- Modale : Nous contacter -->
    <div id="contact-modal" class="modal-backdrop" role="dialog" aria-labelledby="contact-title" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 id="contact-title" class="modal-title">Nous contacter</h2>
          <button type="button" class="modal-close-btn" data-close="contact-modal" aria-label="Fermer la fenêtre">✕</button>
        </div>
        <div class="modal-body">
          <p>
            Une question sur un départ, un itinéraire ou une réservation ? Notre équipe d'assistance aux voyageurs est disponible 7j/7.
          </p>
          <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              📍 <strong>Gare centrale :</strong> Abidjan, Côte d'Ivoire
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              📞 <strong>Assistance téléphonique :</strong> +225 01 02 03 04 05
            </p>
            <p style="margin-bottom: 0; color: var(--color-text-primary);">
              ✉️ <strong>Courriel :</strong> support@gare-express.ci
            </p>
          </div>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 0;">
            Horaires d'ouverture des guichets : Du lundi au dimanche, de 05h00 à 22h00.
          </p>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  // Gestion de la fermeture via les boutons croix
  container.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  // Fermeture par clic sur l'arrière-plan flouté
  container.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (event) => {
      if (event.target === backdrop) {
        closeModal(backdrop.id);
      }
    });
  });

  // Fermeture via la touche Échap
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const activeModal = document.querySelector('.modal-backdrop.active');
      if (activeModal) {
        closeModal(activeModal.id);
      }
    }
  });
}
