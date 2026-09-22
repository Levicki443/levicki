/**
 * @file CourierPage.jsx
 * @description Page de service courrier et expédition de colis en version React.
 */

import React, { useState } from 'react';
import { BackButton } from '../components/BackButton.jsx';
import { CITIES } from '../data/tripsData.js';
import { PACKAGE_CATEGORIES, calculateShippingFee, generateTrackingNumber, generateSecretPin } from '../data/courierData.js';

export function CourierPage() {
  const [activeTab, setActiveTab] = useState('send');
  const [selectedCategory, setSelectedCategory] = useState('small');
  const [weightKg, setWeightKg] = useState(3);
  const [isFragile, setIsFragile] = useState(false);
  const [isInsured, setIsInsured] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState('wave');

  // Form
  const [senderName, setSenderName] = useState('Kouassi Jean-Marc');
  const [senderPhone, setSenderPhone] = useState('+225 07 12 34 56 78');
  const [senderCity, setSenderCity] = useState('Abidjan');
  const [receiverName, setReceiverName] = useState('');
  const [receiverPhone, setReceiverPhone] = useState('');
  const [receiverCity, setReceiverCity] = useState('Bondoukou');
  const [description, setDescription] = useState('');
  const [departureTime, setDepartureTime] = useState('06h30');

  const [activeReceipt, setActiveReceipt] = useState(null);
  const history = JSON.parse(localStorage.getItem('user_couriers_history') || '[]');

  const totalFee = calculateShippingFee(selectedCategory, weightKg, { isFragile, isInsured });

  const handleSendSubmit = (e) => {
    e.preventDefault();
    if (!senderName || !senderPhone || !receiverName || !receiverPhone || !description) {
      alert('Veuillez renseigner tous les champs obligatoires.');
      return;
    }

    const trackingNumber = generateTrackingNumber(senderCity, receiverCity);
    const secretPin = generateSecretPin();

    const newShipment = {
      trackingNumber,
      secretPin,
      senderName,
      senderPhone,
      senderCity,
      receiverName,
      receiverPhone,
      receiverCity,
      description,
      departureTime,
      category: selectedCategory,
      weightKg,
      isFragile,
      isInsured,
      priceCfa: totalFee,
      paymentOperator: selectedOperator,
      createdAt: new Date().toISOString(),
      status: 'EN_TRANSIT',
      stationDropName: `Gare Routière Centrale de ${senderCity}`,
      stationPickupName: `Gare Routière Principale de ${receiverCity}`
    };

    const couriers = JSON.parse(localStorage.getItem('user_couriers_history') || '[]');
    couriers.unshift(newShipment);
    localStorage.setItem('user_couriers_history', JSON.stringify(couriers));

    setActiveReceipt(newShipment);
    setActiveTab('receipt');
  };

  return (
    <div className="main-content courier-container">
      <BackButton label="Retour aux départs voyageurs" onClick={() => { window.location.hash = '#/app'; }} />

      <div className="courier-hero-banner no-tilt">
        <h1 style={{ fontSize: 'var(--font-size-3xl)', color: '#ffffff', marginBottom: 'var(--spacing-2)' }}>
          Expédiez vos Colis & Marchandises à travers la Côte d'Ivoire
        </h1>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', maxWidth: '720px' }}>
          Acheminement sécurisé en soute d'autocar VIP avec code PIN secret de retrait par SMS.
        </p>
      </div>

      <div className="courier-tabs-nav">
        <button
          type="button"
          className={`courier-tab-btn ${activeTab === 'send' ? 'active' : ''}`}
          onClick={() => setActiveTab('send')}
        >
          📤 Expédier un Colis
        </button>
        <button
          type="button"
          className={`courier-tab-btn ${activeTab === 'track' ? 'active' : ''}`}
          onClick={() => setActiveTab('track')}
        >
          🔍 Suivre un Envoi
        </button>
        <button
          type="button"
          className={`courier-tab-btn ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          📋 Mes Expéditions ({history.length})
        </button>
      </div>

      {activeTab === 'send' && (
        <div className="card-blue no-tilt" style={{ border: '1px solid rgba(59, 130, 246, 0.4)' }}>
          <form onSubmit={handleSendSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-6)' }}>
              {/* Sender */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-base)', color: '#60a5fa', marginBottom: 'var(--spacing-3)' }}>👤 Expéditeur</h3>
                <input type="text" className="form-input" value={senderName} onChange={(e) => setSenderName(e.target.value)} required placeholder="Nom complet" style={{ marginBottom: 'var(--spacing-3)' }} />
                <input type="tel" className="form-input" value={senderPhone} onChange={(e) => setSenderPhone(e.target.value)} required placeholder="Téléphone" style={{ marginBottom: 'var(--spacing-3)' }} />
                <select className="form-select" value={senderCity} onChange={(e) => setSenderCity(e.target.value)}>
                  {CITIES.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>

              {/* Receiver */}
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--spacing-4)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: 'var(--font-size-base)', color: '#fbbf24', marginBottom: 'var(--spacing-3)' }}>🎯 Destinataire</h3>
                <input type="text" className="form-input" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} required placeholder="Nom destinataire" style={{ marginBottom: 'var(--spacing-3)' }} />
                <input type="tel" className="form-input" value={receiverPhone} onChange={(e) => setReceiverPhone(e.target.value)} required placeholder="Téléphone destinataire (Reçoit le PIN)" style={{ marginBottom: 'var(--spacing-3)' }} />
                <select className="form-select" value={receiverCity} onChange={(e) => setReceiverCity(e.target.value)}>
                  {CITIES.map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
            </div>

            {/* Category selection */}
            <div className="package-types-grid">
              {PACKAGE_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className={`package-type-card ${selectedCategory === cat.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <div className="package-type-icon">{cat.icon}</div>
                  <div className="package-type-name">{cat.name}</div>
                  <div className="package-type-price">{cat.basePrice.toLocaleString('fr-FR')} FCFA</div>
                </div>
              ))}
            </div>

            {/* Weight Slider */}
            <div className="weight-slider-container">
              <div className="weight-display-badge">
                <span>Poids :</span>
                <strong>{weightKg} kg</strong>
              </div>
              <input
                type="range"
                className="weight-range-input"
                min="1"
                max="50"
                value={weightKg}
                onChange={(e) => setWeightKg(parseInt(e.target.value, 10))}
              />
            </div>

            <div className="form-group" style={{ marginTop: 'var(--spacing-4)' }}>
              <input
                type="text"
                className="form-input"
                placeholder="Description du colis (ex: Cartons de vêtements)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-card-white" style={{ width: '100%', padding: 'var(--spacing-4)', marginTop: 'var(--spacing-4)' }}>
              Valider l'envoi ({totalFee.toLocaleString('fr-FR')} FCFA)
            </button>
          </form>
        </div>
      )}

      {activeTab === 'receipt' && activeReceipt && (
        <div className="card-blue courier-receipt-card">
          <div className="courier-receipt-header">
            <h2>✓ BORDEREAU D'EXPÉDITION</h2>
            <span>{activeReceipt.trackingNumber}</span>
          </div>
          <div style={{ padding: 'var(--spacing-6)' }}>
            <div className="pin-security-box">
              <span>CODE PIN SECRET DE RETRAIT :</span>
              <div className="pin-code-large">{activeReceipt.secretPin}</div>
            </div>
            <p>Destinataire : <strong>{activeReceipt.receiverName}</strong> ({activeReceipt.receiverPhone})</p>
            <p>Point de retrait : <strong>{activeReceipt.stationPickupName}</strong></p>
            <button type="button" className="btn-card-white" onClick={() => window.print()} style={{ width: '100%', marginTop: 'var(--spacing-4)' }}>
              🖨️ Imprimer le bordereau
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
