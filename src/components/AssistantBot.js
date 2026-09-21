/**
 * @file AssistantBot.js
 * @description Widget d'assistance interactive et chatbot rapide pour les voyageurs (Djassa-Bot).
 */

import { SoundEngine } from '../services/interactiveEffects.js';

const KNOWLEDGE_BASE = {
  horaires: "🚌 Les départs ont lieu tous les jours : 1er départ (06h30 - Matinal), 2e départ (12h00 - Midi) et 3e départ (17h30 - Soir). Présentez-vous 30 min avant l'embarquement !",
  paiement: "💳 Vous pouvez régler votre billet en 1 clic par Wave, Orange Money, MTN MoMo ou Moov Flooz sans aucun frais supplémentaire.",
  bagages: "🧳 Chaque passager a droit à 1 valise en soute (jusqu'à 25 kg) + 1 bagage à main gratuit. Les colis volumineux font l'objet d'un supplément au guichet.",
  gares: "📍 À Abidjan, les principales gares sont : Gare Internationale d'Adjamé (Bd Nangui Abrogoua), Gare UTB Yopougon Siporex, et Gare de Treichville.",
  ticket: "🎟️ Une fois votre paiement validé, votre billet électronique officiel est généré instantanément avec un QR Code. Vous pouvez le présenter sur votre smartphone ou l'imprimer !"
};

export function initAssistantBot() {
  let existing = document.getElementById('assistant-bot-root');
  if (existing) return;

  const widgetContainer = document.createElement('div');
  widgetContainer.id = 'assistant-bot-root';
  widgetContainer.className = 'assistant-widget-container';

  widgetContainer.innerHTML = `
    <div class="assistant-chat-window" id="assistant-window">
      <div class="assistant-chat-header">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem;">🤖</span>
          <div>
            <strong style="color: #ffffff; font-size: var(--font-size-xs); display: block;">Assistant Gare Express</strong>
            <span style="font-size: 10px; color: #34d399;">● En ligne 24h/24</span>
          </div>
        </div>
        <button type="button" id="btn-close-chat" style="background: transparent; border: none; color: #cbd5e1; font-size: 16px; cursor: pointer;">✕</button>
      </div>

      <div class="assistant-chat-messages" id="chat-messages-container">
        <div class="chat-bubble bot">
          👋 Bonjour cher voyageur ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?
        </div>
      </div>

      <div class="assistant-quick-prompts">
        <button type="button" class="quick-chip-btn" data-topic="horaires">🕐 Horaires</button>
        <button type="button" class="quick-chip-btn" data-topic="paiement">💳 Paiement Wave/OM</button>
        <button type="button" class="quick-chip-btn" data-topic="bagages">🧳 Bagages</button>
        <button type="button" class="quick-chip-btn" data-topic="gares">📍 Gares</button>
        <button type="button" class="quick-chip-btn" data-topic="ticket">🎟️ Mon Billet</button>
      </div>
    </div>

    <button type="button" class="assistant-trigger-btn" id="btn-toggle-assistant" aria-label="Ouvrir l'assistant voyageur">
      <span>💬</span>
      <span class="assistant-badge-alert">1</span>
    </button>
  `;

  document.body.appendChild(widgetContainer);

  const windowEl = widgetContainer.querySelector('#assistant-window');
  const triggerBtn = widgetContainer.querySelector('#btn-toggle-assistant');
  const closeBtn = widgetContainer.querySelector('#btn-close-chat');
  const messagesContainer = widgetContainer.querySelector('#chat-messages-container');
  const chips = widgetContainer.querySelectorAll('.quick-chip-btn');
  const badgeAlert = widgetContainer.querySelector('.assistant-badge-alert');

  function toggleChat() {
    SoundEngine.play('bubble');
    const isActive = windowEl.classList.toggle('active');
    if (isActive && badgeAlert) {
      badgeAlert.style.display = 'none';
    }
  }

  triggerBtn.addEventListener('click', toggleChat);
  closeBtn.addEventListener('click', toggleChat);

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      SoundEngine.play('click');
      const topic = chip.getAttribute('data-topic');
      const userText = chip.textContent;
      const botResponse = KNOWLEDGE_BASE[topic] || "Je suis à votre disposition pour vous orienter dans vos voyages !";

      // 1. Message utilisateur
      const userMsg = document.createElement('div');
      userMsg.className = 'chat-bubble user';
      userMsg.textContent = userText;
      messagesContainer.appendChild(userMsg);

      // 2. Réponse du bot simulée avec léger délai
      setTimeout(() => {
        SoundEngine.play('bubble');
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-bubble bot';
        botMsg.textContent = botResponse;
        messagesContainer.appendChild(botMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 400);

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    });
  });
}
