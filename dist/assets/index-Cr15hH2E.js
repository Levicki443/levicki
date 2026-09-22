(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function Z(t){const a=document.getElementById(t);a&&(a.classList.add("active"),document.body.style.overflow="hidden")}function G(t){const a=document.getElementById(t);a&&(a.classList.remove("active"),document.body.style.overflow="")}function le(){if(document.getElementById("modals-container"))return;const t=document.createElement("div");t.id="modals-container",t.innerHTML=`
    <!-- Modale : À propos -->
    <div id="about-modal" class="modal-backdrop" role="dialog" aria-labelledby="about-title" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 id="about-title" class="modal-title">À propos de la plateforme</h2>
          <button type="button" class="modal-close-btn" data-close="about-modal" aria-label="Fermer la fenêtre">✕</button>
        </div>
        <div class="modal-body">
          <p>
            Notre plateforme de <strong>Gestion d'une Gare Routière</strong> est conçue pour moderniser et simplifier la réservation de tickets de transport interurbain en Côte d'Ivoire.
          </p>
          <p>
            Née de la volonté de fluidifier les départs et d'éliminer les longues files d'attente en gare, elle permet à chaque voyageur de réserver son trajet depuis son domicile, d'obtenir les horaires précis et les indications claires vers les points d'embarquement.
          </p>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 0;">
            Société de transport partenaire certifiée — Confort, sécurité et ponctualité garantis.
          </p>
        </div>
      </div>
    </div>

    <!-- Modale : Nous contacter -->
    <div id="contact-modal" class="modal-backdrop" role="dialog" aria-labelledby="contact-title" aria-modal="true">
      <div class="modal-dialog">
        <div class="modal-header">
          <h2 id="contact-title" class="modal-title">Nous contacter</h2>
          <button type="button" class="modal-close-btn" data-close="contact-modal" aria-label="Fermer la fenêtre">✕</button>
        </div>
        <div class="modal-body">
          <p>
            Une question sur un départ, un itinéraire ou une réservation ? Notre équipe d'assistance aux voyageurs est disponible 7j/7.
          </p>
          <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              📍 <strong>Gare centrale :</strong> Abidjan, Côte d'Ivoire
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              📞 <strong>Assistance téléphonique :</strong> +225 01 02 03 04 05
            </p>
            <p style="margin-bottom: 0; color: var(--color-text-primary);">
              ✉️ <strong>Courriel :</strong> support@gare-express.ci
            </p>
          </div>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm); margin-bottom: 0;">
            Horaires d'ouverture des guichets : Du lundi au dimanche, de 05h00 à 22h00.
          </p>
        </div>
      </div>
    </div>
  `,document.body.appendChild(t),t.querySelectorAll("[data-close]").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-close");G(e)})}),t.querySelectorAll(".modal-backdrop").forEach(a=>{a.addEventListener("click",e=>{e.target===a&&G(a.id)})}),document.addEventListener("keydown",a=>{if(a.key==="Escape"){const e=document.querySelector(".modal-backdrop.active");e&&G(e.id)}})}let R=null,L=localStorage.getItem("app_sound_enabled")!=="false";function ce(){if(!R&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(R=new t)}return R&&R.state==="suspended"&&R.resume(),R}const C={isEnabled(){return L},toggleSound(){return L=!L,localStorage.setItem("app_sound_enabled",L?"true":"false"),L&&this.play("click"),L},play(t="click"){if(L)try{const a=ce();if(!a)return;const e=a.currentTime;if(t==="click"){const r=a.createOscillator(),s=a.createGain();r.type="sine",r.frequency.setValueAtTime(800,e),r.frequency.exponentialRampToValueAtTime(300,e+.05),s.gain.setValueAtTime(.15,e),s.gain.exponentialRampToValueAtTime(.01,e+.05),r.connect(s),s.connect(a.destination),r.start(e),r.stop(e+.05)}else if(t==="seat"){const r=a.createOscillator(),s=a.createGain();r.type="triangle",r.frequency.setValueAtTime(520,e),r.frequency.exponentialRampToValueAtTime(780,e+.08),s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.01,e+.08),r.connect(s),s.connect(a.destination),r.start(e),r.stop(e+.08)}else if(t==="success")[523.25,659.25,783.99,1046.5].forEach((s,o)=>{const i=a.createOscillator(),n=a.createGain(),u=e+o*.09;i.type="triangle",i.frequency.setValueAtTime(s,u),n.gain.setValueAtTime(.25,u),n.gain.exponentialRampToValueAtTime(.001,u+.35),i.connect(n),n.connect(a.destination),i.start(u),i.stop(u+.35)});else if(t==="horn"){const r=a.createOscillator(),s=a.createOscillator(),o=a.createGain();r.type="sawtooth",s.type="sawtooth",r.frequency.setValueAtTime(370,e),s.frequency.setValueAtTime(440,e),o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.01,e+.25),r.connect(o),s.connect(o),o.connect(a.destination),r.start(e),s.start(e),r.stop(e+.25),s.stop(e+.25)}else if(t==="bubble"){const r=a.createOscillator(),s=a.createGain();r.type="sine",r.frequency.setValueAtTime(400,e),r.frequency.exponentialRampToValueAtTime(900,e+.1),s.gain.setValueAtTime(.18,e),s.gain.exponentialRampToValueAtTime(.01,e+.1),r.connect(s),s.connect(a.destination),r.start(e),r.stop(e+.1)}}catch{}}};function ae(){C.play("success");const t=document.createElement("canvas");t.className="confetti-canvas-overlay",document.body.appendChild(t);const a=t.getContext("2d");let e=t.width=window.innerWidth,r=t.height=window.innerHeight;const s=["#2563eb","#3b82f6","#10b981","#fbbf24","#f59e0b","#ec4899","#ffffff"],o=[],i=140;for(let v=0;v<i;v++)o.push({x:e*.5+(Math.random()-.5)*200,y:r*.4+(Math.random()-.5)*100,vx:(Math.random()-.5)*18,vy:(Math.random()-.8)*20-4,size:Math.random()*8+6,color:s[Math.floor(Math.random()*s.length)],rotation:Math.random()*360,vRot:(Math.random()-.5)*12,opacity:1,shape:Math.random()>.4?"rect":"circle"});let n;const u=Date.now();function b(){const v=Date.now()-u;a.clearRect(0,0,e,r);let h=0;o.forEach(l=>{l.x+=l.vx,l.y+=l.vy,l.vy+=.45,l.vx*=.98,l.rotation+=l.vRot,v>1800&&(l.opacity-=.02),l.opacity>0&&l.y<r+50&&(h++,a.save(),a.translate(l.x,l.y),a.rotate(l.rotation*Math.PI/180),a.globalAlpha=Math.max(0,l.opacity),a.fillStyle=l.color,l.shape==="rect"?a.fillRect(-l.size/2,-l.size/2,l.size,l.size*.6):(a.beginPath(),a.arc(0,0,l.size/2,0,Math.PI*2),a.fill()),a.restore())}),h>0&&v<4e3?n=requestAnimationFrame(b):(cancelAnimationFrame(n),t.parentNode&&t.parentNode.removeChild(t))}b()}function B(t=document){t.querySelectorAll(".btn-primary-blue, .btn-card-white, .btn-back-3d, .btn-nav-link").forEach(e=>{e.dataset.hasRipple||(e.dataset.hasRipple="true",e.classList.add("btn-interactive"),e.addEventListener("click",r=>{C.play("click");const s=e.getBoundingClientRect(),o=document.createElement("span"),i=Math.max(s.width,s.height),n=i/2;o.style.width=o.style.height=`${i}px`,o.style.left=`${r.clientX-s.left-n}px`,o.style.top=`${r.clientY-s.top-n}px`,o.classList.add("ripple-circle");const u=e.querySelector(".ripple-circle");u&&u.remove(),e.appendChild(o),setTimeout(()=>{o.remove()},600)}))})}function O(t=document){t.querySelectorAll(".card-blue, .departure-card, .feature-card, .profile-hero-card").forEach(e=>{e.dataset.hasTilt||(e.dataset.hasTilt="true",e.addEventListener("mousemove",r=>{const s=e.getBoundingClientRect(),o=r.clientX-s.left,i=r.clientY-s.top,n=s.width/2,u=s.height/2,b=(i-u)/u*-5,v=(o-n)/n*5;e.style.transform=`perspective(1000px) rotateX(${b.toFixed(2)}deg) rotateY(${v.toFixed(2)}deg) translateY(-2px)`}),e.addEventListener("mouseleave",()=>{e.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)"}))})}function de(t=document){t.querySelectorAll("[data-counter-target]").forEach(e=>{const r=parseInt(e.getAttribute("data-counter-target"),10);if(isNaN(r))return;let s=0;const o=1200,i=25,n=o/i,u=r/n,b=setInterval(()=>{s+=u,s>=r?(e.textContent=r.toLocaleString("fr-FR"),clearInterval(b)):e.textContent=Math.floor(s).toLocaleString("fr-FR")},i)})}const pe={horaires:"🚌 Les départs ont lieu tous les jours : 1er départ (06h30 - Matinal), 2e départ (12h00 - Midi) et 3e départ (17h30 - Soir). Présentez-vous 30 min avant l'embarquement !",paiement:"💳 Vous pouvez régler votre billet en 1 clic par Wave, Orange Money, MTN MoMo ou Moov Flooz sans aucun frais supplémentaire.",colis:"📦 Vous pouvez expédier vos courriers, vivres et marchandises via l'onglet « Fret & Colis » (#/courier). Un code PIN secret est transmis par SMS au destinataire pour le retrait sécurisé !",bagages:"🧳 Chaque passager a droit à 1 valise en soute (jusqu'à 25 kg) + 1 bagage à main gratuit. Les colis volumineux font l'objet d'un supplément au guichet.",gares:"📍 À Abidjan, les principales gares sont : Gare Internationale d'Adjamé (Bd Nangui Abrogoua), Gare UTB Yopougon Siporex, et Gare de Treichville.",ticket:"🎟️ Une fois votre paiement validé, votre billet électronique officiel est généré instantanément avec un QR Code. Vous pouvez le présenter sur votre smartphone ou l'imprimer !"};function ue(){if(document.getElementById("assistant-bot-root"))return;const a=document.createElement("div");a.id="assistant-bot-root",a.className="assistant-widget-container",a.innerHTML=`
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
        <button type="button" class="quick-chip-btn" data-topic="colis">📦 Fret & Colis</button>
        <button type="button" class="quick-chip-btn" data-topic="horaires">🕐 Horaires</button>
        <button type="button" class="quick-chip-btn" data-topic="paiement">💳 Paiement</button>
        <button type="button" class="quick-chip-btn" data-topic="bagages">🧳 Bagages</button>
        <button type="button" class="quick-chip-btn" data-topic="ticket">🎟️ Billet</button>
      </div>
    </div>

    <button type="button" class="assistant-trigger-btn" id="btn-toggle-assistant" aria-label="Ouvrir l'assistant voyageur">
      <span>💬</span>
      <span class="assistant-badge-alert">1</span>
    </button>
  `,document.body.appendChild(a);const e=a.querySelector("#assistant-window"),r=a.querySelector("#btn-toggle-assistant"),s=a.querySelector("#btn-close-chat"),o=a.querySelector("#chat-messages-container"),i=a.querySelectorAll(".quick-chip-btn"),n=a.querySelector(".assistant-badge-alert");function u(){C.play("bubble"),e.classList.toggle("active")&&n&&(n.style.display="none")}r.addEventListener("click",u),s.addEventListener("click",u),i.forEach(b=>{b.addEventListener("click",()=>{C.play("click");const v=b.getAttribute("data-topic"),h=b.textContent,l=pe[v]||"Je suis à votre disposition pour vous orienter dans vos voyages !",d=document.createElement("div");d.className="chat-bubble user",d.textContent=h,o.appendChild(d),setTimeout(()=>{C.play("bubble");const g=document.createElement("div");g.className="chat-bubble bot",g.textContent=l,o.appendChild(g),o.scrollTop=o.scrollHeight},400),o.scrollTop=o.scrollHeight})})}function me(){const t=document.createElement("header");t.className="site-header";const a=JSON.parse(sessionStorage.getItem("current_user")||"null"),e=C.isEnabled();t.innerHTML=`
    <a href="#/" class="brand-logo" aria-label="Accueil - Gare Routière">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4"></rect>
        <path d="M7 10h10"></path>
        <path d="M7 14h10"></path>
        <circle cx="8" cy="18" r="1"></circle>
        <circle cx="16" cy="18" r="1"></circle>
      </svg>
      <span>Gare<span style="color: var(--color-btn-blue-bg);">Express</span></span>
      <span class="brand-badge">Côte d'Ivoire</span>
    </a>

    <nav class="nav-actions" aria-label="Navigation secondaire">
      <a href="#/courier" class="btn-nav-link" style="color: #fbbf24; border-color: rgba(251, 191, 36, 0.35);">
        📦 Fret & Colis
      </a>
      ${a?`
        <a href="#/profile" class="btn-nav-link" style="color: #93c5fd; border-color: rgba(147, 197, 253, 0.3);">
          👤 ${a.fullname.split(" ")[0]}
        </a>
        <a href="#/app" class="btn-nav-link">
          🚌 Trajets
        </a>
      `:""}
      <button type="button" class="btn-nav-link" id="nav-btn-about">
        À propos
      </button>
      <button type="button" class="btn-nav-link" id="nav-btn-contact">
        Nous contacter
      </button>
      <button type="button" class="sound-toggle-btn" id="btn-toggle-sound" title="Activer / Couper les effets sonores">
        ${e?"🔊":"🔇"}
      </button>
    </nav>
  `;const r=t.querySelector("#nav-btn-about"),s=t.querySelector("#nav-btn-contact"),o=t.querySelector("#btn-toggle-sound");return r&&r.addEventListener("click",()=>{Z("about-modal")}),s&&s.addEventListener("click",()=>{Z("contact-modal")}),o&&o.addEventListener("click",()=>{const i=C.toggleSound();o.textContent=i?"🔊":"🔇"}),t}function U(){const t=document.createElement("div");t.className="live-ticker-bar",t.innerHTML=`
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
  `;const a=t.querySelector("#live-clock-time");function e(){const r=new Date;a&&(a.textContent=r.toLocaleTimeString("fr-FR",{timeZone:"UTC",hour:"2-digit",minute:"2-digit",second:"2-digit"}))}return setInterval(e,1e3),e(),t}const T=["Abidjan","Bondoukou","Bouaké","Yamoussoukro","Korhogo","San-Pédro","Man","Daloa"],fe=[{id:"trip-abj-bdk",departureCity:"Abidjan",arrivalCity:"Bondoukou",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-abj-bdk-1",rankLabel:"1er Départ",time:"06h30",stationName:"Gare Principale d'Adjamé (Quai Nord)",stationAddress:"Adjamé Liberté, à 100m du grand carrefour",directions:"Emprunter le boulevard principal, quai n°3 réservé aux lignes de l'Est (Bondoukou / Bouna). Présentation recommandée 30 minutes avant le départ.",busType:"Car Grand Confort VIP (Climatisé, Wifi, Prises USB)",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:18},{id:"dep-abj-bdk-2",rankLabel:"2e Départ",time:"10h00",stationName:"Gare Routière d'Adjamé — Pôle Est",stationAddress:"Boulevard Nangui Abrogoua, Face Pharmacie Centrale",directions:"Accès direct par le couloir central des cars interurbains. Guichet d'enregistrement et dépose bagages Quai 2.",busType:"Car Standard 60 places (Climatisation active)",company:"Compagnie Express du Zanzan",priceCfa:7e3,availableSeats:24},{id:"dep-abj-bdk-3",rankLabel:"3e Départ",time:"14h30",stationName:"Gare de Yopougon Siporex",stationAddress:"Carrefour Siporex, Terminus des lignes Est",directions:"Point d'embarquement côté autoroute du Nord avant bifurcation vers l'Est. Parking voyageurs disponible.",busType:"Car VIP Confort Plus (Climatisé, Écrans individuels)",company:"Union des Transporteurs de l'Est",priceCfa:8e3,availableSeats:12}]},{id:"trip-abj-bke",departureCity:"Abidjan",arrivalCity:"Bouaké",distanceKm:350,estimatedDuration:"4h 45min",departures:[{id:"dep-abj-bke-1",rankLabel:"1er Départ",time:"07h00",stationName:"Gare d'Adjamé Renaissance",stationAddress:"Boulevard de la Paix, Adjamé",directions:"Quai réservé aux lignes Centre & Nord. Voie express directe autoroute.",busType:"Car VIP Grand Tourisme",company:"Société Nationale de Transport",priceCfa:6e3,availableSeats:15},{id:"dep-abj-bke-2",rankLabel:"2e Départ",time:"11h30",stationName:"Gare de Yopougon Gesco",stationAddress:"Sortie Autoroute du Nord, Gesco",directions:"Embarquement rapide en bordure d'autoroute, idéal pour les résidents de Yopougon.",busType:"Car Standard Confort",company:"Société Nationale de Transport",priceCfa:5500,availableSeats:28}]},{id:"trip-abj-yakro",departureCity:"Abidjan",arrivalCity:"Yamoussoukro",distanceKm:240,estimatedDuration:"2h 45min",departures:[{id:"dep-abj-yak-1",rankLabel:"1er Départ",time:"08h00",stationName:"Gare Routière Internationale d'Adjamé",stationAddress:"Adjamé Cité Fairmont",directions:"Hall départ direct autoroute de Yamoussoukro. Enregistrement quai A.",busType:"Car Navette Express Directe",company:"Capitale Express Transport",priceCfa:4500,availableSeats:30}]},{id:"trip-bdk-abj",departureCity:"Bondoukou",arrivalCity:"Abidjan",distanceKm:420,estimatedDuration:"7h 30min",departures:[{id:"dep-bdk-abj-1",rankLabel:"1er Départ",time:"06h00",stationName:"Gare Centrale de Bondoukou",stationAddress:"Quartier Zanzan, Face Grand Marché",directions:"Présentation des voyageurs dès 05h30 pour l'étiquetage des bagages et la validation du ticket en ligne.",busType:"Car Grand Confort VIP",company:"Compagnie Express du Zanzan",priceCfa:7500,availableSeats:20}]}];function re(t,a){const e=fe.find(r=>r.departureCity.toLowerCase()===t.toLowerCase()&&r.arrivalCity.toLowerCase()===a.toLowerCase());return e||{id:`trip-${t.toLowerCase()}-${a.toLowerCase()}`,departureCity:t,arrivalCity:a,distanceKm:320,estimatedDuration:"5h 00min",departures:[{id:`dep-${t.toLowerCase()}-1`,rankLabel:"1er Départ",time:"07h30",stationName:`Gare Centrale de ${t}`,stationAddress:`Boulevard principal de ${t}`,directions:`Se rendre au hall d'embarquement n°1 de ${t} avec la référence de réservation.`,busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:22},{id:`dep-${t.toLowerCase()}-2`,rankLabel:"2e Départ",time:"13h00",stationName:`Gare Routière Sud de ${t}`,stationAddress:`Carrefour de la Paix, ${t}`,directions:"Embarquement direct voie B. Dépose des bagages 20 minutes avant le départ.",busType:"Car Confort Interurbain",company:"Réseau National des Transporteurs",priceCfa:6e3,availableSeats:16}]}}function ve(){const t=document.createElement("div");t.className="landing-view";const a=me();t.appendChild(a);const e=U();t.appendChild(e);const r=document.createElement("main");r.className="main-content",r.innerHTML=`
    <section class="landing-hero">
      <div class="hero-tag">
        <span class="radar-dot" style="background-color: #3b82f6;"></span>
        <span>Plateforme Officielle de Transport Interurbain en Côte d'Ivoire</span>
      </div>

      <h1 class="hero-title">
        Voyagez en toute sérénité à travers la <span class="hero-title-highlight">Côte d'Ivoire</span>
      </h1>

      <p class="hero-description">
        Consultez les départs en temps réel, choisissez votre autocar VIP et réservez votre ticket sans file d'attente avec paiement Mobile Money instantané.
      </p>

      <!-- Sélecteur rapide et interactif de trajet directement sur la Landing Page -->
      <div class="card-blue" style="max-width: 780px; width: 100%; margin-bottom: var(--spacing-8); border: 1px solid rgba(59, 130, 246, 0.4); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
          <div style="font-weight: 700; color: #ffffff; font-size: var(--font-size-base); display: flex; align-items: center; gap: 8px;">
            <span>⚡ Réservation Express</span>
            <span style="font-size: var(--font-size-xs); background: rgba(16, 185, 129, 0.2); color: #34d399; padding: 2px 8px; border-radius: var(--radius-full);">Disponibilité en direct</span>
          </div>
          <span style="font-size: var(--font-size-xs); color: #fbbf24;">Tarif garanti sans commission</span>
        </div>

        <form id="hero-quick-search-form" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) auto; gap: var(--spacing-3); align-items: flex-end;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-from">Ville de départ</label>
            <select id="quick-from" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${T.map(o=>`<option value="${o}" ${o==="Abidjan"?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" style="font-size: var(--font-size-xs);" for="quick-to">Destination</label>
            <select id="quick-to" class="form-select" style="padding: var(--spacing-2) var(--spacing-3); font-size: var(--font-size-sm);">
              ${T.map(o=>`<option value="${o}" ${o==="Bondoukou"?"selected":""}>${o}</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 42px; padding: 0 var(--spacing-5);">
            <span>Consulter les Départs ➔</span>
          </button>
        </form>
      </div>

      <!-- Compteurs Statistiques Animés -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--spacing-4); width: 100%; max-width: 900px; margin-bottom: var(--spacing-10);">
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #60a5fa;" data-counter-target="150">0</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">DÉPARTS / JOUR</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #fbbf24;" data-counter-target="45000">0</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">PASSAGERS SERVIS</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #34d399;">99.4%</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">PONCTUALITÉ GARE</div>
        </div>
        <div class="card-blue" style="text-align: center; padding: var(--spacing-4);">
          <div style="font-size: var(--font-size-3xl); font-weight: 800; color: #f472b6;">4</div>
          <div style="font-size: var(--font-size-xs); color: var(--color-text-muted); font-weight: 600;">OPÉRATEURS MOBILE MONEY</div>
        </div>
      </div>

      <!-- Zone centrale : Bouton d'action Rejoindre la Communauté -->
      <div class="hero-cta-container">
        <a href="#/register" class="btn-primary-blue btn-cta-main" id="btn-join-community">
          <span>Créer mon Compte Passager</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
        <span class="cta-subtext">Déjà inscrit ? <a href="#/login" style="color: #60a5fa; font-weight: 600;">Se connecter</a></span>
      </div>

      <!-- Section de présentation des avantages -->
      <div class="landing-grid">
        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 class="feature-title">Ponctualité & Convois</h3>
            <p class="feature-text">
              Consultez les 3 départs quotidiens (Matin, Midi, Soir) avec l'état du trafic et le suivi de l'embarquement en temps réel.
            </p>
          </div>
        </article>

        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3 class="feature-title">Gares & Itinéraires 3D</h3>
            <p class="feature-text">
              Localisez précisément votre gare de départ (Adjamé, Yopougon, Treichville) et visualisez le trajet interactif vers votre destination.
            </p>
          </div>
        </article>

        <article class="card-blue feature-card">
          <div>
            <div class="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="M7 15h0M2 9.5h20"></path>
              </svg>
            </div>
            <h3 class="feature-title">Paiement Mobile 100% Sécurisé</h3>
            <p class="feature-text">
              Réglez instantanément avec Wave, Orange Money, MTN MoMo ou Moov Flooz et recevez votre e-billet numérique avec QR Code sécurisé.
            </p>
          </div>
        </article>
      </div>
    </section>

    <footer class="landing-footer-info">
      <p>Plateforme de Gestion d'une Gare Routière — Conçue pour une expérience voyageur moderne, animée et sécurisée.</p>
    </footer>
  `;const s=r.querySelector("#hero-quick-search-form");return s&&s.addEventListener("submit",o=>{o.preventDefault();const i=s.querySelector("#quick-from").value,n=s.querySelector("#quick-to").value;sessionStorage.setItem("search_from",i),sessionStorage.setItem("search_to",n),window.location.hash="#/app"}),t.appendChild(r),requestAnimationFrame(()=>{B(t),O(t),de(t)}),t}function M(t={}){const{label:a="Retour",onClick:e=null,customClass:r=""}=t,s=document.createElement("div");s.className=`btn-back-3d-wrapper ${r}`.trim();const o=document.createElement("button");return o.type="button",o.className="btn-back-3d",o.setAttribute("aria-label",a),o.innerHTML=`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>${a}</span>
  `,o.addEventListener("click",i=>{i.preventDefault(),typeof e=="function"?e(i):window.history.length>1?window.history.back():window.location.hash="#/"}),s.appendChild(o),s}function ge(){const t=document.createElement("div");t.className="auth-view-container";const a=M({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Créer un compte</h1>
      <p class="auth-subtitle">Rejoignez la plateforme et réservez vos trajets en quelques clics.</p>
    </div>

    <form id="register-form" class="auth-form" novalidate>
      <div class="form-group">
        <label for="reg-fullname" class="form-label">Nom complet</label>
        <input 
          type="text" 
          id="reg-fullname" 
          name="fullname" 
          class="form-input" 
          placeholder="Ex : Kouassi Jean-Marc" 
          required 
          autocomplete="name"
        />
        <span class="form-feedback" id="feedback-fullname">Veuillez renseigner votre nom complet.</span>
      </div>

      <div class="form-group">
        <label for="reg-phone" class="form-label">Numéro de téléphone</label>
        <input 
          type="tel" 
          id="reg-phone" 
          name="phone" 
          class="form-input" 
          placeholder="Ex : +225 07 12 34 56 78" 
          required 
          autocomplete="tel"
        />
        <span class="form-feedback" id="feedback-phone">Format de téléphone invalide (ex: +225 07...).</span>
      </div>

      <div class="form-group">
        <label for="reg-email" class="form-label">Adresse courriel (optionnelle)</label>
        <input 
          type="email" 
          id="reg-email" 
          name="email" 
          class="form-input" 
          placeholder="Ex : jean.kouassi@exemple.ci" 
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="reg-password" class="form-label">Mot de passe</label>
        <input 
          type="password" 
          id="reg-password" 
          name="password" 
          class="form-input" 
          placeholder="Au moins 6 caractères" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="feedback-password">Le mot de passe doit comporter au moins 6 caractères.</span>
      </div>

      <div class="form-group">
        <label for="reg-password-confirm" class="form-label">Confirmer le mot de passe</label>
        <input 
          type="password" 
          id="reg-password-confirm" 
          name="passwordConfirm" 
          class="form-input" 
          placeholder="Retapez votre mot de passe" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="feedback-password-confirm">Les mots de passe ne correspondent pas.</span>
      </div>

      <!-- Bouton d'action dans la carte : Blanc pur selon la charte -->
      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-2);">
        <span>Valider mon inscription</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </form>

    <div class="auth-footer">
      <span>Vous possédez déjà un compte ?</span>
      <a href="#/login">Se connecter ici</a>
    </div>
  `;const r=e.querySelector("#register-form");return r.addEventListener("submit",s=>{s.preventDefault();const o=r.querySelector("#reg-fullname").value.trim(),i=r.querySelector("#reg-phone").value.trim(),n=r.querySelector("#reg-email").value.trim(),u=r.querySelector("#reg-password").value,b=r.querySelector("#reg-password-confirm").value;let v=!0;const h=r.querySelector("#feedback-fullname");o?h.className="form-feedback":(h.className="form-feedback error",v=!1);const l=r.querySelector("#feedback-phone");!i||i.length<8?(l.className="form-feedback error",v=!1):l.className="form-feedback";const d=r.querySelector("#feedback-password");u.length<6?(d.className="form-feedback error",v=!1):d.className="form-feedback";const g=r.querySelector("#feedback-password-confirm");if(u!==b?(g.className="form-feedback error",v=!1):g.className="form-feedback",v){const k={fullname:o,phone:i,email:n||"contact@client.ci"};sessionStorage.setItem("current_user",JSON.stringify(k)),window.location.hash="#/app"}}),t.appendChild(e),t}function be(){const t=document.createElement("div");t.className="auth-view-container";const a=M({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(a);const e=document.createElement("div");e.className="auth-card",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Connexion</h1>
      <p class="auth-subtitle">Accédez à votre espace voyageur et gérez vos réservations.</p>
    </div>

    <form id="login-form" class="auth-form" novalidate>
      <div class="form-group">
        <label for="login-identifier" class="form-label">Numéro de téléphone ou Courriel</label>
        <input 
          type="text" 
          id="login-identifier" 
          name="identifier" 
          class="form-input" 
          placeholder="Ex : +225 07 12 34 56 78" 
          required 
          autocomplete="username"
        />
        <span class="form-feedback" id="feedback-login-id">Veuillez renseigner votre identifiant.</span>
      </div>

      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label for="login-password" class="form-label">Mot de passe</label>
          <a href="#/login" style="font-size: var(--font-size-xs); color: #93c5fd;">Mot de passe oublié ?</a>
        </div>
        <input 
          type="password" 
          id="login-password" 
          name="password" 
          class="form-input" 
          placeholder="Entrez votre mot de passe" 
          required 
          autocomplete="current-password"
        />
        <span class="form-feedback" id="feedback-login-pwd">Veuillez entrer votre mot de passe.</span>
      </div>

      <!-- Bouton d'action dans la carte : Blanc pur selon la charte -->
      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-2);">
        <span>Se connecter</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </form>

    <div class="auth-footer">
      <span>Vous n'avez pas encore de compte ?</span>
      <a href="#/register">Créer un compte</a>
    </div>
  `;const r=e.querySelector("#login-form");return r.addEventListener("submit",s=>{s.preventDefault();const o=r.querySelector("#login-identifier").value.trim(),i=r.querySelector("#login-password").value;let n=!0;const u=r.querySelector("#feedback-login-id");o?u.className="form-feedback":(u.className="form-feedback error",n=!1);const b=r.querySelector("#feedback-login-pwd");if(i?b.className="form-feedback":(b.className="form-feedback error",n=!1),n){const h=JSON.parse(sessionStorage.getItem("current_user")||"null")||{fullname:o.includes("@")?"Voyageur":"Passager Express",phone:o,email:o.includes("@")?o:"voyageur@transport.ci"};sessionStorage.setItem("current_user",JSON.stringify(h)),window.location.hash="#/app"}}),t.appendChild(e),t}function ye({currentSeat:t="12",company:a="Compagnie Express",onSeatConfirmed:e}){let r=document.getElementById("coach-seat-modal");r||(r=document.createElement("div"),r.id="coach-seat-modal",r.className="modal-backdrop",document.body.appendChild(r));let s=t;const o=11,i=[3,7,8,15,16,21,22,28,33,34,40];r.innerHTML=`
    <div class="modal-dialog coach-modal-container">
      <div class="modal-header">
        <div>
          <h2 class="modal-title" style="font-size: var(--font-size-xl);">💺 Plan Interactif de l'Autocar</h2>
          <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
            Sélectionnez votre place à bord du car • ${a} (Climatisé VIP)
          </p>
        </div>
        <button type="button" class="modal-close-btn" id="btn-close-seat-modal" aria-label="Fermer">✕</button>
      </div>

      <div class="coach-blueprint">
        <!-- Pare-brise et cabine du chauffeur -->
        <div class="coach-windshield">
          <span>🚪 Porte avant</span>
          <span>🚌 Pare-brise & Tableau de bord</span>
          <span>👨‍✈️ Poste Chauffeur</span>
        </div>

        <!-- Grille des sièges (2 à gauche - allée - 2 à droite) -->
        <div class="coach-seats-grid">
          ${Array.from({length:o}).map((v,h)=>{const l=h*4,d=l+1,g=l+2,k=l+3,P=l+4,E=h===0,m=(c,p)=>{const w=i.includes(c),y=String(c)===String(s),x=p==="left-window"||p==="right-window",S=x?`N°${c} (Fenêtre)`:`N°${c} (Couloir)`;return`
                <button 
                  type="button" 
                  class="coach-seat-btn ${y?"selected":""} ${w?"occupied":""} ${E?"vip":""}" 
                  data-seat-num="${c}"
                  data-seat-type="${x?"Fenêtre":"Couloir"}"
                  data-row="${h+1}"
                  title="${w?"Siège déjà réservé":S}"
                  ${w?"disabled":""}
                >
                  <span style="font-size: 11px;">${c}</span>
                  <span style="font-size: 8px; opacity: 0.8;">${x?"🪟":"🚶"}</span>
                </button>
              `};return`
              ${m(d,"left-window")}
              ${m(g,"left-aisle")}
              <div class="coach-aisle">ALLÉE</div>
              ${m(k,"right-aisle")}
              ${m(P,"right-window")}
            `}).join("")}
        </div>

        <!-- Légende des couleurs -->
        <div class="coach-legend">
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: rgba(30, 41, 59, 0.9); border: 1px solid rgba(255,255,255,0.2);"></span>
            <span>Disponible</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: #10b981;"></span>
            <span>Votre Sélection</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: rgba(239, 68, 68, 0.4);"></span>
            <span>Déjà Réservé</span>
          </div>
          <div class="coach-legend-item">
            <span class="legend-swatch" style="background: #f59e0b;"></span>
            <span>1ère Rangée VIP</span>
          </div>
        </div>
      </div>

      <!-- Résumé du choix et validation -->
      <div style="background-color: rgba(37, 99, 235, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin-bottom: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); display: block;">Place actuellement choisie :</span>
          <strong id="seat-selection-label" style="color: #60a5fa; font-size: var(--font-size-base);">
            Siège N° ${s} (Côté ${parseInt(s,10)%2===1?"Fenêtre":"Couloir"})
          </strong>
        </div>
        <button type="button" id="btn-confirm-seat-choice" class="btn-card-white" style="padding: var(--spacing-2) var(--spacing-5); font-size: var(--font-size-sm);">
          <span>Confirmer ce siège ✓</span>
        </button>
      </div>
    </div>
  `,requestAnimationFrame(()=>{r.classList.add("active")});const n=r.querySelectorAll(".coach-seat-btn:not(.occupied)"),u=r.querySelector("#seat-selection-label");n.forEach(v=>{v.addEventListener("click",()=>{C.play("seat"),n.forEach(d=>d.classList.remove("selected")),v.classList.add("selected"),s=v.getAttribute("data-seat-num");const h=v.getAttribute("data-seat-type"),l=v.getAttribute("data-row");u&&(u.textContent=`Siège N° ${s} (${h} - Rangée ${l})`)})});function b(){r.classList.remove("active")}r.querySelector("#btn-close-seat-modal").addEventListener("click",b),r.querySelector("#btn-confirm-seat-choice").addEventListener("click",()=>{C.play("success"),e&&e(s),b()})}const N="http://localhost:5000/api",he=3e3;async function A(t,a={}){const e=new AbortController,r=setTimeout(()=>e.abort(),he);try{return await fetch(t,{...a,signal:e.signal})}finally{clearTimeout(r)}}const F={async getCities(){try{const t=await A(`${N}/trips/cities`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[...T]},async searchTrips(t,a){try{const e=new URLSearchParams({from:t,to:a}),r=await A(`${N}/trips/search?${e.toString()}`);if(r.ok){const s=await r.json();if(s.success&&s.data)return s.data}}catch{}return re(t,a)},async createReservation(t){try{const a=await A(`${N}/trips/reservations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{bookingRef:`GR-${Date.now().toString().slice(-6)}`,createdAt:new Date().toISOString(),...t,status:"CONFIRMED"}},async getTicketByReference(t){try{const e=await A(`${N}/trips/tickets/${encodeURIComponent(t)}`);if(e.ok){const r=await e.json();if(r.success&&r.data)return r.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]").find(e=>e.bookingRef===t)||null},async getPassengerHistory(t){try{const a=await A(`${N}/trips/passenger/${encodeURIComponent(t)}/history`);if(a.ok){const e=await a.json();if(e.success&&Array.isArray(e.data))return e.data}}catch{}return JSON.parse(localStorage.getItem("user_tickets_history")||"[]")},async getPaymentOperators(){try{const t=await A(`${N}/payments/operators`);if(t.ok){const a=await t.json();if(a.success&&Array.isArray(a.data))return a.data}}catch{}return[{id:"wave",name:"Wave Côte d'Ivoire",feePercentage:1},{id:"orange",name:"Orange Money",feePercentage:1},{id:"mtn",name:"MTN Mobile Money",feePercentage:1},{id:"moov",name:"Moov Money Flooz",feePercentage:1}]},async initiatePayment(t){try{const a=await A(`${N}/payments/initiate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return{success:!0,transaction:{transactionId:`TXN-${(t.operatorId||"LOCAL").toUpperCase()}-${Date.now().toString().slice(-6)}`,bookingRef:t.bookingRef||"GR-LOC",amountCfa:t.amountCfa,completedAt:new Date().toISOString(),status:"COMPLETED"}}},async login(t){return(await A(`${N}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async register(t){return(await A(`${N}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()},async updateProfile(t){try{const a=await A(`${N}/auth/profile`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok){const e=await a.json();if(e.success&&e.data)return e.data}}catch{}return sessionStorage.setItem("current_user",JSON.stringify(t)),localStorage.setItem("saved_passenger_profile",JSON.stringify(t)),{success:!0,data:t}},async changePassword(t){try{const a=await A(`${N}/auth/password`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(a.ok)return a.json()}catch{}return{success:!0,message:"Mot de passe mis à jour avec succès."}}};function xe(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }');let e=[...T],r=sessionStorage.getItem("search_from")||"Abidjan",s=sessionStorage.getItem("search_to")||"Bondoukou",o=re(r,s),i=o.departures[1]||o.departures[0],n="14",u="Côté Fenêtre";const b=U();t.appendChild(b);const v=document.createElement("div");v.className="booking-topbar",v.innerHTML=`
    <a href="#/profile" class="user-badge-info" style="text-decoration: none; cursor: pointer;">
      <div class="user-avatar">${a.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${a.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: #93c5fd;">👤 Gérer mon profil & mot de passe ➔</div>
      </div>
    </a>
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;">
      <a href="#/courier" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #fbbf24; border-color: rgba(251, 191, 36, 0.4);">
        📦 Envoyer un Colis
      </a>
      <a href="#/profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        👤 Mon Profil
      </a>
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        🎟️ Mes Billets
      </a>
      <a href="#/" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        Déconnexion
      </a>
    </div>
  `,t.appendChild(v);const h=M({label:"Retour à l'accueil",onClick:()=>{window.location.hash="#/"}});t.appendChild(h);const l=document.createElement("div");l.id="booking-workspace";function d(){l.innerHTML=`
      <!-- Formulaire de recherche interactif -->
      <section class="card-blue search-trip-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-2); flex-wrap: wrap; gap: var(--spacing-2);">
          <h2 style="font-size: var(--font-size-xl); margin-bottom: 0;">
            Rechercher un trajet interurbain
          </h2>
          <span class="route-weather-pill">
            ☀️ Météo route : 31°C • Ciel dégagé
          </span>
        </div>
        <p style="font-size: var(--font-size-sm); margin-bottom: var(--spacing-4);">
          Sélectionnez votre ville de départ et votre destination pour consulter les convois en temps réel.
        </p>

        <form id="search-route-form" class="search-form-grid">
          <div class="form-group">
            <label class="form-label" for="select-from">Ville de départ</label>
            <select id="select-from" class="form-select">
              ${e.map(m=>`<option value="${m}" ${m===r?"selected":""}>${m}</option>`).join("")}
            </select>
          </div>

          <div class="form-group">
            <label class="form-label" for="select-to">Ville d'arrivée (Destination)</label>
            <select id="select-to" class="form-select">
              ${e.map(m=>`<option value="${m}" ${m===s?"selected":""}>${m}</option>`).join("")}
            </select>
          </div>

          <button type="submit" class="btn-card-white" style="height: 48px;">
            <span>Rechercher</span>
          </button>
        </form>
      </section>

      <!-- Simulateur Visuel Animé de Trajet (Bus & Progression) -->
      <section class="route-visualizer-card">
        <div class="route-visualizer-header">
          <div>
            <span style="font-size: var(--font-size-xs); color: var(--color-text-muted); text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">
              Visualisation dynamique du parcours
            </span>
            <h3 style="font-size: var(--font-size-2xl); color: #60a5fa; margin-bottom: 0;">
              ${r} ➔ ${s}
            </h3>
          </div>
          <div style="text-align: right;">
            <div style="font-size: var(--font-size-lg); font-weight: 800; color: #fbbf24;">
              ${o.distanceKm} KM • ~${o.estimatedDuration}
            </div>
            <span style="font-size: var(--font-size-xs); color: #34d399;">● Convoi sécurisé & climatisé</span>
          </div>
        </div>

        <div class="route-track-container">
          <div class="route-track-line">
            <div class="route-bus-sprite" title="Autocar en déplacement" id="interactive-bus-sprite">🚌</div>
            <div class="route-pin route-pin-start">
              <div class="route-pin-dot"></div>
              <span class="route-pin-label">📍 Départ : ${r}</span>
            </div>
            <div class="route-pin route-pin-mid">
              <div class="route-pin-dot" style="background-color: #10b981; border-color: #059669;"></div>
              <span class="route-pin-label">🛣️ Poste Péage / Relais</span>
            </div>
            <div class="route-pin route-pin-end">
              <div class="route-pin-dot" style="background-color: #fbbf24; border-color: #d97706;"></div>
              <span class="route-pin-label">🏁 Arrivée : ${s}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Liste des départs et détails -->
      <section class="departures-section">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <h3>Départs disponibles : <span style="color: #60a5fa;">${r} → ${s}</span></h3>
          <span style="font-size: var(--font-size-sm); color: var(--color-text-muted);">
            Cliquez sur un convoi pour sélectionner votre place
          </span>
        </div>

        <div class="departures-grid">
          ${o.departures.map(m=>`
            <div class="card-blue departure-card ${i&&i.id===m.id?"active":""}" data-dep-id="${m.id}">
              <div>
                <div class="departure-header">
                  <span class="departure-rank">${m.rankLabel}</span>
                  <span class="departure-price">${m.priceCfa.toLocaleString("fr-FR")} FCFA</span>
                </div>
                <div class="departure-time">${m.time}</div>
                <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin-top: var(--spacing-2);">
                  📍 ${m.stationName}
                </div>
              </div>
              <div style="margin-top: var(--spacing-4); display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: var(--font-size-xs); color: #34d399; font-weight: 600;">
                  ✓ ${m.availableSeats} places libres
                </span>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; font-weight: 600;">
                  ${i&&i.id===m.id?"Sélectionné ●":"Choisir ➔"}
                </span>
              </div>
            </div>
          `).join("")}
        </div>

        <!-- Détails du départ sélectionné et module interactif de siège -->
        ${i?`
          <div class="station-details-card">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-4); flex-wrap: wrap; gap: var(--spacing-2);">
              <h4 style="margin-bottom: 0; color: #ffffff;">
                Détails du voyage : ${i.rankLabel} (${i.time})
              </h4>
              <span class="departure-rank" style="background-color: rgba(16, 185, 129, 0.2); color: #34d399;">
                ${i.company}
              </span>
            </div>

            <!-- Module de sélection de siège interactif -->
            <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(15, 23, 42, 0.6) 100%); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: var(--radius-lg); padding: var(--spacing-4); margin-bottom: var(--spacing-4); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-3);">
              <div>
                <span style="font-size: var(--font-size-xs); color: #93c5fd; display: block; font-weight: 600;">💺 VOTRE PLACE À BORD DE L'AUTOCAR :</span>
                <strong id="current-seat-badge" style="color: #ffffff; font-size: var(--font-size-lg);">
                  Siège N° ${n} (${u})
                </strong>
              </div>
              <button type="button" id="btn-open-seat-selector" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
                <span>💺 Choisir mon siège sur le plan 3D ➔</span>
              </button>
            </div>

            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-primary);">
              🏢 <strong>Gare d'embarquement :</strong> ${i.stationName}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              📍 <strong>Adresse :</strong> ${i.stationAddress}
            </p>
            <p style="margin-bottom: var(--spacing-2); color: var(--color-text-secondary);">
              🚌 <strong>Véhicule :</strong> ${i.busType}
            </p>

            <div class="station-direction-box">
              <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
                🗺️ Indications pour vous rendre à la gare :
              </strong>
              <p style="margin-bottom: 0; font-size: var(--font-size-sm); color: var(--color-text-primary);">
                ${i.directions}
              </p>
            </div>

            <!-- Bandeau explicite des 4 opérateurs Mobile Money -->
            <div style="background-color: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin-top: var(--spacing-4); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--spacing-2);">
              <div style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">
                💳 <strong>Paiement Mobile Money disponible :</strong> Wave • Orange Money • MTN MoMo • Moov Flooz
              </div>
              <div style="display: flex; gap: var(--spacing-1);">
                <span class="operator-icon-badge operator-wave" style="width: 26px; height: 26px; font-size: 8px;">WAVE</span>
                <span class="operator-icon-badge operator-orange" style="width: 26px; height: 26px; font-size: 8px;">OM</span>
                <span class="operator-icon-badge operator-mtn" style="width: 26px; height: 26px; font-size: 8px;">MTN</span>
                <span class="operator-icon-badge operator-moov" style="width: 26px; height: 26px; font-size: 8px;">MOOV</span>
              </div>
            </div>

            <!-- Bouton vers la passerelle de paiement Mobile Money -->
            <button type="button" id="btn-proceed-payment" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
              <span>Payer mon ticket & Valider le Siège N° ${n} (${i.priceCfa.toLocaleString("fr-FR")} FCFA)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        `:""}
      </section>
    `;const g=l.querySelector("#search-route-form");g.addEventListener("submit",async m=>{m.preventDefault(),C.play("horn"),r=g.querySelector("#select-from").value,s=g.querySelector("#select-to").value,o=await F.searchTrips(r,s),i=o.departures[0]||null,d()});const k=l.querySelector("#interactive-bus-sprite");k&&k.addEventListener("click",()=>{C.play("horn")}),l.querySelectorAll(".departure-card").forEach(m=>{m.addEventListener("click",()=>{C.play("click");const c=m.getAttribute("data-dep-id");i=o.departures.find(p=>p.id===c),d()})});const P=l.querySelector("#btn-open-seat-selector");P&&P.addEventListener("click",()=>{ye({currentSeat:n,company:i.company,onSeatConfirmed:m=>{n=m,u=parseInt(m,10)%2===1?"Côté Fenêtre":"Côté Couloir",d()}})});const E=l.querySelector("#btn-proceed-payment");E&&E.addEventListener("click",async()=>{C.play("click"),E.disabled=!0,E.innerHTML="<span>Préparation du paiement sécurisé...</span>";const m={passengerName:a.fullname,passengerPhone:a.phone||"Non renseigné",seatNumber:n,seatType:u,departureCity:r,arrivalCity:s,departureTime:i.time,departureRank:i.rankLabel,stationName:i.stationName,stationAddress:i.stationAddress,directions:i.directions,busType:i.busType,company:i.company,priceCfa:i.priceCfa},c=await F.createReservation(m);sessionStorage.setItem("pending_ticket",JSON.stringify(c)),sessionStorage.setItem("current_ticket",JSON.stringify(c)),window.location.hash="#/payment"}),B(l),O(l)}return F.getCities().then(g=>{g&&g.length>0&&(e=g,d())}),d(),t.appendChild(l),t}const _=[{id:"wave",name:"Wave CI",class:"operator-wave",logoText:"WAVE"},{id:"orange",name:"Orange Money",class:"operator-orange",logoText:"OM"},{id:"mtn",name:"MTN MoMo",class:"operator-mtn",logoText:"MOMO"},{id:"moov",name:"Moov Money",class:"operator-moov",logoText:"MOOV"}];function ke(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("pending_ticket")||sessionStorage.getItem("current_ticket")||"null"),e=M({label:"Modifier mon trajet",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const i=document.createElement("div");return i.className="card-blue",i.style.maxWidth="500px",i.style.margin="var(--spacing-8) auto",i.style.textAlign="center",i.innerHTML=`
      <h2>Aucun trajet en attente de paiement</h2>
      <p>Veuillez d'abord sélectionner un départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">Choisir un départ</a>
    `,t.appendChild(i),t}let r=_[0].id;const s=document.createElement("div");s.className="card-blue auth-card",s.style.maxWidth="560px",s.style.margin="var(--spacing-6) auto";function o(){s.innerHTML=`
      <div class="auth-header">
        <h1 class="auth-title">Règlement du Ticket</h1>
        <p class="auth-subtitle">Sélectionnez votre moyen de paiement Mobile Money en Côte d'Ivoire.</p>
      </div>

      <!-- Récapitulatif du trajet -->
      <div style="background-color: rgba(255, 255, 255, 0.05); padding: var(--spacing-4); border-radius: var(--radius-md); margin-bottom: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Trajet sélectionné :</span>
          <strong style="color: #60a5fa;">${a.departureCity} ➔ ${a.arrivalCity}</strong>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2);">
          <span>Départ :</span>
          <strong>${a.departureRank} (${a.departureTime})</strong>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: var(--spacing-2);">
          <span style="font-weight: 700;">Montant total :</span>
          <strong style="color: #fbbf24; font-size: var(--font-size-lg);">${a.priceCfa.toLocaleString("fr-FR")} FCFA</strong>
        </div>
      </div>

      <!-- Sélecteur d'opérateur Mobile Money -->
      <label class="form-label">Opérateur Mobile Money :</label>
      <div class="payment-methods-grid">
        ${_.map(n=>`
          <div class="payment-method-card ${r===n.id?"active":""}" data-op-id="${n.id}">
            <div class="operator-icon-badge ${n.class}">${n.logoText}</div>
            <span class="operator-name">${n.name}</span>
          </div>
        `).join("")}
      </div>

      <form id="payment-form" class="auth-form" style="margin-top: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="pay-phone">Numéro de débit Mobile Money</label>
          <input 
            type="tel" 
            id="pay-phone" 
            class="form-input" 
            placeholder="Ex : +225 07 01 02 03 04" 
            value="${a.passengerPhone&&a.passengerPhone!=="Non renseigné"?a.passengerPhone:""}" 
            required 
          />
        </div>

        <button type="submit" class="btn-card-white" id="btn-submit-pay" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
          <span>Payer ${a.priceCfa.toLocaleString("fr-FR")} FCFA</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </form>
    `,s.querySelectorAll(".payment-method-card").forEach(n=>{n.addEventListener("click",()=>{r=n.getAttribute("data-op-id"),o()})});const i=s.querySelector("#payment-form");i.addEventListener("submit",async n=>{n.preventDefault();const u=i.querySelector("#btn-submit-pay"),b=i.querySelector("#pay-phone"),v=b?b.value.trim():a.passengerPhone;u.disabled=!0,u.innerHTML="<span>Validation auprès de l'opérateur...</span>";const h=_.find(l=>l.id===r);try{const l=await F.initiatePayment({bookingRef:a.bookingRef,operatorId:r,phone:v,amountCfa:a.priceCfa,passengerName:a.passengerName}),d={...a,passengerPhone:v,paymentMethod:h.name,paymentStatus:"PAID",paymentTransactionId:l.transaction?l.transaction.transactionId:`TXN-${r.toUpperCase()}-${Date.now().toString().slice(-6)}`,paymentDate:new Date().toISOString()},g=JSON.parse(localStorage.getItem("user_tickets_history")||"[]");g.unshift(d),localStorage.setItem("user_tickets_history",JSON.stringify(g)),sessionStorage.setItem("current_ticket",JSON.stringify(d)),window.location.hash="#/confirmation"}catch{u.disabled=!1,u.innerHTML="<span>Réessayer le paiement</span>"}})}return o(),t.appendChild(s),t}function we(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_ticket")||"null"),e=M({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});if(t.appendChild(e),!a){const o=document.createElement("div");return o.className="card-blue",o.style.maxWidth="550px",o.style.margin="var(--spacing-8) auto",o.style.textAlign="center",o.innerHTML=`
      <h2 style="margin-bottom: var(--spacing-4);">Aucune réservation trouvée</h2>
      <p>Veuillez d'abord sélectionner un trajet et valider votre départ.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Rechercher un départ
      </a>
    `,t.appendChild(o),t}const r=document.createElement("div");r.className="card-blue ticket-container",r.innerHTML=`
    <div class="ticket-header-band">
      <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: var(--spacing-1);">
        🎉 Réservation & Paiement Confirmés !
      </h2>
      <span style="color: rgba(255, 255, 255, 0.95); font-size: var(--font-size-sm); font-weight: 700;">
        Réf Billet Officiel : ${a.bookingRef}
      </span>
    </div>

    <div class="ticket-body">
      <!-- QR Code de contrôle avec effet de scan -->
      <div class="ticket-qr-mock" style="position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
        <svg viewBox="0 0 24 24" width="90" height="90" fill="#0f172a">
          <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zm2 2v4h4v-4zm10 0h2v2h-2zm4 0h4v6h-4zm-4 4h2v2h-2zm2-2h2v2h-2zm-6-2h2v2h-2zm0 4h2v2h-2z"/>
        </svg>
      </div>

      <div style="text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: var(--spacing-4);">
        <h3 style="font-size: var(--font-size-2xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${a.departureCity} ➔ ${a.arrivalCity}
        </h3>
        <p style="color: #cbd5e1; font-size: var(--font-size-sm); margin-bottom: 0;">
          ${a.departureRank} • Départ prévu à <strong>${a.departureTime}</strong>
        </p>
      </div>

      <!-- Badge de règlement Mobile Money sécurisé -->
      <div style="background-color: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.35); border-radius: var(--radius-md); padding: var(--spacing-3) var(--spacing-4); margin: var(--spacing-2) 0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-2);">
        <div>
          <span style="color: #34d399; font-weight: 700; font-size: var(--font-size-sm); display: block;">
            ✓ Réglé avec succès par ${a.paymentMethod||"Mobile Money"}
          </span>
          <span style="font-size: var(--font-size-xs); color: #94a3b8;">
            Transaction : <strong>${a.paymentTransactionId||"TXN-DIRECT-VAL"}</strong>
          </span>
        </div>
        <div style="text-align: right;">
          <span style="color: #fbbf24; font-weight: 800; font-size: var(--font-size-base);">
            ${(a.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
          </span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm);">
        <div>
          <span style="color: var(--color-text-muted); display: block;">Passager :</span>
          <strong style="color: #ffffff;">${a.passengerName}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Téléphone débité :</span>
          <strong style="color: #ffffff;">${a.passengerPhone}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Siège Réservé :</span>
          <strong style="color: #fbbf24; font-size: var(--font-size-base);">💺 N° ${a.seatNumber||"14"} (${a.seatType||"Fenêtre"})</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Compagnie :</span>
          <strong style="color: #ffffff;">${a.company}</strong>
        </div>
        <div>
          <span style="color: var(--color-text-muted); display: block;">Statut embarquement :</span>
          <strong style="color: #34d399;">VALIDE / EMBARQUEMENT AUTORISÉ</strong>
        </div>
      </div>

      <div class="station-direction-box" style="margin: var(--spacing-2) 0;">
        <strong style="color: #93c5fd; display: block; margin-bottom: var(--spacing-1);">
          📍 Point d'embarquement : ${a.stationName}
        </strong>
        <p style="margin-bottom: var(--spacing-2); font-size: var(--font-size-xs); color: #ffffff;">
          ${a.stationAddress}
        </p>
        <p style="margin-bottom: 0; font-size: var(--font-size-xs); color: #cbd5e1;">
          <em>${a.directions}</em>
        </p>
      </div>

      <div style="display: flex; gap: var(--spacing-3); margin-top: var(--spacing-4); flex-wrap: wrap;">
        <button type="button" class="btn-card-white" id="btn-print-ticket" style="flex: 1; min-width: 160px;">
          <span>🖨️ Imprimer mon billet</span>
        </button>
        <a href="#/history" class="btn-card-white" style="flex: 1; min-width: 160px; text-align: center;">
          <span>🎟️ Mes Billets</span>
        </a>
        <a href="#/profile" class="btn-primary-blue" style="flex: 1; min-width: 160px; text-align: center;">
          <span>👤 Mon Profil</span>
        </a>
      </div>
    </div>
  `;const s=r.querySelector("#btn-print-ticket");return s&&s.addEventListener("click",()=>{window.print()}),t.appendChild(r),requestAnimationFrame(()=>{ae(),B(t),O(t)}),t}function Ce(){const t=document.createElement("div");t.className="main-content";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Voyageur", "phone": "" }'),e=document.createElement("div");e.className="booking-topbar",e.innerHTML=`
    <div class="user-badge-info">
      <div class="user-avatar">${a.fullname.charAt(0).toUpperCase()}</div>
      <div>
        <div style="font-weight: 700; color: var(--color-text-primary); font-size: var(--font-size-base);">${a.fullname}</div>
        <div style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Espace Mes Billets & Voyages</div>
      </div>
    </div>
    <div style="display: flex; gap: var(--spacing-2); align-items: center; flex-wrap: wrap;">
      <a href="#/profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3);">
        👤 Mon Profil
      </a>
      <a href="#/app" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🚌 Nouveau Trajet
      </a>
    </div>
  `,t.appendChild(e);const r=M({label:"Retour à l'espace réservation",onClick:()=>{window.location.hash="#/app"}});t.appendChild(r);const s=document.createElement("div");if(s.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",s.innerHTML=`
    <h1>Mes Billets & Historique des Voyages</h1>
    <p>Retrouvez l'ensemble de vos réservations, vérifiez l'état de vos départs et réimprimez vos tickets.</p>
  `,t.appendChild(s),history.length===0){const i=document.createElement("div");return i.className="card-blue",i.style.maxWidth="600px",i.style.textAlign="center",i.style.padding="var(--spacing-8)",i.innerHTML=`
      <div style="font-size: 3rem; margin-bottom: var(--spacing-4);">🎟️</div>
      <h2 style="font-size: var(--font-size-2xl); margin-bottom: var(--spacing-2);">Aucun voyage enregistré</h2>
      <p>Vous n'avez pas encore réservé de trajet sur la plateforme.</p>
      <a href="#/app" class="btn-card-white" style="margin-top: var(--spacing-4);">
        Réserver mon premier départ
      </a>
    `,t.appendChild(i),t}const o=document.createElement("div");return o.className="history-list",history.forEach(i=>{const n=document.createElement("div");n.className="card-blue history-item-card",n.innerHTML=`
      <div>
        <div style="display: flex; align-items: center; gap: var(--spacing-3); margin-bottom: var(--spacing-2);">
          <span class="history-badge-status status-paid">✓ Payé (${i.paymentMethod||"Mobile Money"})</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Réf : ${i.bookingRef}</span>
        </div>
        <h3 style="font-size: var(--font-size-xl); color: #60a5fa; margin-bottom: var(--spacing-1);">
          ${i.departureCity} ➔ ${i.arrivalCity}
        </h3>
        <p style="font-size: var(--font-size-sm); margin-bottom: 0; color: var(--color-text-secondary);">
          📅 Départ : <strong>${i.departureTime}</strong> (${i.departureRank}) • Gare : ${i.stationName}
        </p>
      </div>

      <div style="display: flex; align-items: center; gap: var(--spacing-4);">
        <span style="font-size: var(--font-size-lg); font-weight: 700; color: #fbbf24;">
          ${(i.priceCfa||7e3).toLocaleString("fr-FR")} FCFA
        </span>
        <button type="button" class="btn-card-white" data-ticket-ref="${i.bookingRef}">
          <span>Voir le billet</span>
        </button>
      </div>
    `;const u=n.querySelector(`[data-ticket-ref="${i.bookingRef}"]`);u&&u.addEventListener("click",()=>{sessionStorage.setItem("current_ticket",JSON.stringify(i)),window.location.hash="#/confirmation"}),o.appendChild(n)}),t.appendChild(o),t}function H(t,a=!1){let e=document.getElementById("profile-toast-notification");e||(e=document.createElement("div"),e.id="profile-toast-notification",e.className="profile-toast",document.body.appendChild(e)),e.className=`profile-toast ${a?"error":""} show`,e.innerHTML=`
    <span>${a?"⚠️":"✓"}</span>
    <span>${t}</span>
  `,setTimeout(()=>{e.classList.remove("show")},3500)}function Se(t){if(!t||t.length<6)return"weak";const a=/[A-Z]/.test(t),e=/[a-z]/.test(t),r=/[0-9]/.test(t),s=/[^A-Za-z0-9]/.test(t),o=[a,e,r,s,t.length>=8].filter(Boolean).length;return o>=4?"strong":o>=2?"medium":"weak"}function ze(){const t=document.createElement("div");t.className="main-content profile-container";const a=sessionStorage.getItem("current_user"),e=a?JSON.parse(a):{fullname:"Kouassi Jean-Philippe",username:"kouassi_jp",phone:"+225 07 12 34 56 78",email:"jean.kouassi@transport.ci",city:"Abidjan",emergencyContactName:"Kouassi Marie (Épouse)",emergencyContactPhone:"+225 05 98 76 54 32",preferredPayment:"wave",preferredCompany:"UTB",seatPreference:"fenetre",smsAlerts:!0,memberSince:"Janvier 2026"};e.username=e.username||e.fullname.toLowerCase().replace(/[\s-]/g,"_"),e.city=e.city||"Abidjan",e.emergencyContactName=e.emergencyContactName||"",e.emergencyContactPhone=e.emergencyContactPhone||"",e.preferredPayment=e.preferredPayment||"wave",e.preferredCompany=e.preferredCompany||"Toutes compagnies",e.seatPreference=e.seatPreference||"fenetre",e.smsAlerts=e.smsAlerts!==void 0?e.smsAlerts:!0,e.memberSince=e.memberSince||"2026";const r=JSON.parse(localStorage.getItem("user_tickets_history")||"[]"),s=r.length,o=r.reduce((y,x)=>y+(x.priceCfa||0),0),i=s*150+500,n=s>=5?"Membre Gold ⭐":s>=2?"Membre Silver ✨":"Passager Certifié ✓",u=M({label:"Retour aux trajets",onClick:()=>{window.location.hash="#/app"}});t.appendChild(u);const b=document.createElement("div");b.className="profile-hero-card",b.innerHTML=`
    <div class="profile-user-details">
      <div class="profile-avatar-large" id="profile-avatar-display">
        ${e.fullname.charAt(0).toUpperCase()}
      </div>
      <div class="profile-name-group">
        <h1 id="profile-hero-name">
          ${e.fullname}
          <span class="profile-username-badge" id="profile-hero-username">@${e.username}</span>
        </h1>
        <div class="profile-meta-text">
          <span class="profile-status-badge">${n}</span>
          <span>📍 <strong id="profile-hero-city">${e.city}</strong></span>
          <span>📞 <span id="profile-hero-phone">${e.phone}</span></span>
        </div>
      </div>
    </div>

    <div class="profile-hero-actions">
      <a href="#/history" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🎟️ Mes Billets (${s})
      </a>
      <a href="#/app" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
        🚌 Réserver
      </a>
      <button type="button" id="btn-logout-profile" class="btn-card-white" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-3); color: #ef4444; border-color: rgba(239, 68, 68, 0.4);">
        🚪 Déconnexion
      </button>
    </div>
  `,t.appendChild(b);const v=document.createElement("div");v.className="profile-stats-grid",v.innerHTML=`
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎟️</div>
      <div class="profile-stat-value">${s}</div>
      <div class="profile-stat-label">Voyages Effectués</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">💰</div>
      <div class="profile-stat-value">${o.toLocaleString("fr-FR")} <span style="font-size: var(--font-size-xs);">FCFA</span></div>
      <div class="profile-stat-label">Total Dépensé</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🎁</div>
      <div class="profile-stat-value">${i}</div>
      <div class="profile-stat-label">Points Fidélité</div>
    </div>
    <div class="profile-stat-card">
      <div class="profile-stat-icon">🏆</div>
      <div class="profile-stat-value" style="font-size: var(--font-size-lg); color: #34d399;">${n}</div>
      <div class="profile-stat-label">Statut Voyageur</div>
    </div>
  `,t.appendChild(v);const h=document.createElement("div");h.className="profile-grid-layout";const l=document.createElement("div");l.className="profile-section-card",l.innerHTML=`
    <div class="profile-section-header">
      <div class="profile-section-icon">👤</div>
      <div>
        <h2 class="profile-section-title">Informations Personnelles</h2>
        <p class="profile-section-desc">Gérez votre identité et vos coordonnées sur la plateforme.</p>
      </div>
    </div>

    <form id="form-personal-info" class="auth-form" novalidate>
      <div class="form-group">
        <label for="prof-username" class="form-label">Nom d'utilisateur (Pseudo)</label>
        <div style="position: relative;">
          <input 
            type="text" 
            id="prof-username" 
            name="username" 
            class="form-input" 
            value="${e.username}" 
            required 
            placeholder="Ex : kouassi_jean"
            autocomplete="username"
          />
        </div>
        <span class="form-feedback" id="fb-prof-username">Ce nom sera affiché publiquement sur votre compte.</span>
      </div>

      <div class="form-group">
        <label for="prof-fullname" class="form-label">Nom complet & Prénoms</label>
        <input 
          type="text" 
          id="prof-fullname" 
          name="fullname" 
          class="form-input" 
          value="${e.fullname}" 
          required 
          placeholder="Ex : Kouassi Jean-Marc"
          autocomplete="name"
        />
        <span class="form-feedback" id="fb-prof-fullname">Nom utilisé pour l'émission officielle de vos billets.</span>
      </div>

      <div class="form-group">
        <label for="prof-phone" class="form-label">Numéro de téléphone principal</label>
        <input 
          type="tel" 
          id="prof-phone" 
          name="phone" 
          class="form-input" 
          value="${e.phone}" 
          required 
          placeholder="Ex : +225 07 12 34 56 78"
          autocomplete="tel"
        />
        <span class="form-feedback" id="fb-prof-phone">Utilisé pour les réceptions Mobile Money et notifications de départ.</span>
      </div>

      <div class="form-group">
        <label for="prof-email" class="form-label">Adresse courriel (E-mail)</label>
        <input 
          type="email" 
          id="prof-email" 
          name="email" 
          class="form-input" 
          value="${e.email}" 
          placeholder="Ex : jean.kouassi@exemple.ci"
          autocomplete="email"
        />
      </div>

      <div class="form-group">
        <label for="prof-city" class="form-label">Ville de résidence principale</label>
        <select id="prof-city" name="city" class="form-select">
          ${T.map(y=>`<option value="${y}" ${y===e.city?"selected":""}>${y}</option>`).join("")}
        </select>
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: var(--spacing-4);">
        <span>Enregistrer mes coordonnées</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `,h.appendChild(l);const d=document.createElement("div");d.className="profile-section-card",d.innerHTML=`
    <div class="profile-section-header">
      <div class="profile-section-icon">🔒</div>
      <div>
        <h2 class="profile-section-title">Sécurité & Mot de Passe</h2>
        <p class="profile-section-desc">Modifiez votre mot de passe pour sécuriser votre compte.</p>
      </div>
    </div>

    <form id="form-password-change" class="auth-form" novalidate>
      <div class="form-group">
        <label for="prof-old-pwd" class="form-label">Ancien mot de passe</label>
        <input 
          type="password" 
          id="prof-old-pwd" 
          name="oldPassword" 
          class="form-input" 
          placeholder="Votre mot de passe actuel" 
          required 
          autocomplete="current-password"
        />
        <span class="form-feedback" id="fb-prof-old-pwd">Veuillez renseigner votre mot de passe actuel.</span>
      </div>

      <div class="form-group">
        <label for="prof-new-pwd" class="form-label">Nouveau mot de passe</label>
        <input 
          type="password" 
          id="prof-new-pwd" 
          name="newPassword" 
          class="form-input" 
          placeholder="Au moins 6 caractères" 
          required 
          autocomplete="new-password"
        />
        <div class="password-strength-container">
          <div class="password-strength-bar">
            <div id="pwd-strength-fill" class="password-strength-fill"></div>
          </div>
          <span id="pwd-strength-text" class="password-strength-label">Sécurité : Entrez un mot de passe</span>
        </div>
      </div>

      <div class="form-group">
        <label for="prof-confirm-pwd" class="form-label">Confirmer le nouveau mot de passe</label>
        <input 
          type="password" 
          id="prof-confirm-pwd" 
          name="confirmPassword" 
          class="form-input" 
          placeholder="Retapez le nouveau mot de passe" 
          required 
          autocomplete="new-password"
        />
        <span class="form-feedback" id="fb-prof-confirm-pwd">Les mots de passe ne correspondent pas.</span>
      </div>

      <div style="background: rgba(37, 99, 235, 0.1); border-left: 3px solid #3b82f6; border-radius: var(--radius-sm); padding: var(--spacing-3); font-size: var(--font-size-xs); color: var(--color-text-secondary); margin-bottom: var(--spacing-2);">
        🛡️ Utilisez au moins 6 caractères avec des chiffres et lettres pour renforcer la sécurité.
      </div>

      <button type="submit" class="btn-card-white" style="width: 100%; margin-top: auto;">
        <span>Mettre à jour le mot de passe</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </button>
    </form>
  `,h.appendChild(d);const g=document.createElement("div");g.className="profile-section-card profile-card-full",g.innerHTML=`
    <div class="profile-section-header">
      <div class="profile-section-icon">⚙️</div>
      <div>
        <h2 class="profile-section-title">Préférences de Voyage & Contact d'Urgence</h2>
        <p class="profile-section-desc">Personnalisez votre expérience de réservation et sécurisez vos trajets en autocar.</p>
      </div>
    </div>

    <form id="form-preferences" class="auth-form" novalidate>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--spacing-4);">
        <!-- Contact d'urgence -->
        <div class="form-group">
          <label for="prof-emergency-name" class="form-label">Contact d'urgence (Nom & Lien de parenté)</label>
          <input 
            type="text" 
            id="prof-emergency-name" 
            name="emergencyContactName" 
            class="form-input" 
            value="${e.emergencyContactName}" 
            placeholder="Ex : Kouassi Marie (Épouse / Frère)" 
          />
          <span class="form-feedback">Personne à joindre en cas d'imprévu durant le convoi.</span>
        </div>

        <div class="form-group">
          <label for="prof-emergency-phone" class="form-label">Téléphone du contact d'urgence</label>
          <input 
            type="tel" 
            id="prof-emergency-phone" 
            name="emergencyContactPhone" 
            class="form-input" 
            value="${e.emergencyContactPhone}" 
            placeholder="Ex : +225 05 98 76 54 32" 
          />
          <span class="form-feedback">Numéro joignable 24h/24.</span>
        </div>

        <!-- Mode de paiement par défaut -->
        <div class="form-group">
          <label class="form-label">Mode de paiement Mobile Money favori</label>
          <div class="operator-radio-group">
            <label class="operator-radio-label ${e.preferredPayment==="wave"?"selected":""}">
              <input type="radio" name="preferredPayment" value="wave" ${e.preferredPayment==="wave"?"checked":""} />
              <span>🌊 Wave</span>
            </label>
            <label class="operator-radio-label ${e.preferredPayment==="orange"?"selected":""}">
              <input type="radio" name="preferredPayment" value="orange" ${e.preferredPayment==="orange"?"checked":""} />
              <span>🍊 Orange</span>
            </label>
            <label class="operator-radio-label ${e.preferredPayment==="mtn"?"selected":""}">
              <input type="radio" name="preferredPayment" value="mtn" ${e.preferredPayment==="mtn"?"checked":""} />
              <span>💛 MTN</span>
            </label>
            <label class="operator-radio-label ${e.preferredPayment==="moov"?"selected":""}">
              <input type="radio" name="preferredPayment" value="moov" ${e.preferredPayment==="moov"?"checked":""} />
              <span>🔵 Moov</span>
            </label>
          </div>
        </div>

        <!-- Préférence de siège & Compagnie -->
        <div class="form-group">
          <label for="prof-seat-pref" class="form-label">Préférence d'emplacement de siège</label>
          <select id="prof-seat-pref" name="seatPreference" class="form-select">
            <option value="fenetre" ${e.seatPreference==="fenetre"?"selected":""}>🪟 Côté Fenêtre (Vue panoramique)</option>
            <option value="couloir" ${e.seatPreference==="couloir"?"selected":""}>🚶 Côté Couloir (Accès aisé)</option>
            <option value="avant" ${e.seatPreference==="avant"?"selected":""}>🚌 À l'avant du car (Débarquement rapide)</option>
            <option value="peu_importe" ${e.seatPreference==="peu_importe"?"selected":""}>✓ Sans préférence particulière</option>
          </select>
        </div>
      </div>

      <!-- Option notifications SMS -->
      <div style="margin-top: var(--spacing-4); padding: var(--spacing-3); background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: var(--spacing-3);">
        <div>
          <strong style="color: #ffffff; font-size: var(--font-size-sm); display: block;">Notifications SMS & WhatsApp</strong>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-muted);">Recevoir un rappel automatique 1 heure avant l'embarquement à la gare.</span>
        </div>
        <input type="checkbox" id="prof-sms-alerts" name="smsAlerts" ${e.smsAlerts?"checked":""} style="width: 20px; height: 20px; cursor: pointer;" />
      </div>

      <button type="submit" class="btn-card-white" style="margin-top: var(--spacing-4); align-self: flex-start; padding: var(--spacing-3) var(--spacing-6);">
        <span>Sauvegarder toutes mes préférences</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </button>
    </form>
  `,h.appendChild(g),t.appendChild(h);const k=l.querySelector("#form-personal-info");k.addEventListener("submit",y=>{y.preventDefault();const x=k.querySelector("#prof-username").value.trim(),S=k.querySelector("#prof-fullname").value.trim(),$=k.querySelector("#prof-phone").value.trim(),f=k.querySelector("#prof-email").value.trim(),z=k.querySelector("#prof-city").value;let q=!0;x?k.querySelector("#fb-prof-username").className="form-feedback":(k.querySelector("#fb-prof-username").className="form-feedback error",q=!1),S?k.querySelector("#fb-prof-fullname").className="form-feedback":(k.querySelector("#fb-prof-fullname").className="form-feedback error",q=!1),!$||$.length<8?(k.querySelector("#fb-prof-phone").className="form-feedback error",q=!1):k.querySelector("#fb-prof-phone").className="form-feedback",q&&(e.username=x,e.fullname=S,e.phone=$,e.email=f,e.city=z,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),t.querySelector("#profile-hero-name").innerHTML=`
        ${e.fullname}
        <span class="profile-username-badge" id="profile-hero-username">@${e.username}</span>
      `,t.querySelector("#profile-avatar-display").textContent=e.fullname.charAt(0).toUpperCase(),t.querySelector("#profile-hero-city").textContent=e.city,t.querySelector("#profile-hero-phone").textContent=e.phone,H("Vos informations personnelles ont été mises à jour avec succès !"))});const P=d.querySelector("#prof-new-pwd"),E=d.querySelector("#pwd-strength-fill"),m=d.querySelector("#pwd-strength-text");P.addEventListener("input",()=>{const y=P.value;if(!y){E.className="password-strength-fill",m.textContent="Sécurité : Entrez un mot de passe";return}const x=Se(y);E.className=`password-strength-fill ${x}`,x==="strong"?(m.textContent="Sécurité : Mot de passe robuste et sécurisé ✓",m.style.color="#34d399"):x==="medium"?(m.textContent="Sécurité : Niveau moyen (ajoutez des chiffres ou symboles)",m.style.color="#fbbf24"):(m.textContent="Sécurité : Mot de passe trop court ou faible",m.style.color="#ef4444")});const c=d.querySelector("#form-password-change");c.addEventListener("submit",y=>{y.preventDefault();const x=c.querySelector("#prof-old-pwd").value,S=c.querySelector("#prof-new-pwd").value,$=c.querySelector("#prof-confirm-pwd").value;let f=!0;x?c.querySelector("#fb-prof-old-pwd").className="form-feedback":(c.querySelector("#fb-prof-old-pwd").className="form-feedback error",f=!1),S.length<6&&(m.textContent="Erreur : Le nouveau mot de passe doit comporter au moins 6 caractères.",m.style.color="#ef4444",f=!1),S!==$?(c.querySelector("#fb-prof-confirm-pwd").className="form-feedback error",f=!1):c.querySelector("#fb-prof-confirm-pwd").className="form-feedback",f&&(e.passwordUpdated=new Date().toISOString(),sessionStorage.setItem("current_user",JSON.stringify(e)),c.reset(),E.className="password-strength-fill",m.textContent="Sécurité : Entrez un mot de passe",m.style.color="var(--color-text-muted)",H("Votre mot de passe a été modifié avec succès !"))});const p=g.querySelector("#form-preferences");p.querySelectorAll(".operator-radio-label").forEach(y=>{y.addEventListener("click",()=>{p.querySelectorAll(".operator-radio-label").forEach(S=>S.classList.remove("selected")),y.classList.add("selected");const x=y.querySelector("input");x&&(x.checked=!0)})}),p.addEventListener("submit",y=>{y.preventDefault();const x=p.querySelector("#prof-emergency-name").value.trim(),S=p.querySelector("#prof-emergency-phone").value.trim(),$=p.querySelector('input[name="preferredPayment"]:checked'),f=$?$.value:"wave",z=p.querySelector("#prof-seat-pref").value,q=p.querySelector("#prof-sms-alerts").checked;e.emergencyContactName=x,e.emergencyContactPhone=S,e.preferredPayment=f,e.seatPreference=z,e.smsAlerts=q,sessionStorage.setItem("current_user",JSON.stringify(e)),localStorage.setItem("saved_passenger_profile",JSON.stringify(e)),H("Vos préférences de voyage et contact d'urgence ont été enregistrés !")});const w=b.querySelector("#btn-logout-profile");return w&&w.addEventListener("click",()=>{sessionStorage.removeItem("current_user"),window.location.hash="#/"}),t}const J=[{id:"doc",name:"Document / Pli Express",icon:"📄",desc:"Courrier, dossiers administratifs, passeports, diplômes (< 1 kg)",basePrice:1500,maxWeight:1},{id:"small",name:"Petit Colis",icon:"📦",desc:"Vêtements, petits paquets, accessoires (1 à 5 kg)",basePrice:2500,maxWeight:5},{id:"medium",name:"Sac / Sacoche Moyenne",icon:"🧳",desc:"Sacs de voyage, cartons moyens, pièces détachées (5 à 15 kg)",basePrice:4e3,maxWeight:15},{id:"large",name:"Gros Carton / Vivres",icon:"📦📦",desc:"Cartons d'ignames, sacs de riz, marchandises en vrac (15 à 30 kg)",basePrice:6e3,maxWeight:30},{id:"heavy",name:"Fret Lourd / Électroménager",icon:"📺",desc:"Télévisions, moteurs, colis volumineux (30 à 50 kg)",basePrice:9e3,maxWeight:50},{id:"fresh",name:"Denrées & Produits Frais",icon:"🧊",desc:"Poissons fumés, attiéké, fruits avec priorité d'embarquement",basePrice:5e3,maxWeight:25}];function j(t,a=2,e={}){let s=(J.find(o=>o.id===t)||J[1]).basePrice;return a>10&&(s+=(a-10)*150),e.isFragile&&(s+=500),e.isInsured&&(s+=1e3),Math.round(s)}function Ee(t,a){const e=(t||"ABJ").slice(0,3).toUpperCase(),r=(a||"BDK").slice(0,3).toUpperCase(),s=Math.floor(1e5+Math.random()*9e5);return`COLIS-${e}-${r}-${s}`}function $e(){return Math.floor(1e3+Math.random()*9e3).toString()}function Ne(){const t=document.createElement("div");t.className="main-content courier-container";const a=JSON.parse(sessionStorage.getItem("current_user")||'{"fullname": "Expéditeur Express", "phone": "+225 07 12 34 56 78" }');let e="send",r="small",s=3,o=!1,i=!1,n="wave",u=null;const b=U();t.appendChild(b);const v=M({label:"Retour aux départs voyageurs",onClick:()=>{window.location.hash="#/app"}});t.appendChild(v);const h=document.createElement("div");h.className="courier-hero-banner",h.innerHTML=`
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
  `,t.appendChild(h);const l=document.createElement("div");l.className="courier-tabs-nav",l.innerHTML=`
    <button type="button" class="courier-tab-btn active" data-tab="send">
      <span>📤 Expédier un Colis</span>
    </button>
    <button type="button" class="courier-tab-btn" data-tab="track">
      <span>🔍 Suivre un Envoi</span>
    </button>
    <button type="button" class="courier-tab-btn" data-tab="history">
      <span>📋 Mes Expéditions</span>
    </button>
  `,t.appendChild(l);const d=document.createElement("div");d.id="courier-tab-content",t.appendChild(d);function g(){l.querySelectorAll(".courier-tab-btn").forEach(c=>{c.classList.toggle("active",c.getAttribute("data-tab")===e)}),e==="send"?k():e==="track"?P():e==="history"?E():e==="receipt"&&m(),requestAnimationFrame(()=>{B(d),O(d)})}function k(){const c=j(r,s,{isFragile:o,isInsured:i});d.innerHTML=`
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
                <input type="text" id="sender-name" class="form-input" value="${a.fullname}" required placeholder="Ex : Kouassi Jean-Marc" />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: var(--font-size-xs);">Téléphone pour suivi SMS</label>
                <input type="tel" id="sender-phone" class="form-input" value="${a.phone}" required placeholder="Ex : +225 07 12 34 56 78" />
              </div>
              <div class="form-group" style="margin-bottom: 0;">
                <label class="form-label" style="font-size: var(--font-size-xs);">Ville & Gare de dépôt</label>
                <select id="sender-city" class="form-select">
                  ${T.map(f=>`<option value="${f}" ${f==="Abidjan"?"selected":""}>${f} (Gare Centrale)</option>`).join("")}
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
                  ${T.map(f=>`<option value="${f}" ${f==="Bondoukou"?"selected":""}>${f} (Gare Centrale)</option>`).join("")}
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
              ${J.map(f=>`
                <div class="package-type-card ${r===f.id?"selected":""}" data-cat-id="${f.id}">
                  <div class="package-type-icon">${f.icon}</div>
                  <div class="package-type-name">${f.name}</div>
                  <div class="package-type-price">Dès ${f.basePrice.toLocaleString("fr-FR")} FCFA</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- 3. Curseur interactif de poids et description -->
          <div class="weight-slider-container">
            <div class="weight-display-badge">
              <span style="font-weight: 700; color: #ffffff; font-size: var(--font-size-sm);">⚖️ Poids estimé de la marchandise :</span>
              <strong id="weight-label" style="color: #60a5fa; font-size: var(--font-size-lg);">${s} kg</strong>
            </div>
            <input type="range" id="weight-slider" class="weight-range-input" min="1" max="50" value="${s}" />
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
              <input type="checkbox" id="check-fragile" ${o?"checked":""} style="width: 18px; height: 18px; cursor: pointer;" />
              <div>
                <strong style="color: #fbbf24; font-size: var(--font-size-xs); display: block;">⚠️ Marchandise Fragile (+500 F)</strong>
                <span style="font-size: 10px; color: var(--color-text-muted);">Étiquetage spécial et manipulation prioritaire</span>
              </div>
            </label>

            <label style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md); padding: var(--spacing-3); display: flex; align-items: center; gap: var(--spacing-3); cursor: pointer;">
              <input type="checkbox" id="check-insurance" ${i?"checked":""} style="width: 18px; height: 18px; cursor: pointer;" />
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
                  ${c.toLocaleString("fr-FR")} FCFA
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
                <label class="operator-radio-label ${n==="wave"?"selected":""}">
                  <input type="radio" name="courier-op" value="wave" ${n==="wave"?"checked":""} />
                  <span>🌊 Wave</span>
                </label>
                <label class="operator-radio-label ${n==="orange"?"selected":""}">
                  <input type="radio" name="courier-op" value="orange" ${n==="orange"?"checked":""} />
                  <span>🍊 Orange Money</span>
                </label>
                <label class="operator-radio-label ${n==="mtn"?"selected":""}">
                  <input type="radio" name="courier-op" value="mtn" ${n==="mtn"?"checked":""} />
                  <span>💛 MTN MoMo</span>
                </label>
                <label class="operator-radio-label ${n==="moov"?"selected":""}">
                  <input type="radio" name="courier-op" value="moov" ${n==="moov"?"checked":""} />
                  <span>🔵 Moov Flooz</span>
                </label>
              </div>
            </div>

            <button type="submit" class="btn-card-white" style="width: 100%; padding: var(--spacing-4); font-size: var(--font-size-base);">
              <span>Valider l'envoi & Payer (${c.toLocaleString("fr-FR")} FCFA) ➔</span>
            </button>
          </div>
        </form>
      </div>
    `;const p=d.querySelector("#form-send-package"),w=d.querySelector("#weight-slider"),y=d.querySelector("#weight-label"),x=d.querySelector("#courier-total-price");d.querySelectorAll(".package-type-card").forEach(f=>{f.addEventListener("click",()=>{C.play("click"),r=f.getAttribute("data-cat-id"),k()})}),w&&w.addEventListener("input",f=>{s=parseInt(f.target.value,10),y&&(y.textContent=`${s} kg`);const z=j(r,s,{isFragile:o,isInsured:i});x&&(x.textContent=`${z.toLocaleString("fr-FR")} FCFA`)});const S=d.querySelector("#check-fragile");S&&S.addEventListener("change",f=>{o=f.target.checked;const z=j(r,s,{isFragile:o,isInsured:i});x&&(x.textContent=`${z.toLocaleString("fr-FR")} FCFA`)});const $=d.querySelector("#check-insurance");$&&$.addEventListener("change",f=>{i=f.target.checked;const z=j(r,s,{isFragile:o,isInsured:i});x&&(x.textContent=`${z.toLocaleString("fr-FR")} FCFA`)}),d.querySelectorAll(".operator-radio-label").forEach(f=>{f.addEventListener("click",()=>{d.querySelectorAll(".operator-radio-label").forEach(z=>z.classList.remove("selected")),f.classList.add("selected"),n=f.querySelector("input").value})}),p.addEventListener("submit",f=>{f.preventDefault();const z=p.querySelector("#sender-name").value.trim(),q=p.querySelector("#sender-phone").value.trim(),D=p.querySelector("#sender-city").value,W=p.querySelector("#receiver-name").value.trim(),K=p.querySelector("#receiver-phone").value.trim(),V=p.querySelector("#receiver-city").value,Y=p.querySelector("#package-description").value.trim(),se=p.querySelector("#courier-departure-time").value;if(!z||!q||!W||!K||!Y){alert("Veuillez remplir toutes les informations obligatoires pour émettre le colis.");return}const oe=Ee(D,V),ie=$e(),ne=j(r,s,{isFragile:o,isInsured:i}),Q={trackingNumber:oe,secretPin:ie,senderName:z,senderPhone:q,senderCity:D,receiverName:W,receiverPhone:K,receiverCity:V,description:Y,departureTime:se,category:r,weightKg:s,isFragile:o,isInsured:i,priceCfa:ne,paymentOperator:n,createdAt:new Date().toISOString(),status:"EN_TRANSIT",stationDropName:`Gare Routière Centrale de ${D}`,stationPickupName:`Gare Routière Principale de ${V}`},X=JSON.parse(localStorage.getItem("user_couriers_history")||"[]");X.unshift(Q),localStorage.setItem("user_couriers_history",JSON.stringify(X)),u=Q,e="receipt",g(),ae()})}function P(){d.innerHTML=`
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
    `;const c=d.querySelector("#form-track-search"),p=d.querySelector("#tracking-input");c.addEventListener("submit",w=>{w.preventDefault(),C.play("click");const y=p.value.trim().toUpperCase();alert(`Recherche en cours pour le colis : ${y}. Statut : En cours d'acheminement sur l'axe interurbain.`)}),d.querySelectorAll(".quick-track-sample").forEach(w=>{w.addEventListener("click",()=>{p.value=w.getAttribute("data-code")})})}function E(){const c=JSON.parse(localStorage.getItem("user_couriers_history")||"[]");if(c.length===0){d.innerHTML=`
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
      `;const p=d.querySelector("#btn-goto-send");p&&p.addEventListener("click",()=>{e="send",g()});return}d.innerHTML=`
      <div style="display: flex; flex-direction: column; gap: var(--spacing-4);">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h2 style="font-size: var(--font-size-xl); margin-bottom: 0;">Mes Colis & Marchandises (${c.length})</h2>
          <button type="button" id="btn-new-package-top" class="btn-primary-blue" style="font-size: var(--font-size-xs); padding: var(--spacing-2) var(--spacing-4);">
            + Nouvel Envoi
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--spacing-3);">
          ${c.map(p=>`
            <div class="card-blue" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--spacing-3); padding: var(--spacing-4);">
              <div>
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                  <span class="profile-status-badge">✓ Payé (${p.paymentOperator.toUpperCase()})</span>
                  <strong style="color: #60a5fa; font-size: var(--font-size-sm);">${p.trackingNumber}</strong>
                  <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; padding: 2px 6px; border-radius: var(--radius-sm); font-size: 10px; font-weight: 700;">PIN: ${p.secretPin}</span>
                </div>
                <h3 style="font-size: var(--font-size-base); color: #ffffff; margin-bottom: 2px;">
                  ${p.senderCity} ➔ ${p.receiverCity} • <span style="color: #cbd5e1; font-weight: normal;">Destinataire : <strong>${p.receiverName}</strong> (${p.receiverPhone})</span>
                </h3>
                <p style="font-size: var(--font-size-xs); color: var(--color-text-muted); margin-bottom: 0;">
                  📦 ${p.description} (${p.weightKg} kg) • Convoi : ${p.departureTime}
                </p>
              </div>

              <div style="display: flex; align-items: center; gap: var(--spacing-3);">
                <span style="font-size: var(--font-size-lg); font-weight: 800; color: #fbbf24;">
                  ${p.priceCfa.toLocaleString("fr-FR")} FCFA
                </span>
                <button type="button" class="btn-card-white btn-view-receipt" data-tracking="${p.trackingNumber}">
                  <span>Voir Bordereau</span>
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,d.querySelector("#btn-new-package-top").addEventListener("click",()=>{e="send",g()}),d.querySelectorAll(".btn-view-receipt").forEach(p=>{p.addEventListener("click",()=>{const w=p.getAttribute("data-tracking"),y=c.find(x=>x.trackingNumber===w);y&&(u=y,e="receipt",g())})})}function m(){if(!u){e="send",g();return}const c=u,p=encodeURIComponent(`📦 BORDEREAU COLIS GARE EXPRESS
Bonjour ${c.receiverName},
Un colis vous a été expédié de ${c.senderCity} vers ${c.receiverCity} par ${c.senderName}.

📌 N° Suivi : ${c.trackingNumber}
🔑 CODE PIN SECRET DE RETRAIT : ${c.secretPin}
🏢 Point de retrait : ${c.stationPickupName}
⏰ Convoi de : ${c.departureTime}

Veuillez vous munir de votre pièce d'identité et de ce code PIN pour récupérer le colis.`);d.innerHTML=`
      <div class="card-blue courier-receipt-card">
        <div class="courier-receipt-header">
          <h2 style="color: #ffffff; font-size: var(--font-size-xl); margin-bottom: 2px;">
            ✓ BORDEREAU OFFICIEL D'EXPÉDITION COLIS
          </h2>
          <span style="color: rgba(255,255,255,0.9); font-size: var(--font-size-sm); font-weight: 700;">
            N° Suivi : ${c.trackingNumber}
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
            <div class="pin-code-large">${c.secretPin}</div>
            <span style="font-size: 11px; color: var(--color-text-secondary);">
              Exigé au guichet de destination avec la pièce d'identité du destinataire.
            </span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); font-size: var(--font-size-sm); margin: var(--spacing-4) 0;">
            <div>
              <span style="color: var(--color-text-muted); display: block; font-size: var(--font-size-xs);">Expéditeur :</span>
              <strong style="color: #ffffff;">${c.senderName}</strong>
              <div style="font-size: var(--font-size-xs); color: #cbd5e1;">📞 ${c.senderPhone}</div>
              <div style="font-size: var(--font-size-xs); color: #93c5fd;">📍 ${c.stationDropName}</div>
            </div>

            <div>
              <span style="color: var(--color-text-muted); display: block; font-size: var(--font-size-xs);">Destinataire :</span>
              <strong style="color: #ffffff;">${c.receiverName}</strong>
              <div style="font-size: var(--font-size-xs); color: #cbd5e1;">📞 ${c.receiverPhone}</div>
              <div style="font-size: var(--font-size-xs); color: #93c5fd;">📍 ${c.stationPickupName}</div>
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: var(--spacing-3); font-size: var(--font-size-xs); margin-bottom: var(--spacing-4);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <span>📦 Contenu déclaré : <strong>${c.description}</strong></span>
              <span>⚖️ Poids : <strong>${c.weightKg} kg</strong></span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span>Convoi : <strong>${c.departureTime}</strong></span>
              <span style="color: #fbbf24; font-weight: 700;">Règlement : ${c.priceCfa.toLocaleString("fr-FR")} FCFA (Réglé par ${c.paymentOperator.toUpperCase()})</span>
            </div>
          </div>

          <!-- Boutons d'action : Partager WhatsApp & Imprimer -->
          <div style="display: flex; gap: var(--spacing-3); flex-wrap: wrap;">
            <a 
              href="https://api.whatsapp.com/send?text=${p}" 
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
    `;const w=d.querySelector("#btn-print-courier");w&&w.addEventListener("click",()=>{window.print()});const y=d.querySelector("#btn-back-to-courier-list");y&&y.addEventListener("click",()=>{e="history",g()})}return l.querySelectorAll(".courier-tab-btn").forEach(c=>{c.addEventListener("click",()=>{C.play("click"),e=c.getAttribute("data-tab"),g()})}),g(),t}function Ae(){const t=document.createElement("div");t.className="main-content";const a=M({label:"Retour à l'espace voyageur",onClick:()=>{window.location.hash="#/app"}});t.appendChild(a);const e=document.createElement("div");e.style.margin="var(--spacing-4) 0 var(--spacing-6) 0",e.style.display="flex",e.style.justifyContent="space-between",e.style.alignItems="center",e.style.flexWrap="wrap",e.style.gap="var(--spacing-4)",e.innerHTML=`
    <div>
      <h1 style="margin-bottom: var(--spacing-1);">Tableau de Bord Administrateur</h1>
      <p style="margin-bottom: 0;">Supervision en direct des départs, des réservations et des gares.</p>
    </div>
    <a href="#/admin/departures" class="btn-primary-blue">
      <span>+ Programmer un départ</span>
    </a>
  `,t.appendChild(e);const r=document.createElement("div");r.className="admin-kpi-grid",r.innerHTML=`
    <div class="card-blue kpi-card">
      <span class="kpi-title">Convois programmés aujourd'hui</span>
      <div class="kpi-value">12 Départs</div>
      <span class="kpi-trend">Lignes Abidjan, Bondoukou, Bouaké</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Billets réservés en ligne</span>
      <div class="kpi-value">284 Passagers</div>
      <span class="kpi-trend">↗ +18% par rapport à hier</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Taux de remplissage moyen</span>
      <div class="kpi-value">86.5 %</div>
      <span class="kpi-trend">Capacité globale optimisée</span>
    </div>

    <div class="card-blue kpi-card">
      <span class="kpi-title">Recettes encaissées (FCFA)</span>
      <div class="kpi-value" style="color: #fbbf24;">1 988 000 F</div>
      <span class="kpi-trend">Mobile Money (Wave / OM / MTN)</span>
    </div>
  `,t.appendChild(r);const s=document.createElement("div");return s.className="card-blue",s.innerHTML=`
    <h2 style="font-size: var(--font-size-xl); margin-bottom: var(--spacing-4);">
      Départs en cours et à venir (Gare Routière)
    </h2>
    <div class="admin-table-container">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Convoi</th>
            <th>Trajet</th>
            <th>Heure</th>
            <th>Gare d'embarquement</th>
            <th>Places réservées</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1er Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>06h30</td>
            <td>Gare d'Adjamé Quai Nord</td>
            <td>42 / 60</td>
            <td><span class="badge-bus-status status-on-time">En route</span></td>
          </tr>
          <tr>
            <td><strong>2e Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>10h00</td>
            <td>Gare d'Adjamé Pôle Est</td>
            <td>36 / 60</td>
            <td><span class="badge-bus-status status-boarding">Embarquement</span></td>
          </tr>
          <tr>
            <td><strong>3e Départ</strong></td>
            <td>Abidjan ➔ Bondoukou</td>
            <td>14h30</td>
            <td>Gare de Yopougon Siporex</td>
            <td>48 / 60</td>
            <td><span class="badge-bus-status status-on-time">À quai</span></td>
          </tr>
          <tr>
            <td><strong>1er Départ</strong></td>
            <td>Abidjan ➔ Bouaké</td>
            <td>07h00</td>
            <td>Gare d'Adjamé Renaissance</td>
            <td>55 / 70</td>
            <td><span class="badge-bus-status status-on-time">En route</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `,t.appendChild(s),t}function Me(){const t=document.createElement("div");t.className="main-content";const a=M({label:"Retour au tableau de bord",onClick:()=>{window.location.hash="#/admin"}});t.appendChild(a);const e=document.createElement("div");e.className="card-blue auth-card",e.style.maxWidth="680px",e.style.margin="var(--spacing-6) auto",e.innerHTML=`
    <div class="auth-header">
      <h1 class="auth-title">Programmer un Nouveau Départ</h1>
      <p class="auth-subtitle">Configurez un horaire, une gare d'embarquement et la capacité du car.</p>
    </div>

    <form id="admin-departure-form" class="auth-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-from">Ville de départ</label>
          <select id="adm-from" class="form-select" required>
            ${T.map(s=>`<option value="${s}">${s}</option>`).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-to">Ville d'arrivée</label>
          <select id="adm-to" class="form-select" required>
            ${T.map((s,o)=>`<option value="${s}" ${o===1?"selected":""}>${s}</option>`).join("")}
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-rank">Libellé du convoi</label>
          <input type="text" id="adm-rank" class="form-input" placeholder="Ex : 4e Départ" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-time">Heure de départ</label>
          <input type="text" id="adm-time" class="form-input" placeholder="Ex : 16h30" required />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="adm-station">Nom de la gare d'embarquement</label>
        <input type="text" id="adm-station" class="form-input" placeholder="Ex : Gare Routière d'Adjamé Quai Ouest" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="adm-directions">Indications précises pour les passagers</label>
        <textarea id="adm-directions" class="form-input" rows="3" placeholder="Ex : Présentation voie C face au guichet 4. Dépose bagages 30min avant..." required></textarea>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4);">
        <div class="form-group">
          <label class="form-label" for="adm-price">Tarif du ticket (FCFA)</label>
          <input type="number" id="adm-price" class="form-input" placeholder="Ex : 7500" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="adm-seats">Nombre de places</label>
          <input type="number" id="adm-seats" class="form-input" placeholder="Ex : 60" value="60" required />
        </div>
      </div>

      <button type="submit" class="btn-card-white" id="btn-save-departure" style="width: 100%; margin-top: var(--spacing-4); padding: var(--spacing-4);">
        <span>Enregistrer et publier le départ</span>
      </button>
    </form>
  `;const r=e.querySelector("#admin-departure-form");return r.addEventListener("submit",s=>{s.preventDefault();const o=r.querySelector("#btn-save-departure");o.disabled=!0,o.innerHTML="<span>Publication en cours...</span>",setTimeout(()=>{window.location.hash="#/admin"},600)}),t.appendChild(e),t}const I=document.getElementById("app"),ee={"/":ve,"/register":ge,"/login":be,"/app":xe,"/payment":ke,"/confirmation":we,"/history":Ce,"/profile":ze,"/courier":Ne,"/admin":Ae,"/admin/departures":Me};function te(){if(!I)return;const t=window.location.hash.slice(1)||"/",a=t.startsWith("/")?t:`/${t}`,e=ee[a]||ee["/"];I.innerHTML="";const r=e();I.appendChild(r),window.scrollTo({top:0,behavior:"smooth"}),requestAnimationFrame(()=>{B(I),O(I)})}document.addEventListener("DOMContentLoaded",()=>{le(),ue(),window.addEventListener("hashchange",te),te()});
