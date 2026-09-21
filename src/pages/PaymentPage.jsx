/**
 * @file PaymentPage.jsx
 * @description Page de paiement sécurisé par Mobile Money (Wave, Orange, MTN, Moov).
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { OperatorBadge } from '../components/OperatorBadge.jsx';
import { useBooking } from '../context/BookingContext.jsx';
import { ApiService } from '../services/apiService.js';

const OPERATORS = [
  { id: 'wave', name: 'Wave CI', feePercentage: 1 },
  { id: 'orange', name: 'Orange Money', feePercentage: 1 },
  { id: 'mtn', name: 'MTN MoMo', feePercentage: 1 },
  { id: 'moov', name: 'Moov Money', feePercentage: 1 }
];

export function PaymentPage() {
  const { pendingTicket, currentTicket, confirmTicketPayment } = useBooking();
  const ticket = pendingTicket || currentTicket;

  const [selectedOperator, setSelectedOperator] = useState(OPERATORS[0].id);
  const [phoneNumber, setPhoneNumber] = useState(() => {
    return ticket && ticket.passengerPhone && ticket.passengerPhone !== 'Non renseigné'
      ? ticket.passengerPhone
      : '';
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!ticket) {
    return (
      <div className="main-content">
        <BackButton label="Retour aux départs" onClick={() => { window.location.hash = '#/app'; }} />
        <div className="card-blue" style={{ maxWidth: '500px', margin: 'var(--spacing-8) auto', textAlign: 'center' }}>
          <h2>Aucun trajet en attente de paiement</h2>
          <p>Veuillez d&apos;abord sélectionner un départ.</p>
          <a href="#/app" className="btn-card-white" style={{ marginTop: 'var(--spacing-4)', display: 'inline-block' }}>
            Choisir un départ
          </a>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber.trim()) {
      setErrorMessage('Veuillez renseigner le numéro de téléphone pour le débit.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    const opObj = OPERATORS.find((op) => op.id === selectedOperator) || OPERATORS[0];

    try {
      const paymentResult = await ApiService.initiatePayment({
        bookingRef: ticket.bookingRef,
        operatorId: selectedOperator,
        phone: phoneNumber.trim(),
        amountCfa: ticket.priceCfa,
        passengerName: ticket.passengerName
      });

      const confirmedTicket = {
        ...ticket,
        passengerPhone: phoneNumber.trim(),
        paymentMethod: opObj.name,
        paymentStatus: 'PAID',
        paymentTransactionId: paymentResult.transaction
          ? paymentResult.transaction.transactionId
          : `TXN-${selectedOperator.toUpperCase()}-${Date.now().toString().slice(-6)}`,
        paymentDate: new Date().toISOString()
      };

      confirmTicketPayment(confirmedTicket);
      window.location.hash = '#/confirmation';
    } catch {
      setErrorMessage('Une erreur est survenue lors de l\'initiation du paiement. Veuillez réessayer.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="main-content">
      <BackButton label="Modifier mon trajet" onClick={() => { window.location.hash = '#/app'; }} />

      <div className="card-blue auth-card" style={{ maxWidth: '560px', margin: 'var(--spacing-6) auto' }}>
        <div className="auth-header">
          <h1 className="auth-title">Règlement du Ticket</h1>
          <p className="auth-subtitle">
            Sélectionnez votre moyen de paiement Mobile Money en Côte d&apos;Ivoire.
          </p>
        </div>

        {/* Récapitulatif du trajet */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: 'var(--spacing-4)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--spacing-4)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
            <span>Trajet sélectionné :</span>
            <strong style={{ color: '#60a5fa' }}>
              {ticket.departureCity} ➔ {ticket.arrivalCity}
            </strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-2)' }}>
            <span>Départ :</span>
            <strong>
              {ticket.departureRank} ({ticket.departureTime})
            </strong>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: 'var(--spacing-2)'
            }}
          >
            <span style={{ fontWeight: 700 }}>Montant total :</span>
            <strong style={{ color: '#fbbf24', fontSize: 'var(--font-size-lg)' }}>
              {ticket.priceCfa.toLocaleString('fr-FR')} FCFA
            </strong>
          </div>
        </div>

        {/* Sélecteur d'opérateur */}
        <label className="form-label">Opérateur Mobile Money :</label>
        <div className="payment-methods-grid">
          {OPERATORS.map((op) => (
            <div
              key={op.id}
              className={`payment-method-card ${selectedOperator === op.id ? 'active' : ''}`}
              onClick={() => setSelectedOperator(op.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedOperator(op.id);
              }}
            >
              <OperatorBadge operatorId={op.id} />
              <span className="operator-name">{op.name}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="auth-form" style={{ marginTop: 'var(--spacing-4)' }}>
          <div className="form-group">
            <label className="form-label" htmlFor="pay-phone">
              Numéro de débit Mobile Money
            </label>
            <input
              type="tel"
              id="pay-phone"
              className="form-input"
              placeholder="Ex : +225 07 01 02 03 04"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {errorMessage && <span className="form-feedback error">{errorMessage}</span>}
          </div>

          <button
            type="submit"
            className="btn-card-white"
            style={{ width: '100%', marginTop: 'var(--spacing-4)', padding: 'var(--spacing-4)', cursor: 'pointer' }}
            disabled={isProcessing}
          >
            <span>
              {isProcessing
                ? 'Validation auprès de l\'opérateur...'
                : `Payer ${ticket.priceCfa.toLocaleString('fr-FR')} FCFA`}
            </span>
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
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
