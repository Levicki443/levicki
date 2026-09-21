/**
 * @file DepartureCard.jsx
 * @description Carte de sélection d'un départ de convoi avec horaire, tarif et places disponibles.
 */

import React from 'react';

export function DepartureCard({ departure, isSelected, onSelect }) {
  if (!departure) return null;

  return (
    <div
      className={`card-blue departure-card ${isSelected ? 'active' : ''}`}
      onClick={() => onSelect(departure)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(departure);
        }
      }}
      aria-label={`Sélectionner le départ ${departure.rankLabel} à ${departure.time}`}
    >
      <div>
        <div className="departure-header">
          <span className="departure-rank">{departure.rankLabel}</span>
          <span className="departure-price">
            {departure.priceCfa.toLocaleString('fr-FR')} FCFA
          </span>
        </div>
        <div className="departure-time">{departure.time}</div>
        <div
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            marginTop: 'var(--spacing-2)'
          }}
        >
          📍 {departure.stationName}
        </div>
      </div>
      <div
        style={{
          marginTop: 'var(--spacing-4)',
          fontSize: 'var(--font-size-xs)',
          color: '#34d399',
          fontWeight: 600
        }}
      >
        ✓ {departure.availableSeats} places disponibles
      </div>
    </div>
  );
}
