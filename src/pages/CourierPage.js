/**
 * @file CourierPage.js
 * @description Page complète du Service Courrier, Expédition de Marchandises, Suivi en direct et Bordereaux de retrait.
 */

import { createBackButton } from '../components/BackButton.js';
import { createLiveTicker } from '../components/LiveTicker.js';
import { CITIES } from '../data/tripsData.js';
import { PACKAGE_CATEGORIES, calculateShippingFee, generateTrackingNumber, generateSecretPin } from '../data/courierData.js';
import { SoundEngine, triggerConfetti, initInteractiveRipples, init3DTiltCards } from '../services/interactiveEffects.js';

export function renderCourierPage() {
  const container = document.createElement('div');
  container.className = 'main-content courier-container';

  const user = JSON.parse(sessionStorage.getItem('current_user') || '{"fullname": "Expéditeur Express", "phone": "+225 07 12 34 56 78" }');

  // État local de la page
  let activeTab = 'send'; // 'send' | 'track' | 'history' | 'receipt'
  let selectedCategory = 'small';
  let weightKg = 3;
  let isFragile = false;
  let isInsured = false;
  let selectedOperator = 'wave';
  let activeReceipt = null;

  // 1. Bandeau en direct
  const liveTicker = createLiveTicker();
  container.appendChild(liveTicker);

  // 2. Bouton Retour 3D
  const backWrapper = createBackButton({
    label: 'Retour aux départs voyageurs',
    onClick: () => { window.location.hash = '#/app'; }
  });
  container.appendChild(backWrapper);

  // 3. Hero Banner du Service Courrier
  const heroBanner = document.createElement('div');
  heroBanner.className = 'courier-hero-banner';
  heroBanner.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: var(--spacing-2);">
      <span class="radar-dot" style="background-color: #10b981;"></span>
      <span style="font-size: var(--font-size-xs); color: #34d399; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
        Service Fret & Courrier Express en Gare Routière
      </span>
    </div>
    <h1 style="font-size: var(--font-size-3xl); color: #ffffff; margin-bottom: var(--spacing-2);">
      Expédiez vos Colis & Marchandises à travers la Côte d'Ivoire
    </h1>
    <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); max-width: 720px; margin-bottom: 0;">
      Acheminement sécurisé en soute d'autocar VIP le jour même. Code PIN secret de retrait envoyé par SMS au destinataire et traçabilité en temps réel.
    </p>
  `;
  container.appendChild(heroBanner);

  // 4. Onglets de navigation
  const tabsNav = document.createElement('div');
  tabsNav.className = 'courier-tabs-nav';
  tabsNav.innerHTML = `
    <button type="button" class="courier-tab-btn active" data-tab="send">
      <span>📤 Expédier un Colis</span>
    </button>
    <button type="button" class="courier-tab-btn" data-tab="track">
      <span>🔍 Suivre un Envoi</span>
    </button>
    <button type="button" class="courier-tab-btn" data-tab="history">
      <span>📋 Mes Expéditions</span>
    </button>
  `;
  container.appendChild(tabsNav);

  // 5. Zone dynamique du contenu
  const tabContentContainer = document.createElement('div');
  tabContentContainer.id = 'courier-tab-content';
  container.appendChild(tabContentContainer);

  function renderTabContent() {
    tabsNav.querySelectorAll('.courier-tab-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === activeTab);
    });

    if (activeTab === 'send') {
      renderSendForm();
    } else if (activeTab === 'track') {
      renderTrackingView();
    } else if (activeTab === 'history') {
      renderHistoryView();
    } else if (activeTab === 'receipt') {
      renderReceiptView();
    }

    requestAnimationFrame(() => {
      initInteractiveRipples(tabContentContainer);
      init3DTiltCards(tabContentContainer);
    });
  }

  // --- VUE 1 : FORMULAIRE D'EXPÉDITION DE COLIS ---
  function renderSendForm() {
    const totalFee = calculateShippingFee(selectedCategory, weightKg, { isFragile, isInsured });

    tabContentContainer.innerHTML = `
      <div class="card-blue" style="border: 1px solid rgba(59, 130, 246, 0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: var(--spacing-3); flex-wrap: wrap; gap: var(--spacing-2);">
          <div>
            <h2 style="font-size: var(--font-size-xl); margin-bottom: 2px;">Bordereau d'Expédition de Marchandise</h2>
            <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
              Remplissez les coordonnées de l'expéditeur et du destinataire pour émettre le bon d'embarquement.
            </p>
          </div>
          <span style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; color: #34d399; font-size: var(--font-size-xs); font-weight: 700; padding: 4px 12px; border-radius: var(--radius-full);">
            ⚡ Arrivée le jour même
          </span>
        </div>

        <form id="form-send-package" novalidate>
          <!-- 1. Coordonnées Expéditeur & Destinataire -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-6); margin-bottom: var(--spacing-6);">
            <!-- Bloc Expéditeur -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-lg); padding: var(--spacing-4);">
              <h3 style="font-size: var(--font-size-base); color: #60a5fa; margin-bottom: var(--spacing-3); display: flex; align-items: center; gap: 6px;">
                <span>👤 Expéditeur (Vous)</span>
              </h3>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Nom complet de l'expéditeur</label>
                <input type="text" id="sender-name" class="form-input" value="${user.fullname}" required placeholder="Ex : Kouassi Jean-Marc" />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Téléphone pour suivi SMS</label>
                <input type="tel" id="sender-phone" class="form-input" value="${user.phone}" required placeholder="Ex : +225 07 12 34 56 78" />
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" style="font-size: var(--font-size-xs);">Ville & Gare de dépôt</label>
                <select id="sender-city" class="form-select">
                  ${CITIES.map((c) => `<option value="${c}" ${c === 'Abidjan' ? 'selected' : ''}>${c} (Gare Centrale)</option>`).join('')}
                </select>
              </div>
            </div>

            <!-- Bloc Destinataire -->
            <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-lg); padding: var(--spacing-4);">
              <h3 style="font-size: var(--font-size-base); color: #fbbf24; margin-bottom: var(--spacing-3); display: flex; align-items: center; gap: 6px;">
                <span>🎯 Destinataire (Récepteur)</span>
              </h3>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Nom complet du destinataire</label>
                <input type="text" id="receiver-name" class="form-input" required placeholder="Ex : Yao Michel" />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Téléphone du destinataire (Reçoit le PIN par SMS)</label>
                <input type="tel" id="receiver-phone" class="form-input" required placeholder="Ex : +225 05 98 76 54 32" />
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" style="font-size: var(--font-size-xs);">Ville & Gare de retrait</label>
                <select id="receiver-city" class="form-select">
                  ${CITIES.map((c) => `<option value="${c}" ${c === 'Bondoukou' ? 'selected' : ''}>${c} (Gare Centrale)</option>`).join('')}
                </select>
              </div>
            </div>
          </div>

          <!-- 2. Catégorie & Poids du Colis -->
          <div style="margin-bottom: var(--spacing-6);">
            <label class="form-label" style="font-weight: 700; color: #ffffff;">
              📦 Nature et Type de Marchandise à expédier :
            </label>
            <div class="package-types-grid">
              ${PACKAGE_CATEGORIES.map((cat) => `
                <div class="package-type-card ${selectedCategory === cat.id ? 'selected' : ''}" data-cat-id="${cat.id}">
                  <div class="package-type-icon">${cat.icon}</div>
                  <div class="package-type-name">${cat.name}</div>
                  <div class="package-type-price">Dès ${cat.basePrice.toLocaleString('fr-FR')} FCFA</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 3. Curseur interactif de poids et description -->
          <div class="weight-slider-container">
            <div class="weight-display-badge">
              <span style="font-weight: 700; color: #ffffff; font-size: var(--font-size-sm);">⚖️ Poids estimé de la marchandise :</span>
              <strong id="weight-label" style="color: #60a5fa; font-size: var(--font-size-lg);">${weightKg} kg</strong>
            </div>
            <input type="range" id="weight-slider" class="weight-range-input" min="1" max="50" value="${weightKg}" />
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--color-text-muted); margin-top: 4px;">
              <span>1 kg (Pli express)</span>
              <span>15 kg (Carton moyen)</span>
              <span>30 kg (Sac vivres)</span>
              <span>50 kg (Fret lourd)</span>
            </div>
          </div>

          <div class="form-group" style="margin-top: var(--spacing-4);">
            <label class="form-label" for="package-description" style="font-size: var(--font-size-xs);">Description du contenu du colis</label>
            <input type="text" id="package-description" class="form-input" placeholder="Ex : 2 Cartons de pagnes et documents originaux" required />
          </div>

          <!-- Options supplémentaires -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--spacing-3); margin-top: var(--spacing-4);">
            <label style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: var(--spacing-3); display: flex; align-items: center; gap: var(--spacing-3); cursor: pointer;">
              <input type="checkbox" id="check-fragile" ${isFragile ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
              <div>
                <strong style="color: #fbbf24; font-size: var(--font-size-xs); display: block;">⚠️ Marchandise Fragile (+500 F)</strong>
                <span style="font-size: 10px; color: var(--color-text-muted);">Étiquetage spécial et manipulation prioritaire</span>
              </div>
            </label>

            <label style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: var(--spacing-3); display: flex; align-items: center; gap: var(--spacing-3); cursor: pointer;">
              <input type="checkbox" id="check-insurance" ${isInsured ? 'checked' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
              <div>
                <strong style="color: #34d399; font-size: var(--font-size-xs); display: block;">🛡️ Assurance Déclarée (+1 000 F)</strong>
                <span style="font-size: 10px; color: var(--color-text-muted);">Garantie remboursement 100% en cas d'avarie</span>
              </div>
            </label>
          </div>

          <!-- 4. Choix du convoi transporteur -->
          <div class="form-group" style="margin-top: var(--spacing-6);">
            <label class="form-label" style="font-size: var(--font-size-xs);">Convoi d'acheminement en autocar</label>
            <select id="courier-departure-time" class="form-select">
              <option value="06h30">1er Convoi (06h30) — Arrivée et mise à disposition à 14h00</option>
              <option value="12h00">2e Convoi (12h00) — Arrivée et mise à disposition à 19h30</option>
              <option value="17h30">3e Convoi Soir (17h30) — Arrivée et mise à disposition le lendemain à 07h00</option>
            </select>
          </div>

          <!-- 5. Mode de règlement Mobile Money & Résumé Tarif -->
          <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(15, 23, 42, 0.7) 100%); border: 1px solid #3b82f6; border-radius: var(--radius-xl); padding: var(--spacing-6); margin-top: var(--spacing-6);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
              <div>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; text-transform: uppercase; font-weight: 700;">Coût Total de l'Expédition</span>
                <div id="courier-total-price" style="font-size: var(--font-size-3xl); font-weight: 900; color: #fbbf24;">
                  ${totalFee.toLocaleString('fr-FR')} FCFA
                </div>
              </div>
              <div style="text-align: right;">
                <span style="font-size: var(--font-size-xs); color: #34d399; display: block; font-weight: 600;">✓ Code PIN sécurisé inclus</span>
                <span style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">Notification SMS gratuite</span>
              </div>
            </div>

            <div style="margin-bottom: var(--spacing-4);">
              <label class="form-label" style="font-size: var(--font-size-xs);">Choisir l'opérateur de paiement Mobile Money :</label>
              <div class="operator-radio-group">
                <label class="operator-radio-label ${selectedOperator === 'wave' ? 'selected' : ''}">
                  <input type="radio" name="courier-op" value="wave" ${selectedOperator === 'wave' ? 'checked' : ''} />
                  <span>🌊 Wave</span>
                </label>
                <label class="operator-radio-label ${selectedOperator === 'orange' ? 'selected' : ''}">
                  <input type="radio" name="courier-op" value="orange" ${selectedOperator === 'orange' ? 'checked' : ''} />
                  <span>🍊 Orange Money</span>
                </label>
                <label class="operator-radio-label ${selectedOperator === 'mtn' ? 'selected' : ''}">
                  <input type="radio" name="courier-op" value="mtn" ${selectedOperator === 'mtn' ? 'checked' : ''} />
                  <span>💛 MTN MoMo</span>
                </label>
                <label class="operator-radio-label ${selectedOperator === 'moov' ? 'selected' : ''}">
                  <input type="radio" name="courier-op" value="moov" ${selectedOperator === 'moov' ? 'checked' : ''} />
                  <span>🔵 Moov Flooz</span>
                </label>
              </div>
            </div>

            <button type="submit" class="btn-card-white" style="width: 100%; padding: var(--spacing-4); font-size: var(--font-size-base);">
              <span>Valider l'envoi & Payer (${totalFee.toLocaleString('fr-FR')} FCFA) ➔</span>
            </button>
          </div>
        </form>
      </div>
    `;

    // Événements du formulaire
    const form = tabContentContainer.querySelector('#form-send-package');
    const slider = tabContentContainer.querySelector('#weight-slider');
    const weightLabel = tabContentContainer.querySelector('#weight-label');
    const priceDisplay = tabContentContainer.querySelector('#courier-total-price');

    // Changement de catégorie
    tabContentContainer.querySelectorAll('.package-type-card').forEach((cardEl) => {
      cardEl.addEventListener('click', () => {
        SoundEngine.play('click');
        selectedCategory = cardEl.getAttribute('data-cat-id');
        renderSendForm();
      });
    });

    // Changement de poids
    if (slider) {
      slider.addEventListener('input', (e) => {
        weightKg = parseInt(e.target.value, 10);
        if (weightLabel) weightLabel.textContent = `${weightKg} kg`;
        const updated = calculateShippingFee(selectedCategory, weightKg, { isFragile, isInsured });
        if (priceDisplay) priceDisplay.textContent = `${updated.toLocaleString('fr-FR')} FCFA`;
      });
    }

    // Checkboxes
    const checkFragile = tabContentContainer.querySelector('#check-fragile');
    if (checkFragile) {
      checkFragile.addEventListener('change', (e) => {
        isFragile = e.target.checked;
        const updated = calculateShippingFee(selectedCategory, weightKg, { isFragile, isInsured });
        if (priceDisplay) priceDisplay.textContent = `${updated.toLocaleString('fr-FR')} FCFA`;
      });
    }

    const checkInsured = tabContentContainer.querySelector('#check-insurance');
    if (checkInsured) {
      checkInsured.addEventListener('change', (e) => {
        isInsured = e.target.checked;
        const updated = calculateShippingFee(selectedCategory, weightKg, { isFragile, isInsured });
        if (priceDisplay) priceDisplay.textContent = `${updated.toLocaleString('fr-FR')} FCFA`;
      });
    }

    // Sélection opérateur
    tabContentContainer.querySelectorAll('.operator-radio-label').forEach((lbl) => {
      lbl.addEventListener('click', () => {
        tabContentContainer.querySelectorAll('.operator-radio-label').forEach((l) => l.classList.remove('selected'));
        lbl.classList.add('selected');
        selectedOperator = lbl.querySelector('input').value;
      });
    });

    // Soumission & Émission du bordereau
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const senderName = form.querySelector('#sender-name').value.trim();
      const senderPhone = form.querySelector('#sender-phone').value.trim();
      const senderCity = form.querySelector('#sender-city').value;
      const receiverName = form.querySelector('#receiver-name').value.trim();
      const receiverPhone = form.querySelector('#receiver-phone').value.trim();
      const receiverCity = form.querySelector('#receiver-city').value;
      const description = form.querySelector('#package-description').value.trim();
      const departureTime = form.querySelector('#courier-departure-time').value;

      if (!senderName || !senderPhone || !receiverName || !receiverPhone || !description) {
        alert('Veuillez remplir toutes les informations obligatoires pour émettre le colis.');
        return;
      }

      const trackingNumber = generateTrackingNumber(senderCity, receiverCity);
      const secretPin = generateSecretPin();
      const finalPrice = calculateShippingFee(selectedCategory, weightKg, { isFragile, isInsured });

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
        priceCfa: finalPrice,
        paymentOperator: selectedOperator,
        createdAt: new Date().toISOString(),
        status: 'EN_TRANSIT', // 'ENREGISTRE' | 'EN_TRANSIT' | 'DISPONIBLE' | 'LIVRE'
        stationDropName: `Gare Routière Centrale de ${senderCity}`,
        stationPickupName: `Gare Routière Principale de ${receiverCity}`
      };

      // Sauvegarde dans l'historique
      const couriers = JSON.parse(localStorage.getItem('user_couriers_history') || '[]');
      couriers.unshift(newShipment);
      localStorage.setItem('user_couriers_history', JSON.stringify(couriers));

      activeReceipt = newShipment;
      activeTab = 'receipt';
      renderTabContent();
      triggerConfetti();
    });
  }

  // --- VUE 2 : SUIVI EN DIRECT DU COLIS (TRACKER) ---
  function renderTrackingView() {
    tabContentContainer.innerHTML = `
      <div class="card-blue" style="max-width: 780px; margin: 0 auto;">
        <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">
          🔍 Suivi de Colis & Marchandise en Temps Réel
        </h2>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-4);">
          Entrez le numéro de bordereau délivré lors de l'enregistrement pour localiser votre colis.
        </p>

        <form id="form-track-search" style="display: flex; gap: var(--spacing-2); margin-bottom: var(--spacing-6);">
          <input 
            type="text" 
            id="tracking-input" 
            class="form-input" 
            placeholder="Ex : COLIS-ABJ-BDK-784920" 
            style="flex: 1;" 
            required 
          />
          <button type="submit" class="btn-card-white">
            <span>Rechercher</span>
          </button>
        </form>

        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: var(--spacing-6);">
          💡 Exemples de tests rapides : 
          <button type="button" class="quick-track-sample" data-code="COLIS-ABJ-BDK-482910" style="background:none; border:none; color:#60a5fa; cursor:pointer; text-decoration:underline;">COLIS-ABJ-BDK-482910 (En transit)</button> • 
          <button type="button" class="quick-track-sample" data-code="COLIS-ABJ-BKE-918234" style="background:none; border:none; color:#34d399; cursor:pointer; text-decoration:underline;">COLIS-ABJ-BKE-918234 (Arrivé en gare)</button>
        </div>

        <div id="tracking-result-box">
          <!-- Timeline de démonstration dynamique -->
          <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid #1e3570; border-radius: var(--radius-lg); padding: var(--spacing-6);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
              <div>
                <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Bordereau :</span>
                <strong style="color: #60a5fa; font-size: var(--font-size-lg); display: block;">COLIS-ABJ-BDK-482910</strong>
              </div>
              <span class="profile-status-badge" style="background: rgba(37, 99, 235, 0.2); color: #93c5fd; border-color: #3b82f6;">
                🚌 En transit sur l'axe Abidjan ➔ Bondoukou
              </span>
            </div>

            <div class="tracking-timeline">
              <div class="tracking-step done">
                <div class="tracking-step-dot">✓</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>1. Enregistrement & Paiement validé</span>
                    <span class="tracking-step-time">Aujourd'hui à 05h45</span>
                  </div>
                  <p class="tracking-step-desc">Paiement Mobile Money Wave confirmé. Bordereau émis avec succès.</p>
                </div>
              </div>

              <div class="tracking-step done">
                <div class="tracking-step-dot">✓</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>2. Dépôt & Pesée à la Gare d'Adjamé</span>
                    <span class="tracking-step-time">Aujourd'hui à 06h15</span>
                  </div>
                  <p class="tracking-step-desc">Colis remis au guichet Fret Quai N°3. Pesée : 4.5 kg. Étiquette code-barres apposée.</p>
                </div>
              </div>

              <div class="tracking-step current">
                <div class="tracking-step-dot">●</div>
                <div class="tracking-step-content" style="border-color: #3b82f6; background-color: rgba(37, 99, 235, 0.1);">
                  <div class="tracking-step-title">
                    <span style="color: #93c5fd;">3. En cours d'acheminement (Convoi 06h30)</span>
                    <span class="tracking-step-time">Passage PK 190 (Yamoussoukro)</span>
                  </div>
                  <p class="tracking-step-desc">Autocar VIP immatriculé 4820-JG-01. Arrivée estimée à Bondoukou vers 14h00.</p>
                </div>
              </div>

              <div class="tracking-step">
                <div class="tracking-step-dot">4</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>4. Réception à la Gare de Bondoukou</span>
                    <span class="tracking-step-time">Prévu à 14h00</span>
                  </div>
                  <p class="tracking-step-desc">Mise à disposition au guichet Retrait Colis. Notification SMS envoyée au destinataire.</p>
                </div>
              </div>

              <div class="tracking-step">
                <div class="tracking-step-dot">5</div>
                <div class="tracking-step-content">
                  <div class="tracking-step-title">
                    <span>5. Remise au Destinataire (Sur présentation du PIN)</span>
                    <span class="tracking-step-time">En attente</span>
                  </div>
                  <p class="tracking-step-desc">Le destinataire devra présenter sa pièce d'identité et le code PIN secret à 4 chiffres.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Gestion de la recherche
    const searchForm = tabContentContainer.querySelector('#form-track-search');
    const inputEl = tabContentContainer.querySelector('#tracking-input');

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      SoundEngine.play('click');
      const code = inputEl.value.trim().toUpperCase();
      alert(`Recherche en cours pour le colis : ${code}. Statut : En cours d'acheminement sur l'axe interurbain.`);
    });

    tabContentContainer.querySelectorAll('.quick-track-sample').forEach((btn) => {
      btn.addEventListener('click', () => {
        inputEl.value = btn.getAttribute('data-code');
      });
    });
  }

  // --- VUE 3 : HISTORIQUE DES EXPÉDITIONS ---
  function renderHistoryView() {
    const history = JSON.parse(localStorage.getItem('user_couriers_history') || '[]');

    if (history.length === 0) {
      tabContentContainer.innerHTML = `
        <div class="card-blue" style="max-width: 600px; margin: 0 auto; text-align: center; padding: var(--spacing-8);">
          <div style="font-size: 3rem; margin-bottom: var(--spacing-3);">📦</div>
          <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-2);">Aucun colis expédié pour le moment</h2>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-bottom: var(--spacing-4);">
            Vous n'avez pas encore envoyé de marchandises via la plateforme.
          </p>
          <button type="button" id="btn-goto-send" class="btn-card-white">
            <span>Expédier mon premier colis</span>
          </button>
        </div>
      `;

      const btnGo = tabContentContainer.querySelector('#btn-goto-send');
      if (btnGo) {
        btnGo.addEventListener('click', () => {
          activeTab = 'send';
          renderTabContent();
        });
      }
      return;
    }

    tabContentContainer.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2 style="font-size: var(--font-size-xl); margin-bottom: 0;">Mes Colis & Marchandises (${history.length})</h2>
          <button type="button" id="btn-new-package-top" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
            + Nouvel Envoi
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--spacing-3);">
          ${history.map((item) => `
            <div class="card-blue" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-3); padding: var(--spacing-4);">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span class="profile-status-badge">✓ Payé (${item.paymentOperator.toUpperCase()})</span>
                  <strong style="color: #60a5fa; font-size: var(--font-size-sm);">${item.trackingNumber}</strong>
                  <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: var(--radius-sm); font-size: 10px; font-weight: 700;">PIN: ${item.secretPin}</span>
                </div>
                <h3 style="font-size: var(--font-size-base); color: #ffffff; margin-bottom: 2px;">
                  ${item.senderCity} ➔ ${item.receiverCity} • <span style="color: #cbd5e1; font-weight: normal;">Destinataire : <strong>${item.receiverName}</strong> (${item.receiverPhone})</span>
                </h3>
                <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
                  📦 ${item.description} (${item.weightKg} kg) • Convoi : ${item.departureTime}
                </p>
              </div>

              <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                <span style="font-size: var(--font-size-lg); font-weight: 800; color: #fbbf24;">
                  ${item.priceCfa.toLocaleString('fr-FR')} FCFA
                </span>
                <button type="button" class="btn-card-white btn-view-receipt" data-tracking="${item.trackingNumber}">
                  <span>Voir Bordereau</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    tabContentContainer.querySelector('#btn-new-package-top').addEventListener('click', () => {
      activeTab = 'send';
      renderTabContent();
    });

    tabContentContainer.querySelectorAll('.btn-view-receipt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tracking = btn.getAttribute('data-tracking');
        const found = history.find((h) => h.trackingNumber === tracking);
        if (found) {
          activeReceipt = found;
          activeTab = 'receipt';
          renderTabContent();
        }
      });
    });
  }

  // --- VUE 4 : BORDEREAU OFFICIEL D'EXPÉDITION (REÇU) ---
  function renderReceiptView() {
    if (!activeReceipt) {
      activeTab = 'send';
      renderTabContent();
      return;
    }

    const r = activeReceipt;
    const shareText = encodeURIComponent(
      `📦 BORDEREAU COLIS GARE EXPRESS\n` +
      `Bonjour ${r.receiverName},\n` +
      `Un colis vous a été expédié de ${r.senderCity} vers ${r.receiverCity} par ${r.senderName}.\n\n` +
      `📌 N° Suivi : ${r.trackingNumber}\n` +
      `🔑 CODE PIN SECRET DE RETRAIT : ${r.secretPin}\n` +
      `🏢 Point de retrait : ${r.stationPickupName}\n` +
      `⏰ Convoi de : ${r.departureTime}\n\n` +
      `Veuillez vous munir de votre pièce d'identité et de ce code PIN pour récupérer le colis.`
    );

    tabContentContainer.innerHTML = `
      <div class="card-blue courier-receipt-card">
        <div class="courier-receipt-header">
          <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: 2px;">
            ✓ BORDEREAU OFFICIEL D'EXPÉDITION COLIS
          </h2>
          <span style="color: rgba(255,255,255,0.9); font-size: var(--font-size-sm); font-weight: 700;">
            N° Suivi : ${r.trackingNumber}
          </span>
        </div>

        <div style="padding: var(--spacing-6);">
          <!-- QR Code de contrôle -->
          <div class="ticket-qr-mock" style="margin-bottom: var(--spacing-4);">
            <svg viewBox="0 0 24 24" width="80" height="80" fill="#0f172a">
              <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm10 0h2v2h-2zm4 0h4v6h-4zm-4 4h2v2h-2zm2-2h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z"/>
            </svg>
          </div>

          <!-- Code PIN Secret de retrait -->
          <div class="pin-security-box">
            <span style="font-size: var(--font-size-xs); color: #fbbf24; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
              🔑 CODE PIN SECRET DE RETRAIT (À FOURNIR AU DESTINATAIRE) :
            </span>
            <div class="pin-code-large">${r.secretPin}</div>
            <span style="font-size: 11px; color: var(--color-text-secondary);">
              Exigé au guichet de destination avec la pièce d'identité du destinataire.
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm); margin: var(--spacing-4) 0;">
            <div>
              <span style="color: var(--color-text-muted); display: block; font-size: var(--font-size-xs);">Expéditeur :</span>
              <strong style="color: #ffffff;">${r.senderName}</strong>
              <div style="font-size: var(--font-size-xs); color: #cbd5e1;">📞 ${r.senderPhone}</div>
              <div style="font-size: var(--font-size-xs); color: #93c5fd;">📍 ${r.stationDropName}</div>
            </div>

            <div>
              <span style="color: var(--color-text-muted); display: block; font-size: var(--font-size-xs);">Destinataire :</span>
              <strong style="color: #ffffff;">${r.receiverName}</strong>
              <div style="font-size: var(--font-size-xs); color: #cbd5e1;">📞 ${r.receiverPhone}</div>
              <div style="font-size: var(--font-size-xs); color: #93c5fd;">📍 ${r.stationPickupName}</div>
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: var(--spacing-3); font-size: var(--font-size-xs); margin-bottom: var(--spacing-4);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span>📦 Contenu déclaré : <strong>${r.description}</strong></span>
              <span>⚖️ Poids : <strong>${r.weightKg} kg</strong></span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Convoi : <strong>${r.departureTime}</strong></span>
              <span style="color: #fbbf24; font-weight: 700;">Règlement : ${r.priceCfa.toLocaleString('fr-FR')} FCFA (Réglé par ${r.paymentOperator.toUpperCase()})</span>
            </div>
          </div>

          <!-- Boutons d'action : Partager WhatsApp & Imprimer -->
          <div style="display: flex; gap: var(--spacing-3); flex-wrap: wrap;">
            <a 
              href="https://api.whatsapp.com/send?text=${shareText}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary-blue" 
              style="flex: 1; min-width: 180px; text-align: center; background-color: #10b981; border-color: #059669;"
            >
              <span>📲 Partager au destinataire (WhatsApp)</span>
            </a>
            <button type="button" id="btn-print-courier" class="btn-card-white" style="flex: 1; min-width: 160px;">
              <span>🖨️ Imprimer le Bordereau</span>
            </button>
            <button type="button" id="btn-back-to-courier-list" class="btn-card-white" style="flex: 1; min-width: 140px;">
              <span>📋 Mes Envois</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const printBtn = tabContentContainer.querySelector('#btn-print-courier');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const backBtn = tabContentContainer.querySelector('#btn-back-to-courier-list');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        activeTab = 'history';
        renderTabContent();
      });
    }
  }

  // Événements sur les onglets principaux
  tabsNav.querySelectorAll('.courier-tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      SoundEngine.play('click');
      activeTab = btn.getAttribute('data-tab');
      renderTabContent();
    });
  });

  renderTabContent();
  return container;
}
