/**
 * @file ConfirmationPage.jsx
 * @description Page de confirmation de réservation et affichage du billet électronique officiel.
 */

import React from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { useBooking } from '../context/BookingContext.jsx';

export function ConfirmationPage() {
  const { currentTicket } = useBooking();
  const ticket = currentTicket || (() => {
    try {
      const saved = sessionStorage.getItem('current_ticket');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  })();

  if (!ticket) {
    return (
      <div className="main-content">
        <BackButton label="Retour aux trajets" onClick={() => { window.location.hash = '#/app'; }} />
        <div className="card-blue" style={{ maxWidth: '550px', margin: 'var(--spacing-8) auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Aucune réservation trouvée</h2>
          <p>Veuillez d&apos;abord sélectionner un trajet et valider votre départ.</p>
          <a href="#/app" className="btn-card-white" style={{ marginTop: 'var(--spacing-4)', display: 'inline-block' }}>
            Rechercher un départ
          </a>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="main-content">
      <BackButton label="Retour aux trajets" onClick={() => { window.location.hash = '#/app'; }} />

      <div className="card-blue ticket-container">
        <div className="ticket-header-band">
          <h2 style={{ color: '#ffffff', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-1)' }}>
            ✓ Réservation &amp; Paiement Confirmés
          </h2>
          <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>
            Réf Ticket : {ticket.bookingRef}
          </span>
        </div>

        <div className="ticket-body">
          {/* QR Code de contrôle */}
          <div className="ticket-qr-mock">
            <svg viewBox="0 0 24 24" width="90" height="90" fill="#0f172a" aria-hidden="true">
              <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm10 0h2v2h-2zm4 0h4v6h-4zm-4 4h2v2h-2zm2-2h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z" />
            </svg>
          </div>

          <div style={{ textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: 'var(--spacing-4)' }}>
            <h3 style={{ fontSize: 'var(--font-size-2xl)', color: '#60a5fa', marginBottom: 'var(--spacing-1)' }}>
              {ticket.departureCity} ➔ {ticket.arrivalCity}
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
              {ticket.departureRank} • Départ prévu à <strong>{ticket.departureTime}</strong>
            </p>
          </div>

          {/* Badge de règlement */}
          <div
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-3) var(--spacing-4)',
              margin: 'var(--spacing-2) 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--spacing-2)'
            }}
          >
            <div>
              <span style={{ color: '#34d399', fontWeight: 700, fontSize: 'var(--font-size-sm)', display: 'block' }}>
                ✓ Réglé avec succès par {ticket.paymentMethod || 'Mobile Money'}
              </span>
              <span style={{ fontSize: 'var(--font-size-xs)', color: '#94a3b8' }}>
                Transaction : <strong>{ticket.paymentTransactionId || 'TXN-DIRECT-VAL'}</strong>
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ color: '#fbbf24', fontWeight: 800, fontSize: 'var(--font-size-base)' }}>
                {(ticket.priceCfa || 7000).toLocaleString('fr-FR')} FCFA
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)', fontSize: 'var(--font-size-sm)' }}>
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>Passager :</span>
              <strong style={{ color: '#ffffff' }}>{ticket.passengerName}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>Téléphone débité :</span>
              <strong style={{ color: '#ffffff' }}>{ticket.passengerPhone}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>Compagnie :</span>
              <strong style={{ color: '#ffffff' }}>{ticket.company}</strong>
            </div>
            <div>
              <span style={{ color: 'var(--color-text-muted)', display: 'block' }}>Statut embarquement :</span>
              <strong style={{ color: '#34d399' }}>VALIDE / EMBARQUEMENT AUTORISÉ</strong>
            </div>
          </div>

          <div className="station-direction-box" style={{ margin: 'var(--spacing-2) 0' }}>
            <strong style={{ color: '#93c5fd', display: 'block', marginBottom: 'var(--spacing-1)' }}>
              📍 Point d&apos;embarquement : {ticket.stationName}
            </strong>
            <p style={{ marginBottom: 'var(--spacing-2)', fontSize: 'var(--font-size-xs)', color: '#ffffff' }}>
              {ticket.stationAddress}
            </p>
            <p style={{ marginBottom: 0, fontSize: 'var(--font-size-xs)', color: '#cbd5e1' }}>
              <em>{ticket.directions}</em>
            </p>
          </div>

          <div style={{ display: 'flex', gap: 'var(--spacing-4)', marginTop: 'var(--spacing-2)' }}>
            <button
              type="button"
              className="btn-card-white"
              id="btn-print-ticket"
              style={{ flex: 1, cursor: 'pointer' }}
              onClick={handlePrint}
            >
              <span>Imprimer mon billet</span>
            </button>
            <a
              href="#/history"
              className="btn-primary-blue"
              style={{ flex: 1, textAlign: 'center', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span>Mes Billets (Historique)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
