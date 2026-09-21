/**
 * @file AdminDeparturesPage.jsx
 * @description Formulaire de programmation et d'ajout de nouveaux départs de car.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { CITIES } from '../data/tripsData.js';

export function AdminDeparturesPage() {
  const [formData, setFormData] = useState({
    fromCity: CITIES[0] || 'Abidjan',
    toCity: CITIES[1] || 'Bondoukou',
    rank: '',
    time: '',
    station: '',
    directions: '',
    price: '',
    seats: '60'
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      window.location.hash = '#/admin';
    }, 500);
  };

  return (
    <div className="main-content">
      <BackButton
        label="Retour au tableau de bord"
        onClick={() => {
          window.location.hash = '#/admin';
        }}
      />

      <div className="card-blue auth-card" style={{ maxWidth: '680px', margin: 'var(--spacing-6) auto' }}>
        <div className="auth-header">
          <h1 className="auth-title">Programmer un Nouveau Départ</h1>
          <p className="auth-subtitle">
            Configurez un horaire, une gare d&apos;embarquement et la capacité du car.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="adm-from">
                Ville de départ
              </label>
              <select
                id="adm-from"
                name="fromCity"
                className="form-select"
                value={formData.fromCity}
                onChange={handleChange}
                required
              >
                {CITIES.map((c) => (
                  <option key={`adm-from-${c}`} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="adm-to">
                Ville d&apos;arrivée
              </label>
              <select
                id="adm-to"
                name="toCity"
                className="form-select"
                value={formData.toCity}
                onChange={handleChange}
                required
              >
                {CITIES.map((c) => (
                  <option key={`adm-to-${c}`} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="adm-rank">
                Libellé du convoi
              </label>
              <input
                type="text"
                id="adm-rank"
                name="rank"
                className="form-input"
                placeholder="Ex : 4e Départ"
                value={formData.rank}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="adm-time">
                Heure de départ
              </label>
              <input
                type="text"
                id="adm-time"
                name="time"
                className="form-input"
                placeholder="Ex : 16h30"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="adm-station">
              Nom de la gare d&apos;embarquement
            </label>
            <input
              type="text"
              id="adm-station"
              name="station"
              className="form-input"
              placeholder="Ex : Gare Routière d'Adjamé Quai Ouest"
              value={formData.station}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="adm-directions">
              Indications précises pour les passagers
            </label>
            <textarea
              id="adm-directions"
              name="directions"
              className="form-input"
              rows="3"
              placeholder="Ex : Présentation voie C face au guichet 4. Dépose bagages 30min avant..."
              value={formData.directions}
              onChange={handleChange}
              required
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-4)' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="adm-price">
                Tarif du ticket (FCFA)
              </label>
              <input
                type="number"
                id="adm-price"
                name="price"
                className="form-input"
                placeholder="Ex : 7500"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="adm-seats">
                Nombre de places
              </label>
              <input
                type="number"
                id="adm-seats"
                name="seats"
                className="form-input"
                placeholder="Ex : 60"
                value={formData.seats}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-card-white"
            style={{ width: '100%', marginTop: 'var(--spacing-4)', padding: 'var(--spacing-4)', cursor: 'pointer' }}
            disabled={isSaving}
          >
            <span>{isSaving ? 'Publication en cours...' : 'Enregistrer et publier le départ'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
