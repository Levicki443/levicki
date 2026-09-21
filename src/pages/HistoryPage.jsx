/**
 * @file HistoryPage.jsx
 * @description Espace « Mes Voyages » affichant l'historique complet des réservations du passager.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { useBooking } from '../context/BookingContext.jsx';

export function HistoryPage() {
  const { setCurrentTicket } = useBooking();

  const [history] = useState(() => {
    try {
      const saved = localStorage.getItem('user_tickets_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleViewTicket = (ticket) => {
    setCurrentTicket(ticket);
    sessionStorage.setItem('current_ticket', JSON.stringify(ticket));
    window.location.hash = '#/confirmation';
  };

  return (
    <div className="main-content">
      <BackButton
        label="Retour à l'espace réservation"
        onClick={() => {
          window.location.hash = '#/app';
        }}
      />

      <div style={{ margin: 'var(--spacing-4) 0 var(--spacing-6) 0' }}>
        <h1>Mes Billets &amp; Historique des Voyages</h1>
        <p>Retrouvez l&apos;ensemble de vos réservations, vérifiez l&apos;état de vos départs et réimprimez vos tickets.</p>
      </div>

      {history.length === 0 ? (
        <div
          className="card-blue"
          style={{
            maxWidth: '600px',
            textAlign: 'center',
            padding: 'var(--spacing-8)'
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-4)' }}>🎟️</div>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-2)' }}>
            Aucun voyage enregistré
          </h2>
          <p>Vous n&apos;avez pas encore réservé de trajet sur la plateforme.</p>
          <a
            href="#/app"
            className="btn-card-white"
            style={{ marginTop: 'var(--spacing-4)', display: 'inline-block' }}
          >
            Réserver mon premier départ
          </a>
        </div>
      ) : (
        <div className="history-list">
          {history.map((t, idx) => (
            <div key={t.bookingRef || idx} className="card-blue history-item-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-2)' }}>
                  <span className="history-badge-status status-paid">
                    ✓ Payé ({t.paymentMethod || 'Mobile Money'})
                  </span>
                  <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    Réf : {t.bookingRef}
                  </span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-xl)', color: '#60a5fa', marginBottom: 'var(--spacing-1)' }}>
                  {t.departureCity} ➔ {t.arrivalCity}
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 0, color: 'var(--color-text-secondary)' }}>
                  📅 Départ : <strong>{t.departureTime}</strong> ({t.departureRank}) • Gare : {t.stationName}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: '#fbbf24' }}>
                  {(t.priceCfa || 7000).toLocaleString('fr-FR')} FCFA
                </span>
                <button
                  type="button"
                  className="btn-card-white"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleViewTicket(t)}
                >
                  <span>Voir le billet</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
