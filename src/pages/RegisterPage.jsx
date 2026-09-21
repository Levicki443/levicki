/**
 * @file RegisterPage.jsx
 * @description Page de création de compte voyageur avec validation des champs en temps réel.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export function RegisterPage() {
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Veuillez renseigner votre nom complet.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      newErrors.phone = 'Format de téléphone invalide (ex: +225 07...).';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit comporter au moins 6 caractères.';
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = 'Les mots de passe ne correspondent pas.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Inscription réussie
    const userData = {
      fullname: formData.fullname.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || 'contact@client.ci'
    };

    register(userData);
    window.location.hash = '#/app';
  };

  return (
    <div className="auth-view-container">
      <BackButton
        label="Retour à l'accueil"
        onClick={() => {
          window.location.hash = '#/';
        }}
      />

      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Créer un compte</h1>
          <p className="auth-subtitle">
            Rejoignez la plateforme et réservez vos trajets en quelques clics.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="reg-fullname" className="form-label">
              Nom complet
            </label>
            <input
              type="text"
              id="reg-fullname"
              name="fullname"
              className="form-input"
              placeholder="Ex : Kouassi Jean-Marc"
              value={formData.fullname}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            {errors.fullname && (
              <span className="form-feedback error">{errors.fullname}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="reg-phone" className="form-label">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              id="reg-phone"
              name="phone"
              className="form-input"
              placeholder="Ex : +225 07 12 34 56 78"
              value={formData.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
            {errors.phone && (
              <span className="form-feedback error">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="reg-email" className="form-label">
              Adresse courriel (optionnelle)
            </label>
            <input
              type="email"
              id="reg-email"
              name="email"
              className="form-input"
              placeholder="Ex : jean.kouassi@exemple.ci"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reg-password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              id="reg-password"
              name="password"
              className="form-input"
              placeholder="Au moins 6 caractères"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            {errors.password && (
              <span className="form-feedback error">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="reg-password-confirm" className="form-label">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="reg-password-confirm"
              name="passwordConfirm"
              className="form-input"
              placeholder="Retapez votre mot de passe"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
            {errors.passwordConfirm && (
              <span className="form-feedback error">{errors.passwordConfirm}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn-card-white"
            style={{ width: '100%', marginTop: 'var(--spacing-2)' }}
          >
            <span>Valider mon inscription</span>
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
        </form>

        <div className="auth-footer">
          <span>Vous possédez déjà un compte ?</span>
          <a href="#/login">Se connecter ici</a>
        </div>
      </div>
    </div>
  );
}
