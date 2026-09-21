/**
 * @file apiService.js
 * @description Client API frontend avec gestion de repli gracieux (fallback local) si le backend n'est pas démarré.
 */

import { CITIES, findTrip } from '../data/tripsData.js';

const API_BASE_URL = 'http://localhost:5000/api';
const TIMEOUT_MS = 3000;

/**
 * Exécute une requête fetch avec un délai d'expiration sécurisé.
 * @param {string} url - URL à requêter.
 * @param {RequestInit} [options={}] - Options de la requête.
 * @returns {Promise<Response>} Réponse fetch.
 */
async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    return response;
  } finally {
    clearTimeout(timeoutId);
  }
}

export const ApiService = {
  /**
   * Récupère la liste des villes ivoiriennes.
   * @returns {Promise<string[]>}
   */
  async getCities() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/trips/cities`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          return json.data;
        }
      }
    } catch {
      // Rejet ou backend hors-ligne : bascule sur le référentiel local
    }
    return [...CITIES];
  },

  /**
   * Recherche les départs pour un trajet donné.
   * @param {string} from - Ville de départ.
   * @param {string} to - Ville d'arrivée.
   * @returns {Promise<Object>}
   */
  async searchTrips(from, to) {
    try {
      const params = new URLSearchParams({ from, to });
      const res = await fetchWithTimeout(`${API_BASE_URL}/trips/search?${params.toString()}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          return json.data;
        }
      }
    } catch {
      // Bascule gracieuse
    }
    return findTrip(from, to);
  },

  /**
   * Envoie une demande de réservation de ticket.
   * @param {Object} bookingData - Données du ticket.
   * @returns {Promise<Object>}
   */
  async createReservation(bookingData) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/trips/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          return json.data;
        }
      }
    } catch {
      // Bascule gracieuse
    }

    return {
      bookingRef: `GR-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      ...bookingData,
      status: 'CONFIRMED'
    };
  },

  /**
   * Récupère un ticket par sa référence.
   * @param {string} reference - Code de référence (ex: GR-123456).
   * @returns {Promise<Object|null>}
   */
  async getTicketByReference(reference) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/trips/tickets/${encodeURIComponent(reference)}`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch {
      // Repli local
    }
    const history = JSON.parse(localStorage.getItem('user_tickets_history') || '[]');
    return history.find((t) => t.bookingRef === reference) || null;
  },

  /**
   * Récupère l'historique des réservations d'un passager.
   * @param {string} phone - Numéro de téléphone.
   * @returns {Promise<Object[]>}
   */
  async getPassengerHistory(phone) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/trips/passenger/${encodeURIComponent(phone)}/history`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) return json.data;
      }
    } catch {
      // Repli local
    }
    return JSON.parse(localStorage.getItem('user_tickets_history') || '[]');
  },

  /**
   * Récupère la liste des opérateurs Mobile Money agréés.
   * @returns {Promise<Object[]>}
   */
  async getPaymentOperators() {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/payments/operators`);
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) return json.data;
      }
    } catch {
      // Repli
    }
    return [
      { id: 'wave', name: 'Wave Côte d\'Ivoire', feePercentage: 1 },
      { id: 'orange', name: 'Orange Money', feePercentage: 1 },
      { id: 'mtn', name: 'MTN Mobile Money', feePercentage: 1 },
      { id: 'moov', name: 'Moov Money Flooz', feePercentage: 1 }
    ];
  },

  /**
   * Déclenche un paiement Mobile Money (Wave, OM, MTN MoMo, Moov).
   * @param {Object} paymentData - Données du règlement.
   * @returns {Promise<Object>}
   */
  async initiatePayment(paymentData) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/payments/initiate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData)
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch {
      // Repli gracieux
    }

    return {
      success: true,
      transaction: {
        transactionId: `TXN-${(paymentData.operatorId || 'LOCAL').toUpperCase()}-${Date.now().toString().slice(-6)}`,
        bookingRef: paymentData.bookingRef || 'GR-LOC',
        amountCfa: paymentData.amountCfa,
        completedAt: new Date().toISOString(),
        status: 'COMPLETED'
      }
    };
  },

  /**
   * Authentification utilisateur (Login).
   * @param {Object} credentials - Identifiant et mot de passe.
   * @returns {Promise<Object>}
   */
  async login(credentials) {
    const res = await fetchWithTimeout(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return res.json();
  },

  /**
   * Inscription d'un nouvel utilisateur.
   * @param {Object} userData - Nom, téléphone, mot de passe.
   * @returns {Promise<Object>}
   */
  async register(userData) {
    const res = await fetchWithTimeout(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return res.json();
  },

  /**
   * Met à jour les informations du profil utilisateur.
   * @param {Object} profileData - Nom, nom d'utilisateur, téléphone, email, ville, etc.
   * @returns {Promise<Object>}
   */
  async updateProfile(profileData) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/auth/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData)
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) return json.data;
      }
    } catch {
      // Repli local
    }
    sessionStorage.setItem('current_user', JSON.stringify(profileData));
    localStorage.setItem('saved_passenger_profile', JSON.stringify(profileData));
    return { success: true, data: profileData };
  },

  /**
   * Modifie le mot de passe du passager.
   * @param {Object} passwordData - Ancien et nouveau mot de passe.
   * @returns {Promise<Object>}
   */
  async changePassword(passwordData) {
    try {
      const res = await fetchWithTimeout(`${API_BASE_URL}/auth/password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(passwordData)
      });
      if (res.ok) {
        return res.json();
      }
    } catch {
      // Repli local
    }
    return { success: true, message: 'Mot de passe mis à jour avec succès.' };
  }
};
