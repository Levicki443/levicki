/**
 * @file App.jsx
 * @description Composant racine orchestrant les contextes globaux, le routage réactif et les modales.
 */

import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext.jsx';
import { ModalProvider } from './context/ModalContext.jsx';
import { BookingProvider } from './context/BookingContext.jsx';
import { Modals } from './components/Modals.jsx';

import { LandingPage } from './pages/LandingPage.jsx';
import { RegisterPage } from './pages/RegisterPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { BookingPage } from './pages/BookingPage.jsx';
import { PaymentPage } from './pages/PaymentPage.jsx';
import { ConfirmationPage } from './pages/ConfirmationPage.jsx';
import { HistoryPage } from './pages/HistoryPage.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';
import { AdminDashboardPage } from './pages/AdminDashboardPage.jsx';
import { AdminDeparturesPage } from './pages/AdminDeparturesPage.jsx';

function AppContent() {
  const [currentPath, setCurrentPath] = useState(() => {
    const raw = window.location.hash.slice(1) || '/';
    return raw.startsWith('/') ? raw : `/${raw}`;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const raw = window.location.hash.slice(1) || '/';
      const clean = raw.startsWith('/') ? raw : `/${raw}`;
      setCurrentPath(clean);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Table d'aiguillage des vues
  const renderCurrentView = () => {
    switch (currentPath) {
      case '/':
        return <LandingPage />;
      case '/register':
        return <RegisterPage />;
      case '/login':
        return <LoginPage />;
      case '/app':
        return <BookingPage />;
      case '/payment':
        return <PaymentPage />;
      case '/confirmation':
        return <ConfirmationPage />;
      case '/history':
        return <HistoryPage />;
      case '/profile':
        return <ProfilePage />;
      case '/admin':
        return <AdminDashboardPage />;
      case '/admin/departures':
        return <AdminDeparturesPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="app-container">
      {renderCurrentView()}
      <Modals />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <BookingProvider>
          <AppContent />
        </BookingProvider>
      </ModalProvider>
    </AuthProvider>
  );
}
