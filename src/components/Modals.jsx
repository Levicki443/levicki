/**
 * @file Modals.jsx
 * @description Modales immersives « À propos » et « Nous contacter » avec arrière-plan flouté.
 */

import React from 'react';
import { useModal } from '../context/ModalContext.jsx';

export function Modals() {
  const { activeModal, closeModal } = useModal();

  if (!activeModal) return null;

  return (
    <div id="modals-container">
      {/* Modale : À propos */}
      {activeModal === 'about' && (
        <div
          id="about-modal"
          className="modal-backdrop active"
          role="dialog"
          aria-labelledby="about-title"
          aria-modal="true"
          onClick={(e) => {
            if (e.target.classList.contains('modal-backdrop')) closeModal();
          }}
        >
          <div className="modal-dialog">
            <div className="modal-header">
              <h2 id="about-title" className="modal-title">
                À propos de la plateforme
              </h2>
              <button
                type="button"
                className="modal-close-btn"
                aria-label="Fermer la fenêtre"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>
                Notre plateforme de <strong>Gestion d&apos;une Gare Routière</strong> est conçue pour moderniser et simplifier la réservation de tickets de transport interurbain en Côte d&apos;Ivoire.
              </p>
              <p>
                Née de la volonté de fluidifier les départs et d&apos;éliminer les longues files d&apos;attente en gare, elle permet à chaque voyageur de réserver son trajet depuis son domicile, d&apos;obtenir les horaires précis et les indications claires vers les points d&apos;embarquement.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
                Société de transport partenaire certifiée — Confort, sécurité et ponctualité garantis.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modale : Nous contacter */}
      {activeModal === 'contact' && (
        <div
          id="contact-modal"
          className="modal-backdrop active"
          role="dialog"
          aria-labelledby="contact-title"
          aria-modal="true"
          onClick={(e) => {
            if (e.target.classList.contains('modal-backdrop')) closeModal();
          }}
        >
          <div className="modal-dialog">
            <div className="modal-header">
              <h2 id="contact-title" className="modal-title">
                Nous contacter
              </h2>
              <button
                type="button"
                className="modal-close-btn"
                aria-label="Fermer la fenêtre"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>
                Une question sur un départ, un itinéraire ou une réservation ? Notre équipe d&apos;assistance aux voyageurs est disponible 7j/7.
              </p>
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: 'var(--spacing-4)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 'var(--spacing-4)'
                }}
              >
                <p style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-primary)' }}>
                  📍 <strong>Gare centrale :</strong> Abidjan, Côte d&apos;Ivoire
                </p>
                <p style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-primary)' }}>
                  📞 <strong>Assistance téléphonique :</strong> +225 01 02 03 04 05
                </p>
                <p style={{ marginBottom: 0, color: 'var(--color-text-primary)' }}>
                  ✉️ <strong>Courriel :</strong> support@gare-express.ci
                </p>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
                Horaires d&apos;ouverture des guichets : Du lundi au dimanche, de 05h00 à 22h00.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
