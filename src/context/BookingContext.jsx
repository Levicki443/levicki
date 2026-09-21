/**
 * @file BookingContext.jsx
 * @description Contexte de gestion de l'état de réservation, des trajets et des billets électroniques.
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CITIES, findTrip } from '../data/tripsData.js';
import { ApiService } from '../services/apiService.js';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [cities, setCities] = useState(CITIES);
  const [fromCity, setFromCity] = useState('Abidjan');
  const [toCity, setToCity] = useState('Bondoukou');
  const [trip, setTrip] = useState(() => findTrip('Abidjan', 'Bondoukou'));
  const [selectedDeparture, setSelectedDeparture] = useState(() => {
    const initialTrip = findTrip('Abidjan', 'Bondoukou');
    return initialTrip.departures[1] || initialTrip.departures[0];
  });
  const [pendingTicket, setPendingTicket] = useState(() => {
    try {
      const saved = sessionStorage.getItem('pending_ticket');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [currentTicket, setCurrentTicket] = useState(() => {
    try {
      const saved = sessionStorage.getItem('current_ticket');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Chargement des villes au montage via l'API
  useEffect(() => {
    let isMounted = true;
    ApiService.getCities().then((resCities) => {
      if (isMounted && resCities && resCities.length > 0) {
        setCities(resCities);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Recherche et met à jour les départs disponibles.
   * @param {string} from - Ville de départ.
   * @param {string} to - Ville d'arrivée.
   */
  const searchDepartures = useCallback(async (from, to) => {
    setFromCity(from);
    setToCity(to);
    const foundTrip = await ApiService.searchTrips(from, to);
    setTrip(foundTrip);
    setSelectedDeparture(foundTrip.departures[0] || null);
  }, []);

  /**
   * Prépare une réservation et enregistre le ticket en attente de règlement.
   * @param {Object} user - Données du passager.
   * @returns {Promise<Object>}
   */
  const prepareBooking = useCallback(async (user) => {
    if (!selectedDeparture) return null;

    const payload = {
      passengerName: user ? user.fullname : 'Passager Express',
      passengerPhone: user ? (user.phone || 'Non renseigné') : 'Non renseigné',
      departureCity: fromCity,
      arrivalCity: toCity,
      departureTime: selectedDeparture.time,
      departureRank: selectedDeparture.rankLabel,
      stationName: selectedDeparture.stationName,
      stationAddress: selectedDeparture.stationAddress,
      directions: selectedDeparture.directions,
      busType: selectedDeparture.busType,
      company: selectedDeparture.company,
      priceCfa: selectedDeparture.priceCfa
    };

    const ticket = await ApiService.createReservation(payload);
    setPendingTicket(ticket);
    setCurrentTicket(ticket);
    sessionStorage.setItem('pending_ticket', JSON.stringify(ticket));
    sessionStorage.setItem('current_ticket', JSON.stringify(ticket));
    return ticket;
  }, [selectedDeparture, fromCity, toCity]);

  /**
   * Confirme le paiement et enregistre le billet dans l'historique permanent.
   * @param {Object} confirmedTicket - Billet payé et validé.
   */
  const confirmTicketPayment = useCallback((confirmedTicket) => {
    setCurrentTicket(confirmedTicket);
    setPendingTicket(null);
    sessionStorage.setItem('current_ticket', JSON.stringify(confirmedTicket));
    sessionStorage.removeItem('pending_ticket');

    // Sauvegarde persistante dans l'historique local
    try {
      const history = JSON.parse(localStorage.getItem('user_tickets_history') || '[]');
      history.unshift(confirmedTicket);
      localStorage.setItem('user_tickets_history', JSON.stringify(history));
    } catch {
      // Ignorer si localStorage n'est pas disponible
    }
  }, []);

  const value = {
    cities,
    fromCity,
    toCity,
    trip,
    selectedDeparture,
    setSelectedDeparture,
    searchDepartures,
    pendingTicket,
    currentTicket,
    prepareBooking,
    confirmTicketPayment,
    setCurrentTicket
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

/**
 * Hook personnalisé pour accéder à l'état de réservation.
 * @returns {Object}
 */
export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking doit être utilisé au sein d\'un BookingProvider');
  }
  return context;
}
