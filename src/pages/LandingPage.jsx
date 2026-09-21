/**
 * @file LandingPage.jsx
 * @description Page d'accueil moderne avec présentation de la plateforme et accès direct à la communauté.
 */

import React from 'react';
import { Header } from '../components/Header.jsx';

export function LandingPage() {
  return (
    <div className="landing-view">
      <Header />

      <main className="main-content">
        <section className="landing-hero">
          <div className="hero-tag">
            <span>🚀 Plateforme Officielle de Transport Interurbain</span>
          </div>

          <h1 className="hero-title">
            Voyagez en toute sérénité à travers la{' '}
            <span className="hero-title-highlight">Côte d&apos;Ivoire</span>
          </h1>

          <p className="hero-description">
            Consultez les départs en temps réel, choisissez votre gare d&apos;embarquement et réservez votre ticket sans vous déplacer. Une expérience fluide conçue pour tous vos trajets.
          </p>

          {/* Zone centrale d'appel à l'action */}
          <div className="hero-cta-container">
            <a
              href="#/register"
              className="btn-primary-blue btn-cta-main"
              id="btn-join-community"
            >
              <span>Rejoindre la Communauté</span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <span className="cta-subtext">
              Déjà inscrit ?{' '}
              <a href="#/login" style={{ color: 'var(--color-text-accent)', fontWeight: 600 }}>
                Se connecter
              </a>
            </span>
          </div>

          {/* Section d'arguments clés et genèse */}
          <div className="landing-grid">
            <article className="card-blue feature-card">
              <div>
                <div className="feature-icon-box">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="feature-title">Ponctualité &amp; Horaires</h3>
                <p className="feature-text">
                  Accédez aux heures de départ précises pour chaque convoi (1er, 2e, 3e départ) et organisez vos déplacements en toute quiétude.
                </p>
              </div>
            </article>

            <article className="card-blue feature-card">
              <div>
                <div className="feature-icon-box">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="feature-title">Gares &amp; Embarquement</h3>
                <p className="feature-text">
                  Obtenez des indications claires et détaillées pour vous rendre au point d&apos;embarquement exact de votre compagnie de transport.
                </p>
              </div>
            </article>

            <article className="card-blue feature-card">
              <div>
                <div className="feature-icon-box">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M7 15h0M2 9.5h20" />
                  </svg>
                </div>
                <h3 className="feature-title">Réservation à Domicile</h3>
                <p className="feature-text">
                  Fini les longues attentes au guichet. Sélectionnez votre trajet d&apos;Abidjan à Bondoukou ou toute autre ville, et validez votre ticket en ligne.
                </p>
              </div>
            </article>
          </div>
        </section>

        <footer className="landing-footer-info">
          <p>
            Plateforme de Gestion d&apos;une Gare Routière — Conçue pour une expérience voyageur moderne et sécurisée.
          </p>
        </footer>
      </main>
    </div>
  );
}
