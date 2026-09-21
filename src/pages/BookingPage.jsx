/**
 * @file BookingPage.jsx
 * @description Espace de recherche et de sélection de départs de convois interurbains.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { DepartureCard } from '../components/DepartureCard.jsx';
import { OperatorBadge } from '../components/OperatorBadge.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useBooking } from '../context/BookingContext.jsx';

export function BookingPage() {
  const { user, logout } = useAuth();
  const {
    cities,
    fromCity,
    toCity,
    trip,
    selectedDeparture,
    setSelectedDeparture,
    searchDepartures,
    prepareBooking
  } = useBooking();

  const [searchFrom, setSearchFrom] = useState(fromCity);
  const [searchTo, setSearchTo] = useState(toCity);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentUser = user || {
    fullname: 'Voyageur',
    phone: ''
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await searchDepartures(searchFrom, searchTo);
  };

  const handleProceedToPayment = async () => {
    setIsSubmitting(true);
    try {
      await prepareBooking(currentUser);
      window.location.hash = '#/payment';
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main-content">
      {/* 1. Barre supérieure utilisateur */}
      <div className="booking-topbar">
        <div className="user-badge-info">
          <div className="user-avatar">
            {currentUser.fullname.charAt(0).toUpperCase()}
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-base)'
              }}
            >
              {currentUser.fullname}
            </div>
            <div
              style={{
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-muted)'
              }}
            >
              Espace Voyageur Certifié
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
          <a
            href="#/history"
            className="btn-card-white"
            style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-2) var(--spacing-3)'
            }}
          >
            🎟️ Mes Billets
          </a>
          <button
            type="button"
            className="btn-primary-blue"
            style={{
              fontSize: 'var(--font-size-xs)',
              padding: 'var(--spacing-2) var(--spacing-4)',
              cursor: 'pointer'
            }}
            onClick={() => {
              logout();
              window.location.hash = '#/';
            }}
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* 2. Bouton Retour 3D */}
      <BackButton
        label="Retour à l'accueil"
        onClick={() => {
          window.location.hash = '#/';
        }}
      />

      {/* 3. Espace de recherche */}
      <section className="card-blue search-trip-card">
        <h2 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-2)' }}>
          Rechercher un trajet interurbain
        </h2>
        <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-4)' }}>
          Sélectionnez votre ville de départ et votre destination pour consulter les convois disponibles.
        </p>

        <form onSubmit={handleSearch} className="search-form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="select-from">
              Ville de départ
            </label>
            <select
              id="select-from"
              className="form-select"
              value={searchFrom}
              onChange={(e) => setSearchFrom(e.target.value)}
            >
              {cities.map((city) => (
                <option key={`from-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="select-to">
              Ville d&apos;arrivée (Destination)
            </label>
            <select
              id="select-to"
              className="form-select"
              value={searchTo}
              onChange={(e) => setSearchTo(e.target.value)}
            >
              {cities.map((city) => (
                <option key={`to-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn-card-white"
            style={{ height: '48px', cursor: 'pointer' }}
          >
            <span>Rechercher</span>
          </button>
        </form>
      </section>

      {/* 4. Liste des départs et détails */}
      <section className="departures-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3>
            Départs disponibles :{' '}
            <span style={{ color: '#60a5fa' }}>
              {fromCity} → {toCity}
            </span>
          </h3>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
            Durée estimée : ~{trip.estimatedDuration} ({trip.distanceKm} km)
          </span>
        </div>

        <div className="departures-grid">
          {trip.departures.map((dep) => (
            <DepartureCard
              key={dep.id}
              departure={dep}
              isSelected={selectedDeparture && selectedDeparture.id === dep.id}
              onSelect={setSelectedDeparture}
            />
          ))}
        </div>

        {/* Détails du départ sélectionné */}
        {selectedDeparture && (
          <div className="station-details-card">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--spacing-4)'
              }}
            >
              <h4 style={{ marginBottom: 0, color: '#ffffff' }}>
                Détails du voyage : {selectedDeparture.rankLabel} ({selectedDeparture.time})
              </h4>
              <span
                className="departure-rank"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}
              >
                {selectedDeparture.company}
              </span>
            </div>

            <p style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-primary)' }}>
              🏢 <strong>Gare d&apos;embarquement :</strong> {selectedDeparture.stationName}
            </p>
            <p style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-secondary)' }}>
              📍 <strong>Adresse :</strong> {selectedDeparture.stationAddress}
            </p>
            <p style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-secondary)' }}>
              🚌 <strong>Véhicule :</strong> {selectedDeparture.busType}
            </p>

            <div className="station-direction-box">
              <strong style={{ color: '#93c5fd', display: 'block', marginBottom: 'var(--spacing-1)' }}>
                🗺️ Indications pour vous rendre à la gare :
              </strong>
              <p style={{ marginBottom: 0, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)' }}>
                {selectedDeparture.directions}
              </p>
            </div>

            {/* Bandeau des 4 opérateurs Mobile Money */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--spacing-3) var(--spacing-4)',
                marginTop: 'var(--spacing-4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 'var(--spacing-2)'
              }}
            >
              <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                💳 <strong>Paiement Mobile Money disponible :</strong> Wave • Orange Money • MTN MoMo • Moov Flooz
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-1)' }}>
                <OperatorBadge operatorId="wave" style={{ width: '26px', height: '26px', fontSize: '8px' }} />
                <OperatorBadge operatorId="orange" style={{ width: '26px', height: '26px', fontSize: '8px' }} />
                <OperatorBadge operatorId="mtn" style={{ width: '26px', height: '26px', fontSize: '8px' }} />
                <OperatorBadge operatorId="moov" style={{ width: '26px', height: '26px', fontSize: '8px' }} />
              </div>
            </div>

            <button
              type="button"
              className="btn-card-white"
              style={{ width: '100%', marginTop: 'var(--spacing-4)', padding: 'var(--spacing-4)', cursor: 'pointer' }}
              onClick={handleProceedToPayment}
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting
                  ? 'Préparation du paiement...'
                  : `Payer mon ticket (${selectedDeparture.priceCfa.toLocaleString('fr-FR')} FCFA)`}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
