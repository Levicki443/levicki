/**
 * @file BackButton.jsx
 * @description Composant réutilisable pour le Bouton Retour avec effet 3D immersif et profondeur.
 */

import React from 'react';

export function BackButton({ label = 'Retour', onClick = null, customClass = '' }) {
  const handleClick = (event) => {
    event.preventDefault();
    if (typeof onClick === 'function') {
      onClick(event);
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.hash = '#/';
    }
  };

  return (
    <div className={`btn-back-3d-wrapper ${customClass}`.trim()}>
      <button
        type="button"
        className="btn-back-3d"
        aria-label={label}
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>{label}</span>
      </button>
    </div>
  );
}
