/**
 * @file LiveTicker.js
 * @description Bandeau d'actualités en direct, départs temps réel et horloge officielle des gares ivoiriennes.
 */

export function createLiveTicker() {
  const tickerContainer = document.createElement('div');
  tickerContainer.className = 'live-ticker-bar';

  tickerContainer.innerHTML = `
    <div class="live-ticker-badge">
      <span class="radar-dot"></span>
      <span>En direct</span>
    </div>

    <div class="live-ticker-viewport">
      <div class="live-ticker-content">
        <span class="live-ticker-item">
          <strong>📍 Gare Adjamé :</strong> Départs réguliers et fluides vers le Centre et le Nord •
        </span>
        <span class="live-ticker-item">
          <strong>🚌 Convoi 06h30 :</strong> Abidjan ➔ Yamoussoukro • Embarquement Porte B3 en cours •
        </span>
        <span class="live-ticker-item">
          <strong>⚡ Promo Mobile Money :</strong> 0% de frais de transfert avec Wave & Orange Money •
        </span>
        <span class="live-ticker-item">
          <strong>🛣️ Info Route :</strong> Trafic très fluide sur l'Autoroute du Nord PK 45 ➔ Yamoussoukro •
        </span>
        <span class="live-ticker-item">
          <strong>🎟️ Réservation en ligne :</strong> Vos billets avec QR Code validés directement à l'embarquement •
        </span>
        <span class="live-ticker-item">
          <strong>📍 Gare Yopougon & Bouaké :</strong> Convois de 08h00 et 10h00 ouverts à la réservation.
        </span>
      </div>
    </div>

    <div class="live-ticker-clock" id="live-station-clock">
      <span>⏱️ Abidjan</span>
      <strong id="live-clock-time">--:--:--</strong>
    </div>
  `;

  // Mise à jour de l'horloge en temps réel
  const clockEl = tickerContainer.querySelector('#live-clock-time');
  function updateClock() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toLocaleTimeString('fr-FR', {
        timeZone: 'UTC', // Abidjan est à UTC (GMT)
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
  }

  setInterval(updateClock, 1000);
  updateClock();

  return tickerContainer;
}
