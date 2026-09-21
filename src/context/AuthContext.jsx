/**
 * @file AuthContext.jsx
 * @description Contexte d'authentification et de gestion de session voyageur.
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

const STORAGE_KEY = 'current_user';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  /**
   * Connecte l'utilisateur et met à jour l'état.
   * @param {Object} userData - Informations de l'utilisateur connecté.
   */
  const login = (userData) => {
    setUser(userData);
  };

  /**
   * Enregistre un nouvel utilisateur et initialise sa session.
   * @param {Object} userData - Informations de création de compte.
   */
  const register = (userData) => {
    setUser(userData);
  };

  /**
   * Déconnecte l'utilisateur en réinitialisant la session.
   */
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('pending_ticket');
    sessionStorage.removeItem('current_ticket');
  };

  const value = {
    user,
    isAuthenticated: Boolean(user),
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook personnalisé pour consommer le contexte d'authentification.
 * @returns {Object} Méthodes et état d'authentification.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé au sein d\'un AuthProvider');
  }
  return context;
}
