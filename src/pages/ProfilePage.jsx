/**
 * @file ProfilePage.jsx
 * @description Page de gestion de profil passager en version React.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { CITIES } from '../data/tripsData.js';

export function ProfilePage() {
  const [user, setUser] = useState(() => {
    const raw = sessionStorage.getItem('current_user');
    return raw ? JSON.parse(raw) : {
      fullname: 'Kouassi Jean-Philippe',
      username: 'kouassi_jp',
      phone: '+225 07 12 34 56 78',
      email: 'jean.kouassi@transport.ci',
      city: 'Abidjan',
      emergencyContactName: 'Kouassi Marie (Épouse)',
      emergencyContactPhone: '+225 05 98 76 54 32',
      preferredPayment: 'wave',
      preferredCompany: 'UTB',
      seatPreference: 'fenetre',
      smsAlerts: true
    };
  });

  const [toastMessage, setToastMessage] = useState('');
  const [toastError, setToastError] = useState(false);

  // Form states
  const [username, setUsername] = useState(user.username || 'kouassi_jp');
  const [fullname, setFullname] = useState(user.fullname || '');
  const [phone, setPhone] = useState(user.phone || '');
  const [email, setEmail] = useState(user.email || '');
  const [city, setCity] = useState(user.city || 'Abidjan');

  // Password state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Preferences state
  const [emergencyName, setEmergencyName] = useState(user.emergencyContactName || '');
  const [emergencyPhone, setEmergencyPhone] = useState(user.emergencyContactPhone || '');
  const [preferredPayment, setPreferredPayment] = useState(user.preferredPayment || 'wave');
  const [seatPref, setSeatPref] = useState(user.seatPreference || 'fenetre');
  const [smsAlerts, setSmsAlerts] = useState(user.smsAlerts !== undefined ? user.smsAlerts : true);

  const history = JSON.parse(localStorage.getItem('user_tickets_history') || '[]');
  const totalTrips = history.length;
  const totalSpent = history.reduce((sum, t) => sum + (t.priceCfa || 0), 0);
  const loyaltyPoints = totalTrips * 150 + 500;
  const loyaltyStatus = totalTrips >= 5 ? 'Membre Gold ⭐' : totalTrips >= 2 ? 'Membre Silver ✨' : 'Passager Certifié ✓';

  const triggerToast = (msg, isErr = false) => {
    setToastMessage(msg);
    setToastError(isErr);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleSavePersonalInfo = (e) => {
    e.preventDefault();
    if (!username || !fullname || !phone) {
      triggerToast('Veuillez remplir tous les champs obligatoires.', true);
      return;
    }
    const updated = { ...user, username, fullname, phone, email, city };
    setUser(updated);
    sessionStorage.setItem('current_user', JSON.stringify(updated));
    triggerToast('Informations personnelles mises à jour avec succès !');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!oldPassword || newPassword.length < 6 || newPassword !== confirmPassword) {
      triggerToast('Erreur dans le changement de mot de passe.', true);
      return;
    }
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    triggerToast('Mot de passe mis à jour avec succès !');
  };

  const handleSavePreferences = (e) => {
    e.preventDefault();
    const updated = {
      ...user,
      emergencyContactName: emergencyName,
      emergencyContactPhone: emergencyPhone,
      preferredPayment,
      seatPreference: seatPref,
      smsAlerts
    };
    setUser(updated);
    sessionStorage.setItem('current_user', JSON.stringify(updated));
    triggerToast('Préférences de voyage enregistrées !');
  };

  return (
    <div className="main-content profile-container">
      <BackButton label="Retour aux trajets" onClick={() => { window.location.hash = '#/app'; }} />

      {/* Hero Card */}
      <div className="profile-hero-card">
        <div className="profile-user-details">
          <div className="profile-avatar-large">
            {user.fullname.charAt(0).toUpperCase()}
          </div>
          <div className="profile-name-group">
            <h1>
              {user.fullname}
              <span className="profile-username-badge">@{user.username || 'voyageur'}</span>
            </h1>
            <div className="profile-meta-text">
              <span className="profile-status-badge">{loyaltyStatus}</span>
              <span>📍 <strong>{user.city || 'Abidjan'}</strong></span>
              <span>📞 {user.phone}</span>
            </div>
          </div>
        </div>

        <div className="profile-hero-actions">
          <a href="#/history" className="btn-card-white" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--spacing-2) var(--spacing-4)' }}>
            🎟️ Mes Billets ({totalTrips})
          </a>
          <a href="#/app" className="btn-primary-blue" style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--spacing-2) var(--spacing-4)' }}>
            🚌 Réserver
          </a>
          <button
            type="button"
            onClick={() => { sessionStorage.removeItem('current_user'); window.location.hash = '#/'; }}
            className="btn-card-white"
            style={{ fontSize: 'var(--font-size-xs)', padding: 'var(--spacing-2) var(--spacing-3)', color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.4)' }}
          >
            🚪 Déconnexion
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="profile-stats-grid">
        <div className="profile-stat-card">
          <div className="profile-stat-icon">🎟️</div>
          <div className="profile-stat-value">{totalTrips}</div>
          <div className="profile-stat-label">Voyages Effectués</div>
        </div>
        <div className="profile-stat-card">
          <div className="profile-stat-icon">💰</div>
          <div className="profile-stat-value">{totalSpent.toLocaleString('fr-FR')} <span style={{ fontSize: 'var(--font-size-xs)' }}>FCFA</span></div>
          <div className="profile-stat-label">Total Dépensé</div>
        </div>
        <div className="profile-stat-card">
          <div className="profile-stat-icon">🎁</div>
          <div className="profile-stat-value">{loyaltyPoints}</div>
          <div className="profile-stat-label">Points Fidélité</div>
        </div>
        <div className="profile-stat-card">
          <div className="profile-stat-icon">🏆</div>
          <div className="profile-stat-value" style={{ fontSize: 'var(--font-size-lg)', color: '#34d399' }}>{loyaltyStatus}</div>
          <div className="profile-stat-label">Statut Voyageur</div>
        </div>
      </div>

      {/* Forms Grid */}
      <div className="profile-grid-layout">
        {/* Personal Info */}
        <div className="profile-section-card">
          <div className="profile-section-header">
            <div className="profile-section-icon">👤</div>
            <div>
              <h2 className="profile-section-title">Informations Personnelles</h2>
              <p className="profile-section-desc">Gérez votre identité et vos coordonnées sur la plateforme.</p>
            </div>
          </div>

          <form onSubmit={handleSavePersonalInfo} className="auth-form" noValidate>
            <div className="form-group">
              <label htmlFor="prof-react-username" className="form-label">Nom d'utilisateur (Pseudo)</label>
              <input
                type="text"
                id="prof-react-username"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prof-react-fullname" className="form-label">Nom complet & Prénoms</label>
              <input
                type="text"
                id="prof-react-fullname"
                className="form-input"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prof-react-phone" className="form-label">Numéro de téléphone principal</label>
              <input
                type="tel"
                id="prof-react-phone"
                className="form-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prof-react-email" className="form-label">Adresse courriel</label>
              <input
                type="email"
                id="prof-react-email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="prof-react-city" className="form-label">Ville principale</label>
              <select
                id="prof-react-city"
                className="form-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn-card-white" style={{ width: '100%', marginTop: 'var(--spacing-4)' }}>
              Enregistrer mes coordonnées
            </button>
          </form>
        </div>

        {/* Security / Password */}
        <div className="profile-section-card">
          <div className="profile-section-header">
            <div className="profile-section-icon">🔒</div>
            <div>
              <h2 className="profile-section-title">Sécurité & Mot de Passe</h2>
              <p className="profile-section-desc">Modifiez votre mot de passe pour sécuriser votre compte.</p>
            </div>
          </div>

          <form onSubmit={handleChangePassword} className="auth-form" noValidate>
            <div className="form-group">
              <label htmlFor="prof-react-oldpwd" className="form-label">Ancien mot de passe</label>
              <input
                type="password"
                id="prof-react-oldpwd"
                className="form-input"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prof-react-newpwd" className="form-label">Nouveau mot de passe</label>
              <input
                type="password"
                id="prof-react-newpwd"
                className="form-input"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Au moins 6 caractères"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prof-react-confirmpwd" className="form-label">Confirmer le nouveau mot de passe</label>
              <input
                type="password"
                id="prof-react-confirmpwd"
                className="form-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-card-white" style={{ width: '100%', marginTop: 'auto' }}>
              Mettre à jour le mot de passe
            </button>
          </form>
        </div>

        {/* Preferences */}
        <div className="profile-section-card profile-card-full">
          <div className="profile-section-header">
            <div className="profile-section-icon">⚙️</div>
            <div>
              <h2 className="profile-section-title">Préférences de Voyage & Contact d'Urgence</h2>
              <p className="profile-section-desc">Personnalisez votre expérience de réservation et sécurisez vos trajets en autocar.</p>
            </div>
          </div>

          <form onSubmit={handleSavePreferences} className="auth-form" noValidate>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--spacing-4)' }}>
              <div className="form-group">
                <label htmlFor="prof-react-emergname" className="form-label">Contact d'urgence (Nom & Lien)</label>
                <input
                  type="text"
                  id="prof-react-emergname"
                  className="form-input"
                  value={emergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                  placeholder="Ex : Kouassi Marie (Épouse)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="prof-react-emergphone" className="form-label">Téléphone d'urgence</label>
                <input
                  type="tel"
                  id="prof-react-emergphone"
                  className="form-input"
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  placeholder="Ex : +225 05 98 76 54 32"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Moyen Mobile Money favori</label>
                <div className="operator-radio-group">
                  {['wave', 'orange', 'mtn', 'moov'].map((op) => (
                    <label
                      key={op}
                      className={`operator-radio-label ${preferredPayment === op ? 'selected' : ''}`}
                      onClick={() => setPreferredPayment(op)}
                    >
                      <input type="radio" name="op" value={op} checked={preferredPayment === op} readOnly />
                      <span>{op === 'wave' ? '🌊 Wave' : op === 'orange' ? '🍊 Orange' : op === 'mtn' ? '💛 MTN' : '🔵 Moov'}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="prof-react-seat" className="form-label">Préférence de place</label>
                <select
                  id="prof-react-seat"
                  className="form-select"
                  value={seatPref}
                  onChange={(e) => setSeatPref(e.target.value)}
                >
                  <option value="fenetre">🪟 Côté Fenêtre</option>
                  <option value="couloir">🚶 Côté Couloir</option>
                  <option value="avant">🚌 Avant du car</option>
                  <option value="peu_importe">✓ Sans préférence</option>
                </select>
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-3)', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <strong style={{ color: '#fff', fontSize: 'var(--font-size-sm)', display: 'block' }}>Notifications SMS & WhatsApp</strong>
                <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Rappels de départ et confirmation automatique.</span>
              </div>
              <input
                type="checkbox"
                checked={smsAlerts}
                onChange={(e) => setSmsAlerts(e.target.checked)}
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              />
            </div>

            <button type="submit" className="btn-card-white" style={{ marginTop: 'var(--spacing-4)', padding: 'var(--spacing-3) var(--spacing-6)' }}>
              Sauvegarder toutes mes préférences
            </button>
          </form>
        </div>
      </div>

      {/* Floating Toast */}
      {toastMessage && (
        <div className={`profile-toast ${toastError ? 'error' : ''} show`}>
          <span>{toastError ? '⚠️' : '✓'}</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
