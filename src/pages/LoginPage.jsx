/**
 * @file LoginPage.jsx
 * @description Page de connexion voyageur avec authentification et gestion de session.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { useAuth } from '../context/AuthContext.jsx';

export function LoginPage() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
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

    if (!formData.identifier.trim()) {
      newErrors.identifier = 'Veuillez renseigner votre identifiant.';
    }

    if (!formData.password) {
      newErrors.password = 'Veuillez entrer votre mot de passe.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const trimmedId = formData.identifier.trim();
    const isEmail = trimmedId.includes('@');

    const userData = {
      fullname: isEmail ? 'Voyageur' : 'Passager Express',
      phone: isEmail ? '+225 07 00 00 00 00' : trimmedId,
      email: isEmail ? trimmedId : 'voyageur@transport.ci'
    };

    login(userData);
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
          <h1 className="auth-title">Connexion</h1>
          <p className="auth-subtitle">
            Accédez à votre espace voyageur et gérez vos réservations.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="login-identifier" className="form-label">
              Numéro de téléphone ou Courriel
            </label>
            <input
              type="text"
              id="login-identifier"
              name="identifier"
              className="form-input"
              placeholder="Ex : +225 07 12 34 56 78"
              value={formData.identifier}
              onChange={handleChange}
              required
              autoComplete="username"
            />
            {errors.identifier && (
              <span className="form-feedback error">{errors.identifier}</span>
            )}
          </div>

          <div className="form-group">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <label htmlFor="login-password" className="form-label">
                Mot de passe
              </label>
              <a
                href="#/login"
                style={{ fontSize: 'var(--font-size-xs)', color: '#93c5fd' }}
              >
                Mot de passe oublié ?
              </a>
            </div>
            <input
              type="password"
              id="login-password"
              name="password"
              className="form-input"
              placeholder="Entrez votre mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="form-feedback error">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn-card-white"
            style={{ width: '100%', marginTop: 'var(--spacing-2)' }}
          >
            <span>Se connecter</span>
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>

        <div className="auth-footer">
          <span>Vous n&apos;avez pas encore de compte ?</span>
          <a href="#/register">Créer un compte</a>
        </div>
      </div>
    </div>
  );
}
